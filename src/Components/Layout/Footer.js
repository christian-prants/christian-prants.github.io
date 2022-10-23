import React from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaBehance } from "@react-icons/all-files/fa/FaBehance";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

import classes from './Footer.module.css';

function Footer() {
  return (
    <div className={classes.footer}>
        <h4>Desenvolvido por: Christian Prants©2022</h4>
        <div className={classes.links}>
            <a href="https://www.linkedin.com/in/christian-prants/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin/>
            </a>
            <a href="https://github.com/christian-prants/" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://www.behance.net/the_prants" target="_blank" rel="noopener noreferrer">
                <FaBehance />
            </a>
        </div>
    </div>
  );
}

export default Footer;