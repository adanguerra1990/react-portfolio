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
            </main>
        </div>
    )
}

export default App
