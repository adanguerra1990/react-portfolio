import { Fade } from 'react-awesome-reveal'
import HomeImage from '../assets/img/blob.svg?react'
import { RiGithubFill, RiInstagramLine, RiLinkedinBoxLine } from '@remixicon/react'
import { animationDown, animationUP } from './animation';

const Home = ({ subtitle, title, education, description, button }) => {

    return (
        <section className='home section' id='home'>
            <div className='home__container container grid'>
                <Fade keyframes={animationUP} direction='up' delay={500} duration={2000} triggerOnce>
                    <div className='home__content'>

                        <div className='home__data'>
                            <h3 className='home__subtitle'>
                                {subtitle}, <span>soy</span>
                            </h3>
                            <h1 className='home__title'>{title}</h1>
                            <h3 className='home__education'>{education}</h3>
                            <p className='home__description'>
                                {description}
                            </p>
                            <a href='#contact' className='button'>
                                {button}
                            </a>
                        </div>

                        <div className='home__social'>
                            <a href='#' target='_blank' className='home__social-link'>
                                <RiLinkedinBoxLine />
                            </a>
                            <a href='#' target='_blank' className='home__social-link'>
                                <RiGithubFill />
                            </a>
                            <a href='#' target='_blank' className='home__social-link'>
                                <RiInstagramLine />
                            </a>
                        </div>
                    </div>
                </Fade>

                <Fade keyframes={animationDown} direction='down' delay={500} duration={2000} triggerOnce>
                    <div className='home__image'>
                        <HomeImage />
                    </div>
                </Fade>

            </div>
        </section>
    )
}
export default Home