import { RiExternalLinkLine } from '@remixicon/react';
import { Fade  } from 'react-awesome-reveal';
import { animationUP } from './animation';

const Project = ({ image, title, subtitle, url }) => {       
     return (
          <Fade cascade delay={500} duration={2000} keyframes={animationUP} triggerOnce>
               <article className="projects__card">
                    <img src={image} alt="imagen proyecto" className="projects__img" />

                    <div className="projects__modal">
                         <span className="projects__subtitle">{subtitle}</span>

                         <h2 className="projects__title">{title}</h2>

                         <a href={url} className="projects__button">
                              View demo <RiExternalLinkLine />
                         </a>
                    </div>
               </article>
          </Fade>
     );
}

export default Project;
