import { useState } from 'react'
import { RiCloseLine, RiMenuLine } from '@remixicon/react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navigationLinks = ['Inicio', 'Acerca de Mí', 'Proyectos', 'Contacto']

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    const showMenu = isOpen ? 'show-menu' : ''

    return (
        <header className='header' id='header'>
            <nav className='nav container'>
                <a href="#" className="nav__logo">
                    ADAN <span>GUERRA</span>
                </a>

                <div className={`nav__menu ${showMenu}`} id='nav-menu'>
                    <ul className='nav__list'>
                        {navigationLinks.map((link, index) => (
                            <li className='nav__item' key={index}>
                                <a href='#' className='nav__link active-link'>{link}</a>
                            </li>
                        ))}
                    </ul>

                    {/* close button */}
                    <div className='nav__close' id='nav-close' onClick={toggleMenu}>
                        <RiCloseLine />
                    </div>
                </div>

                {/* toggle button */}
                <div className='nav__toggle' id='nav-toggle' onClick={toggleMenu}>
                    <RiMenuLine />
                </div>
            </nav>
        </header>
    )
}

export default Header;
