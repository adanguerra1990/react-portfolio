import { RiFacebookBoxLine, RiInstagramLine, RiTwitterLine } from '@remixicon/react';
import { Fade } from 'react-awesome-reveal';
import { animationFoooterUp, animationLeft, animationRight } from './animation';

const Footer = ({ nameTitle, lastnameTitle, education, copyright }) => {
     
     return (
          <footer className='footer'>
               <div className='footer__container container grid'>
                    <Fade keyframes={animationLeft} direction='left' delay={500} duration={2000} triggerOnce>
                         <div>
                              <h1 className='footer__title'>
                                   {nameTitle}<span>{lastnameTitle}</span>
                              </h1>

                              <h2 className='footer__education'>
                                   {education}
                              </h2>
                         </div>
                    </Fade>

                    <Fade keyframes={animationFoooterUp} delay={500} duration={2000} triggerOnce>
                         <div className='footer__social'>
                              <a href='#' target='_blank' className='footer__social-link'>
                                   <RiInstagramLine />
                              </a>
                              <a href='#' target='_blank' className='footer__social-link'>
                                   <RiFacebookBoxLine />
                              </a>
                              <a href='#' target='_blank' className='footer__social-link'>
                                   <RiTwitterLine />
                              </a>
                         </div>
                    </Fade>

                    <Fade keyframes={animationRight} delay={500} duration={2000} triggerOnce>
                         <span className="footer__copy">
                              &#169; {copyright}
                         </span>
                    </Fade>
               </div>
          </footer>
     );
}

export default Footer;
