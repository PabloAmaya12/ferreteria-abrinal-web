import { useState } from 'react';
import { AiOutlinePhone, AiOutlineMail, AiOutlineEnvironment, AiOutlineClockCircle, AiOutlineQuestionCircle, AiOutlineCalendar, AiFillFacebook, AiOutlineInstagram, AiFillLinkedin, AiOutlineShareAlt, AiOutlineWhatsApp } from 'react-icons/ai';

import './Contact.css';

const Contact = () => {
    const [activeTab, setActiveTab] = useState('contact');

    const contactMethods = [
        {
            icon: <AiOutlinePhone className = 'method-icon' />,
            title: 'Teléfono',
            description: 'Llámanos directamente',
            info: '+52 871 719 4848',
            action: 'tel:+528717194848',
        },
        {
            icon: <AiOutlineMail className = 'method-icon' />,
            title: 'Email',
            description: 'Envíanos un correo',
            info: 'ferreteriaabrinal@hotmail.com',
            action: 'mailto:ferreteriaabrinal@hotmail.com',
        },
        {
            icon: <AiOutlineEnvironment className = 'method-icon' />,
            title: 'Ubicación',
            description: 'Visítanos en tienda',
            info: 'Tamazula 522, José Campillo Sáinz, Gómez Palacio, Dgo. 35079',
            action: '#map',
        },
        {
            icon: <AiOutlineClockCircle className = 'method-icon' />,
            title: 'Horarios',
            description: 'Estamos abiertos',
            info: 'Lunes - Viernes. 9 AM - 7 PM.',
            action: null,
        },
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
            path: 'https://www.linkedin.com/company/ferreteria-abrinal/',
            icon: <AiFillLinkedin />,
        },
    ];

    const faqs = [
        {
            question: '¿Ofrecen garantía en sus productos?',
            answer:
                'Sí, todos nuestro productos cuentan con garantía del fabricante y ofrecemos garantía extendida en productos seleccionados.',
        },
        {
            question: '¿Realizan entregas a domicilio?',
            answer:
                'Sí, realizamos entregas en toda la ciudad. El costo de envío varía según la distancia y el peso del pedido.',
        },
        {
            question: '¿Aceptan devoluciones?',
            answer:
                'Aceptamos devoluciones dentro de los primeros 3 días con el producto en perfecto estado y con su empaque original.',
        },
    ];

    return (
        <div className = 'contact-page'>
            {/* HERO SECTION */}
            <section className = 'contact-hero'>
                <div className = 'container'>
                    <div className = 'hero-content'>
                        <h1 className = 'hero-title'>Contáctanos</h1>

                        <p className = 'hero-description'>
                            Estamos aquí para ayudarte. Ponte en contacto con nosotros y
                            resolveremos todas tus dudas.
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTACT METHODS */}
            <section className = 'contact-methods'>
                <div className = 'container'>
                    <div className = 'methods-grid'>
                        {contactMethods.map((method, index) => (
                            <div key = {index} className = 'method-card'>
                                <div className = 'method-icon-wrapper'>{method.icon}</div>

                                <h3 className = 'method-title'>{method.title}</h3>

                                <p className = 'method-description'>{method.description}</p>

                                {method.action ? (
                                    <a href = {method.action} className = 'method-info-link'>{method.info}</a>
                                ) : (
                                    <span className = 'method-info'>{method.info}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className = 'contact-main'>
                <div className = 'container'>
                    <div className = 'contact-content'>
                        {/* CONTACT FORM */}
                        <div className = 'contact-form-section'>
                            <div className = 'section-tabs'>
                                <button
                                    className = {'tab-btn ${activeTab === "contact" ? "active" : ""}'}
                                    onClick = {() => setActiveTab('contact')}
                                >
                                    <AiOutlinePhone />
                                    Información de Contacto
                                </button>

                                <button
                                    className = {'tab-btn ${activeTab === "faq" ? "active" : ""}'}
                                    onClick = {() => setActiveTab('faq')}
                                >
                                    <AiOutlineQuestionCircle />
                                    Preguntas Frecuentes
                                </button>
                            </div>

                            {activeTab === 'contact' && (
                                <div className = 'form-container'>
                                    <h2 className = 'form-title'>Contáctanos</h2>

                                    <div className = 'contact-grid'>
                                        <div className = 'contact-grid-item'>
                                            <div className = 'contact-item-header'>
                                                <AiOutlinePhone className = 'contact-icon' />
                                    
                                                <h3 className = 'contact-item-title'>Teléfono</h3>
                                            </div>
                                                                            
                                            <div className = 'contact-item-body'>
                                                <p className = 'contact-text'>+52 871 719 4848</p>
                                            </div>
                                        </div>
                                    
                                        <div className = 'contact-grid-item'>
                                            <div className = 'contact-item-header'>
                                                <AiOutlineMail className = 'contact-icon' />
                                    
                                                <h3 className = 'contact-item-title'>E-mail</h3>
                                            </div>
                                    
                                            <div className = 'contact-item-body'>
                                                <a href = 'mailto:ferreteriaabrinal@hotmail.com'>ferreteriaabrinal@hotmail.com</a>
                                            </div>
                                        </div>
                                    
                                        <div className = 'contact-grid-item'>
                                            <div className = 'contact-item-header'>
                                                <AiOutlineEnvironment className = 'contact-icon' />
                                    
                                                <h3 className = 'contact-item-title'>Dirección</h3>
                                            </div>
                                    
                                            <div className = 'contact-item-body'>
                                                <p className = 'contact-text'>Tamazula 522, José Campillo Sáinz, Gómez Palacio, Dgo. 35079</p>
                                            </div>
                                        </div>
                                    
                                        <div className = 'contact-grid-item'>
                                            <div className = 'contact-item-header'>
                                                <AiOutlineClockCircle className = 'contact-icon' />
                                    
                                                <h3 className = 'contact-item-title'>Horarios</h3>
                                            </div>
                                    
                                            <div className = 'contact-item-body'>
                                                <p className = 'contact-text'>Lunes - Viernes. 9 AM - 7 PM.</p>
                                                <p className = 'contact-text'>Sábado. 9 AM - 4 PM.</p>
                                                <p className = 'contact-text'>Domingo. Cerrado.</p>
                                            </div>
                                        </div>
                                    
                                        <div className = 'contact-grid-item'>
                                            <div className = 'contact-item-header'>
                                                <AiOutlineWhatsApp className = 'contact-icon' />
                                    
                                                <h3 className = 'contact-item-title'>WhatsApp</h3>
                                            </div>
                                    
                                            <div className = 'contact-item-body'>
                                                <p className = 'contact-text'>+52 871 220 6353</p>
                                                <p className = 'contact-text'>+52 871 521 5756</p>
                                            </div>
                                        </div>
                                    
                                        <div className = 'contact-grid-item'>
                                            <div className = 'contact-item-header'>
                                                <AiOutlineShareAlt className = 'contact-icon' />
                                    
                                                <h3 className = 'contact-item-title'>Redes Sociales</h3>
                                            </div>
                                    
                                            <div className = 'contact-item-body'>
                                                <div className = 'contact-social'>
                                                    <div className = 'contact-social-links'>
                                                        {socialLinks.map((link, index) => (
                                                            <a
                                                                key = {index}
                                                                href = {link.path}
                                                                target = '_blank'
                                                                rel = 'noopener noreferrer'
                                                                className = 'contact-social-link'
                                                                aria-label = {link.name}
                                                            >
                                                                {link.icon}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'faq' && (
                                <div className = 'faq-container'>
                                    <h2 className = 'faq-title'>Preguntas Frecuentes</h2>

                                    <div className = 'faq-list'>
                                        {faqs.map((faq, index) => (
                                            <div key = {index} className = 'faq-item'>
                                                <h3 className = 'faq-question'>
                                                    <AiOutlineQuestionCircle className = 'faq-icon' />
                                                    {faq.question}
                                                </h3>

                                                <p className = 'faq-answer'>{faq.answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* MAP SECTION */}
                        <div className = 'map-section'>
                            <div className = 'map-container'>
                                <iframe
                                    src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7198.070222760813!2d-103.4627838455714!3d25.5704986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fd98fd7c7e451%3A0xe35c50fa9a77d8ca!2sFerreter%C3%ADa%20ABRINAL%20G%C3%B3mez%20Palacio.%20Dgo.!5e0!3m2!1ses-419!2smx!4v1747442669778!5m2!1ses-419!2smx'
                                    className = 'map-iframe'
                                    loading = 'lazy'
                                    title = 'Ubicación de Ferretería Abrinal'
                                ></iframe>
                            </div>

                            <div className = 'map-info'>
                                <h3 className = 'map-title'>Nuestra Ubicación</h3>

                                <p className = 'map-description'>
                                    Visítanos en nuestra tienda física donde podrás ver y
                                    probar nuestros productos antes de comprar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;