import React from 'react';

const Checkout = () => {
    return (
        <>
            <div>

                <div className="wrapper">
                    <div className="gambo-Breadcrumb">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="all-product-grid">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-7">
                                    <div id="checkout_wizard" className="checkout accordion left-chck145">
                                        <div className="checkout-step">
                                            <div className="checkout-card" id="headingOne">
                                                <span className="checkout-step-number">1</span>
                                                <h4 className="checkout-step-title">
                                                    <button className="wizard-btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Phone Number Verification</button>
                                                </h4>
                                            </div>
                                            <div id="collapseOne" className="collapse in show" data-parent="#checkout_wizard">
                                                <div className="checkout-step-body">
                                                    <p>We need your phone number so we can inform you about any delay or problem.</p>
                                                    <p className="phn145">4 digits code send your phone <span>+918437176189</span><a className="edit-no-btn hover-btn" data-toggle="collapse" href="#edit-number">Edit</a></p>
                                                    <div className="collapse" id="edit-number">
                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <div className="checkout-login">
                                                                    <form>
                                                                        <div className="login-phone">
                                                                            <input type="text" className="form-control" placeholder="Phone Number" />
                                                                        </div>
                                                                        <a className="chck-btn hover-btn" role="button" data-toggle="collapse" href="#otp-verifaction">Send Code</a>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="otp-verifaction">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="form-group mb-0">
                                                                    <label className="control-label">Enter Code</label>
                                                                    <ul className="code-alrt-inputs">
                                                                        <li>
                                                                            <input id="code[1]" name="number" type="text" placeholder className="form-control input-md" required />
                                                                        </li>
                                                                        <li>
                                                                            <input id="code[2]" name="number" type="text" placeholder className="form-control input-md" required />
                                                                        </li>
                                                                        <li>
                                                                            <input id="code[3]" name="number" type="text" placeholder className="form-control input-md" required />
                                                                        </li>
                                                                        <li>
                                                                            <input id="code[4]" name="number" type="text" placeholder className="form-control input-md" required />
                                                                        </li>
                                                                        <li>
                                                                            <a className="collapsed chck-btn hover-btn" role="button" data-toggle="collapse" data-parent="#checkout_wizard" href="#collapseTwo">Next</a>
                                                                        </li>
                                                                    </ul>
                                                                    <a href="#" className="resend-link">Resend Code</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="checkout-step">
                                            <div className="checkout-card" id="headingTwo">
                                                <span className="checkout-step-number">2</span>
                                                <h4 className="checkout-step-title">
                                                    <button className="wizard-btn collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Delivery Address</button>
                                                </h4>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#checkout_wizard">
                                                <div className="checkout-step-body">
                                                    <div className="checout-address-step">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <form className>
                                                                    <div className="form-group">
                                                                        <div className="product-radio">
                                                                            <ul className="product-now">
                                                                                <li>
                                                                                    <input type="radio" id="ad1" name="address1" defaultChecked />
                                                                                    <label htmlFor="ad1">Home</label>
                                                                                </li>
                                                                                <li>
                                                                                    <input type="radio" id="ad2" name="address1" />
                                                                                    <label htmlFor="ad2">Office</label>
                                                                                </li>
                                                                                <li>
                                                                                    <input type="radio" id="ad3" name="address1" />
                                                                                    <label htmlFor="ad3">Other</label>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="address-fieldset">
                                                                        <div className="row">
                                                                            <div className="col-lg-6 col-md-12">
                                                                                <div className="form-group">
                                                                                    <label className="control-label">Name*</label>
                                                                                    <input id="name" name="name" type="text" placeholder="Name" className="form-control input-md" required />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6 col-md-12">
                                                                                <div className="form-group">
                                                                                    <label className="control-label">Email Address*</label>
                                                                                    <input id="email1" name="email1" type="text" placeholder="Email Address" className="form-control input-md" required />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-12 col-md-12">
                                                                                <div className="form-group">
                                                                                    <label className="control-label">Flat / House / Office No.*</label>
                                                                                    <input id="flat" name="flat" type="text" placeholder="Address" className="form-control input-md" required />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-12 col-md-12">
                                                                                <div className="form-group">
                                                                                    <label className="control-label">Street / Society / Office Name*</label>
                                                                                    <input id="street" name="street" type="text" placeholder="Street Address" className="form-control input-md" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6 col-md-12">
                                                                                <div className="form-group">
                                                                                    <label className="control-label">Pincode*</label>
                                                                                    <input id="pincode" name="pincode" type="text" placeholder="Pincode" className="form-control input-md" required />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6 col-md-12">
                                                                                <div className="form-group">
                                                                                    <label className="control-label">Locality*</label>
                                                                                    <input id="Locality" name="locality" type="text" placeholder="Enter City" className="form-control input-md" required />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-12 col-md-12">
                                                                                <div className="form-group">
                                                                                    <div className="address-btns">
                                                                                        <button className="save-btn14 hover-btn">Save</button>
                                                                                        <a className="collapsed ml-auto next-btn16 hover-btn" role="button" data-toggle="collapse" data-parent="#checkout_wizard" href="#collapseThree"> Next </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="checkout-step">
                                            <div className="checkout-card" id="headingThree">
                                                <span className="checkout-step-number">3</span>
                                                <h4 className="checkout-step-title">
                                                    <button className="wizard-btn collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Delivery Time &amp; Date </button>
                                                </h4>
                                            </div>
                                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#checkout_wizard">
                                                <div className="checkout-step-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label className="control-label">Select Date and Time*</label>
                                                                <div className="date-slider-group">
                                                                    <div className="owl-carousel date-slider owl-theme owl-loaded owl-drag">
                                                                        <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s' }}><div className="owl-item"><div className="item">
                                                                            <div className="date-now">
                                                                                <input type="radio" id="dd1" name="address1" defaultChecked />
                                                                                <label htmlFor="dd1">Today</label>
                                                                            </div>
                                                                        </div></div><div className="owl-item"><div className="item">
                                                                            <div className="date-now">
                                                                                <input type="radio" id="dd2" name="address1" />
                                                                                <label htmlFor="dd2">Tomorrow</label>
                                                                            </div>
                                                                        </div></div><div className="owl-item"><div className="item">
                                                                            <div className="date-now">
                                                                                <input type="radio" id="dd3" name="address1" />
                                                                                <label htmlFor="dd3">10 May 2020</label>
                                                                            </div>
                                                                        </div></div><div className="owl-item"><div className="item">
                                                                            <div className="date-now">
                                                                                <input type="radio" id="dd4" name="address1" />
                                                                                <label htmlFor="dd4">11 May 2020</label>
                                                                            </div>
                                                                        </div></div><div className="owl-item"><div className="item">
                                                                            <div className="date-now">
                                                                                <input type="radio" id="dd5" name="address1" />
                                                                                <label htmlFor="dd5">12 May 2020</label>
                                                                            </div>
                                                                        </div></div><div className="owl-item"><div className="item">
                                                                            <div className="date-now">
                                                                                <input type="radio" id="dd6" name="address1" />
                                                                                <label htmlFor="dd6">13 May 2020</label>
                                                                            </div>
                                                                        </div></div><div className="owl-item"><div className="item">
                                                                            <div className="date-now">
                                                                                <input type="radio" id="dd7" name="address1" />
                                                                                <label htmlFor="dd7">14 May 2020</label>
                                                                            </div>
                                                                        </div></div><div className="owl-item"><div className="item">
                                                                            <div className="date-now">
                                                                                <input type="radio" id="dd8" name="address1" />
                                                                                <label htmlFor="dd8">15 May 2020</label>
                                                                            </div>
                                                                        </div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">←</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">→</span></button></div><div className="owl-dots disabled" /></div>
                                                                </div>
                                                                <div className="time-radio">
                                                                    <div className="ui form">
                                                                        <div className="grouped fields">
                                                                            <div className="field">
                                                                                <div className="ui radio checkbox chck-rdio">
                                                                                    <input type="radio" name="fruit" defaultChecked tabIndex={0} className="hidden" />
                                                                                    <label>8.00AM - 10.00AM</label>
                                                                                </div>
                                                                            </div>
                                                                            <div className="field">
                                                                                <div className="ui radio checkbox chck-rdio">
                                                                                    <input type="radio" name="fruit" tabIndex={0} className="hidden" />
                                                                                    <label>10.00AM - 12.00PM</label>
                                                                                </div>
                                                                            </div>
                                                                            <div className="field">
                                                                                <div className="ui radio checkbox chck-rdio">
                                                                                    <input type="radio" name="fruit" tabIndex={0} className="hidden" />
                                                                                    <label>12.00PM - 2.00PM</label>
                                                                                </div>
                                                                            </div>
                                                                            <div className="field">
                                                                                <div className="ui radio checkbox chck-rdio">
                                                                                    <input type="radio" name="fruit" tabIndex={0} className="hidden" />
                                                                                    <label>2.00PM - 4.00PM</label>
                                                                                </div>
                                                                            </div>
                                                                            <div className="field">
                                                                                <div className="ui radio checkbox chck-rdio">
                                                                                    <input type="radio" name="fruit" tabIndex={0} className="hidden" />
                                                                                    <label>4.00PM - 6.00PM</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a className="collapsed next-btn16 hover-btn" role="button" data-toggle="collapse" href="#collapseFour"> Proccess to payment </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="checkout-step">
                                            <div className="checkout-card" id="headingFour">
                                                <span className="checkout-step-number">4</span>
                                                <h4 className="checkout-step-title">
                                                    <button className="wizard-btn collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Payment</button>
                                                </h4>
                                            </div>
                                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#checkout_wizard">
                                                <div className="checkout-step-body">
                                                    <div className="payment_method-checkout">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="rpt100">
                                                                    <ul className="radio--group-inline-container_1">
                                                                        <li>
                                                                            <div className="radio-item_1">
                                                                                <input id="cashondelivery1" defaultValue="cashondelivery" name="paymentmethod" type="radio" data-minimum={50.0} />
                                                                                <label htmlFor="cashondelivery1" className="radio-label_1">Cash on Delivery</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="radio-item_1">
                                                                                <input id="card1" defaultValue="card" name="paymentmethod" type="radio" data-minimum={50.0} />
                                                                                <label htmlFor="card1" className="radio-label_1">Credit / Debit Card</label>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="form-group return-departure-dts" data-method="cashondelivery">
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            <div className="pymnt_title">
                                                                                <h4>Cash on Delivery</h4>
                                                                                <p>Cash on Delivery will not be available if your order value exceeds <i className="fa-solid fa-indian-rupee-sign" /> 10.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group return-departure-dts" data-method="card">
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            <div className="pymnt_title mb-4">
                                                                                <h4>Credit / Debit Card</h4>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <div className="form-group mt-1">
                                                                                <label className="control-label">Holder Name*</label>
                                                                                <div className="ui search focus">
                                                                                    <div className="ui left icon input swdh11 swdh19">
                                                                                        <input className="prompt srch_explore" type="text" name="holdername" defaultValue id="holder[name]" required maxLength={64} placeholder="Holder Name" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <div className="form-group mt-1">
                                                                                <label className="control-label">Card Number*</label>
                                                                                <div className="ui search focus">
                                                                                    <div className="ui left icon input swdh11 swdh19">
                                                                                        <input className="prompt srch_explore" type="text" name="cardnumber" defaultValue id="card[number]" required maxLength={64} placeholder="Card Number" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4">
                                                                            <div className="form-group mt-1">
                                                                                <label className="control-label">Expiration Month*</label>
                                                                                <div className="ui fluid search dropdown form-dropdown selection"><select name="card[expire-month]">
                                                                                    <option value>Month</option>
                                                                                    <option value={1}>January</option>
                                                                                    <option value={2}>February</option>
                                                                                    <option value={3}>March</option>
                                                                                    <option value={4}>April</option>
                                                                                    <option value={5}>May</option>
                                                                                    <option value={6}>June</option>
                                                                                    <option value={7}>July</option>
                                                                                    <option value={8}>August</option>
                                                                                    <option value={9}>September</option>
                                                                                    <option value={10}>October</option>
                                                                                    <option value={11}>November</option>
                                                                                    <option value={12}>December</option>
                                                                                </select><i className="dropdown icon" /><input className="search" autoComplete="off" tabIndex={0} /><div className="default text">Month</div><div className="menu" tabIndex={-1}><div className="item" data-value={1}>January</div><div className="item" data-value={2}>February</div><div className="item" data-value={3}>March</div><div className="item" data-value={4}>April</div><div className="item" data-value={5}>May</div><div className="item" data-value={6}>June</div><div className="item" data-value={7}>July</div><div className="item" data-value={8}>August</div><div className="item" data-value={9}>September</div><div className="item" data-value={10}>October</div><div className="item" data-value={11}>November</div><div className="item" data-value={12}>December</div></div></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4">
                                                                            <div className="form-group mt-1">
                                                                                <label className="control-label">Expiration Year*</label>
                                                                                <div className="ui search focus">
                                                                                    <div className="ui left icon input swdh11 swdh19">
                                                                                        <input className="prompt srch_explore" type="text" name="card[expire-year]" maxLength={4} placeholder="Year" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4">
                                                                            <div className="form-group mt-1">
                                                                                <label className="control-label">CVV*</label>
                                                                                <div className="ui search focus">
                                                                                    <div className="ui left icon input swdh11 swdh19">
                                                                                        <input className="prompt srch_explore" name="card[cvc]" maxLength={3} placeholder="CVV" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <a href="#" className="next-btn16 hover-btn">Place Order</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-5">
                                    <div className="pdpt-bg mt-0">
                                        <div className="pdpt-title">
                                            <h4>Order Summary</h4>
                                        </div>
                                        <div className="right-cart-dt-body">
                                            <div className="cart-item border_radius">
                                                <div className="cart-product-img">
                                                    <img src="images/product/img-11.jpg" alt />
                                                    <div className="offer-badge">4% OFF</div>
                                                </div>
                                                <div className="cart-text">
                                                    <h4>Product Title Here</h4>
                                                    <div className="cart-item-price"><i className="fa-solid fa-indian-rupee-sign" /> 15 <span><i className="fa-solid fa-indian-rupee-sign" /> 18</span></div>
                                                    <button type="button" className="cart-close-btn"><i className="uil uil-multiply" /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="total-checkout-group">
                                            <div className="cart-total-dil">
                                                <h4>Gambo Super Market</h4>
                                                <span><i className="fa-solid fa-indian-rupee-sign" /> 15</span>
                                            </div>
                                            <div className="cart-total-dil pt-3">
                                                <h4>Delivery Charges</h4>
                                                <span><i className="fa-solid fa-indian-rupee-sign" /> 1</span>
                                            </div>
                                        </div>
                                        <div className="cart-total-dil saving-total ">
                                            <h4>Total Saving</h4>
                                            <span><i className="fa-solid fa-indian-rupee-sign" /> 3</span>
                                        </div>
                                        <div className="main-total-cart">
                                            <h2>Total</h2>
                                            <span><i className="fa-solid fa-indian-rupee-sign" /> 16</span>
                                        </div>
                                        <div className="payment-secure">
                                            <i className="uil uil-padlock" />Secure checkout
                                        </div>
                                    </div>
                                    <a href="#" className="promo-link45">Have a promocode?</a>
                                    <div className="checkout-safety-alerts">
                                        <p><i className="uil uil-sync" />100% Replacement Guarantee</p>
                                        <p><i className="uil uil-check-square" />100% Genuine Products</p>
                                        <p><i className="uil uil-shield-check" />Secure Payments</p>
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

export default Checkout;
