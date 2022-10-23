import React from 'react';
import Type from '../Layout/Type';

import image from '../../Assets/my_face.jpg';
import classes from './Home.module.css'
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaBehance } from "@react-icons/all-files/fa/FaBehance";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";


const Home = () => {
  return (
    <div className={classes.home}>
        <div className={classes.intro}>
            <h1>Christian Prants</h1>
            <Type />

            <p>Graduado em Design com 2 anos de experiência em desenvolvimento de software full stack utilizando, atualmente atuando como designer.<br /><br />

                Busco uma oportunidade na área de tecnologia como desenvolvedor. <br /><br />

                Acredito que minha vivência em design traz uma visão sólida voltada para acessibilidade e experiência do usuário. <br /><br />
            </p>

            <div className={classes.links}>
                <div className={classes.icons}>
                    <a href="https://www.linkedin.com/in/christian-prants/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin/>
                    </a>
                </div>
                <div className={classes.icons}>
                    <a href="https://github.com/christian-prants/" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </div>
                <div className={classes.icons}>
                    <a href="https://www.behance.net/the_prants" target="_blank" rel="noopener noreferrer">
                        <FaBehance />
                    </a>
                </div>
            </div>
        </div>

        <div className={classes.support}>
            <img src={image} alt="mememe"/> 
        </div>
      </div>
  )
}

export default Home