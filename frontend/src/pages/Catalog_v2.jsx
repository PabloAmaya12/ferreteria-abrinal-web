import { useState } from 'react';
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';

import heroImg01 from '../assets/images/hero.jpg';

import './Catalog_v2.css';

const Catalog_v2 = () => {
    const [activeFilter, setActiveFilter] = useState('All Brands');

    const filters = ['All Brands', 'Bosch', 'DeWalt', 'Makita', 'Stanley', 'Black & Decker'];

    const products = [
        {
            id: 1,
            name: 'Professional Drill Kit',
            price: 89.99,
            originalPrice: 120.0,
            brand: 'Bosch',
            image: heroImg01,
            rating: 4.8,
            isNew: true, 
        },
        {
            id: 2,
            name: 'Cordless Circular Saw',
            price: 159.99,
            brand: 'DeWalt',
            image: heroImg01,
            rating: 4.9,
            isNew: false, 
        },
        {
            id: 3,
            name: 'Impact Driver Set',
            price: 75.99,
            brand: 'Makita',
            image: heroImg01,
            rating: 4.7,
            isNew: false, 
        },
        {
            id: 4,
            name: 'Measuring Tape Pro',
            price: 24.99,
            brand: 'Stanley',
            image: heroImg01,
            rating: 4.6,
            isNew: false, 
        },
        {
            id: 5,
            name: 'Hammer Drill',
            price: 129.99,
            brand: 'Bosch',
            image: heroImg01,
            rating: 4.8,
            isNew: true, 
        },
        {
            id: 6,
            name: 'Angle Grinder',
            price: 89.99,
            brand: 'DeWalt',
            image: heroImg01,
            rating: 4.7,
            isNew: false, 
        },
        {
            id: 7,
            name: 'Jigsaw Professional',
            price: 95.99,
            brand: 'Makita',
            image: heroImg01,
            rating: 4.9,
            isNew: false, 
        },
        {
            id: 8,
            name: 'Tool Set Complete',
            price: 199.99,
            originalPrice: 250.0,
            brand: 'Stanley',
            image: heroImg01,
            rating: 4.8,
            isNew: true, 
        },
    ]

    const filteredProducts = activeFilter === 'All Brands' ? products : products.filter((product) => product.brand === activeFilter);

    return (
        <div className = 'catalog-v2-page'>
            <div className = 'container'>
                <div className = 'catalog-header'>
                    <h1 className = 'catalog-title'>Catálogo de Herramientas</h1>

                    <p className = 'catalog-subtitle'>Descubre las mejores marcas y herramientas profesionales</p>
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

                {/* PRODUCTS GRID */}
                <div className = 'products-grid-v2'>
                    {filteredProducts.map((product) => (
                        <div key = {product.id} className = 'product-car-v2'>
                            {product.isNew && <span className = 'new-badge'>Nuevo</span>}

                            <div className = 'product-image-v2'>
                                <img src = {product.image} alt = {product.name} />

                                <div className = 'product-overlay'>
                                    <button className = 'wishlist-btn'>
                                        <AiOutlineHeart />
                                    </button>
                                </div>
                            </div>

                            <div className = 'product-info-v2'>
                                <div className = 'product-brand'>{product.brand}</div>
                                
                                <h3 className = 'product-name-v2'>{product.name}</h3>

                                <div className = 'prodcut-rating'>
                                    <div className = 'stars'>
                                        {[...Array(5)].map((_, i) => (
                                            <AiOutlineStar
                                                key = {i}
                                                className = {i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
                                            />    
                                        ))}
                                    </div>

                                    <span className = 'rating-text'>({product.rating})</span>
                                </div>

                                <div className = 'product-price-v2'>
                                    <span className = 'current-price'>${product.price}</span>
                                    {product.originalPrice && <span className = 'original-price'>${product.originalPrice}</span>}
                                </div>

                                <button className = 'add-to-cart-btn'>Agregar al Carrito</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Catalog_v2;