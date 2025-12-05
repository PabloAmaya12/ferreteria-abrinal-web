import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

import AquaPak from '../assets/images/AquaPak.webp';
import Austrodiam from '../assets/images/Austrodiam.png';
import Austromex from '../assets/images/Austromex.webp';
import Avante from '../assets/images/Avante.png';
import AxTech from '../assets/images/AxTech.png';
import Bardahl from '../assets/images/Bardahl.png';
import BlackDecker from '../assets/images/BlackDecker.png';
import Bosch from '../assets/images/Bosch.png';
import Bticino from '../assets/images/Bticino.png';
import ByLack from '../assets/images/ByLack.png';
import Cabel from '../assets/images/Cabel.png';
import Cinasa from '../assets/images/Cinasa.png';
import Coflex from '../assets/images/Coflex.png';
import DermaCare from '../assets/images/DermaCare.png';
import Devcon from '../assets/images/Devcon.jpeg';
import Dewalt from '../assets/images/Dewalt.png';
import Dexter from '../assets/images/Dexter.png';
import Dica from '../assets/images/Dica.png';
import Doal from '../assets/images/Doal.png';
import Duracell from '../assets/images/Duracell.png';
import EasyCut from '../assets/images/EasyCut.jpg';
import Energizer from '../assets/images/Energizer.png';
import ESPA from '../assets/images/ESPA.avif';
import Evans from '../assets/images/Evans.png';
import Eveready from '../assets/images/Eveready.webp';
import Fanal from '../assets/images/Fanal.png';
import Fandeli from '../assets/images/Fandeli.png';
import Fiero from '../assets/images/Fiero.png';
import Fleximatic from '../assets/images/Fleximatic.png';
import Foset from '../assets/images/Foset.png';
import Hermex from '../assets/images/Hermex.webp';
import IGESA from '../assets/images/IGESA.png';
import IGoto from '../assets/images/IGoto.png';
import Infra from '../assets/images/Infra.png';
import Irwin from '../assets/images/Irwin.png';
import Ingco from '../assets/images/Ingco.jpg';
import IUSA from '../assets/images/IUSA.png';
import Klintek from '../assets/images/Klintek.jpg';
import KolaLoka from '../assets/images/KolaLoka.png';
import Loctite from '../assets/images/Loctite.png';
import Makita from '../assets/images/Makita.png';
import Master from '../assets/images/Master.jpg';
import Mikels from '../assets/images/Mikels.png';
import Milwaukee from '../assets/images/Milwaukee.png';
import Novapak from '../assets/images/Novapak.png';
import Omega from '../assets/images/Omega.png';
import Panasonic from '../assets/images/Panasonic.png';
import Pennsylvania from '../assets/images/Pennsylvania.png';
import Permatex from '../assets/images/Permatex.png';
import PFERD from '../assets/images/PFERD.png';
import Phillips from '../assets/images/Phillips.jpg';
import Pretul from '../assets/images/Pretul.png';
import Resistol5000 from '../assets/images/Resistol5000.webp'
import Rotoplas from '../assets/images/Rotoplas.png'
import Rugo from '../assets/images/Rugo.webp';
import Sista from '../assets/images/Sista.webp';
import Sika from '../assets/images/Sika.png';
import Stanley from '../assets/images/Stanley.png';
import Tenazit from '../assets/images/Tenazit.png';
import TresInOne from '../assets/images/3in1.png';
import TresM from '../assets/images/3M.png';
import Truper from '../assets/images/Truper.png';
import Tuk from '../assets/images/Tuk.png';
import UltraColor from '../assets/images/UltraColor.png';
import Urrea from '../assets/images/Urrea.webp';
import Volteck from '../assets/images/Volteck.png';
import VolteckLait from '../assets/images/VolteckLait.png';
import WD40 from '../assets/images/WD40.png';

import './Catalog.css';

