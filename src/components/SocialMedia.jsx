import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsTwitter />
      </div>
      <a href="https://www.facebook.com/100005684685994">
        <FaFacebookF />
      </a>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
