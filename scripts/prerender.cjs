// The page has no client-side state. Render the same React source into the
// production HTML so its content and navigation work without JavaScript.
const fs = require('fs');
const babel = require('@babel/core');
const ReactDOMServer = require('react-dom/server');
const Module = require('module');
const path = require('path');
const source = fs.readFileSync('src/App.js', 'utf8').replace("import './App.css';", '');
const transformed = babel.transformSync(source, {
  babelrc: false, configFile: false,
  presets: [['@babel/preset-env', { targets: { node: 'current' } }], ['@babel/preset-react', { runtime: 'automatic' }]]
}).code;
const component = new Module(path.resolve('src/prerender.cjs'), module);
component.filename = path.resolve('src/prerender.cjs');
component.paths = module.paths;
component._compile(transformed, component.filename);
const markup = ReactDOMServer.renderToStaticMarkup(require('react').createElement(component.exports.default));
const html = fs.readFileSync('build/index.html', 'utf8')
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
  .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
fs.writeFileSync('build/index.html', html);
console.log('Pre-rendered portfolio: content and navigation require no JavaScript.');
// Keep the deploy artifact limited to the static page and the assets it uses.
// Original public files and React components remain in the repository.
for (const entry of fs.readdirSync('build')) {
  if (!['index.html', 'favicon.svg', 'robots.txt', 'static'].includes(entry)) {
    fs.rmSync(path.join('build', entry), { recursive: true, force: true });
  }
}
fs.rmSync('build/static/js', { recursive: true, force: true });
for (const file of fs.readdirSync('build/static/css')) {
  if (file.endsWith('.map')) fs.rmSync(path.join('build/static/css', file));
}
