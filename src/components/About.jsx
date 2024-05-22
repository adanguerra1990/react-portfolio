import AboutImage from '../assets/img/blob-border.svg?react'

const About = ({ title, description }) => {
    return (
        <section className='about section' id='about'>
            <div className='about__container container grid'>
                <div className='about__data'>
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

                <div className='about__image'>
                    <AboutImage className='about__blob'/>
                </div>
            </div>
        </section>
    );
}

export default About;
