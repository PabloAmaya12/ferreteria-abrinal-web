import { AiFillFacebook, AiOutlineInstagram, AiFillLinkedin, AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment, AiOutlineClockCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    const quickLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Catálogo', path: '/catalog' },
        { name: 'Contacto', path: '/contact' },
    ];

    const socialLinks = [
        {
            name: 'Facebook',
            path: 'https://www.facebook.com/ferreteriaaldaba',
            icon: <AiFillFacebook />,
        },
        {
            name: 'Instagram',
            path: 'https://www.instagram.com/abrinalferreteria/',
            icon: <AiOutlineInstagram />,
        },
        {
            name: 'LinkedIn',
            path: 'https://www.linkedin.com/company/ferreter%C3%ADa-abrinal/about/',
            icon: <AiFillLinkedin />,
        },
    ];

    return (
        <footer className = 'footer-v2'>
            {/* NEWSLETTER SECTION */}
            <div className = 'newsletter-section'>
                <div className = 'container'>
                    <div className = 'newsletter-content'>
                        <div className = 'newsletter-text'>
                            <h3 className = 'newsletter-title'>Mantente actualizado</h3>

                            <p className = 'newsletter-description'>
                                Recibe las últimas ofertas y novedades en
                                herramientas directamente en tu correo
                            </p>
                        </div>

                        <div className = 'newsletter-form'>
                            <div className = 'input-group'>
                                <input type = 'email' placeholder = 'Tu correo electrónico' className = 'newsletter-input' />

                                <button className = 'newsletter-btn'>Suscribirse</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN FOOTER */}
            <div className = 'footer-main'>
                <div className = 'container'>
                    <div className = 'footer-grid'>
                        {/* COMPANY INFO */}
                        <div className = 'footer-column'>
                            <div className = 'footer-logo'>
                                <div className = 'logo-icon'>
                                    <span>🔧</span>
                                </div>

                                <div className = 'logo-text'>
                                    <h3 className = 'logo-title'>Ferretería Abrinal</h3>

                                    <span className = 'logo-subtitle'>Herramientas de Calidad</span>
                                </div>
                            </div>

                            <p className = 'company-description'>
                                Tu ferretería de confianza con más de 10 años de experiencia.
                                Ofrecemos las mejores herramientas y marcas del mercado.
                            </p>

                            <div className = 'social-links'>
                                {socialLinks.map((link, index) => (
                                    <a
                                        key = {index}
                                        href = {link.path}
                                        target = '_blank'
                                        rel = 'noopener noreferrer'
                                        className = 'social-link'
                                        aria-label = {link.name}
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* QUICK LINKS */}
                        <div className = 'footer-column'>
                            <h4 className = 'footer-title'>Enlaces Rápidos</h4>

                            <ul className = 'footer-links'>
                                {quickLinks.map((link, index) => (
                                    <li key = {index}>
                                        <Link to = {link.path} className = 'footer-link'>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CONTACT INFO */}
                        <div className = 'footer-column'>
                            <h4 className = 'footer-title'>Contacto</h4>

                            <div className = 'contact-info'>
                                <div className = 'contact-item'>
                                    <AiOutlineEnvironment className = 'contact-icon' />

                                    <span>Tamazula 522, José Campillo Sáinz, Gómez Palacio, Dgo. 35079</span>
                                </div>

                                <div className = 'contact-item'>
                                    <AiOutlineMail className = 'contact-icon' />

                                    <span>ferreteriaabrinal@hotmail.com</span>
                                </div>

                                <div className = 'contact-item'>
                                    <AiOutlineClockCircle className = 'contact-icon' />

                                    <span>Lunes - Viernes. 9 AM - 7 PM.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER BOTTOM */}
            <div className = 'footer-bottom'>
                <div className = 'container'>
                    <div className = 'footer-bottom-content'>
                        <p className = 'copyright'>Copyright © {year} Ferretería Abrinal. Todos los derechos reservados.</p>

                        <p className = 'developer-credit'>
                            Desarrollado por {' '}

                            <a href = 'https://github.com/PabloAmaya12' target = '_blank' rel = 'noopener noreferrer'>Pablo Amaya</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;