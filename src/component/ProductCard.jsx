import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Ensure you have this CSS file

const ProductCard = () => {
    return (
        <div className="container mt-3 mb-3">
            <h2 className="text-center mb-4">Our Products</h2>
            <div className="row">
                {/* Product Card 1 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/cj6.jpg`} className="card-img-top" alt="Product 1" />
                        <div className="card-body">
                            <h5 className="card-title">Lustrous Chains</h5>
                            <p className="card-text">Weight: 10g</p>
                            <div className="btn-container">
                                <button className="btn-add-to-favorites">Add to Favorites</button>
                                <button className="btn-buy-now">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product Card 2 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/cj8.jpg`} className="card-img-top" alt="Product 2" />
                        <div className="card-body">
                            <h5 className="card-title">Classic Chokers</h5>
                            <p className="card-text">Weight: 47g</p>
                            <div className="btn-container">
                                <button className="btn-add-to-favorites">Add to Favorites</button>
                                <button className="btn-buy-now">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product Card 3 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/p1.jpg`} className="card-img-top" alt="Product 3" />
                        <div className="card-body">
                            <h5 className="card-title">Opulent Necklaces</h5>
                            <p className="card-text">Weight: 32g</p>
                            <div className="btn-container">
                                <button className="btn-add-to-favorites">Add to Favorites</button>
                                <button className="btn-buy-now">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product Card 4 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/cj1.jpg`} className="card-img-top" alt="Product 4" />
                        <div className="card-body">
                            <h5 className="card-title">Refined Cuffs</h5>
                            <p className="card-text">Weight: 24g</p>
                            <div className="btn-container">
                                <button className="btn-add-to-favorites">Add to Favorites</button>
                                <button className="btn-buy-now">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product Card 5 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/p8.jpg`} className="card-img-top" alt="Product 5" />
                        <div className="card-body">
                            <h5 className="card-title">Vintage Elegance</h5>
                            <p className="card-text">Weight: 16g</p>
                            <div className="btn-container">
                                <button className="btn-add-to-favorites">Add to Favorites</button>
                                <button className="btn-buy-now">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product Card 6 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/h5.jpg`} className="card-img-top" alt="Product 6" />
                        <div className="card-body">
                            <h5 className="card-title">Dazzling Bangles</h5>
                            <p className="card-text">Weight: 48g</p>
                            <div className="btn-container">
                                <button className="btn-add-to-favorites">Add to Favorites</button>
                                <button className="btn-buy-now">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product Card 7 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/p9.jpg`} className="card-img-top" alt="Product 7" />
                        <div className="card-body">
                            <h5 className="card-title">Chic Huggies</h5>
                            <p className="card-text">Weight: 15g</p>
                            <div className="btn-container">
                                <button className="btn-add-to-favorites">Add to Favorites</button>
                                <button className="btn-buy-now">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product Card 8 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/p4.jpg`} className="card-img-top" alt="Product 8" />
                        <div className="card-body">
                            <h5 className="card-title">Radiant Hoops</h5>
                            <p className="card-text">Weight: 16g</p>
                            <div className="btn-container">
                                <button className="btn-add-to-favorites">Add to Favorites</button>
                                <button className="btn-buy-now">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product Card 9 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/p6.jpg`} className="card-img-top" alt="Product 9" />
                        <div className="card-body">
                            <h5 className="card-title">Classic Chokers</h5>
                            <p className="card-text">Weight: 26g</p>
                            <div className="btn-container">
                                <button className="btn-add-to-favorites">Add to Favorites</button>
                                <button className="btn-buy-now">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
