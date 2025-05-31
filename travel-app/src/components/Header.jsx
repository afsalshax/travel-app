import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      {/* <div className="cursor-follower"></div> */}
      <div className="slider-drag-cursor">
        <i className="fas fa-angle-left me-2"></i> DRAG
        <i className="fas fa-angle-right ms-2"></i>
      </div>
      <div className="color-scheme-wrap active">
        <button className="switchIcon"><i className="fa-solid fa-palette"></i></button>
        <h4 className="color-scheme-wrap-title">
          <i className="far fa-palette"></i>STYLE SWITCHER
        </h4>
        <div className="color-switch-btns">
          <button style={{ color: "#684DF4" }}>
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button style={{ color: "#086ad8" }}>
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button style={{ color: "#FC3737" }}>
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button style={{ color: "#8a2be2" }}>
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button style={{ color: "#104CBA" }}>
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button style={{ color: "#ffbf4f" }}>
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button style={{ color: "#323F7C" }}>
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button style={{ color: "#0e2bc5" }}>
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button style={{ color: "#F79C53" }}>
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button style={{ color: "#6957af" }}>
            <i className="fa-solid fa-droplet"></i>
          </button>
        </div>
        <a
          href="https://themeforest.net/search/themeholy"
          className="th-btn text-center"
        ><i className="fa fa-shopping-cart me-2"></i> Purchase</a>
      </div>
      <div id="preloader" className="preloader">
        {/* <button className="th-btn preloaderCls">Cancel Preloader</button> */}
        <div className="preloader-inner">
          <img src="assets/img/logo3.svg" alt="" />
        </div>
        <div id="loader" className="th-preloader">
          <div className="animation-preloader">
            <div className="txt-loading">
              <span preloader-text="T" className="characters">T </span>
              <span preloader-text="O" className="characters">O </span>
              <span preloader-text="U" className="characters">U </span>
              <span preloader-text="R" className="characters">R </span>
              <span preloader-text="M" className="characters">M</span>
            </div>
          </div>
        </div>
      </div>
      <div className="sidemenu-wrapper sidemenu-info">
        <div className="sidemenu-content">
          <button className="closeButton sideMenuCls">
            <i className="far fa-times"></i>
          </button>
          <div className="widget">
            <div className="th-widget-about">
              <div className="about-logo">
                   <Link to="/"><img src="/assets/img/logo2.svg" alt="Tourm" />
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
              </div>
            </div>
          </div>
          <div className="widget">
            <h3 className="widget_title">Recent Posts</h3>
            <div className="recent-post-wrap">
              <div className="recent-post">
                <div className="media-img">
                <Link to="/blog-details"><img
                      src="assets/img/blog/recent-post-1-1.jpg"
                      alt="Blog Image"
                    /></Link>
                </div>
                <div className="media-body">
                  <div className="recent-post-meta">
                    <Link to="/blog"><i className="far fa-calendar"></i>24 Jun , 2025</Link>
                  </div>
                  <h4 className="post-title">
                    <Link to="/blog-details">
                      <a className="text-inherit"
                      >Where Vision Meets Concrete Reality</a>
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="recent-post">
                <div className="media-img">
                  <Link to="/blog-details"><img
                      src="assets/img/blog/recent-post-1-1.jpg"
                      alt="Blog Image"
                    /></Link>
                </div>
                <div className="media-body">
                  <div className="recent-post-meta">
                   <Link to="/blog"><i className="far fa-calendar"></i>24 Jun , 2025</Link>
                  </div>
                  <h4 className="post-title">
                    <Link to="/blog-details"><a className="text-inherit"
                    >Raising the Bar in Construction.</a></Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="widget">
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
                    <a href="mailto:mailinfo00@tourm.com" className="info-box_link"
                    >mailinfo00@tourm.com</a>
                  </p>
                  <p>
                    <a href="mailto:support24@tourm.com" className="info-box_link"
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
      </div>
      <div className="popup-search-box">
        <button className="searchClose"><i className="fal fa-times"></i></button>
        <form action="#">
          <input type="text" placeholder="What are you looking for?" />
          <button type="submit"><i className="fal fa-search"></i></button>
        </form>
      </div>
      <div className="th-menu-wrapper onepage-nav">
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle"><i className="fal fa-times"></i></button>
          <div className="mobile-logo">

            <Link to="/"><img src="/assets/img/logo2.svg" alt="Tourm" />
            </Link>

          </div>
          <div className="th-mobile-menu">
            <ul>
              <li className="menu-item-has-children mega-menu-wrap">
                <Link to="/"><a className="active"></a></Link>
              </li>
              <li><Link to="/about"><a>About Us</a></Link></li>
              <li className="menu-item-has-children">
                <a>Destination</a>
                <ul className="sub-menu">
                  <li><Link to="/destination"><a>Destination</a></Link></li>
                  <li>
                   <Link to="/destination-details"> <a>Destination Details</a></Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a>Service</a>
                <ul className="sub-menu">
                  <li><Link to="/service"><a>Services</a></Link></li>
                  <li><Link to="/service-details"><a>Service Details</a></Link></li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a>Activities</a>
                <ul className="sub-menu">
                  <li><Link to="/activity"><a>activities</a></Link></li>
                  <li>
                   <Link to="/activities-details"><a>activities Details</a></Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a>Pages</a>
                <ul className="sub-menu">
                  <li className="menu-item-has-children">
                    <a>Shop</a>
                    <ul className="sub-menu">
                      <li><a href="shop.html">Shop</a></li>
                      <li><a href="shop-details.html">Shop Details</a></li>
                      <li><a href="cart.html">Cart Page</a></li>
                      <li><a href="checkout.html">Checkout</a></li>
                      <li><a href="wishlist.html">Wishlist</a></li>
                    </ul>
                  </li>
                  <li><a href="gallery.html">Gallery</a></li>
                  <li><Link to="/tour"><a>Our Tour</a></Link></li>
                  <li><Link to="/tour-details"><a>Tour Details</a></Link></li>
                  <li><a href="resort.html">Resort page</a></li>
                  <li><a href="resort-details.html">Resort Details</a></li>
                  <li><Link to="/tour-details"><a>Tour Details</a></Link></li>
                  <li><a href="tour-guide.html">Tour Guider</a></li>
                  <li>
                    <Link to="/tour-guider-details"><a>Tour Guider Details</a></Link>
                  </li>
                  <li><Link to="/faq"><a>Faq Page</a></Link></li>
                  <li><Link to="/price"><a>Price Package</a></Link></li>
                  <li><Link to="/error"><a>Error Page</a></Link></li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Blog</a>
                <ul className="sub-menu">
                  <li><Link to="/blog"><a>Blog</a></Link></li>
                  <li><Link to="/blog-details"><a>Blog Details</a></Link></li>
                </ul>
              </li>
              <li><Link to="/contact"><a>Contact us</a></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <header className="th-header header-layout1">
        <div className="header-top">
          <div className="container th-container">
            <div
              className="row justify-content-center justify-content-xl-between align-items-center"
            >
              <div className="col-auto d-none d-md-block">
                <div className="header-links">
                  <ul>
                    <li className="d-none d-xl-inline-block">
                      <i className="fa-sharp fa-regular fa-location-dot"></i>
                      <span>45 New Eskaton Road, Austria</span>
                    </li>
                    <li className="d-none d-xl-inline-block">
                      <i className="fa-regular fa-clock"></i>
                      <span>Sun to Friday: 8.00 am - 7.00 pm</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-right">
                  <div className="currency-menu">
                    <select className="form-select nice-select">
                      <option selected="">language</option>
                      <option>CNY</option>
                      <option>EUR</option>
                      <option>AUD</option>
                    </select>
                  </div>
                  <div className="header-links">
                    <ul>
                      <li className="d-none d-md-inline-block">
                        <Link to="/faq"><a>FAQ</a></Link>
                      </li>
                      <li className="d-none d-md-inline-block">
                        <Link to="/contact"><a>Support</a></Link>
                      </li>
                      <li>
                        <a href="#login-form" className="popup-content"
                        >Sign In / Register<i className="fa-regular fa-user"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container th-container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                  <Link to="/">
                      <a
                      ><img src="/assets/img/logo.svg" alt="Tourm"
                        /></a>
                  </Link>
                  </div>
                </div>
                <div className="col-auto me-xl-auto">
                  <nav className="main-menu d-none d-xl-inline-block">
                    <ul>
                      <li className="mega-menu-wrap">
                        <Link to="/"><a className="active">Home</a></Link>
                      </li>
                      <li><Link to="/about"><a>About Us</a></Link></li>
                      <li className="menu-item-has-children">
                        <a>Destination</a>
                        <ul className="sub-menu">
                          <li><Link to="/destination"><a>Destination</a></Link></li>
                          <li>
                            <Link to="/destination-details">
                              <a
                              >Destination Details</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a>Service</a>
                        <ul className="sub-menu">
                          <li><Link to="/service"><a>Services</a></Link></li>
                          <li>
                            <Link to = "/service-details"><a>Service Details</a></Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a>Activities</a>
                        <ul className="sub-menu">
                          <li><Link to="/activity"><a>activities</a></Link></li>
                          <li>
                            <Link to="/activities-details">
                              <a
                              >activities Details</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a>Pages</a>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <a>Shop</a>
                            <ul className="sub-menu">
                              <li><a href="shop.html">Shop</a></li>
                              <li>
                                <a href="shop-details.html">Shop Details</a>
                              </li>
                              <li><a href="cart.html">Cart Page</a></li>
                              <li><a href="checkout.html">Checkout</a></li>
                              <li><a href="wishlist.html">Wishlist</a></li>
                            </ul>
                          </li>
                          <li><a href="gallery.html">Gallery</a></li>
                          <li><Link to="/tour"><a>Our Tour</a></Link></li>
                          <li><Link to="/tour-details"><a>Tour Details</a></Link></li>
                          <li><a href="resort.html">Resort page</a></li>
                          <li>
                            <a href="resort-details.html">Resort Details</a>
                          </li>
                          <li><Link to="/tour-details"><a>Tour Details</a></Link></li>
                          <li><a href="tour-guide.html">Tour Guider</a></li>
                          <li>
                           <Link to="/tour-guider-details">
                              <a
                              >Tour Guider Details</a>
                           </Link>
                          </li>
                          <li><Link to="/faq"><a>Faq Page</a></Link></li>
                          <li><Link to="/price"><a>Price Package</a></Link></li>
                          <li><Link to="/error"><a>Error Page</a></Link></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a>Blog</a>
                        <ul className="sub-menu">
                          <li><Link to="/blog"><a>Blog</a></Link></li>
                          <li><Link to="/blog-details"><a>Blog Details</a></Link></li>
                        </ul>
                      </li>
                      <li><Link to="/contact"><a>Contact us</a></Link></li>
                    </ul>
                  </nav>
                  <button type="button" className="th-menu-toggle d-block d-xl-none">
                    <i className="far fa-bars"></i>
                  </button>
                </div>
                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <Link to="/contact">
                      <a className="th-btn style3 th-icon"
                      >Book Now</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="logo-bg"
              data-mask-src="assets/img/logo_bg_mask.png"
            ></div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header