const Catalog = () => {
    const [activeFilter, setActiveFilter] = useState('All Categories');

    const filters = ['All Categories', 'Abrasivos', 'Adhesivos', 'Automotriz', 'Carbones', 'Cerrajería',
        'Cintas', 'Electricidad', 'Herramientas', 'Higiene', 'Lubricantes', 'Pilas', 'Pintura',
        'Plomería', 'Seguridad', 'Selladores', 'Soldadura', 'Trefilados'];

    const brands = [
        { name: 'Austromex', category: 'Abrasivos', image: Austromex, link: 'https://www.austromex.com.mx/' },
        { name: 'Truper', category: 'Herramientas', image: Truper, link: 'https://www.truper.com/CatVigente/TRUPER-17.html' },
        { name: 'Milwaukee', category: 'Herramientas', image: Milwaukee, link: 'https://www.milwaukeetool.com.mx/' },
        { name: 'Dewalt', category: 'Herramientas', image: Dewalt, link: 'https://www.dewalts.com.mx/' },
        { name: 'Makita', category: 'Herramientas', image: Makita, link: 'https://www.makita.com.mx/' },
        { name: 'URREA', category: 'Herramientas', image: Urrea, link: 'https://www.urrea.com/' },
        { name: 'PFERD', category: 'Abrasivos', image: PFERD, link: 'https://www.pferd.com/' },
        { name: 'Tenazit', category: 'Abrasivos', image: Tenazit, link: 'https://www.austromex.com.mx/brands/tenazit/' },
        { name: 'Stanley', category: 'Herramientas', image: Stanley, link: 'https://mx.stanleytools.global/' },
        { name: 'Irwin', category: 'Herramientas', image: Irwin, link: 'https://www.irwin.com/' },
        { name: 'Mikels', category: 'Herramientas', image: Mikels, link: 'https://www.mikels.com.mx/' },
        { name: 'Bardahl', category: 'Automotriz', image: Bardahl, link: 'https://www.bardahl.com.mx/' },
        { name: 'IGoto', category: 'Electricidad', image: IGoto, link: 'https://www.igoto.com.mx/' },
        { name: 'Coflex', category: 'Plomería', image: Coflex, link: 'https://www.coflex.com.mx/' },
        { name: 'Black & Decker', category: 'Herramientas', image: BlackDecker, link: 'https://www.blackanddecker.com.mx/' },
        { name: 'ESPA', category: 'Plomería', image: ESPA, link: 'https://www.espa.com/' },
        { name: 'Volteck', category: 'Electricidad', image: Volteck, link: 'https://www.truper.com/CatVigente/VOLTECK-389.html' },
        { name: 'Cinasa', category: 'Abrasivos', image: Cinasa, link: 'https://www.cinasa.com.mx/' },
        { name: 'Aqua Pak', category: 'Plomería', image: AquaPak },
        { name: 'Ingco', category: 'Herramientas', image: Ingco, link: 'https://www.ingco.lat/' },
        { name: 'Fiero', category: 'Trefilados', image: Fiero, link: 'https://www.truper.com/CatVigente/FIERO-548.html' },
        { name: 'Easy Cut', category: 'Abrasivos', image: EasyCut, link: 'https://www.austromex.com.mx/group/1005/' },
        { name: 'Dexter', category: 'Cerrajería', image: Dexter, link: 'https://www.cerraduras-dexter.com.mx/' },
        { name: 'Energizer', category: 'Pilas', image: Energizer, link: 'https://www.energizer.com/' },
        { name: 'Eveready', category: 'Pilas', image: Eveready, link: 'https://www.eveready.com/' },
        { name: 'Panasonic', category: 'Pilas', image: Panasonic, link: 'https://www.panasonic.com/' },
        { name: 'Duracell', category: 'Pilas', image: Duracell, link: 'https://www.duracell.com/' },
        { name: 'Omega', category: 'Soldadura', image: Omega, link: 'https://www.omegaaleaciones.com/' },
        { name: 'Fandeli', category: 'Abrasivos', image: Fandeli, link: 'https://www.fandeli.com/' },
        { name: 'Loctite', category: 'Selladores', image: Loctite, link: 'https://www.loctite.com.mx/' },
        { name: 'Rotoplas', category: 'Plomería', image: Rotoplas, link: 'https://www.rotoplas.com.mx/' },
        { name: 'Klintek', category: 'Higiene', image: Klintek, link: 'https://www.truper.com/CatVigente/KLINTEK-601.html' },
        { name: 'Bticino', category: 'Electricidad', image: Bticino, link: 'https://www.bticino.com.mx/' },
        { name: 'Volteck Lait', category: 'Electricidad', image: VolteckLait, link: 'https://www.truper.com/CatVigente/VOLTECK-389.html' },
        { name: 'IUSA', category: 'Electricidad', image: IUSA, link: 'https://www.iusa.com.mx/' },
        { name: 'Infra', category: 'Soldadura', image: Infra, link: 'https://www.infra.com.mx/' },
        { name: 'Doal', category: 'Pintura', image: Doal, link: 'https://www.pinturasdoal.com/' },
        { name: 'Sista', category: 'Selladores', image: Sista, link: 'https://www.sista-selladores.com/' },
        { name: 'Master', category: 'Cerrajería', image: Master, link: 'https://www.masterlock.com/' },
        { name: 'IGESA', category: 'Electricidad', image: IGESA, link: 'https://www.igesa.com.mx/' },
        { name: 'Foset', category: 'Plomería', image: Foset, link: 'https://www.truper.com/CatVigente/FOSET-467.html' },
        { name: 'Austrodiam', category: 'Abrasivos', image: Austrodiam, link: 'https://www.austromex.com.mx/brands/austrodiam' },
        { name: 'Dica', category: 'Plomería', image: Dica, link: 'https://www.dicalidad.com.mx/' },
        { name: 'Phillips', category: 'Cerrajería', image: Phillips, link: 'https://www.phillips.com.mx/' },
        { name: 'Evans', category: 'Plomería', image: Evans, link: 'https://www.evans.com.mx/' },
        { name: 'Derma Care', category: 'Seguridad', image: DermaCare, link: 'https://www.dermacare.mx/' },
        { name: 'WD-40', category: 'Lubricantes', image: WD40, link: 'https://www.wd40.com.mx/' },
        { name: '3 en 1', category: 'Lubricantes', image: TresInOne, link: 'https://www.3enuno.lat/' },
        { name: 'Ax Tech', category: 'Soldadura', image: AxTech, link: 'https://www.axtech.com.mx/' },
        { name: 'Fleximatic', category: 'Plomería', image: Fleximatic, link: 'https://www.fleximatic.mx/' },
        { name: 'Bosch', category: 'Herramientas', image: Bosch, link: 'https://www.bosch.com.mx/' },
        { name: 'Ultra Color', category: 'Pintura', image: UltraColor, link: 'https://www.ultracolor.mx/' },
        { name: 'Fanal', category: 'Cerrajería', image: Fanal, link: 'https://www.fanal.com.mx/' },
        { name: 'Kola Loka', category: 'Adhesivos', image: KolaLoka, link: 'https://www.resistol.com.mx/' },
        { name: 'Resistol 5000', category: 'Adhesivos', image: Resistol5000, link: 'https://www.resistol.com.mx/' },
        { name: 'Pennsylvania', category: 'Selladores', image: Pennsylvania, link: 'https://www.pennsylvania.com.mx/' },
        { name: 'Sika', category: 'Selladores', image: Sika, link: 'https://mex.sika.com/' },
        { name: 'Rugo', category: 'Plomería', image: Rugo, link: 'https://www.rugo.com.mx/' },
        { name: 'Devcon', category: 'Adhesivos', image: Devcon, link: 'https://www.devcon.com/' },
        { name: 'ByLack', category: 'Seguridad', image: ByLack, link: 'https://www.bylack.com.mx/' },
        { name: 'Permatex', category: 'Selladores', image: Permatex, link: 'https://www.permatex.com/' },
        { name: '3M', category: 'Seguridad', image: TresM, link: 'https://www.3m.com.mx/' },
        { name: 'Hermex', category: 'Cerrajería', image: Hermex, link: 'https://www.truper.com/CatVigente/HERMEX-576.html' },
        { name: 'Cabel', category: 'Seguridad', image: Cabel, link: 'https://www.cabel.mx/' },
        { name: 'Tuk', category: 'Cintas', image: Tuk, link: 'https://www.tuk.com.mx/' },
        { name: 'Pretul', category: 'Herramientas', image: Pretul, link: 'https://www.truper.com/CatVigente/TRUPER-17.html' },
        { name: 'Novapak', category: 'Cintas', image: Novapak, link: 'https://www.novapak.com.mx/' },
        { name: 'Avante', category: 'Carbones', image: Avante, link: 'https://www.carbones-avante.com/' },
    ]

    const filteredBrands = activeFilter === 'All Categories' ? brands : brands.filter((brand) => brand.category === activeFilter);

    return (
        <div className = 'catalog-page'>
            <div className = 'container'>
                <div className = 'catalog-header'>
                    <h1 className = 'catalog-title'>Catálogo de Marcas</h1>

                    <p className = 'catalog-subtitle'>Descubre las mejores marcas profesionales</p>
                </div>

                {/* FILTER BUTTONS */}
                <div className = 'filter-section'>
                    <div className = 'filter-buttons'>
                        {filters.map((filter) => (
                            <button
                                key = {filter}
                                className = {'filter-btn ${activeFilter === filter ? "active" : ""}'}
                                onClick = {() => setActiveFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* BRANDS GRID */}
                <div className = 'brands-grid-v2'>
                    {filteredBrands.map((brand, index) => (
                        <div key = {index} className = 'brand-card-v2'>
                            {brand.link ? (
                                <a href = {brand.link} target = '_blank' rel = 'noopener noreferrer' className = 'brand-link'>
                                    <div className = 'brand-image-v2'>
                                        <img src = {brand.image} alt = {brand.name} />

                                        <div className = 'product-overlay'>
                                            <button className = 'wishlist-btn'>
                                                <AiOutlineHeart />
                                            </button>
                                        </div>
                                    </div>
                                </a>
                            ) : (
                                <div className = 'brand-image-v2'>
                                    <img src = {brand.image} alt = {brand.name} />

                                    <div className = 'product-overlay'>
                                        <button className = 'wishlist-btn'>
                                            <AiOutlineHeart />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Catalog;