import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

import heroImg01 from '../assets/images/hero.jpg';
import Austromex from '../assets/images/Austromex.webp';
import Truper from '../assets/images/Truper.png';
import Milwaukee from '../assets/images/Milwaukee.png';
import Dewalt from '../assets/images/Dewalt.png';
import Makita from '../assets/images/Makita.png';
import Urrea from '../assets/images/Urrea.webp';
import Ingco from '../assets/images/Ingco.jpg';

import './Catalog_v2.css';

const Catalog_v2 = () => {
    const [activeFilter, setActiveFilter] = useState('All Categories');

    const filters = ['All Categories', 'Abrasivos', 'Herramientas', 'Soldadura', 'Electricidad', 'Plomería'];

    const brands = [
        {
            name: 'Austromex',
            category: 'Abrasivos',
            image: Austromex,
            isNew: true, 
        },
        {
            name: 'Truper',
            category: 'Herramientas',
            image: Truper,
            isNew: false, 
        },
        {
            name: 'Milwaukee',
            category: 'Herramientas',
            image: Milwaukee,
            isNew: false, 
        },
        {
            name: 'Dewalt',
            category: 'Herramientas',
            image: Dewalt,
            isNew: false, 
        },
        {
            name: 'Makita',
            category: 'Herramientas',
            image: Makita,
            isNew: true, 
        },
        {
            name: 'URREA',
            category: 'Herramientas',
            image: Urrea,
            isNew: false, 
        },
        {
            name: 'Pablitz',
            category: 'Abrasivos',
            image: heroImg01,
            isNew: false, 
        },
        {
            name: 'iTzGiiKeR',
            category: 'Abrasivos',
            image: heroImg01,
            isNew: true, 
        },
        {
            name: 'Ingco',
            category: 'Herramientas',
            image: Ingco,
            isNew: true, 
        },
    ]

    const filteredBrands = activeFilter === 'All Categories' ? brands : brands.filter((brand) => brand.category === activeFilter);

    return (
        <div className = 'catalog-v2-page'>
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
                            {brand.isNew && <span className = 'new-badge'>Nuevo</span>}

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

export default Catalog_v2;