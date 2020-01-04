import React from "react";
import {
  FACEBOOK,
  INSTAGRAM,
  TWITTER,
  YOUTUBE,
  FILE,
  IMAGE,
  EDIT
} from "../../constants/ICONS";
import Facebook from "./facebook";
import Instagram from "./instagram";
import Twitter from "./twitter";
import Youtube from "./youtube";
import File from "./file";
import Image from "./image";
import Edit from "./edit";

const Icon = ({ name }) => {
  switch (name) {
    case FACEBOOK:
      return <Facebook />;
    case INSTAGRAM:
      return <Instagram />;
    case TWITTER:
      return <Twitter />;
    case YOUTUBE:
      return <Youtube />;
    case FILE:
      return <File />;
    case IMAGE:
      return <Image />;
    case EDIT:
      return <Edit />;
    default:
      return "";
  }
};

export default Icon;
