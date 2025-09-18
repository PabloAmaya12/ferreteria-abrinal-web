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
        { name: 'Austromex', category: 'Abrasivos', image: Austromex },
        { name: 'Truper', category: 'Herramientas', image: Truper },
        { name: 'Milwaukee', category: 'Herramientas', image: Milwaukee },
        { name: 'Dewalt', category: 'Herramientas', image: Dewalt },
        { name: 'Makita', category: 'Herramientas', image: Makita },
        { name: 'URREA', category: 'Herramientas', image: Urrea },
        { name: 'PFERD', category: 'Abrasivos', image: PFERD },
        { name: 'Tenazit', category: 'Abrasivos', image: Tenazit },
        { name: 'Stanley', category: 'Herramientas', image: Stanley },
        { name: 'Irwin', category: 'Herramientas', image: Irwin },
        { name: 'Mikels', category: 'Herramientas', image: Mikels },
        { name: 'Bardahl', category: 'Automotriz', image: Bardahl },
        { name: 'IGoto', category: 'Electricidad', image: IGoto },
        { name: 'Coflex', category: 'Plomería', image: Coflex },
        { name: 'Black & Decker', category: 'Herramientas', image: BlackDecker },
        { name: 'ESPA', category: 'Plomería', image: ESPA },
        { name: 'Volteck', category: 'Electricidad', image: Volteck },
        { name: 'Cinasa', category: 'Abrasivos', image: Cinasa },
        { name: 'Aqua Pak', category: 'Plomería', image: AquaPak },
        { name: 'Ingco', category: 'Herramientas', image: Ingco },
        { name: 'Fiero', category: 'Trefilados', image: Fiero },
        { name: 'Easy Cut', category: 'Abrasivos', image: EasyCut },
        { name: 'Dexter', category: 'Cerrajería', image: Dexter },
        { name: 'Energizer', category: 'Pilas', image: Energizer },
        { name: 'Eveready', category: 'Pilas', image: Eveready },
        { name: 'Panasonic', category: 'Pilas', image: Panasonic },
        { name: 'Duracell', category: 'Pilas', image: Duracell },
        { name: 'Omega', category: 'Soldadura', image: Omega },
        { name: 'Fandeli', category: 'Abrasivos', image: Fandeli },
        { name: 'Loctite', category: 'Selladores', image: Loctite },
        { name: 'Rotoplas', category: 'Plomería', image: Rotoplas },
        { name: 'Klintek', category: 'Higiene', image: Klintek },
        { name: 'Bticino', category: 'Electricidad', image: Bticino },
        { name: 'Volteck Lait', category: 'Electricidad', image: VolteckLait },
        { name: 'IUSA', category: 'Electricidad', image: IUSA },
        { name: 'Infra', category: 'Soldadura', image: Infra },
        { name: 'Doal', category: 'Pintura', image: Doal },
        { name: 'Sista', category: 'Selladores', image: Sista },
        { name: 'Master', category: 'Cerrajería', image: Master },
        { name: 'IGESA', category: 'Electricidad', image: IGESA },
        { name: 'Foset', category: 'Plomería', image: Foset },
        { name: 'Austrodiam', category: 'Abrasivos', image: Austrodiam },
        { name: 'Dica', category: 'Plomería', image: Dica },
        { name: 'Phillips', category: 'Cerrajería', image: Phillips },
        { name: 'Evans', category: 'Plomería', image: Evans },
        { name: 'Derma Care', category: 'Seguridad', image: DermaCare },
        { name: 'WD-40', category: 'Lubricantes', image: WD40 },
        { name: '3 en 1', category: 'Lubricantes', image: TresInOne },
        { name: 'Ax Tech', category: 'Soldadura', image: AxTech },
        { name: 'Fleximatic', category: 'Plomería', image: Fleximatic },
        { name: 'Bosch', category: 'Herramientas', image: Bosch },
        { name: 'Ultra Color', category: 'Pintura', image: UltraColor },
        { name: 'Fanal', category: 'Cerrajería', image: Fanal },
        { name: 'Kola Loka', category: 'Adhesivos', image: KolaLoka },
        { name: 'Resistol 5000', category: 'Adhesivos', image: Resistol5000 },
        { name: 'Pennsylvania', category: 'Selladores', image: Pennsylvania },
        { name: 'Sika', category: 'Selladores', image: Sika },
        { name: 'Rugo', category: 'Plomería', image: Rugo },
        { name: 'Devcon', category: 'Adhesivos', image: Devcon },
        { name: 'ByLack', category: 'Seguridad', image: ByLack },
        { name: 'Permatex', category: 'Selladores', image: Permatex },
        { name: '3M', category: 'Seguridad', image: TresM },
        { name: 'Hermex', category: 'Cerrajería', image: Hermex },
        { name: 'Cabel', category: 'Seguridad', image: Cabel },
        { name: 'Tuk', category: 'Cintas', image: Tuk },
        { name: 'Pretul', category: 'Herramientas', image: Pretul },
        { name: 'Novapak', category: 'Cintas', image: Novapak },
        { name: 'Avante', category: 'Carbones', image: Avante },
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
                            <div className = 'brand-image-v2'>
                                <img src = {brand.image} alt = {brand.name} />

                                <div className = 'product-overlay'>
                                    <button className = 'wishlist-btn'>
                                        <AiOutlineHeart />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Catalog;