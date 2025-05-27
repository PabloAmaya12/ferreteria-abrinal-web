import './Catalog.css';

import heroImg01 from '../assets/images/hero.jpg';
import heroImg02 from '../assets/images/hero_v2.jpg';

const Catalog = () => {
    const topProducts = [
        {
            id: 1,
            name: 'Cordless Drill',
            description: 'An efficient and ligthweight drill perfect for all your DIY needs.',
            image: heroImg01,
            featured: false,
        },
        {
            id: 2,
            name: 'Precision Screwdriver Set',
            description: 'A comprehensive set for detailed and intricate work',
            image: heroImg01,
            featured: true,
        },
        {
            id: 3,
            name: 'Heavy-Duty Hammer',
            description: 'Built for durability and power, ideal for construction tasks.',
            image: heroImg01,
            featured: false,
        },
        {
            id: 4,
            name: 'Laser Level',
            description: 'Ensure precision with this state-of-the-art leveling tool.',
            image: heroImg01,
            featured: false,
        },
    ]

    const topBrands = [
        {
            id: 1,
            name: 'Black & Decker',
            description: 'Pioners in tool innovation and design.',
            logo: heroImg02,
        },
        {
            id: 2,
            name: 'Bosch',
            description: 'Renowned for quality and performance.',
            logo: heroImg02,
        },
        {
            id: 3,
            name: 'DeWalt',
            description: 'A leader in industrial power tools.',
            logo: heroImg02,
        },
    ]

    return (
        <div className = 'catalog-page'>
            <div className = 'container'>
                <div className = 'catalog-content'>
                    {/* TOP PRODUCTS SECTION */}
                    <div className = 'top-products-section'>
                        <h2 className = 'section-title'>Top Products</h2>

                        <div className = 'products-grid'>
                            {topProducts.map((product) => (
                                <div key = {product.id} className = {'product-card${product.featured ? "featured" : ""}'}>
                                    <div className = 'product-image'>
                                        <img src = {product.image} alt = {product.name} />
                                    </div>

                                    <div className = 'product-info'>
                                        <h3 className = 'product-name'>{product.name}</h3>

                                        <p className = 'product-description'>{product.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TOP BRANDS SECTION */}
                    <div className = 'top-brands-section'>
                        <h2 className = 'section-title'>Top Brands</h2>

                        <div className = 'brands-list'>
                            ´{topBrands.map((brand) => (
                                <div key = {brand.id} className = 'brand-item'>
                                    <div className = 'brand-logo'>
                                        <img src = {brand.logo} alt = {brand.name} />
                                    </div>

                                    <div className = 'brand-info'>
                                        <h3 className = 'brand-name'>{brand.name}</h3>

                                        <p className = 'brand-description'>{brand.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Catalog;