import { AiOutlineEye, AiOutlineAim, AiOutlineCheckCircle, AiOutlineTool, AiOutlineCustomerService, AiOutlineRocket, AiOutlineStar, AiOutlineTrophy, AiOutlineHeart, AiOutlineTeam } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

import Sierra from '../assets/images/Sierra.jpg';
import Rotomartillo from '../assets/images/Rotomartillo.webp';
import Esmeriladora from '../assets/images/Esmeriladora.png'

import Austromex from '../assets/images/Austromex.webp';
import Truper from '../assets/images/Truper.png';
import Milwaukee from '../assets/images/Milwaukee.png';
import Dewalt from '../assets/images/Dewalt.png';
import Makita from '../assets/images/Makita.png';
import Urrea from '../assets/images/Urrea.webp';

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
        { name: 'Austromex', logo: Austromex },
        { name: 'Truper', logo: Truper },
        { name: 'Milwaukee', logo: Milwaukee },
        { name: 'DeWalt', logo: Dewalt },
        { name: 'Makita', logo: Makita },
        { name: 'Urrea', logo: Urrea },
    ]

    const storyMilestones = [
        {
            year: '2014',
            title: 'Fundación',
            description: 'Iniciamos con el sueño de ser la ferretería de confianza de la comunidad',
            icon: <AiOutlineRocket className = 'milestone-icon' />,
        },
        {
            year: '2018',
            title: 'Expansión',
            description: 'Ampliamos nuestro catálogo con más de 50 marcas reconocidas',
            icon: <AiOutlineStar className = 'milestone-icon'/>,
        },
        {
            year: '2021',
            title: 'Reconocimiento',
            description: 'Premiados como la mejor ferretería local por servicio al cliente',
            icon: <AiOutlineTrophy className = 'milestone-icon' />,
        },
        {
            year: '2025',
            title: 'Presente',
            description: 'Más de 10,000 clientes satisfechos y creciendo cada día',
            icon: <AiOutlineTrophy className = 'milestone-icon' />
        },
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
                                    <NavLink to = '/catalog'>
                                        <button className = 'btn-primary'>Explorar Catálogo</button>
                                    </NavLink>
                                    
                                    <NavLink to = '/contact'>
                                        <button className = 'btn-primary'>Contactar</button>
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
                                <img src = { Sierra } className = 'hero-img main' />
                            </div>

                            <div className = 'image-column'>
                                <img src = { Rotomartillo } className = 'hero-img secondary' />
                                <img src = { Esmeriladora } className = 'hero-img secondary' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR STORY SECTION */}
            <section className = 'story-section'>
                <div className = 'container'>
                    <div className = 'story-header'>
                        <div className = 'story-badge'>
                            <AiOutlineHeart className = 'badge-icon' />

                            <span>Nuestra Historia</span>
                        </div>

                        <h2 className = 'story-title'>
                            Construyendo <span className = 'highligth'>confianza</span> desde 2014
                        </h2>

                        <p className = 'story-subtitle'>
                            Más que una ferretería, somos tu socio en cada proyecto.
                            Conoce el camino que nos ha llevado a ser la ferretería de
                            confianza de miles de familias y profesionales.
                        </p>
                    </div>

                    <div className = 'story-content'>
                        {/* STORY CARDS */}
                        <div className = 'story-cards'>
                            <div className = 'story-card mission-card'>
                                <div className = 'card-header'>
                                    <div className = 'card-icon'>
                                        <AiOutlineTeam />
                                    </div>

                                    <h3 className = 'card-title'>Nuestra Misión</h3>
                                </div>

                                <p className = 'card-description'>
                                    Ser el aliado confiable que impulsa tus proyectos,
                                    ofreciendo herramientas de calidad superior y
                                    asesoramiento experto para que cada trabajo sea un éxito.
                                </p>
                            </div>

                            <div className = 'story-card vision-card'>
                                <div className = 'card-header'>
                                    <div className = 'card-icon'>
                                        <AiOutlineRocket />
                                    </div>

                                    <h3 className = 'card-title'>Nuestra Visión</h3>
                                </div>

                                <p className = 'card-description'>
                                    Convertirnos en la ferretería líder de la región,
                                    reconocida por transformar ideas en realidad a través de
                                    productos excepcionales y servicio personalizado.
                                </p>
                            </div>
                        </div>

                        {/* TIMELINE */}
                        <div className = 'timeline-section'>
                            <h3 className = 'timeline-title'>Nuestro Camino</h3>

                            <div className = 'timeline'>
                                {storyMilestones.map((milestone, index) => (
                                    <div key = {index} className = {`timeline-item $ {index % 2 === 0 ? 'left' : 'right'}`}>
                                        <div className = 'timeline-content'>
                                            <div className = 'timeline-year'>{milestone.year}</div>

                                            <div className = 'timeline-icon-wrapper'>{milestone.icon}</div>

                                            <div className = 'timeline-item-title'>{milestone.title}</div>

                                            <div className = 'timeline-description'>{milestone.description}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VISION & MISSION SECTION */}
            <section className = 'vision-mission-section'>
                <div className = 'container'>
                    <div className = 'vision-mission-content'>
                        {/* VISION TEXT - RIGHT SIDE */}
                        <div className = 'vision-text'>
                            <div className = 'vision-text-content'>
                                <h2 className = 'vision-title'>
                                    Nuestra <span className = 'highligth'>Visión y Misión</span>
                                </h2>

                                <div className = 'vision-divider'></div>
                            </div>

                            <div className = 'vision-item'>
                                <div className = 'vision-icon-wrapper'>
                                    <AiOutlineEye className = 'vision-icon' />
                                </div>

                                <div className = 'vision-content'>
                                    <h3 className = 'vision-item-title'>Visión</h3>

                                    <p className = 'vision-description'>
                                        Ser la ferretería lider en la región, reconocida por la calidad de nuestros productos,
                                        la excelencia en el servicio al cliente y nuestro compromiso con la innovación y el desarrollo sostenible.
                                    </p>
                                </div>
                            </div>

                            <div className = 'vision-item'>
                                <div className = 'vision-icon-wrapper'>
                                    <AiOutlineAim className = 'vision-icon' />
                                </div>

                                <div className = 'vision-content'>
                                    <h3 className = 'vision-item-title'>Misión</h3>

                                    <p className = 'vision-description'>
                                        Proporcionar a nuestros clientes las mejores herramientas y productos de ferretería,
                                        ofreciendo asesoramiento experto y soluciones integrales para sus proyectos,
                                        contribuyendo así al desarrollo de nuestra comunidad.
                                    </p>
                                </div>
                            </div>

                            <div className = 'vision-values'>
                                <h3 className = 'values-title'>Nuestros Valores</h3>

                                <ul className = 'values-list'>
                                    <li className = 'value-item'>Calidad en cada producto</li>
                                    <li className = 'value-item'>Integridad en nuestras acciones</li>
                                    <li className = 'value-item'>Compromiso con el cliente</li>
                                    <li className = 'value-item'>Innovación constante</li>
                                </ul>
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

                        <button className = 'btn-primary'>Ver Catálogo Completo</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;