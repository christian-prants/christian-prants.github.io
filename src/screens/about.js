import { Icon } from '@iconify/react';
import skillsIcons from '../assets/data/icons';

import img01 from '../assets/imgs/eu.jpg';
import '../styles/about.scss';

const About = () => {
    return (
        <div className = 'main_'>
            <section className = 'main_sobre'>
                <div className = 'main_img_'>
                    <a href="https://www.linkedin.com/in/christian-prants/" target="_blank" rel="noopener noreferrer">
                        <img src = {img01} alt = '' />
                    </a>
                    <div className='main_img_square_01' />
                    <div className='main_img_square_02' />
                    <div className='main_img_square_03' />
                </div>

                <p> Olá! 
                    <br /><br />
                    Me chamo Christian, e sou um desenvolvedor <br />
                    Front-End, com muita experiência em design, <br /> 
                    morando em Santa Catarina.
                    <br /><br />
                    Atualmente trabalho com motion design  <br />
                    em uma fintech, onde trago à vida designs <br /> 
                    para web, vídeos e continuo estudando <br />
                    com o objetivo de atuar como dev.
                    
                    <br /><br />
                    Você pode me encontrar pelo meu LinkedIn!
                </p>
            </section>
            <section className = 'main_skills_'>
                <div className = 'main_skills_social'>
                    <a href="https://www.github.com/christian-prants/" target="_blank" rel="noopener noreferrer">
                        <Icon icon = 'mdi:github' cursor = 'pointer' />
                    </a>
                    <a href="https://www.instagram.com/theprants/" target="_blank" rel="noopener noreferrer">
                        <Icon icon = 'uil:instagram-alt' cursor = 'pointer' />
                    </a>
                </div>
                
                <h1 className = 'main_skills_h1'>SKILLS</h1>

                <div  className = 'main_skills_icons_'>
                    {
                        skillsIcons.map((index) => (
                            <div key = {index.id} className = 'main_skills_icons_row_'>
                                <Icon icon = {index.icon} className = 'main_skills_icons_row_tech' />
                                <h1>{index.name}</h1>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default About;