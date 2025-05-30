import { AiOutlineCheckCircle, AiOutlineTool, AiOutlineCustomerService } from "react-icons/ai";

import './Home_v2.css';

import heroImg01 from '../assets/images/hero.jpg';
import heroImg02 from '../assets/images/hero_v2.jpg';
import heroImg03 from '../assets/images/hero_v3.jpg';
import stuff from '../assets/images/stuff.jpg';

const Home_v2 = () => {
    const features = [
        {
            icon: <AiOutlineTool className = 'featured-icon' />,
            title: 'Herramientas de Calidad',
            description: 'Trabajamos con las mejores marcas del mercado para garantizar durabilidad y rendimiento.',
        },
        {
            icon: <AiOutlineCustomerService className = 'featured-icon' />,
            title: 'Atención Personalizada',
            description: 'Nuestro equipo de expertos te ayudará a encontrar la herramienta perfecta para tu proyecto.',
        },
        {
            icon: <AiOutlineCheckCircle className = 'featured-icon' />,
            title: 'Garantía Extendida',
            description: 'Ofrecemos garantía extendida en todos nuestros productos para tu tranquilidad.',
        },
    ]

    const topBrands = [
        {name: 'Bosch', logo: stuff},
        {name: 'DeWalt', logo: stuff},
        {name: 'Makita', logo: stuff},
        {name: 'Stanley', logo: stuff},
        {name: 'Black & Decker', logo: stuff},
    ]

    return (
        <div className = 'home-v2'>
            {/* HERO SECTION */}
            <section className = 'hero__section-v2'>
                <div className = 'container'>
                    <div className = 'hero-content'>
                        {/* HERO TEXT */}
                        <div className = 'hero-text'>
                            <div className = 'hero-text-content'>
                                <h1 className = 'hero-title'>
                                    Tu ferretería de <span className = 'highlight'>confianza</span>
                                </h1>

                                <p className = 'hero-description'>
                                    En Ferretería Abrinal, nos dedicamos a ofrecer herramientas y marcas de la más alta calidad a nuestros clientes.
                                    Nos esforzamos constantemente por marcar la diferencia en la industria de herramientas y más allá.
                                </p>

                                <div className = 'hero-buttons'>
                                    <button className = 'btn btn-primary'>Explorar Catálogo</button>
                                    <button className = 'btn btn-secondary'>Contactar</button>
                                </div>
                            </div>

                            {/* HERO STATS */}
                            <div className = 'hero-stats'>
                                <div className = 'stat-item'>
                                    <h3 className = 'stat-number'>+10</h3>

                                    <div className = 'stat-bar yellow'></div>

                                    <p className = 'stat-label'>Años de Experiencia</p>
                                </div>

                                <div className = 'stat-item'>
                                    <h3 className = 'stat-number'>+80</h3>

                                    <div className = 'stat-bar purple'></div>

                                    <p className = 'stat-label'>Marcas en Nuestro Catálogo</p>
                                </div>

                                <div className = 'stat-item'>
                                    <h3 className = 'stat-number'>100%</h3>

                                    <div className = 'stat-bar iris'></div>

                                    <p className = 'stat-label'>Satisfacción del Cliente</p>
                                </div>
                            </div>
                        </div>

                        {/* HERO IMAGES */}
                        <div className = 'hero-images'>
                            <div className = 'image-column'>
                                <img src = {heroImg01} alt = 'Herramientas Profesionales' className = 'hero-img main' />
                            </div>
                            <div className = 'image-column'>
                                <img src = {heroImg02} alt = 'Ferretería Abrinal' className = 'hero-img seconday' />
                            </div>
                            <div className = 'image-column'>
                                <img src = {heroImg03} alt = 'Calidad Garantizada' className = 'hero-img secondary' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className = 'features-section'>
                <div className = 'container'>
                    <div className = 'section-header'>
                        <h2 className = 'section-title'>¿Por qué elegirnos?</h2>

                        <p className = 'section-subtitle'>Descubre las ventajas de trabajar con Ferretería Abrinal</p>
                    </div>

                    <div className = 'features-grid'>
                         {features.map((feature, index) => (
                            <div key = {index} className = 'feature-card'>
                                <div className = 'feature-icon-wrapper'>{feature.icon}</div>

                                <h3 className = 'feature-title'>{feature.title}</h3>

                                <p className = 'feature-description'>{feature.description}</p>
                            </div>
                         ))}
                    </div>
                </div>
            </section>

            {/* BRANDS SECTION */}
            <section className = 'brands-section'>
                <div className = 'container'>
                    <div className = 'section-header'>
                        <h2 className = 'section-title'>Marcas de Confianza</h2>

                        <p className = 'section-subtitle'>Trabajamos con las mejores marcas del mercado</p>
                    </div>

                    <div className = 'brands-grid'>
                         {topBrands.map((brand, index) => (
                            <div key = {index} className = 'brand-card'>
                                <img src = {brand.logo} alt = {brand.name} />
                            </div>
                         ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className = 'cta-section'>
                <div className = 'container'>
                    <div className = 'cta-content'>
                        <h2 className = 'cta-title'>¿Listo para tu próximo proyecto?</h2>

                        <p className = 'cta-description'>Encuentra las herramientas perfectas para llevar tus ideas a la realidad</p>

                        <button className = 'btn btn-primary btn-large'>Ver Catálogo Completo</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home_v2;