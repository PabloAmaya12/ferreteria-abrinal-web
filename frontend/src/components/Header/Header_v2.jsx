import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlinePhone } from 'react-icons/ai';
import { BiMenu, BiX, BiSearch, BiUser } from 'react-icons/bi';

import './Header_v2.css';

const navLinks = [
    {
        path: '/',
        display: 'Inicio',
    },
    {
        path: '/catalog',
        display: 'Catálogo',
    },
    {
        path: '/catalog_v2',
        display: 'Catálogo_v2',
    },
    {
        path: '/contact',
        display: 'Contacto',
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
                            <h4 className = 'contact-item'>
                                <AiOutlinePhone className = 'contact-icon' />
                                +52 871 719 4848
                            </h4>
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
                        <div className = 'header-logo-section'>
                            <NavLink to = '/' className = 'logo'>
                                <div className = 'header-logo-icon'>
                                    <span>🛠️</span>
                                </div>

                                <div className = 'header-logo-text'>
                                    <h2 className = 'header-logo-title'>Ferretería Abrinal</h2>

                                    <span className = 'header-logo-subtitle'>Herramientas de Calidad</span>
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
                                <NavLink to = '/login'>
                                    <BiUser />
                                </NavLink>
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