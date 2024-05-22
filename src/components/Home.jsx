import HomeImage from '../assets/img/blob.svg?react'
import { RiGithubFill, RiInstagramLine, RiLinkedinBoxLine } from '@remixicon/react'

const Home = ({ subtitle, title, education, description, button }) => {
    return (
        <section className='home section' id='home'>
            <div className='home__container container grid'>
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
                <div className='home__image'>
                    <HomeImage />
                </div>
            </div>
        </section>
    )
}
export default Home