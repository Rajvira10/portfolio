import React from "react";
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://github.com/Rajvira10">
        <div>
          <BsGithub />
        </div>
      </a>
      <a href="https://www.facebook.com/100005684685994">
        <div>
          <FaFacebookF />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/rajvir-ahmed-18509a207/">
        <div>
          <BsLinkedin />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
