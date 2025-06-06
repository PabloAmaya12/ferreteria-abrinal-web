import heroImg01 from '../assets/images/hero.jpg';
import heroImg02 from '../assets/images/hero_v2.jpg';

import './Home.css';

const Home = () => {
    return (
        <>
            {/* HERO SECTION */}
            <section className = 'hero__section'>
                <div className = 'container'>
                    <div className = 'hero__content'>
                        {/* HERO CONTENT */}
                        <div>
                            <div className = 'hero__text'>
                                <h1 className = 'hero__title'>Tu ferretería de confianza.</h1>

                                <p className = 'text__para'>
                                    En Ferretería Abrinal, nos dedicamos a ofrecer herramientas y marcas de la más alta calidad a nuestros clientes. 
                                    Nos esforzamos constantemente por marcar la diferencia en la industria de herramientas y más allá. 
                                    Nuestro equipo está comprometido con la excelencia, la innovación y un servicio excepcional.
                                </p>

                                <button className = 'btn'>Conocer Más</button>
                            </div>

                            {/* HERO COUNTER*/}
                            <div className = 'hero__counter'>
                                <div className = 'counter__item'>
                                    <h2>+ 10</h2>

                                    <span className = 'counter__bar counter__bar--yellow'></span>

                                    <p className = 'text__para'>Años de Experiencia</p>
                                </div>

                                <div className = 'counter__item'>
                                    <h2>+ 80</h2>

                                    <span className = 'counter__bar counter__bar--purple'></span>

                                    <p className = 'text__para'>Marcas en Nuestro Catálogo</p>
                                </div>

                                <div className = 'counter__item'>
                                    <h2>100%</h2>

                                    <span className = 'counter__bar counter__bar--iris'></span>
                                    
                                    <p className = 'text__para'>Satisfacción del Cliente</p>
                                </div>
                            </div>
                        </div>

                        {/* HERO IMAGES */}
                        <div className = 'hero__images'>
                            <div>
                                <img src = {heroImg01} alt = 'Ferreteria Abrinal' className = 'hero__image' />
                            </div>

                            <div className = 'hero__image-col'>
                                <img src = {heroImg02} alt = 'Ferreteria Abrinal' className = 'hero__image' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;