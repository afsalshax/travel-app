import React from 'react'
import { Link } from 'react-router-dom'


function Destination() {
  return (
    <div>
          <div className="breadcumb-wrapper" style={{ backgroundImage: "url('/assets/img/bg/breadcumb-bg.jpg')" }}>
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">Destination</h1>
          <ul className="breadcumb-menu">
            <li><Link to="/">Home</Link></li>
            <li>Destination</li>
          </ul>
        </div>
      </div>
    </div>
    <section className="space">
      <div className="container">
        <div className="th-sort-bar">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-4">
              <div className="search-form-area">
                <form className="search-form">
                  <input type="text" placeholder="Search" />
                  <button type="submit">
                    <i className="fa-light fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-auto">
              <div className="sorting-filter-wrap">
                <div className="nav" role="tablist">
                  <a
                    className="active"
                    href="#"
                    id="tab-destination-grid"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-grid"
                    role="tab"
                    aria-controls="tab-grid"
                    aria-selected="true"
                    ><i className="fa-light fa-grid-2"></i></a>
                  <a
                    href="#"
                    id="tab-destination-list"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-list"
                    role="tab"
                    aria-controls="tab-list"
                    aria-selected="false"
                    className=""
                    ><i className="fa-solid fa-list"></i></a>
                </div>
                <form className="woocommerce-ordering" method="get">
                  <select
                    name="orderby"
                    className="orderby"
                    aria-label="destination order"
                  >
                    <option value="menu_order" selected="selected">
                      Default Sorting
                    </option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by latest</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">
                      Sort by price: high to low
                    </option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-9 col-lg-8">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade active show"
                id="tab-grid"
                role="tabpanel"
                aria-labelledby="tab-destination-grid"
              >
                <div className="row gy-30">
                  <div className="col-xxl-4 col-xl-6">
                    <div className="tour-box th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_3_1.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <Link to="/destination-details">Dubai</Link>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                         <Link to="/destination-details" className="woocommerce-review-link"> 
                            (<span className="count">4.8</span> Rating)
                         </Link>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$980.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                          <Link to="/contact" className="th-btn style4 th-icon">
                           Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-6">
                    <div className="tour-box th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_3_2.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <Link to="/destination-details">Italy</Link>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                       <Link to="/destination-details"  className="woocommerce-review-link">
                              (<span className="count">4.8</span> Rating)
                       </Link>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$880.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                         <Link to="/contact" className="th-btn style4 th-icon">
                            Book Now
                         </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-6">
                    <div className="tour-box th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_3_3.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <Link to="/destination-details">France</Link>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <Link to="/destination-details" className="woocommerce-review-link">
                           (<span className="count">4.8</span> Rating)
                          </Link>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$680.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                       <Link to="/contact" className="th-btn style4 th-icon">
                            Book Now
                       </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-6">
                    <div className="tour-box th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_3_4.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                         <Link to="/destination-details">Maldives</Link>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                         <Link to="/destination-details" className="woocommerce-review-link">
                            (<span className="count">4.8</span> Rating)
                         </Link>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$580.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                          <Link to="/contact" className="th-btn style4 th-icon">
                           Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-6">
                    <div className="tour-box th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_3_5.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <Link to="/destination-details">Belgium</Link>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <Link to="/destination-details" className="woocommerce-review-link">
                            (<span className="count">4.8</span> Rating)
                          </Link>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$480.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                        <Link to="/contact" className="th-btn style4 th-icon">
                           Book Now
                        </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-6">
                    <div className="tour-box th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_3_6.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <Link to="/destination-details">Brazil</Link>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <Link to="/destination-details" className="woocommerce-review-link">
                            (<span className="count">4.8</span> Rating)
                          </Link>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$380.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                        <Link to="/contact" className="th-btn style4 th-icon">
                            Book Now
                        </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-6">
                    <div className="tour-box th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_3_7.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                         <Link to="/destination-details">Spain</Link>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                         <Link to="/destination-details" className="woocommerce-review-link">
                          (<span className="count">4.8</span> Rating)
                         </Link>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$580.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                         <Link to="/contact" className="th-btn style4 th-icon">
                            Book Now
                         </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-6">
                    <div className="tour-box th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_3_8.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <Link to="/destination-details">Greece</Link>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                         <Link to="/destination-details" className="woocommerce-review-link">
                            (<span className="count">4.8</span> Rating)
                         </Link>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$680.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                          <Link to="/contact" className="th-btn style4 th-icon">
                           Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-6">
                    <div className="tour-box th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_3_9.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <Link to="/destination-details"><a>Newziland</a></Link>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <Link to="/destination-details" className="woocommerce-review-link">
                          (<span className="count">4.8</span> Rating)
                          </Link>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$780.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                          <Link to="/contact" className="th-btn style4 th-icon">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="tab-list"
                role="tabpanel"
                aria-labelledby="tab-destination-list"
              >
                <div className="row gy-30">
                  <div className="col-12">
                    <div className="tour-box style-flex th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_3_1.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <Link to="/destination-details">Dubai</Link>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                           <Link to="/destination-details" className="woocommerce-review-link">
                            (<span className="count">4.8</span> Rating)</Link>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$980.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                          <Link to="/contact" className="th-btn style4 th-icon">Book Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="tour-box style-flex th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_3_2.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                           <Link to="/destination-details">Italy</Link>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <Link to="/destination-details"  className="woocommerce-review-link">
                          (<span className="count">4.8</span> Rating)</Link>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$880.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                          <Link to="/contact" className="th-btn style4 th-icon">Book Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="tour-box style-flex th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_3_3.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <Link to="/destination-details">France</Link>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                           <Link to="/destination-details"  className="woocommerce-review-link">
                           (<span className="count">4.8</span> Rating)</Link>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$680.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                         <Link to="/contact"  className="th-btn style4 th-icon"> 
                            Book Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="tour-box style-flex th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_3_4.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                         <Link to="/destination-details">Maldives</Link>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <Link to="/destination-details"  className="woocommerce-review-link">
                          (<span className="count">4.8</span> Rating)</Link>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$580.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                           <Link to="/contact" className="th-btn style4 th-icon">Book Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="tour-box style-flex th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_3_5.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <Link to="/destination-details">Belgium</Link>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
Rating)</span>
                          </div>
                          <Link to="/destination-details"  className="woocommerce-review-link"> 
                            (<span className="count">4.8</span> Rating)</Link>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$480.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                           <Link to="/contact" className="th-btn style4 th-icon">Book Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="tour-box style-flex th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_3_6.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <Link to="/destination-details">Brazil</Link>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <Link to="/destination-details"  className="woocommerce-review-link">
                            (<span className="count">4.8</span> Rating)</Link>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$380.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                         <Link to="/contact" className="th-btn style4 th-icon">Book Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="tour-box style-flex th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_3_7.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                           <Link to="/destination-details">Spain</Link>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <Link to="/destination-details"> <a
                           
                            className="woocommerce-review-link"
                            >(<span className="count">4.8</span> Rating)</a></Link>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$580.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                         <Link to="/contact">  <a  className="th-btn style4 th-icon"
                            >Book Now</a></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="tour-box style-flex th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_3_8.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                           <Link to="/destination-details"><a>Greece</a></Link>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                           <Link to="/destination-details"><a
                           
                            className="woocommerce-review-link"
                            >(<span className="count">4.8</span> Rating)</a></Link>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$680.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                          <Link to="/contact"> <a  className="th-btn style4 th-icon"
                            >Book Now</a></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="tour-box style-flex th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_3_9.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <Link to="/destination-details"> <a>Newziland</a></Link>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <Link to="/destination-details"> <a
                           
                            className="woocommerce-review-link"
                            >(<span className="count">4.8</span> Rating)</a></Link>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$780.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                           <Link to="/contact"><a  className="th-btn style4 th-icon"
                            >Book Now</a></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="th-pagination text-center mt-60 mb-0">
              <ul>
                <li> <Link to="/destination"><a className="active" >1</a></Link></li>
                <li> <Link to="/destination"><a>2</a></Link></li>
                <li> <Link to="/destination"><a>3</a></Link></li>
                <li> <Link to="/destination"><a>4</a></Link></li>
                <li>
                  <Link to="/destination"> <a className="next-page" 
                    >Next <img src="assets/img/icon/arrow-right4.svg" alt=""
                  /></a></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-4">
            <aside className="sidebar-area style2">
              <div className="widget widget_categories">
                <h3 className="widget_title">Categories</h3>
                <ul>
                  <li>
                     <Link to="/blog"><a
                      ><img src="assets/img/theme-img/map.svg" alt="" />City
                      Tour</a>
                    <span>(8)</span></Link>
                  </li>
                  <li>
                    <Link to="/blog"> <a
                      ><img src="assets/img/theme-img/map.svg" alt="" />Beach
                      Tours</a>
                    <span>(6)</span></Link>
                  </li>
                  <li>
                     <Link to="/blog"><a
                      ><img src="assets/img/theme-img/map.svg" alt="" />Wildlife
                      Tours</a></Link>
                    <span>(2)</span>
                  </li>
                  <li>
                     <Link to="/blog"><a
                      ><img src="assets/img/theme-img/map.svg" alt="" />News &
                      Tips</a></Link>
                    <span>(7)</span>
                  </li>
                  <li>
                     <Link to="/blog"><a 
                      ><img
                        src="assets/img/theme-img/map.svg"
                        alt=""
                      />Adventure Tours</a></Link>
                    <span>(9)</span>
                  </li>
                  <li>
                     <Link to="/blog"><a
                      ><img src="assets/img/theme-img/map.svg" alt="" />Mountain
                      Tours</a></Link>
                    <span>(10)</span>
                  </li>
                </ul>
              </div>
              <div className="widget">
                <h3 className="widget_title">Recent Posts</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-img">
                      <Link to="/blog-details"> <a 
                        ><img
                          src="assets/img/blog/recent-post-1-1.jpg"
                          alt="Blog Image"
                      /></a></Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link to="/blog-details">
                          <a className="text-inherit"
                            >Exploring The Green Spaces Of the island maldives</a>
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link to="/blog"><a 
                          ><i className="fa-regular fa-calendar"></i>22/6/ 2025</a></Link>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                     <Link to="/blog-details"> <a 
                        ><img
                          src="assets/img/blog/recent-post-1-2.jpg"
                          alt="Blog Image"
                      /></a></Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                       <Link to="/blog-details"> <a className="text-inherit"
                          >Harmony With Nature Of Belgium Tour and travle</a></Link>
                      </h4>
                      <div className="recent-post-meta">
                       <Link to="/blog"> <a
                          ><i className="fa-regular fa-calendar"></i>25/6/ 2025</a></Link>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                     <Link to="/blog-details"> <a 
                        ><img
                          src="assets/img/blog/recent-post-1-3.jpg"
                          alt="Blog Image"
                      /></a></Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                     <Link to="/blog-details">   <a className="text-inherit"
                          >Exploring The Green Spaces Of Realar Residence</a></Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link to="/blog"><a 
                          ><i className="fa-regular fa-calendar"></i>27/6/ 2025</a></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget widget_tag_cloud">
                <h3 className="widget_title">Popular Tags</h3>
                <div className="tagcloud">
                  <Link to="/blog"><a>Tour</a></Link>
                  <Link to="/blog"><a>Adventure</a></Link>
                 <Link to="/blog"> <a>Rent</a></Link> <Link to="/blog-details"><a>Innovate</a></Link>
                 <Link to="/blog"> <a >Hotel</a></Link> <Link to="/blog-details"><a >Modern</a></Link>
                 <Link to="/blog"> <a>Luxury</a></Link> <Link to="/blog-details"><a >Travel</a></Link>
                </div>
              </div>
              <div
                className="widget widget_offer"
                  style={{ backgroundImage: "url('/assets/img/bg/widget_bg_1.jpg')" }}
              >
                <div className="offer-banner">
                  <div className="offer">
                    <h6 className="box-title">
                      Need Help? We Are Here To Help You
                    </h6>
                    <div className="banner-logo">
                      <img src="assets/img/logo2.svg" alt="Tourm" />
                    </div>
                    <div className="offer">
                      <h6 className="offer-title">You Get Online support</h6>
                      <a className="offter-num" href="%2b256214203215.html"
                        >+256 214 203 215</a>
                    </div>
                    <Link to="/contact"><a className="th-btn style2 th-icon"
                      >Read More</a></Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Destination