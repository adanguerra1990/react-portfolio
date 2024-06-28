import Project from './Project';

const Projects = ({ projects }) => {
    console.log('projects...', projects)
    return (
        <section className='projects section' id='projects'>
            <h3 className='section__subtitle'>
                My <span>Jobs</span>
            </h3>

            <h2 className='section__title'>
                Recent Projects
            </h2>

            
                <div className="projects__container container grid" >
                    {projects.map((project) => (
                        <Project
                            key={project.id}
                            image={project.image}
                            title={project.title}
                            subtitle={project.subtitle}
                            url={project.url}
                        />
                    )
                    )}
                </div>            
        </section>
    );
}

export default Projects;
