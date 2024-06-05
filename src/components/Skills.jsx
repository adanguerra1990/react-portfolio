

const Skills = ({ title, description, button, skills }) => {
    return (
        <section className="skills section">
            <div className="skills__container grid container">
                <div className="skills__data">
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
                <div className="skills__content">
                    <ul className="skills__group" >
                        {skills.map((skill, index) => (
                            <li className="skills__item" key={index}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Skills;
