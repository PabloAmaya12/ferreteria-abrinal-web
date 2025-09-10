import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

import Austromex from '../assets/images/Austromex.webp';
import Bosch from '../assets/images/Bosch.png';
import Cinasa from '../assets/images/Cinasa.png';
import Coflex from '../assets/images/Coflex.png';
import DermaCare from '../assets/images/DermaCare.png';
import Dewalt from '../assets/images/Dewalt.png';
import Fandeli from '../assets/images/Fandeli.png'
import Foset from '../assets/images/Foset.png'
import IGESA from '../assets/images/IGESA.png'
import IGoto from '../assets/images/IGoto.png'
import Infra from '../assets/images/Infra.png'
import Ingco from '../assets/images/Ingco.jpg';
import IUSA from '../assets/images/IUSA.png';
import Klintek from '../assets/images/Klintek.jpg'
import Makita from '../assets/images/Makita.png';
import Milwaukee from '../assets/images/Milwaukee.png';
import Omega from '../assets/images/Omega.png';
import PFERD from '../assets/images/PFERD.png';
import Rotoplas from '../assets/images/Rotoplas.png'
import Rugo from '../assets/images/Rugo.webp';
import Truper from '../assets/images/Truper.png';
import Urrea from '../assets/images/Urrea.webp';
import Volteck from '../assets/images/Volteck.png';

import './Catalog.css';

const Catalog = () => {
    const [activeFilter, setActiveFilter] = useState('All Categories');

    const filters = ['All Categories', 'Abrasivos', 'Electricidad', 'Herramientas', 'Higiene', 'Plomería', 'Seguridad', 'Soldadura'];

    const brands = [
        {
            name: 'Austromex',
            category: 'Abrasivos',
            image: Austromex,
        },
        {
            name: 'Truper',
            category: 'Herramientas',
            image: Truper,
        },
        {
            name: 'Milwaukee',
            category: 'Herramientas',
            image: Milwaukee,
        },
        {
            name: 'Dewalt',
            category: 'Herramientas',
            image: Dewalt,
        },
        {
            name: 'Makita',
            category: 'Herramientas',
            image: Makita,
        },
        {
            name: 'URREA',
            category: 'Herramientas',
            image: Urrea,
        },
        {
            name: 'PFERD',
            category: 'Abrasivos',
            image: PFERD,
        },
        {
            name: 'IGoto',
            category: 'Electricidad',
            image: IGoto,
        },
        {
            name: 'Coflex',
            category: 'Plomería',
            image: Coflex,
        },
        {
            name: 'Volteck',
            category: 'Electricidad',
            image: Volteck,
        },
        {
            name: 'Cinasa',
            category: 'Abrasivos',
            image: Cinasa,
        },
        {
            name: 'Ingco',
            category: 'Herramientas',
            image: Ingco,
        },
        {
            name: 'Omega',
            category: 'Soldadura',
            image: Omega,
        },
        {
            name: 'Fandeli',
            category: 'Abrasivos',
            image: Fandeli,
        },
        {
            name: 'Rotoplas',
            category: 'Plomería',
            image: Rotoplas,
        },
        {
            name: 'Klintek',
            category: 'Higiene',
            image: Klintek,
        },
        {
            name: 'IUSA',
            category: 'Electricidad',
            image: IUSA,
        },
        {
            name: 'Infra',
            category: 'Soldadura',
            image: Infra,
        },
        {
            name: 'IGESA',
            category: 'Electricidad',
            image: IGESA,
        },
        {
            name: 'Foset',
            category: 'Plomería',
            image: Foset,
        },
        {
            name: 'DermaCare',
            category: 'Seguridad',
            image: DermaCare,
        },
        {
            name: 'Bosch',
            category: 'Herramientas',
            image: Bosch,
        },
        {
            name: 'Rugo',
            category: 'Plomería',
            image: Rugo,
        },
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