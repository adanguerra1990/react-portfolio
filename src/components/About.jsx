import { Fade } from 'react-awesome-reveal';
import AboutImage from '../assets/img/blob-border.svg?react'
import { animationLeft, animationRight } from './animation';

const About = ({ title, description }) => {
    return (
        <section className='about section' id='about'>
            <div className='about__container container grid'>
                <Fade
                    keyframes={animationLeft}
                    direction='left'
                    className='about__data'
                    delay={500}
                    duration={2000}
                    triggerOnce
                >
                    <div>
                        <h3 className='section__subtitle'>
                            My <span>Intro</span>
                        </h3>
                        <h2 className='section__title'>
                            {title}
                        </h2>
                        <p className='about__description'>
                            {description}
                        </p>
                        <a className='button' id='#contact'>Contact Me</a>
                    </div>
                </Fade>
                <Fade
                    keyframes={animationRight}
                    direction='right'
                    delay={500}
                    duration={2000}
                    className='about__image'
                    triggerOnce
                >
                    <div >
                        <AboutImage className='about__blob' />
                    </div>
                </Fade>

            </div>
        </section>
    );
}

export default About;
