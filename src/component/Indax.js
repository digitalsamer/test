import React from 'react';
import { replace } from 'react-router-dom';

const Indax = () => {
    return (
    <>
        <div className="wrapper">

            <div className="main-banner-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="owl-carousel offers-banner owl-theme">
                                <div className="item">
                                    <div className="offer-item">
                                        <div className="offer-item-img">
                                            <div className="gambo-overlay" />
                                            <img src="images/banners/offer-1.jpg" alt />
                                        </div>
                                        <div className="offer-text-dt">
                                            <div className="offer-top-text-banner">
                                                <p>6% Off</p>
                                                <div className="top-text-1">Buy More &amp; Save More</div>
                                                <span>Fresh Vegetables</span>
                                            </div>
                                            <a href="#" className="Offer-shop-btn hover-btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="offer-item">
                                        <div className="offer-item-img">
                                            <div className="gambo-overlay" />
                                            <img src="images/banners/offer-2.jpg" alt />
                                        </div>
                                        <div className="offer-text-dt">
                                            <div className="offer-top-text-banner">
                                                <p>5% Off</p>
                                                <div className="top-text-1">Buy More &amp; Save More</div>
                                                <span>Fresh Fruits</span>
                                            </div>
                                            <a href="#" className="Offer-shop-btn hover-btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="offer-item">
                                        <div className="offer-item-img">
                                            <div className="gambo-overlay" />
                                            <img src="images/banners/offer-3.jpg" alt />
                                        </div>
                                        <div className="offer-text-dt">
                                            <div className="offer-top-text-banner">
                                                <p>3% Off</p>
                                                <div className="top-text-1">Hot Deals on New Items</div>
                                                <span>Daily Essentials Eggs &amp; Dairy</span>
                                            </div>
                                            <a href="#" className="Offer-shop-btn hover-btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="offer-item">
                                        <div className="offer-item-img">
                                            <div className="gambo-overlay" />
                                            <img src="images/banners/offer-4.jpg" alt />
                                        </div>
                                        <div className="offer-text-dt">
                                            <div className="offer-top-text-banner">
                                                <p>2% Off</p>
                                                <div className="top-text-1">Buy More &amp; Save More</div>
                                                <span>Beverages</span>
                                            </div>
                                            <a href="#" className="Offer-shop-btn hover-btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="offer-item">
                                        <div className="offer-item-img">
                                            <div className="gambo-overlay" />
                                            <img src="images/banners/offer-5.jpg" alt />
                                        </div>
                                        <div className="offer-text-dt">
                                            <div className="offer-top-text-banner">
                                                <p>3% Off</p>
                                                <div className="top-text-1">Buy More &amp; Save More</div>
                                                <span>Nuts &amp; Snacks</span>
                                            </div>
                                            <a href="#" className="Offer-shop-btn hover-btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section145">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-title-tt">
                                <div className="main-title-left">
                                    <span>Shop By</span>
                                    <h2>Categories</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="owl-carousel cate-slider owl-theme">
                                <div className="item">
                                    <a href="shop_grid.html" className="category-item">
                                        <div className="cate-img">
                                            <img src="images/category/icon-1.svg" alt />
                                        </div>
                                        <h4>Vegetables &amp; Fruits</h4>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="shop_grid.html" className="category-item">
                                        <div className="cate-img">
                                            <img src="images/category/icon-2.svg" alt />
                                        </div>
                                        <h4> Grocery &amp; Staples </h4>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="shop_grid.html" className="category-item">
                                        <div className="cate-img">
                                            <img src="images/category/icon-3.svg" alt />
                                        </div>
                                        <h4> Dairy &amp; Eggs </h4>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="shop_grid.html" className="category-item">
                                        <div className="cate-img">
                                            <img src="images/category/icon-4.svg" alt />
                                        </div>
                                        <h4> Beverages </h4>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="shop_grid.html" className="category-item">
                                        <div className="cate-img">
                                            <img src="images/category/icon-5.svg" alt />
                                        </div>
                                        <h4> Snacks </h4>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="shop_grid.html" className="category-item">
                                        <div className="cate-img">
                                            <img src="images/category/icon-6.svg" alt />
                                        </div>
                                        <h4> Home Care </h4>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="shop_grid.html" className="category-item">
                                        <div className="cate-img">
                                            <img src="images/category/icon-7.svg" alt />
                                        </div>
                                        <h4> Noodles &amp; Sauces </h4>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="shop_grid.html" className="category-item">
                                        <div className="cate-img">
                                            <img src="images/category/icon-8.svg" alt />
                                        </div>
                                        <h4> Personal Care </h4>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="shop_grid.html" className="category-item">
                                        <div className="cate-img">
                                            <img src="images/category/icon-9.svg" alt />
                                        </div>
                                        <h4> Pet Care </h4>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="shop_grid.html" className="category-item">
                                        <div className="cate-img">
                                            <img src="images/category/icon-10.svg" alt />
                                        </div>
                                        <h4> Meat &amp; Seafood </h4>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="shop_grid.html" className="category-item">
                                        <div className="cate-img">
                                            <img src="./images/category/icon-11.svg" alt />
                                        </div>
                                        <h4> Electronics </h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section145">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-title-tt">
                                <div className="main-title-left">
                                    <span>For You</span>
                                    <h2>Top Featured Products</h2>
                                </div>
                                <a href="shop_grid.html" className="see-more-btn">See All</a>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="owl-carousel featured-slider owl-theme">
                                <div className="item">
                                    <div className="product-item">
                                        <a href="#" className="product-img">
                                            <img src="images/product/img-1.jpg" alt />
                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">6% off</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                            <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 12
                                                <span><i className="fa-solid fa-indian-rupee-sign" /> 15</span></div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-item">
                                        <a href="#" className="product-img">
                                            <img src="images/product/img-2.jpg" alt />
                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">2% off</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                            <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 10
                                                <span><i className="fa-solid fa-indian-rupee-sign" /> 13</span></div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-item">
                                        <a href="#" className="product-img">
                                            <img src="images/product/img-3.jpg" alt />
                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">5% off</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                            <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 5
                                                <span><i className="fa-solid fa-indian-rupee-sign" /> 8</span></div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-item">
                                        <a href="#" className="product-img">
                                            <img src="images/product/img-4.jpg" alt />
                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">3% off</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                            <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 15
                                                <span><i className="fa-solid fa-indian-rupee-sign" /> 20</span></div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-item">
                                        <a href="#" className="product-img">
                                            <img src="images/product/img-5.jpg" alt />
                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">2% off</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                            <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 9
                                                <span><i className="fa-solid fa-indian-rupee-sign" /> 10</span></div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-item">
                                        <a href="#" className="product-img">
                                            <img src="images/product/img-6.jpg" alt />
                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">2% off</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                            <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 7
                                                <span><i className="fa-solid fa-indian-rupee-sign" /> 8</span></div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-item">
                                        <a href="#" className="product-img">
                                            <img src="images/product/img-7.jpg" alt />
                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">1% off</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                            <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 6.95
                                                <span><i className="fa-solid fa-indian-rupee-sign" /> 7</span></div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-item">
                                        <a href="#" className="product-img">
                                            <img src="images/product/img-8.jpg" alt />
                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">3% off</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                            <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 8
                                                <span><i className="fa-solid fa-indian-rupee-sign" /> 10</span></div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section145">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-title-tt">
                                <div className="main-title-left">
                                    <span>Offers</span>
                                    <h2>Best Values</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <a href="#" className="best-offer-item">
                                <img src="images/best-offers/offer-1.jpg" alt />
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <a href="#" className="best-offer-item">
                                <img src="images/best-offers/offer-2.jpg" alt />
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <a href="#" className="best-offer-item offr-none">
                                <img src="images/best-offers/offer-3.jpg" alt />
                            </a>
                        </div>
                        <div className="col-md-12">
                            <a href="#" className="code-offer-item">
                                <img src="images/best-offers/offer-4.jpg" alt />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section145">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-title-tt">
                                <div className="main-title-left">
                                    <span>For You</span>
                                    <h2>Fresh Vegetables &amp; Fruits</h2>
                                </div>
                                <a href="#" className="see-more-btn">See All</a>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="owl-carousel featured-slider owl-theme">
                                <div className="item">
                                    <div className="product-item">
                                        <a href="single_product_view.html" className="product-img">
                                            {/* <img src="./images/product/img-11.jpg" alt='' /> */}
                                            <img src="https://via.placeholder.com/150" alt='Product Image' />

                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">6% off</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                            <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 12
                                                <span><i className="fa-solid fa-indian-rupee-sign" /> 15</span></div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-item">
                                        <a href="single_product_view.html" className="product-img">
                                            <img src="./images/product/img-12.jpg" alt="Product Image" />
                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">2% off</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                            <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 10
                                                <span><i className="fa-solid fa-indian-rupee-sign" /> 13</span></div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-item">
                                        <a href="single_product_view.html" className="product-img">
                                            <img src="./images/product/img-13.jpg" alt="Product Image" />
                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">5% off</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                                <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 5
                                                <span><i className="fa-solid fa-indian-rupee-sign" /> 8</span></div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-item">
                                        <a href="single_product_view.html" className="product-img">
                                            <img src="./images/product/img-1.jpg" alt="Product Image" />
                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">3% off</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                            <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 15
                                                <span><i className="fa-solid fa-indian-rupee-sign" /> 20</span></div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-item">
                                        <a href="single_product_view.html" className="product-img">
                                            <img src="./images/product/img-5.jpg" alt="Product Image" />
                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">2% off</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                            <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 9
                                                <span><i className="fa-solid fa-indian-rupee-sign" /> 10</span></div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-item">
                                        <a href="single_product_view.html" className="product-img">
                                            <img src="./images/product/img-6.jpg" alt="Product Image" />
                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">2% off</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                            <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 7
                                                <span><i className="fa-solid fa-indian-rupee-sign" /> 8</span></div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-item">
                                        <a href="single_product_view.html" className="product-img">
                                            <img src="./images/product/img-14.jpg" alt="Product Image" />
                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">1% off</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                            <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 6.95
                                                <span><i className="fa-solid fa-indian-rupee-sign" /> 7</span></div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-item">
                                        <a href="single_product_view.html" className="product-img">
                                            <img src="./images/product/img-3.jpg" alt="Product Image" />
                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">3% off</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                            <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 8
                                                <span><i className="fa-solid fa-indian-rupee-sign" /> 10</span></div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section145">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-title-tt">
                                <div className="main-title-left">
                                    <span>For You</span>
                                    <h2>Added New Products</h2>
                                </div>
                                <a href="#" className="see-more-btn">See All</a>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="owl-carousel featured-slider owl-theme">
                                <div className="item">
                                    <div className="product-item">
                                        <a href="single_product_view.html" className="product-img">
                                            <img src="images/product/img-10.jpg" alt="Product Image" />
                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">New</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                            <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 12
                                                <span><i className="fa-solid fa-indian-rupee-sign" /> 15</span></div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-item">
                                        <a href="single_product_view.html" className="product-img">
                                            <img src="images/product/img-9.jpg" alt="Product Image" />
                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">New</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                            <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 10
                                            </div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-item">
                                        <a href="single_product_view.html" className="product-img">
                                            <img src="images/product/img-15.jpg" alt="Product Image" />
                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">5% off</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                            <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 5</div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-item">
                                        <a href="single_product_view.html" className="product-img">
                                            <img src="images/product/img-11.jpg" alt="Product Image" />
                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">New</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                            <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 15
                                                <span><i className="fa-solid fa-indian-rupee-sign" /> 16</span></div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-item">
                                        <a href="single_product_view.html" className="product-img">
                                            <img src="images/product/img-14.jpg" alt="Product Image" />
                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">New</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                            <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 9</div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-item">
                                        <a href="single_product_view.html" className="product-img">
                                            <img src="images/product/img-2.jpg" alt="Product Image" />
                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">New</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                            <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 7</div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-item">
                                        <a href="single_product_view.html" className="product-img">
                                            <img src="images/product/img-5.jpg" alt="Product Image" />
                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">New</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                            <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 6.95
                                            </div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-item">
                                        <a href="single_product_view.html" className="product-img">
                                            <img src="images/product/img-6.jpg" alt="Product Image" />
                                            <div className="product-absolute-options">
                                                <span className="offer-badge-1">New</span>
                                                <span className="like-icon" title="wishlist" />
                                            </div>
                                        </a>
                                        <div className="product-text-dt">
                                            <p>Available<span>(In Stock)</span></p>
                                            <h4>Product Title Here</h4>
                                            <div className="product-price"><i className="fa-solid fa-indian-rupee-sign" /> 8
                                                <span>8.75</span></div>
                                            <div className="qty-cart">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" />
                                                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" />
                                                </div>
                                                <span className="cart-icon"><i className="uil uil-shopping-cart-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
    );
}

export default Indax;
