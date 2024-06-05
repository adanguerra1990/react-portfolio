import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
    const skills = ['HTML & CSS', 'JavaScript', 'Bootstrap', 'Tailwind', 'Git & GitHud', 'WordPress']

    const projects = [
        {
            title: 'Modern website',
            subtitle: 'Web',          
            image: '/src/assets/img/project-img-1.jpg',
            url: '#',
            id: 1
        },
        {
            title: 'Advic Generator App',
            subtitle: 'Fech API',          
            image: '/src/assets/img/project-img-2.jpg',            
            url: '#',
            id: 2
        },
        {
            title: 'Landingpage Snnyside',
            subtitle: 'Web Site',          
            image: '/src/assets/img/project-img-3.jpg',            
            url: '#',
            id: 3
        },
        {
            title: 'Blog Lists',
            subtitle: 'Api Rest',          
            image: '/src/assets/img/project-img-4.jpg',            
            url: '#',
            id: 4
        },
        {
            title: 'Web Festival de Musicas',
            subtitle: 'Web Site',          
            image: '/src/assets/img/project-img-5.jpg',            
            url: '#',
            id: 5
        },
        {
            title: 'Web Festival de Musicas',
            subtitle: 'Web Site',          
            image: '/src/assets/img/project-img-6.jpg',            
            url: '#',
            id: 6
        }
    ]
    
    return (
        <div>
            <Header />
            <main className='main'>
                <Home
                    subtitle={'Hola'}
                    title={'Adan Guerra'}
                    education={'Front-end Developer'}
                    description={'Me gusta codificar cosas desde cero y disfruto dando vida a las ideas en el navegador.'}
                    button={'Let´s Talk'}
                />
                <About
                    title={'Acerca de mi'}
                    description={'Desde que comencé mi viaje como desarrollador front-end hace más de 2 años, he realizado trabajos remotos para agencias, colaborado con personas talentosas para crear productos digitales para uso comercial y de consumo. Soy tranquilamente confiado, naturalmente curioso y trabajo arduamente para mejorar mis habilidades, resolviendo un problema a la vez.'}
                />
                <Skills
                    title={'Mis Skills'}
                    description={'Conoce a fondo qué habilidades tengo y desempeño, para desarrollar los proyectos para ti.'}
                    button={'See Projects'}
                    skills={skills}
                />
                <section className='projects section' id='projects'>
                    <h3 className='section__subtitle'>
                        My <span>Jobs</span>
                    </h3>

                    <h2 className='section__title'>
                        Recent Projects
                    </h2>

                    <div className="projects__container container grid">
                        {projects.map(project => (
                            <Projects
                                key={project.id}
                                projects={project}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default App
