import { AiOutlineCheckCircle, AiOutlineTool, AiOutlineCustomerService } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

import './Home.css';

const Home = () => {
    const features = [
        {
            icon: <AiOutlineTool className = 'feature-icon' />,
            title: 'Herramientas de Calidad',
            description: 'Trabajamos con las mejores marcas del mercado para garantizar durabilidad y rendimiento.',
        },
        {
            icon: <AiOutlineCustomerService className = 'feature-icon' />,
            title: 'Atención Personalizada',
            description: 'Nuestro equipo de expertos te ayudará a encontrar la herramienta perfecta para tu proyecto.',
        },
        {
            icon: <AiOutlineCheckCircle className = 'feature-icon' />,
            title: 'Garantía Extendida',
            description: 'Ofrecemos garantía extendida en todos nuestros productos para tu tranquilidad.',
        },
    ]

    const topBrands = [
        { name: 'Austromex', logo: 'https://www.austromex.com.mx/media/wysiwyg/marca/austromex.png' },
        { name: 'Truper', logo: 'https://www.riegofincatec.com/wp-content/uploads/2020/12/truper-logo.png' },
        { name: 'Milwaukee', logo: 'https://i.pinimg.com/originals/43/fd/3e/43fd3e20cfd21e0d7f228efd290f5f95.png' },
        { name: 'DeWalt', logo: 'https://brandlogos.net/wp-content/uploads/2021/10/dewalt-logo.png' },
        { name: 'Makita', logo: 'https://logos-world.net/wp-content/uploads/2023/03/Makita-Logo.png' },
        { name: 'Urrea', logo: 'https://www.pcdigital.com.mx/wp-content/uploads/2024/06/URREA.png' },
    ]

    return (
        <div className = 'home'>
            {/* HERO SECTION */}
            <section className = 'hero-section'>
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
                                    Nuestro equipo está comprometido con la excelencia, la innovación y un servicio excepcional.
                                </p>

                                <div className = 'hero-buttons'>
                                    <NavLink to = '/catalog_v3'>
                                        <button className = 'btn'>Explorar Catálogo</button>
                                    </NavLink>
                                    
                                    <NavLink to = '/contact'>
                                        <button className = 'btn'>Contactar</button>
                                    </NavLink>
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
                                <img src = 'https://www.truper.com/media/import/imagenes/SINCO-12.jpg' className = 'hero-img main' />
                            </div>

                            <div className = 'image-column'>
                                <img src = 'https://www.milwaukeetool.mx/--/web-images/sc/12d101e29a22470ebd2fd4cf8d602f72?hash=fbd438c3d9d6ebcb13224a9da356f4b3&lang=en&mw=3840' className = 'hero-img secondary' />
                                <img src = 'https://www.makita.com.mx/wp-content/uploads/2025/03/GA4570_Mini-esmeriladora-angular-Xlock.png' className = 'hero-img secondary' />
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

                        <button className = 'btn btn-large'>Ver Catálogo Completo</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;