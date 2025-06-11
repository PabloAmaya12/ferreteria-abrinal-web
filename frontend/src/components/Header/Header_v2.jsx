import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiMenu, BiX, BiSearch, BiPhone, BiUser } from 'react-icons/bi';

import './Header_v2.css';

const navLinks = [
    {
        path: '/',
        display: 'Inicio',
    },
    {
        path: '/home_v2',
        display: 'Home_v2'
    },
    {
        path: '/catalog_v2',
        display: 'Catálogo_v2',
    },
    {
        path: '/catalog_v3',
        display: 'Catálogo_v3',
    },
    {
        path: '/contact',
        display: 'Contacto',
    },
    {
        path: '/contact_v2',
        display: 'Contacto_v2',
    },
];

const Header_v2 = () => {
    const headerRef = useRef(null);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current?.classList.add('sticky-header-v2');
            } else {
                headerRef.current?.classList.remove('sticky-header-v2');
            }
        });
    };

    useEffect(() => {
        handleStickyHeader();

        return () => {
            window.removeEventListener('scroll', handleStickyHeader);
        };
    }, []);

    const toggleMenu = () => menuRef.current.classList.toggle('.show-menu-v2');

    /*
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    */

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <>
            {/* TOP BAR */}
            <div className = 'top-bar'>
                <div className = 'container'>
                    <div className = 'top-bar-content'>
                        <div className = 'contact-info'>
                            <h3 className = 'contact-item'>
                                <BiPhone className = 'contact-icon' />
                                +52 871 719 4848
                            </h3>
                        </div>

                        <div className = 'top-bar-rigth'>
                            <h2 className = 'welcome-text'>Bienvenido a Ferretería Abrinal,</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN HEADER */}
            <header className = 'header-v2' ref = {headerRef}>
                <div className = 'container'>
                    <div className = 'header-content'>
                        {/* LOGO */}
                        <div className = 'logo-section'>
                            <NavLink to = '/' className = 'logo'>
                                <div className = 'logo-icon'>
                                    <span>🛠️</span>
                                </div>

                                <div className = 'logo-text'>
                                    <h2 className = 'logo-title'>Ferretería Abrinal</h2>

                                    <span className = 'logo-subtitle'>Herramientas de Calidad</span>
                                </div>
                            </NavLink>
                        </div>

                        {/* SEARCH BAR */}
                        <div className = {`search-section ${isSearchOpen ? 'active' : ""}`}>
                            <div className = 'search-bar'>
                                <input type = 'text' placeholder = 'Buscar herramientas, marcas...' className = 'search-input' />

                                <button className = 'search-btn'>
                                    <BiSearch />
                                </button>
                            </div>
                        </div>

                        {/* NAVIGATION */}
                        <nav className = {`navigation-v2 ${isMenuOpen ? 'show-menu-v2' : ''}`}>
                            <ul className = 'menu-v2'>
                                {navLinks.map((link, index) => (
                                    <li key = {index}>
                                        <NavLink
                                            to = {link.path}
                                            className = {({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                            onClick = {() => setIsMenuOpen(false)}
                                        >
                                            {link.display}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* HEADER ACTIONS */}
                        <div className = 'header-actions'>
                            <button className = 'action-btn search-toggle' onClick = {toggleSearch}>
                                <BiSearch />
                            </button>

                            <button className = 'action-btn'>
                                <BiUser />
                            </button>

                            <button className = 'menu-toggle' onClick = {toggleMenu}>
                                {isMenuOpen ? <BiX /> : <BiMenu />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* MOBILE MENU OVERLAY */}
                {/* isMenuOpen && <div className = 'menu-overlay' onClick = {toggleMenu}></div> */}
            </header>
        </>
    );
};

export default Header_v2;