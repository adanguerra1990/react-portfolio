import { useEffect, useState } from 'react'
import { RiCloseLine, RiMenuLine } from '@remixicon/react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    const navigationLinks = [
        { title: 'Inicio', href: '#home' },
        { title: 'Acerca de Mí', href: '#about' },
        { title: 'Proyectos', href: '#projects' },
        { title: 'Contacto', href: '#contact' },
    ]

    useEffect(() => {
        const checkScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', checkScroll)

        return () => window.removeEventListener('scroll', checkScroll)
    }, [])

    useEffect(() => {
        const handleScrollActive = () => {
            const sections = document.querySelectorAll('section[id]')
            const scrollY = window.scrollY

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight
                const sectionTop = section.offsetTop - 58
                const sectionId = section.getAttribute('id')
                const sectionLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`)

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    setActiveSection(sectionId)
                }                       
            });
        }

        window.addEventListener('scroll', handleScrollActive)
        return () => window.removeEventListener('scroll', handleScrollActive)
    }, []);

    const getClassHeader = () => `header ${isScrolled ? 'blur-header' : ''}`

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const showMenu = isOpen ? 'show-menu' : ''

    return (
        <header className={getClassHeader()} id='header'>
            <nav className='nav container'>
                <a href="#" className="nav__logo">
                    ADAN <span>GUERRA</span>
                </a>

                <div className={`nav__menu ${showMenu}`} id='nav-menu'>
                    <ul className='nav__list'>
                        {navigationLinks.map((link, index) => (
                            <li className='nav__item' key={index}>
                                <a
                                    href={link.href}
                                    className={`nav__link ${activeSection === link.href.slice(1) ? 'active-link' : ''}`} onClick={toggleMenu}>{link.title}
                                </a>
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
