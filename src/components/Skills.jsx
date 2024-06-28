import { Fade } from "react-awesome-reveal";
import { animationLeft, animationRight } from "./animation";

const Skills = ({ title, description, button, skills }) => {
    return (
        <section className="skills section">
            <div className="skills__container grid container">
                <Fade
                    className="skills__data"
                    direction="right"
                    duration={2000}
                    delay={500}
                    keyframes={animationRight}
                    triggerOnce
                >
                    <div>
                        <h3 className="section__subtitle">
                            <span>Skills</span>
                        </h3>

                        <h2 className="section__title">
                            {title}
                        </h2>

                        <p className=" skills__description">
                            {description}
                        </p>

                        <a className="button" href="#">{button}</a>
                    </div>
                </Fade>
                <Fade
                    className="skills__content"
                    direction="left"
                    duration={700}
                    delay={500}
                    keyframes={animationLeft}
                    cascade
                    triggerOnce
                >
                    <ul className="skills__group" >
                        {skills.map((skill, index) => (
                            <li className="skills__item" key={index}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </Fade>
            </div>
        </section>
    );
}

export default Skills;
