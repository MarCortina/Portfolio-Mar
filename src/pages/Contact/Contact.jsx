import React from "react";
import swal from "sweetalert";

import PDF from "../../assets/Mar_Cortina_CV.pdf";
import Styles from "./Contact.module.css";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  const onCopy = (value) => {
    swal(`Copied, ${value}`);
    setTimeout(() => {
      swal.close();
    }, 5000);
  };

  return (
    <div className={Styles.contactContainer}>
      <div className={Styles.iconContainer}>
        <a href="https://github.com/MarCortina">
          <FaGithub
            className={Styles.icon}
            size="2.5em"
            color="black"
            value="https://github.com/MarCortina"
          />
        </a>
      </div>
      <div className={Styles.iconContainer}>
        <a href="https://www.linkedin.com/in/mar-cortina/">
          <FaLinkedin
            className={Styles.icon}
            size="2.5em"
            color="black"
            value="https://www.linkedin.com/in/marcortina/"
          />
        </a>
      </div>
      <div className={Styles.iconContainer}>
        <a href={PDF} className={Styles.pdf} target="blank">
          <FaFilePdf
            className={Styles.icon}
            size="2.5em"
            color="black"
            value={PDF}
          />
        </a>
      </div>
      <div className={Styles.iconContainer}>
        <CopyToClipboard
          className={Styles.mail}
          text="marmica24@hotmail.com"
          onCopy={onCopy}
        >
          <FiMail
            className={Styles.icon}
            size="2.5em"
            color="black"
            value="marmica24@hotmail.com"
          ></FiMail>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Contact;
