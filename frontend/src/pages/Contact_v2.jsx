import { useState } from 'react';
import { AiOutlinePhone, AiOutlineMail, AiOutlineEnvironment, AiOutlineClockCircle, AiOutlineQuestionCircle, AiOutlineCheckCircle, AiOutlineUser, AiOutlineMessage } from 'react-icons/ai';

import './Contact_v2.css';

const Contact_v2 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [activeTab, setActiveTab] = useState('contact');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

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
            info: 'Lunes - Viernes. 9 AM - 7 PM',
            action: null,
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
            question: '¿Tienen servicio técnico?',
            answer:
                'Contamos con servicio técnico especializado para reparación y mantenimiento de herramientas eléctricas.',
        },
        {
            question: '¿Aceptan devoluciones?',
            answer:
                'Aceptamos devoluciones dentro de los primeros 30 días con el producto en perfecto estado y con su empaque original.',
        },
    ];

    return (
        <div className = 'contact-page-v2'>
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
                                    <AiOutlineMessage />
                                    Enviar Mensaje
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
                                    <h2 className = 'form-title'>Envíanos un Mensaje</h2>

                                    <p className = 'form-subtitle'>
                                        Completa el formulario y nos pondremos en
                                        contacto contigo lo antes posible.
                                    </p>

                                    <form onSubmit = {handleSubmit} className = 'contact-form-v2'>
                                        <div className = 'form-row'>
                                            <div className = 'form-group'>
                                                <label htmlFor = 'name' className = 'form-label'>
                                                    <AiOutlineUser className = 'label-icon' />
                                                    Nombre Completo
                                                </label>

                                                <input
                                                    type = 'text'
                                                    id = 'name'
                                                    name = 'name'
                                                    value = {formData.name}
                                                    onChange = {handleChange}
                                                    className = 'form-input'
                                                    placeholder = 'Tu nombre completo'
                                                    required
                                                />
                                            </div>

                                            <div className = 'form-group'>
                                                <label htmlFor = 'email' className = 'form-label'>
                                                    <AiOutlineMail className = 'label-icon' />
                                                    Correo Electrónico
                                                </label>

                                                <input
                                                    type = 'email'
                                                    id = 'email'
                                                    name = 'email'
                                                    value = {formData.email}
                                                    onChange = {handleChange}
                                                    className = 'form-input'
                                                    placeholder = 'tu@email.com'
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className = 'form-row'>
                                            <div className = 'form-group'>
                                                <label htmlFor = 'phone' className = 'form-label'>
                                                    <AiOutlinePhone className = 'label-icon' />
                                                    Teléfono
                                                </label>

                                                <input
                                                    type = 'tel'
                                                    id = 'phone'
                                                    name = 'phone'
                                                    value = {formData.phone}
                                                    onChange = {handleChange}
                                                    className = 'form-input'
                                                    placeholder = '+123 456 789'
                                                />
                                            </div>

                                            <div className = 'form-group'>
                                                <label htmlFor = 'subject' className = 'form-label'>
                                                    Asunto
                                                </label>

                                                <select
                                                    id = 'subject'
                                                    name = 'subject'
                                                    value = {formData.subject}
                                                    onChange = {handleChange}
                                                    className = 'form-input'
                                                    required
                                                >
                                                    <option value = ''>Selecciona un asunto</option>
                                                    <option value = 'consulta'>Consulta General</option>
                                                    <option value = 'cotizacion'>Solicitar Cotización</option>
                                                    <option value = 'garantia'>Garantía</option>
                                                    <option value = 'servicio'>Servicio Técnico</option>
                                                    <option value = 'otro'>Otro</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className = 'form-group'>
                                            <label htmlFor = 'message' className = 'form-label'>
                                                <AiOutlineMessage className = 'label-icon' />
                                                Mensaje
                                            </label>

                                            <textarea
                                                id = 'message'
                                                name = 'message'
                                                value = {formData.message}
                                                onChange = {handleChange}
                                                className = 'form-textarea'
                                                placeholder = 'Describe tu consulta o necesidad...'
                                                rows = '6'
                                                required
                                            ></textarea>
                                        </div>

                                        <button type = 'submit' className = 'submit-btn'>
                                            <AiOutlineCheckCircle />
                                            Enviar Mensaje
                                        </button>
                                    </form>
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

                                <div className = 'location-details'>
                                    <div className = 'location-item'>
                                        <AiOutlineEnvironment className = 'location-icon' />

                                        <span>Tamazula 522, José Campillo Sáinz, Gómez Palacio, Dgo. 35079</span>
                                    </div>

                                    <div className = 'location-item'>
                                        <AiOutlineClockCircle className = 'location-icon' />

                                        <span>Lunes - Viernes. 9 AM - 7 PM.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact_v2;