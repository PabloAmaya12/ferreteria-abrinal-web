import { AiOutlinePhone, AiOutlineMail, AiOutlineEnvironment, AiOutlineCalendar, AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';

import './Contact.css';

const Contact = () => {

    return (
        <div className = 'contact-page'>
            {/* MAIN CONTENT */}
            <main className = 'contact-main'>
                <div className = 'container'>
                    <div className = 'contact-card'>
                        <div className = 'contact-card-inner'>
                            {/* CONTACT INFORMATION */}
                            <div className = 'contact-info'>
                                <h2 className = 'contact-title'>Información de Contacto</h2>

                                <div className = 'contact-details'>
                                    <div className = 'contact-item'>
                                        <h3 className = 'contact-item-title'>Teléfono</h3>

                                        <div className = 'contact-item-content'>
                                            <AiOutlinePhone className = 'contact-icon' />

                                            <div>
                                                <p className = 'contact-text'>+52 871 719 4848</p>
                                                <p className = 'contact-text'>+52 871 220 6353</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className = 'contact-item'>
                                        <h3 className = 'contact-item-title'>E-mail</h3>

                                        <div className = 'contact-item-content'>
                                            <AiOutlineMail className = 'contact-icon' />

                                            <a href = 'mailto:ferreteriaabrinal@hotmail.com'>ferreteriaabrinal@hotmail.com</a>
                                        </div>
                                    </div>

                                    <div className = 'contact-item'>
                                        <h3 className = 'contact-item-title'>Dirección</h3>

                                        <div className = 'contact-item-content'>
                                            <AiOutlineEnvironment className = 'contact-icon' />

                                            <p className = 'contact-text'>Tamazula 522, José Campillo Sáenz, Gómez Palacio, Dgo. 35079</p>
                                        </div>
                                    </div>

                                    <div className = 'contact-item'>
                                        <h3 className = 'contact-item-title'>Horarios</h3>

                                        <div className = 'contact-item-content'>
                                            <AiOutlineCalendar className = 'contact-icon' />
                                            
                                            <div>
                                                <p className = 'contact-text'>Lunes - Viernes. 9 AM - 4 PM.</p>
                                                <p className = 'contact-text'>Sábado. 9 AM - 4 PM.</p>
                                                <p className = 'contact-text'>Domingo. Cerrado.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className = 'contact-item'>
                                        <h3 className = 'contact-item-title'>Redes Sociales</h3>

                                        <div className = 'contact-social'>
                                            <a href = 'https://www.facebook.com/ferreteriaaldaba' className = 'social-link'>
                                                <AiOutlineFacebook className = 'social-icon' />
                                            </a>

                                            <a href = 'https://www.instagram.com/abrinalferreteria/' className = 'social-link'>
                                                <AiOutlineInstagram className = 'social-icon' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CONTACT FORM */}
                            <div className = 'contact-form-container'>
                                <h2 className = 'form-title'>Ubicación</h2>

                                {/* MAP */}
                                <div className = 'contact-map'>
                                    <iframe
                                        src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7198.070222760813!2d-103.4627838455714!3d25.5704986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fd98fd7c7e451%3A0xe35c50fa9a77d8ca!2sFerreter%C3%ADa%20ABRINAL%20G%C3%B3mez%20Palacio.%20Dgo.!5e0!3m2!1ses-419!2smx!4v1747442669778!5m2!1ses-419!2smx'
                                        className = 'map-iframe' loading = 'lazy'
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Contact;