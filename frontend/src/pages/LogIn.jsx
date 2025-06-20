import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineUser, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail, AiOutlineGoogle, AiOutlineFacebook, AiOutlineArrowRight } from 'react-icons/ai';

import './LogIn.css';

const LogIn = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState ({
        email: '',
        password: '',
        name: '',
        confirmPassword: '',
        rememberMe: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted:', formData);
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData ({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const switchMode = () => {
        setIsLogin(!isLogin);

        setFormData ({
            email: '',
            password: '',
            name: '',
            confirmPassword: '',
            rememberMe: false,
        });
    };

    return (
        <div className = 'login-page'>
            <div className = 'login-container'>
                {/* LEFT SIDE - BRANDING */}
                <div className = 'login-branding'>
                    <div className = 'branding-content'>
                        <div className = 'brand-logo'>
                            <div className = 'brand-logo-icon'>
                                <span>🛠️</span>
                            </div>

                            <div className = 'brand-logo-text'>
                                <h2 className = 'brand-logo-title'>Ferretería Abrinal</h2>

                                <span className = 'brand-logo-subtitle'>Herramientas de Calidad</span>
                            </div>
                        </div>

                        <div className = 'branding-info'>
                            <h3 className = 'branding-title'>{isLogin ? '¡Bienvenido de Vuelta!' : 'Únete a Nuestra Familia'}</h3>

                            <p className = 'branding-description'>
                                {isLogin
                                    ? 'Accede a tu cuenta para gestionar tus pedidos, ver tu historial y disfrutar de ofertas exclusivas.'
                                    : 'Crea tu cuenta y descubre un mundo de herramientas de calidad con el mejor servicio al cliente.'
                                }
                            </p>

                            <div className = 'branding-features'>
                                <div className = 'branding-feature-item'>
                                    <div className = 'branding-feature-icon'>✓</div>

                                    <span>Ofertas exclusivas para miembros</span>
                                </div>

                                <div className = 'branding-feature-item'>
                                    <div className = 'branding-feature-icon'>✓</div>

                                    <span>Historial de compras</span>
                                </div>

                                <div className = 'branding-feature-item'>
                                    <div className = 'branding-feature-icon'>✓</div>

                                    <span>Soporte prioritario</span>
                                </div>
                            </div>
                        </div>

                        <div className = 'branding-stats'>
                            <div className = 'branding-stat-item'>
                                <h4 className = 'branding-stat-number'>+10,000</h4>

                                <p className = 'branding-stat-label'>Clientes Satisfechos</p>
                            </div>

                            <div className = 'branding-stat-item'>
                                <h4 className = 'branding-stat-number'>+80</h4>

                                <p className = 'branding-stat-label'>Marcas Disponibles</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE - FORM */}
                <div className = 'login-form-section'>
                    <div className = 'login-form-container'>
                        <div className = 'form-header'>
                            <h1 className = 'form-title'>{isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}</h1>

                            <p className = 'form-subtitle'>
                                {isLogin
                                    ? 'Ingresa tus credenciales para acceder a tu cuenta'
                                    : 'Completa los datos para crear tu nueva cuenta'
                                }
                            </p>
                        </div>

                        {/* SOCIAL LOGIN */}
                        <div className = 'social-login'>
                            <button className = 'social-btn google-btn'>
                                <AiOutlineGoogle className = 'login-social-icon'/>
                                Continuar con Google
                            </button>

                            <button className = 'social-btn google-btn'>
                                <AiOutlineFacebook className = 'login-social-icon'/>
                                Continuar con Facebook
                            </button>
                        </div>

                        <div className = 'login-divider'>
                            <span className = 'divider-text'>o {isLogin ? 'inicia sesión' : 'regístrate'} con email</span>
                        </div>

                        {/* FORM */}
                        <form onSubmit = {handleSubmit} className = 'login-form'>
                            {!isLogin && (
                                <div className = 'form-group'>
                                    <label htmlFor = 'name' className = 'form-label'>
                                        <AiOutlineUser className = 'label-icon'/>
                                        Nombre Completo
                                    </label>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LogIn;