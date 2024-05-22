import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'

function App() {
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
            </main>
        </div>
    )
}

export default App
