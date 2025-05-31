import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
            <footer className="footer-wrapper bg-title footer-layout2">
      <div className="widget-area">
        <div className="container">
          <div className="newsletter-area">
            <div className="newsletter-top">
              <div className="row gy-4 align-items-center">
                <div className="col-lg-5">
                  <h2 className="newsletter-title text-white text-capitalize mb-0">
                    get updated the latest newsletter
                  </h2>
                </div>
                <div className="col-lg-7">
                  <form className="newsletter-form style2">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter Email"
                      required=""
                    />
                    <button type="submit" className="th-btn style1">
                      Subscribe Now
                      <img src="assets/img/icon/plane2.svg" alt="" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                <Link to="/">
                      <img src="assets/img/logo-white.svg" alt="Tourm"
                      />
                </Link>
                  </div>
                  <p className="about-text">
                    Rapidiously myocardinate cross-platform intellectual capital
                    model. Appropriately create interactive infrastructures
                  </p>
                  <div className="th-social">
                    <a href="https://www.facebook.com/"
                      ><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.twitter.com/"
                      ><i className="fab fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/"
                      ><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://www.whatsapp.com/"
                      ><i className="fab fa-whatsapp"></i></a>
                    <a href="https://instagram.com/"
                      ><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/service">Our Service</Link></li>
                    <li><Link to="/contact">Terms of Service</Link></li>
                    <li><Link to="/contact">Tour Booking Now</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Get In Touch</h3>
                <div className="th-widget-contact">
                  <div className="info-box_text">
                    <div className="icon">
                      <img src="assets/img/icon/phone.svg" alt="img" />
                    </div>
                    <div className="details">
                      <p>
                        <a href="tel:+01234567890" className="info-box_link"
                          >+01 234 567 890</a>
                      </p>
                      <p>
                        <a href="tel:+09876543210" className="info-box_link"
                          >+09 876 543 210</a>
                      </p>
                    </div>
                  </div>
                  <div className="info-box_text">
                    <div className="icon">
                      <img src="assets/img/icon/envelope.svg" alt="img" />
                    </div>
                    <div className="details">
                      <p>
                        <a
                          href="mailto:mailinfo00@tourm.com"
                          className="info-box_link"
                          >mailinfo00@tourm.com</a>
                      </p>
                      <p>
                        <a
                          href="mailto:support24@tourm.com"
                          className="info-box_link"
                          >support24@tourm.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="info-box_text">
                    <div className="icon">
                      <img src="assets/img/icon/location-dot.svg" alt="img" />
                    </div>
                    <div className="details">
                      <p>789 Inner Lane, Holy park, California, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Instagram Post</h3>
                <div className="sidebar-gallery">
                  <div className="gallery-thumb">
                    <img
                      src="assets/img/widget/gallery_1_1.jpg"
                      alt="Gallery Image"
                    />
                    <a
                      target="_blank"
                      href="https://www.instagram.com/"
                      className="gallery-btn"
                      ><i className="fab fa-instagram"></i></a>
                  </div>
                  <div className="gallery-thumb">
                    <img
                      src="assets/img/widget/gallery_1_2.jpg"
                      alt="Gallery Image"
                    />
                    <a
                      target="_blank"
                      href="https://www.instagram.com/"
                      className="gallery-btn"
                      ><i className="fab fa-instagram"></i></a>
                  </div>
                  <div className="gallery-thumb">
                    <img
                      src="assets/img/widget/gallery_1_3.jpg"
                      alt="Gallery Image"
                    />
                    <a
                      target="_blank"
                      href="https://www.instagram.com/"
                      className="gallery-btn"
                      ><i className="fab fa-instagram"></i></a>
                  </div>
                  <div className="gallery-thumb">
                    <img
                      src="assets/img/widget/gallery_1_4.jpg"
                      alt="Gallery Image"
                    />
                    <a
                      target="_blank"
                      href="https://www.instagram.com/"
                      className="gallery-btn"
                      ><i className="fab fa-instagram"></i></a>
                  </div>
                  <div className="gallery-thumb">
                    <img
                      src="assets/img/widget/gallery_1_5.jpg"
                      alt="Gallery Image"
                    />
                    <a
                      target="_blank"
                      href="https://www.instagram.com/"
                      className="gallery-btn"
                      ><i className="fab fa-instagram"></i></a>
                  </div>
                  <div className="gallery-thumb">
                    <img
                      src="assets/img/widget/gallery_1_6.jpg"
                      alt="Gallery Image"
                    />
                    <a
                      target="_blank"
                      href="https://www.instagram.com/"
                      className="gallery-btn"
                      ><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
              <p className="copyright-text">
                Copyright 2025 <Link to="/">Tourm</Link>. All Rights
                Reserved.
              </p>
            </div>
            <div className="col-md-6 text-end d-none d-md-block">
              <div className="footer-card">
                <span className="title">We Accept</span>
                <img src="assets/img/shape/cards.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="shape-mockup movingX d-none d-xxl-block"
        data-top="24%"
        data-left="5%"
      >
        <img src="assets/img/shape/shape_8.png" alt="shape" />
      </div>
    </footer>
    <div className="scroll-top">
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            transition: "stroke-dashoffset 10ms linear 0s",
            strokeDasharray: "307.919, 307.919",
            strokeDashoffset: "307.919"
        }}
        ></path>
      </svg>
    </div>
    <div id="login-form" className="popup-login-register mfp-hide">
      <ul className="nav" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-menu"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="false"
          >
            Login
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-menu active"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="true"
          >
            Register
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <h3 className="box-title mb-30">Sign in to your account</h3>
          <div className="th-login-form">
            <form
              action="https://html.themeholy.com/tourm/demo/mail.php"
              method="POST"
              className="login-form ajax-contact"
            >
              <div className="row">
                <div className="form-group col-12">
                  <label>Username or email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    required="required"
                  />
                </div>
                <div className="form-group col-12">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="pasword"
                    id="pasword"
                    required="required"
                  />
                </div>
                <div className="form-btn mb-20 col-12">
                  <button className="th-btn btn-fw th-radius2">Send Message</button>
                </div>
              </div>
              <div id="forgot_url">
                <a href="my-account.html">Forgot password?</a>
              </div>
              <p className="form-messages mb-0 mt-3"></p>
            </form>
          </div>
        </div>
        <div
          className="tab-pane fade active show"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <h3 className="th-form-title mb-30">Sign in to your account</h3>
          <form
            action="https://html.themeholy.com/tourm/demo/mail.php"
            method="POST"
            className="login-form ajax-contact"
          >
            <div className="row">
              <div className="form-group col-12">
                <label>Username*</label>
                <input
                  type="text"
                  className="form-control"
                  name="usename"
                  id="usename"
                  required="required"
                />
              </div>
              <div className="form-group col-12">
                <label>First name*</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstname"
                  id="firstname"
                  required="required"
                />
              </div>
              <div className="form-group col-12">
                <label>Last name*</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  id="lastname"
                  required="required"
                />
              </div>
              <div className="form-group col-12">
                <label for="new_email">Your email*</label>
                <input
                  type="text"
                  className="form-control"
                  name="new_email"
                  id="new_email"
                  required="required"
                />
              </div>
              <div className="form-group col-12">
                <label for="new_email_confirm">Confirm email*</label>
                <input
                  type="text"
                  className="form-control"
                  name="new_email_confirm"
                  id="new_email_confirm"
                  required="required"
                />
              </div>
              <div className="statement">
                <span className="register-notes"
                  >A password will be emailed to you.</span>
              </div>
              <div className="form-btn mt-20 col-12">
                <button className="th-btn btn-fw th-radius2">Sign up</button>
              </div>
            </div>
            <p className="form-messages mb-0 mt-3"></p>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer