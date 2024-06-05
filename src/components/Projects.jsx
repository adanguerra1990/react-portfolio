import { RiExternalLinkLine } from '@remixicon/react';

const Projects = ({ projects }) => {
    return (
        <article className="projects__card">            
            <img src={projects.image} alt="imagen proyecto" className="projects__img" />

            <div className="projects__modal">
                <span className="projects__subtitle">{projects.subtitle}</span>

                <h2 className="projects__title">{projects.title}</h2>

                <a href={projects.url} className="projects__button">
                    View demo <RiExternalLinkLine />
                </a>
            </div>
        </article>
    );
}

export default Projects;
