import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

import Styles from "./Contact.module.css";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {

  const onCopy = () => {
    swal("marmica24@hotmail Copied to clipboard");
  };

  return (
    <div>
      <FaGithub className={Styles.icon} size="2em" color="black" />
      <CopyToClipboard text="marmica24@hotmail.com" onCopy={onCopy}>
        <FiMail
          className={Styles.icon}
          size="2em"
          color="black"
          value="marmica24@hotmail.com"
        ></FiMail>
      </CopyToClipboard>
    </div>
  );
};

export default Contact;
