import React from 'react';
import heroImg01 from '../assets/images/hero.jpg';
import heroImg02 from '../assets/images/hero_v2.jpg';
import heroImg03 from '../assets/images/hero_v3.jpg';

const Home = () => {
    return <>
    {/* HERO SECTION */}
    <>
    <section className = 'hero__section pt-[60px] 2xl:h-[800px]'>
        <div className = 'container'>
            <div className = 'flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
                {/* HERO CONTENT */}
                <div>
                    <div className = 'lg:w-[570px]'>
                        <h1 className = 'text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                        Tu ferretería de confianza.
                        </h1>

                        <p className = 'text__para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <button className = 'btn'>Request an Appoinment</button>
                    </div>

                    {/* HERO COUNTER*/}
                    <div className = 'mt-[30px] lg:mt-[70px] flex flex-col lg_flex-row lg:items-center gap-5 lg:gap-[30px]'>
                        <div>
                            <h2 className = 'text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                                30+
                            </h2>
                            <span className = 'w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                            <p className = 'text__para'>Years of Experience</p>
                        </div>
                    </div>

                    <div className = 'mt-[30px] lg:mt-[70px] flex flex-col lg_flex-row lg:items-center gap-5 lg:gap-[30px]'>
                        <div>
                            <h2 className = 'text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                                15+
                            </h2>
                            <span className = 'w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                            <p className = 'text__para'>Clinic Location</p>
                        </div>
                    </div>

                    <div className = 'mt-[30px] lg:mt-[70px] flex flex-col lg_flex-row lg:items-center gap-5 lg:gap-[30px]'>
                        <div>
                            <h2 className = 'text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                                100%
                            </h2>
                            <span className = 'w-[100px] h-2 bg-irisColor rounded-full block mt-[-14px]'></span>
                            <p className = 'text__para'>Patient Satisfaction</p>
                        </div>
                    </div>
                </div>

                {/* HERO CONTENT */}
                <div className = 'flex gap-[30px] justify-end'>
                    <div>
                        <img src = {heroImg01} alt = '' className = 'w-full' />
                    </div>
                    <div className = 'mt-[30px]'>
                        <img src = {heroImg02} alt = '' className = 'w-full mb-[30px]' />
                        <img src = {heroImg03} alt = '' className = 'w-full' />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    </>
};

export default Home;