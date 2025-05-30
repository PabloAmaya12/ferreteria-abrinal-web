import { useEffect, useRef} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';


import logo from '../../assets/images/logo.png'
import './Header.css'

const navLinks = [
    {
        path: '/',
        display: 'Inicio'
    },
    {
        path: '/home_v2',
        display: 'Home_v2'
    },
    {
        path: '/catalog',
        display: 'Catálogo'
    },
    {
        path: '/catalog_v2',
        display: 'Catálogo_v2'
    },
    {
        path: '/catalog_v3',
        display: 'Catálogo_v3'
    },
    {
        path: '/contact',
        display: 'Contacto'
    },
]

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header');
            }
        })
    }

    useEffect (() => {
        handleStickyHeader();

        return () => window.removeEventListener('scroll', handleStickyHeader);
    })
    
    const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

    return (
        <header className = 'header' ref = {headerRef}>
            <div className = 'container'>
                <div className = 'header__content'>
                    {/* LOGO */}
                    <div className = 'logo'>
                        {/* <img src = {logo} alt = ''/> */}
                        
                        <h2>Ferretería Abrinal</h2>
                    </div>

                    {/* MENU */}
                    <div className = 'navigation' ref = {menuRef} onClick = {toggleMenu}>
                        <ul className = 'menu'>
                            {navLinks.map((link, index) => (
                                <li key = {index}>
                                    <NavLink to = {link.path} className = {({ isActive }) => (isActive ? 'active' : '')}>
                                        {link.display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* NAV RIGHT */}
                    <div className = 'nav__right'>
                        <span className = 'menu__icon' onClick = {toggleMenu}>
                            <BiMenu />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;