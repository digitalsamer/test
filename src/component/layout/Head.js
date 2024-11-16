
import React from 'react';

const Head = () => {
    return (
        <>
            <div>
                <div id="category_model" className="header-cate-model main-gambo-model modal fade" tabIndex={-1} role="dialog" aria-modal="false">
                    <div className="modal-dialog category-area" role="document">
                        <div className="category-area-inner">
                            <div className="modal-header">
                                <button type="button" className="close btn-close" data-dismiss="modal" aria-label="Close">
                                    <i className="uil uil-multiply" />
                                </button>
                            </div>
                            <div className="category-model-content modal-content">
                                <div className="cate-header">
                                    <h4>Select Category</h4>
                                </div>
                                <ul className="category-by-cat">
                                    <li>
                                        <a href="shop_grid.html" className="single-cat-item">
                                            <div className="icon">
                                                <img src="images/category/icon-1.svg" alt />
                                            </div>
                                            <div className="text"> Fruits and Vegetables </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop_grid.html" className="single-cat-item">
                                            <div className="icon">
                                                <img src="images/category/icon-2.svg" alt />
                                            </div>
                                            <div className="text"> Grocery &amp; Staples </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop_grid.html" className="single-cat-item">
                                            <div className="icon">
                                                <img src="images/category/icon-3.svg" alt />
                                            </div>
                                            <div className="text"> Dairy &amp; Eggs </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop_grid.html" className="single-cat-item">
                                            <div className="icon">
                                                <img src="images/category/icon-4.svg" alt />
                                            </div>
                                            <div className="text"> Beverages </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop_grid.html" className="single-cat-item">
                                            <div className="icon">
                                                <img src="images/category/icon-5.svg" alt />
                                            </div>
                                            <div className="text"> Snacks </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop_grid.html" className="single-cat-item">
                                            <div className="icon">
                                                <img src="images/category/icon-6.svg" alt />
                                            </div>
                                            <div className="text"> Home Care </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop_grid.html" className="single-cat-item">
                                            <div className="icon">
                                                <img src="images/category/icon-7.svg" alt />
                                            </div>
                                            <div className="text"> Noodles &amp; Sauces </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop_grid.html" className="single-cat-item">
                                            <div className="icon">
                                                <img src="images/category/icon-8.svg" alt />
                                            </div>
                                            <div className="text"> Personal Care </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop_grid.html" className="single-cat-item">
                                            <div className="icon">
                                                <img src="images/category/icon-9.svg" alt />
                                            </div>
                                            <div className="text"> Pet Care </div>
                                        </a>
                                    </li>
                                </ul>
                                <a href="shop_grid.html" className="morecate-btn"><i className="uil uil-apps" />More Categories</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="search_model" className="header-cate-model main-gambo-model modal fade" tabIndex={-1} role="dialog" aria-modal="false">
                    <div className="modal-dialog search-ground-area" role="document">
                        <div className="category-area-inner">
                            <div className="modal-header">
                                <button type="button" className="close btn-close" data-dismiss="modal" aria-label="Close">
                                    <i className="uil uil-multiply" />
                                </button>
                            </div>
                            <div className="category-model-content modal-content">
                                <div className="search-header">
                                    <form action="#">
                                        <input type="search" placeholder="Search for products..." />
                                        <button type="submit"><i className="uil uil-search" /></button>
                                    </form>
                                </div>
                                <div className="search-by-cat">
                                    <a href="#" className="single-cat">
                                        <div className="icon">
                                            <img src="images/category/icon-1.svg" alt />
                                        </div>
                                        <div className="text">
                                            Fruits and Vegetables
                                        </div>
                                    </a>
                                    <a href="#" className="single-cat">
                                        <div className="icon">
                                            <img src="images/category/icon-2.svg" alt />
                                        </div>
                                        <div className="text"> Grocery &amp; Staples </div>
                                    </a>
                                    <a href="#" className="single-cat">
                                        <div className="icon">
                                            <img src="images/category/icon-3.svg" alt />
                                        </div>
                                        <div className="text"> Dairy &amp; Eggs </div>
                                    </a>
                                    <a href="#" className="single-cat">
                                        <div className="icon">
                                            <img src="images/category/icon-4.svg" alt />
                                        </div>
                                        <div className="text"> Beverages </div>
                                    </a>
                                    <a href="#" className="single-cat">
                                        <div className="icon">
                                            <img src="images/category/icon-5.svg" alt />
                                        </div>
                                        <div className="text"> Snacks </div>
                                    </a>
                                    <a href="#" className="single-cat">
                                        <div className="icon">
                                            <img src="images/category/icon-6.svg" alt />
                                        </div>
                                        <div className="text"> Home Care </div>
                                    </a>
                                    <a href="#" className="single-cat">
                                        <div className="icon">
                                            <img src="images/category/icon-7.svg" alt />
                                        </div>
                                        <div className="text"> Noodles &amp; Sauces </div>
                                    </a>
                                    <a href="#" className="single-cat">
                                        <div className="icon">
                                            <img src="images/category/icon-8.svg" alt />
                                        </div>
                                        <div className="text"> Personal Care </div>
                                    </a>
                                    <a href="#" className="single-cat">
                                        <div className="icon">
                                            <img src="images/category/icon-9.svg" alt />
                                        </div>
                                        <div className="text"> Pet Care </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bs-canvas bs-canvas-left position-fixed bg-cart h-100">
                    <div className="bs-canvas-header side-cart-header p-3 ">
                        <div className="d-inline-block  main-cart-title">My Cart <span>(2 Items)</span></div>
                        <button type="button" className="bs-canvas-close close" aria-label="Close"><i className="uil uil-multiply" /></button>
                    </div>
                    <div className="bs-canvas-body">
                        <div className="cart-top-total">
                            <div className="cart-total-dil">
                                <h4>Gambo Super Market</h4>
                                <span><i className="fa-solid fa-indian-rupee-sign" /> 34</span>
                            </div>
                            <div className="cart-total-dil pt-2">
                                <h4>Delivery Charges</h4>
                                <span><i className="fa-solid fa-indian-rupee-sign" /> 1</span>
                            </div>
                        </div>
                        <div className="side-cart-items">
                            <div className="cart-item">
                                <div className="cart-product-img">
                                    <img src="images/product/img-1.jpg" alt />
                                    <div className="offer-badge">6% OFF</div>
                                </div>
                                <div className="cart-text">
                                    <h4>Product Title Here</h4>
                                    <div className="cart-radio">
                                        <ul className="kggrm-now">
                                            <li>
                                                <input type="radio" id="a1" name="cart1" />
                                                <label htmlFor="a1">0.50</label>
                                            </li>
                                            <li>
                                                <input type="radio" id="a2" name="cart1" />
                                                <label htmlFor="a2">1kg</label>
                                            </li>
                                            <li>
                                                <input type="radio" id="a3" name="cart1" />
                                                <label htmlFor="a3">2kg</label>
                                            </li>
                                            <li>
                                                <input type="radio" id="a4" name="cart1" />
                                                <label htmlFor="a4">3kg</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="qty-group">
                                        <div className="quantity buttons_added">
                                            <input type="button" defaultValue="-" className="minus minus-btn" />
                                            <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                            <input type="button" defaultValue="+" className="plus plus-btn" />
                                        </div>
                                        <div className="cart-item-price"><i className="fa-solid fa-indian-rupee-sign" /> 10 <span><i className="fa-solid fa-indian-rupee-sign" /> 15</span></div>
                                    </div>
                                    <button type="button" className="cart-close-btn"><i className="uil uil-multiply" /></button>
                                </div>
                            </div>
                            <div className="cart-item">
                                <div className="cart-product-img">
                                    <img src="images/product/img-2.jpg" alt />
                                    <div className="offer-badge">6% OFF</div>
                                </div>
                                <div className="cart-text">
                                    <h4>Product Title Here</h4>
                                    <div className="cart-radio">
                                        <ul className="kggrm-now">
                                            <li>
                                                <input type="radio" id="a5" name="cart2" />
                                                <label htmlFor="a5">0.50</label>
                                            </li>
                                            <li>
                                                <input type="radio" id="a6" name="cart2" />
                                                <label htmlFor="a6">1kg</label>
                                            </li>
                                            <li>
                                                <input type="radio" id="a7" name="cart2" />
                                                <label htmlFor="a7">2kg</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="qty-group">
                                        <div className="quantity buttons_added">
                                            <input type="button" defaultValue="-" className="minus minus-btn" />
                                            <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                            <input type="button" defaultValue="+" className="plus plus-btn" />
                                        </div>
                                        <div className="cart-item-price"><i className="fa-solid fa-indian-rupee-sign" /> 24 <span><i className="fa-solid fa-indian-rupee-sign" /> 30</span></div>
                                    </div>
                                    <button type="button" className="cart-close-btn"><i className="uil uil-multiply" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bs-canvas-footer">
                        <div className="cart-total-dil saving-total ">
                            <h4>Total Saving</h4>
                            <span><i className="fa-solid fa-indian-rupee-sign" /> 11</span>
                        </div>
                        <div className="main-total-cart">
                            <h2>Total</h2>
                            <span><i className="fa-solid fa-indian-rupee-sign" /> 35</span>
                        </div>
                        <div className="checkout-cart">
                            <a href="#" className="promo-code">Have a promocode?</a>
                            <a href="#" className="cart-checkout-btn hover-btn">Proceed to Checkout</a>
                        </div>
                    </div>
                </div>
                <header className="header clearfix">
                    <div className="top-header-group">
                        <div className="top-header">
                            <div className="res_main_logo">
                                <a href="index.html"><img src="images/dark-logo-1.png" alt /></a>
                            </div>
                            <div className="main_logo" id="logo">
                                <a href="index.html"><img src="images/logo.png" alt /></a>
                                <a href="index.html"><img className="logo-inverse" src="images/dark-logo.png" alt /></a>
                            </div>
                            <div className="select_location">
                                <div className="ui inline dropdown loc-title">
                                    <div className="text">
                                        <i className="uil uil-location-point" />
                                        Gurugram
                                    </div>
                                    <i className="uil uil-angle-down icon__14" />
                                    <div className="menu dropdown_loc">
                                        <div className="item channel_item">
                                            <i className="uil uil-location-point" />
                                            Gurugram
                                        </div>
                                        <div className="item channel_item">
                                            <i className="uil uil-location-point" />
                                            New Delhi
                                        </div>
                                        <div className="item channel_item">
                                            <i className="uil uil-location-point" />
                                            Bangaluru
                                        </div>
                                        <div className="item channel_item">
                                            <i className="uil uil-location-point" />
                                            Mumbai
                                        </div>
                                        <div className="item channel_item">
                                            <i className="uil uil-location-point" />
                                            Hyderabad
                                        </div>
                                        <div className="item channel_item">
                                            <i className="uil uil-location-point" />
                                            Kolkata
                                        </div>
                                        <div className="item channel_item">
                                            <i className="uil uil-location-point" />
                                            Ludhiana
                                        </div>
                                        <div className="item channel_item">
                                            <i className="uil uil-location-point" />
                                            Chandigrah
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="search120">
                                <div className="ui search">
                                    <div className="ui left icon input swdh10">
                                        <input className="prompt srch10" type="text" placeholder="Search for products.." />
                                        <i className="uil uil-search-alt icon icon1" />
                                    </div>
                                </div>
                            </div>
                            <div className="header_right">
                                <ul>
                                    <li>
                                        <a href="#" className="offer-link"><i className="uil uil-phone-alt" />1800-000-000</a>
                                    </li>
                                    <li>
                                        <a href="offers.html" className="offer-link"><i className="uil uil-gift" />Offers</a>
                                    </li>
                                    <li>
                                        <a href="dashboard_my_wishlist.html" className="option_links" title="Wishlist"><i className="uil uil-heart icon_wishlist" /><span className="noti_count1">3</span></a>
                                    </li>
                                    <li className="ui dropdown">
                                        <a href="#" className="opts_account">
                                            <img src="images/avatar/img-5.jpg" alt />
                                            <span className="user__name">Sunil Singh</span>
                                            <i className="uil uil-angle-down" />
                                        </a>
                                        <div className="menu dropdown_account">
                                            <a href="dashboard_overview.html" className="item channel_item"><i className="uil uil-apps icon__1" />Dashbaord</a>
                                            <a href="dashboard_my_orders.html" className="item channel_item"><i className="uil uil-box icon__1" />My Orders</a>
                                            <a href="dashboard_my_wishlist.html" className="item channel_item"><i className="uil uil-heart icon__1" />My Wishlist</a>
                                            <a href="dashboard_my_wallet.html" className="item channel_item"><i className="uil uil-usd-circle icon__1" />My Wallet</a>
                                            <a href="dashboard_my_addresses.html" className="item channel_item"><i className="uil uil-location-point icon__1" />My Address</a>
                                            <a href="sign_in.html" className="item channel_item"><i className="uil uil-lock-alt icon__1" />Logout</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="sub-header-group">
                        <div className="sub-header">
                            <div className="ui dropdown">
                                <a href="#" className="category_drop hover-btn" data-toggle="modal" data-target="#category_model" title="Categories"><i className="uil uil-apps" /><span className="cate__icon">Select
                                    Category</span></a>
                            </div>
                            <nav className="navbar navbar-expand-lg navbar-light py-3">
                                <div className="container-fluid">
                                    <button className="navbar-toggler menu_toggle_btn" type="button" data-target="#navbarSupportedContent"><i className="uil uil-bars" /></button>
                                    <div className="collapse navbar-collapse d-flex flex-column flex-lg-row flex-xl-row justify-content-lg-end bg-dark1 p-3 p-lg-0 mt1-5 mt-lg-0 mobileMenu" id="navbarSupportedContent">
                                        <ul className="navbar-nav main_nav align-self-stretch">
                                            <li className="nav-item"><a href="index.html" className="nav-link active" title="Home">Home</a>
                                            </li>
                                            <li className="nav-item"><a href="shop_grid.html" className="nav-link new_item" title="New Products">New Arrival</a></li>

                                            <li className="nav-item"><a href="contact_us.html" className="nav-link" title="Contact">Contact
                                                Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <div className="catey__icon">
                                <a href="#" className="cate__btn" data-toggle="modal" data-target="#category_model" title="Categories"><i className="uil uil-apps" /></a>
                            </div>
                            <div className="header_cart order-1">
                                <a href="#" className="cart__btn hover-btn pull-bs-canvas-left" title="Cart"><i className="uil uil-shopping-cart-alt" /><span>Cart</span><ins>2</ins><i className="uil uil-angle-down" /></a>
                            </div>
                            <div className="search__icon order-1">
                                <a href="#" className="search__btn hover-btn" data-toggle="modal" data-target="#search_model" title="Search"><i className="uil uil-search" /></a>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

        </>
    );
}

export default Head;
