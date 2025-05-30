import { useState } from 'react';
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';

import './Catalog_v3.css';

const Catalog_v3 = () => {
    const [activeFilter, setActiveFilter] = useState('All Brands');

    const filters = ['All Brands', 'Electricidad', 'Plomería', 'Herramientas', 'Seguridad', 'Higiene'];

    const products = [
        {
            id: 1,
            name: 'iGoto',
            brand: 'Electricidad',
            image: 'https://th.bing.com/th/id/R.939cb888a3ccb0b044001add257495db?rik=1trRcQSSEYhsiQ&riu=http%3a%2f%2fwww.logotypes101.com%2flogos%2f875%2f409B0FD2F6AB937C703A1360BBE3DDBC%2flogoigoto.png&ehk=QeAWVTcyi6InQDwcnVqUewvHdiPDHR2ztGLdG7grAUg%3d&risl=&pid=ImgRaw&r=0',
            rating: 4.8,
        },
        {
            id: 2,
            name: 'Rotoplas',
            brand: 'Plomería',
            image: 'https://puntotrader.mx/blog/wp-content/uploads/2021/04/Portada-de-blog-2.jpg',
            rating: 4.9,
        },
        {
            id: 3,
            name: 'Milwaukee',
            brand: 'Herramientas',
            image: 'https://i.pinimg.com/originals/26/27/03/2627035b20a397377410fc9c22694eaa.png',
            rating: 4.7,
        },
        {
            id: 4,
            name: 'Klintek',
            brand: 'Higiene',
            image: 'https://394a6c5045.clvaw-cdnwnd.com/dcd830adc60d471cef2d3fe763e1fea4/200000472-4bed74beda/KLINTEK.jpg?ph=394a6c5045',
            rating: 4.6,
        },
        {
            id: 5,
            name: 'IUSA',
            brand: 'Electricidad',
            image: 'https://th.bing.com/th/id/R.0650d7a4a0dff54ffd720448e00060fa?rik=7Bmvcsi73zxV6w&riu=http%3a%2f%2fprofesionalesengas.com%2fwp-content%2fuploads%2f2018%2f10%2flogo_iusa-2.png&ehk=RLyVvymDA5uBqNVu1aUrBn6gzy9N0Eta8%2fd6kOWTFok%3d&risl=&pid=ImgRaw&r=0',
            rating: 4.8,
        },
        {
            id: 6,
            name: 'Foset',
            brand: 'Plomería',
            image: 'https://images-na.ssl-images-amazon.com/images/G/33/img18/hi_tools/Truper/Brandstore/foset._CB1198675309_.jpg',
            rating: 4.7, 
        },
        {
            id: 7,
            name: 'Makita',
            brand: 'Herramientas',
            image: 'https://http2.mlstatic.com/D_NQ_NP_947794-MLB49376840880_032022-O.jpg',
            rating: 4.9,
        },
        {
            id: 8,
            name: 'DermaCare',
            brand: 'Seguridad',
            image: 'https://th.bing.com/th/id/R.57b340d368a6d3bc2a038bd38d2aca57?rik=PpxZgjU%2fWXjrzw&pid=ImgRaw&r=0',
            rating: 4.8,
        },
    ]

    const filteredProducts = activeFilter === 'All Brands' ? products : products.filter((product) => product.brand === activeFilter);

    return (
        <div className = 'catalog-v2-page'>
            <div className = 'container'>
                <div className = 'catalog-header'>
                    <h1 className = 'catalog-title'>Catálogo de Marcas</h1>

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

                                <div className = 'product-price-v2'>
                                    <span className = 'current-price'>{product.name}</span>
                                </div>

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

                                <button className = 'add-to-cart-btn'>Ver Catálogo</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Catalog_v3;