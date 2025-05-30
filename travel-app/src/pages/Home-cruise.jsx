import React from 'react'

function Homecruise() {
  return (
    <div>
    <div class="hero-11" id="hero">
      <div
        class="swiper th-slider overflow-hidden"
        id="heroSlide11"
        data-slider-options='{"effect":"fade","autoHeight":true}'
      >
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="hero-inner">
              <div
                class="th-hero-bg"
                data-bg-src="assets/img/hero/hero_1_1.jpg"
              ></div>
              <div class="container">
                <div class="hero-style11">
                  <span
                    class="sub-title style1"
                    data-ani="slideinup"
                    data-ani-delay="0.2s"
                    >Worldwide</span
                  >
                  <h1
                    class="hero-title text-white"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    Explore the world with a smile
                  </h1>
                  <div
                    class="btn-group"
                    data-ani="slideinup"
                    data-ani-delay="0.6s"
                  >
                    <a href="tour.html" class="th-btn th-icon">Explore Tours</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hero-inner">
              <div
                class="th-hero-bg"
                data-bg-src="assets/img/hero/hero_1_2.jpg"
              ></div>
              <div class="container">
                <div class="hero-style11">
                  <span
                    class="sub-title style1"
                    data-ani="slideinup"
                    data-ani-delay="0.2s"
                    >Worldwide</span
                  >
                  <h1
                    class="hero-title text-white"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    discover The world with our guide
                  </h1>
                  <div
                    class="btn-group"
                    data-ani="slideinup"
                    data-ani-delay="0.6s"
                  >
                    <a href="tour.html" class="th-btn th-icon">Explore Tours</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hero-inner">
              <div
                class="th-hero-bg"
                data-bg-src="assets/img/hero/hero_1_3jpg"
              ></div>
              <div class="container">
                <div class="hero-style11">
                  <span
                    class="sub-title style1"
                    data-ani="slideinup"
                    data-ani-delay="0.2s"
                    >Worldwide</span
                  >
                  <h1
                    class="hero-title text-white"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    Discover the Joy of Seamless Travel
                  </h1>
                  <div
                    class="btn-group"
                    data-ani="slideinup"
                    data-ani-delay="0.6s"
                  >
                    <a href="tour.html" class="th-btn th-icon">Explore Tours</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="input-wrap">
            <form
              action="https://html.themeholy.com/tourm/demo/mail.php"
              method="POST"
              class="booking-form style7 ajax-contact"
            >
              <div class="row align-items-center justify-content-between">
                <div class="form-group col-sm-6 col-lg-auto">
                  <div class="icon"><i class="fa-light fa-route"></i></div>
                  <div class="search-input">
                    <label>Destination</label>
                    <select
                      class="nice-select"
                      name="Destination"
                      id="Destination"
                    >
                      <option
                        value="Select Destination"
                        selected="selected"
                        disabled="disabled"
                      >
                        Select Destination
                      </option>
                      <option value="Australia">Australia</option>
                      <option value="Dubai">Dubai</option>
                      <option value="England">England</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Egypt">Egypt</option>
                      <option value="Saudi Arab">Saudi Arab</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Scandinavia">Scandinavia</option>
                      <option value="Western Europe">Western Europe</option>
                      <option value="Indonesia">Indonesia</option>
                      <option class="Italy">Italy</option>
                    </select>
                  </div>
                </div>
                <div class="form-group col-sm-6 col-lg-auto">
                  <div class="icon">
                    <i class="fa-regular fa-person-hiking"></i>
                  </div>
                  <div class="search-input">
                    <label>Type</label>
                    <select class="nice-select" name="type" id="type">
                      <option
                        value="Adventure"
                        selected="selected"
                        disabled="disabled"
                      >
                        Adventure
                      </option>
                      <option value="Beach">Beach</option>
                      <option value="Group Tour">Group Tour</option>
                      <option value="Couple Tour">Couple Tour</option>
                      <option value="Family Tour">Family Tour</option>
                    </select>
                  </div>
                </div>
                <div class="form-group col-sm-6 col-lg-auto">
                  <div class="icon"><i class="fa-light fa-clock"></i></div>
                  <div class="search-input">
                    <label>Duration</label>
                    <select
                      class="form-select nice-select"
                      name="Duration"
                      id="Duration"
                    >
                      <option
                        value="Normal"
                        selected="selected"
                        disabled="disabled"
                      >
                        Duration
                      </option>
                      <option value="1">1 days</option>
                      <option value="2">2 days</option>
                      <option value="3">3 days</option>
                      <option value="4">4 days</option>
                      <option value="5">5 days</option>
                      <option value="6">6 days</option>
                      <option value="7">7 days</option>
                    </select>
                  </div>
                </div>
                <div class="form-btn col-sm-6 col-lg-auto">
                  <button class="th-btn">
                    <img src="assets/img/icon/search.svg" alt="" />Search
                  </button>
                </div>
              </div>
              <p class="form-messages mb-0 mt-3"></p>
            </form>
          </div>
        </div>
      </div>
      <button data-slider-prev="#heroSlide11" class="slider-arrow slider-prev">
        <img src="assets/img/icon/right-arrow2.svg" alt="" />
      </button>
      <button data-slider-next="#heroSlide11" class="slider-arrow slider-next">
        <img src="assets/img/icon/left-arrow2.svg" alt="" />
      </button>
    </div>
    <div
      class="about-area position-relative overflow-hidden space-extra-top space-bottom"
      id="about-sec"
    >
      <div class="container">
        <div class="row gy-4">
          <div class="col-xl-6">
            <div class="img-box12">
              <div class="img1 global-img">
                <img src="assets/img/normal/about_10_1.jpg" alt="About" />
              </div>
              <div class="img2">
                <img src="assets/img/normal/about_10_2.jpg" alt="About" />
              </div>
              <div class="img3 global-img">
                <img src="assets/img/normal/about_10_3.jpg" alt="About" />
              </div>
              <div class="about-wrapp">
                <div class="icon">
                  <img src="assets/img/logo-icon.svg" alt="" />
                </div>
                <div class="discount-wrapp">
                  <div class="discount-tag">
                    <span class="discount-anime"
                      >More about us our tourm *</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="ps-xl-5">
              <div class="title-area mb-20">
                <span class="sub-title style1">Travelers Point</span>
                <h2 class="sec-title mb-20">
                  We help to find your dream place
                </h2>
                <p class="sec-text2 mb-50">
                  A cruise tour is a unique and luxurious way to explore
                  multiple destinations while enjoying a floating resort
                  experience. Combining the thrill of travel with the comfort of
                  world-class amenities, a cruise offers something for
                  everyone—adventure seekers, relaxation enthusiasts, and even
                  families.
                </p>
              </div>
              <div class="about-item-wrap style2">
                <div class="about-item style2">
                  <div class="about-item_img">
                    <img src="assets/img/icon/map4.svg" alt="" />
                  </div>
                  <div class="about-item_centent">
                    <h5 class="box-title">Exclusive Trip</h5>
                    <p class="about-item_text">
                      There are many variations of passages of available but the
                      majority.
                    </p>
                  </div>
                </div>
                <div class="about-item style2">
                  <div class="about-item_img">
                    <img src="assets/img/icon/baloon.svg" alt="" />
                  </div>
                  <div class="about-item_centent">
                    <h5 class="box-title">Safety First</h5>
                    <p class="about-item_text">
                      There are many variations of passages of available but the
                      majority.
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-35">
                <a href="about.html" class="th-btn style3 th-icon"
                  >Learn More</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section
      class="destination-area10 position-relative overflow-hidden space"
      id="destination-sec"
    >
      <div class="container">
        <div class="title-area text-center">
          <span class="sub-title">Top Destination</span>
          <h2 class="sec-title">Popular Destination</h2>
        </div>
        <div class="slider-area">
          <div
            class="swiper th-slider has-shadow destinationSlider10"
            id="destinationSlider10"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"4"},"1300":{"slidesPerView":"5"}}}'
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="destination-item4 style2 th-ani">
                  <div class="destination-item4_img global-img">
                    <img
                      src="assets/img/destination/destination_10_1.jpg"
                      alt="image"
                    />
                  </div>
                  <div class="destination-content">
                    <h3 class="box-title">
                      <a href="destination-details.html"
                        ><img
                          src="assets/img/icon/location-dot4.svg"
                          alt=""
                        />Indonesia</a
                      >
                    </h3>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="destination-item4 style2 th-ani">
                  <div class="destination-item4_img global-img">
                    <img
                      src="assets/img/destination/destination_10_2.jpg"
                      alt="image"
                    />
                  </div>
                  <div class="destination-content">
                    <h3 class="box-title">
                      <a href="destination-details.html"
                        ><img
                          src="assets/img/icon/location-dot4.svg"
                          alt=""
                        />Barcelona</a
                      >
                    </h3>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="destination-item4 style2 th-ani">
                  <div class="destination-item4_img global-img">
                    <img
                      src="assets/img/destination/destination_10_3.jpg"
                      alt="image"
                    />
                  </div>
                  <div class="destination-content">
                    <h3 class="box-title">
                      <a href="destination-details.html"
                        ><img
                          src="assets/img/icon/location-dot4.svg"
                          alt=""
                        />Maldives</a
                      >
                    </h3>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="destination-item4 style2 th-ani">
                  <div class="destination-item4_img global-img">
                    <img
                      src="assets/img/destination/destination_10_4.jpg"
                      alt="image"
                    />
                  </div>
                  <div class="destination-content">
                    <h3 class="box-title">
                      <a href="destination-details.html"
                        ><img
                          src="assets/img/icon/location-dot4.svg"
                          alt=""
                        />Thailand</a
                      >
                    </h3>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="destination-item4 style2 th-ani">
                  <div class="destination-item4_img global-img">
                    <img
                      src="assets/img/destination/destination_10_1.jpg"
                      alt="image"
                    />
                  </div>
                  <div class="destination-content">
                    <h3 class="box-title">
                      <a href="destination-details.html"
                        ><img
                          src="assets/img/icon/location-dot4.svg"
                          alt=""
                        />China</a
                      >
                    </h3>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="destination-item4 style2 th-ani">
                  <div class="destination-item4_img global-img">
                    <img
                      src="assets/img/destination/destination_10_2.jpg"
                      alt="image"
                    />
                  </div>
                  <div class="destination-content">
                    <h3 class="box-title">
                      <a href="destination-details.html"
                        ><img
                          src="assets/img/icon/location-dot4.svg"
                          alt=""
                        />Barcelona</a
                      >
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="icon-box text-center mt-30">
            <button
              data-slider-prev="#destinationSlider10"
              class="slider-arrow default"
            >
              <img src="assets/img/icon/right-arrow2.svg" alt="" />
            </button>
            <button
              data-slider-next="#destinationSlider10"
              class="slider-arrow default"
            >
              <img src="assets/img/icon/left-arrow2.svg" alt="" />
            </button>
          </div>
        </div>
        <div
          class="shape-mockup movingX d-none d-xl-block"
          data-top="8%"
          data-left="-15%"
        >
          <img src="assets/img/shape/shape_2_1.png" alt="shape" />
        </div>
        <div
          class="shape-mockup jump d-none d-xl-block"
          data-top="23%"
          data-right="-14%"
        >
          <img src="assets/img/shape/shape_2_2.png" alt="shape" />
        </div>
        <div
          class="shape-mockup spin d-none d-xl-block"
          data-bottom="21%"
          data-left="-14%"
        >
          <img src="assets/img/shape/shape_2_3.png" alt="shape" />
        </div>
        <div
          class="shape-mockup movingX d-none d-xl-block"
          data-bottom="12%"
          data-right="-14%"
        >
          <img src="assets/img/shape/shape_2_4.png" alt="shape" />
        </div>
      </div>
    </section>
    <section class="tour-area7 position-relative overflow-hidden space" id="">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="title-area text-center">
              <span class="sub-title">Wornderful Place For Your Trip</span>
              <h2 class="sec-title">Most popular Tour Package</h2>
            </div>
          </div>
        </div>
        <div class="row gy-4">
          <div class="col-lg-6 col-xl-4">
            <div class="tour-box style5 th-ani gsap-cursor">
              <div class="tour-box_img global-img">
                <img src="assets/img/tour/tour_11_1.jpg" alt="image" />
                <span class="discount">25% off</span>
              </div>
              <div class="tour-content">
                <div class="tour-rating">
                  <div
                    class="star-rating"
                    role="img"
                    aria-label="Rated 5.00 out of 5"
                  >
                    <span style="width: 100%"
                      >Rated <strong class="rating">5.00</strong> out of 5 based
                      on <span class="rating">4.8</span>(4.8 Rating)</span
                    >
                  </div>
                  <a href="tour-details.html" class="woocommerce-review-link"
                    >(<span class="count">4.8</span> Rating)</a
                  >
                </div>
                <h3 class="box-title">
                  <a href="tour-details.html">Discover Venice Cruise Tour</a>
                </h3>
                <span class="location"
                  ><i class="fa-sharp fa-solid fa-location-dot"></i>Lyu Cayon
                  National Park</span
                >
                <div class="tour-action">
                  <h4 class="tour-box_price">
                    <span class="currency">$980.00</span>1200.00
                  </h4>
                  <span><i class="fa-light fa-clock"></i>7 Days</span>
                </div>
                <a href="contact.html" class="th-btn style4 th-icon btn-fw"
                  >Book Now</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-4">
            <div class="tour-box style5 th-ani gsap-cursor">
              <div class="tour-box_img global-img">
                <img src="assets/img/tour/tour_11_2.jpg" alt="image" />
                <span class="discount">25% off</span>
              </div>
              <div class="tour-content">
                <div class="tour-rating">
                  <div
                    class="star-rating"
                    role="img"
                    aria-label="Rated 5.00 out of 5"
                  >
                    <span style="width: 100%"
                      >Rated <strong class="rating">5.00</strong> out of 5 based
                      on <span class="rating">4.8</span>(4.8 Rating)</span
                    >
                  </div>
                  <a href="tour-details.html" class="woocommerce-review-link"
                    >(<span class="count">4.8</span> Rating)</a
                  >
                </div>
                <h3 class="box-title">
                  <a href="tour-details.html">Bangkok Cruise Tour</a>
                </h3>
                <span class="location"
                  ><i class="fa-sharp fa-solid fa-location-dot"></i>Lyu Cayon
                  National Park</span
                >
                <div class="tour-action">
                  <h4 class="tour-box_price">
                    <span class="currency">$980.00</span>1200.00
                  </h4>
                  <span><i class="fa-light fa-clock"></i>7 Days</span>
                </div>
                <a href="contact.html" class="th-btn style4 th-icon btn-fw"
                  >Book Now</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-4">
            <div class="tour-box style5 th-ani gsap-cursor">
              <div class="tour-box_img global-img">
                <img src="assets/img/tour/tour_11_3.jpg" alt="image" />
                <span class="discount">25% off</span>
              </div>
              <div class="tour-content">
                <div class="tour-rating">
                  <div
                    class="star-rating"
                    role="img"
                    aria-label="Rated 5.00 out of 5"
                  >
                    <span style="width: 100%"
                      >Rated <strong class="rating">5.00</strong> out of 5 based
                      on <span class="rating">4.8</span>(4.8 Rating)</span
                    >
                  </div>
                  <a href="tour-details.html" class="woocommerce-review-link"
                    >(<span class="count">4.8</span> Rating)</a
                  >
                </div>
                <h3 class="box-title">
                  <a href="tour-details.html">Iceland Beach Cruise Tour</a>
                </h3>
                <span class="location"
                  ><i class="fa-sharp fa-solid fa-location-dot"></i>Lyu Cayon
                  National Park</span
                >
                <div class="tour-action">
                  <h4 class="tour-box_price">
                    <span class="currency">$980.00</span>1200.00
                  </h4>
                  <span><i class="fa-light fa-clock"></i>7 Days</span>
                </div>
                <a href="contact.html" class="th-btn style4 th-icon btn-fw"
                  >Book Now</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-4">
            <div class="tour-box style5 th-ani gsap-cursor">
              <div class="tour-box_img global-img">
                <img src="assets/img/tour/tour_11_4.jpg" alt="image" />
                <span class="discount">25% off</span>
              </div>
              <div class="tour-content">
                <div class="tour-rating">
                  <div
                    class="star-rating"
                    role="img"
                    aria-label="Rated 5.00 out of 5"
                  >
                    <span style="width: 100%"
                      >Rated <strong class="rating">5.00</strong> out of 5 based
                      on <span class="rating">4.8</span>(4.8 Rating)</span
                    >
                  </div>
                  <a href="tour-details.html" class="woocommerce-review-link"
                    >(<span class="count">4.8</span> Rating)</a
                  >
                </div>
                <h3 class="box-title">
                  <a href="tour-details.html">Indonesia Cruise Tour</a>
                </h3>
                <span class="location"
                  ><i class="fa-sharp fa-solid fa-location-dot"></i>Lyu Cayon
                  National Park</span
                >
                <div class="tour-action">
                  <h4 class="tour-box_price">
                    <span class="currency">$980.00</span>1200.00
                  </h4>
                  <span><i class="fa-light fa-clock"></i>7 Days</span>
                </div>
                <a href="contact.html" class="th-btn style4 th-icon btn-fw"
                  >Book Now</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-4">
            <div class="tour-box style5 th-ani gsap-cursor">
              <div class="tour-box_img global-img">
                <img src="assets/img/tour/tour_11_5.jpg" alt="image" />
                <span class="discount">25% off</span>
              </div>
              <div class="tour-content">
                <div class="tour-rating">
                  <div
                    class="star-rating"
                    role="img"
                    aria-label="Rated 5.00 out of 5"
                  >
                    <span style="width: 100%"
                      >Rated <strong class="rating">5.00</strong> out of 5 based
                      on <span class="rating">4.8</span>(4.8 Rating)</span
                    >
                  </div>
                  <a href="tour-details.html" class="woocommerce-review-link"
                    >(<span class="count">4.8</span> Rating)</a
                  >
                </div>
                <h3 class="box-title">
                  <a href="tour-details.html">Discover China Cruise Tour</a>
                </h3>
                <span class="location"
                  ><i class="fa-sharp fa-solid fa-location-dot"></i>Lyu Cayon
                  National Park</span
                >
                <div class="tour-action">
                  <h4 class="tour-box_price">
                    <span class="currency">$980.00</span>1200.00
                  </h4>
                  <span><i class="fa-light fa-clock"></i>7 Days</span>
                </div>
                <a href="contact.html" class="th-btn style4 th-icon btn-fw"
                  >Book Now</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-4">
            <div class="tour-box style5 th-ani gsap-cursor">
              <div class="tour-box_img global-img">
                <img src="assets/img/tour/tour_11_6.jpg" alt="image" />
                <span class="discount">25% off</span>
              </div>
              <div class="tour-content">
                <div class="tour-rating">
                  <div
                    class="star-rating"
                    role="img"
                    aria-label="Rated 5.00 out of 5"
                  >
                    <span style="width: 100%"
                      >Rated <strong class="rating">5.00</strong> out of 5 based
                      on <span class="rating">4.8</span>(4.8 Rating)</span
                    >
                  </div>
                  <a href="tour-details.html" class="woocommerce-review-link"
                    >(<span class="count">4.8</span> Rating)</a
                  >
                </div>
                <h3 class="box-title">
                  <a href="tour-details.html">Exclusive Maldives Cruise Tour</a>
                </h3>
                <span class="location"
                  ><i class="fa-sharp fa-solid fa-location-dot"></i>Lyu Cayon
                  National Park</span
                >
                <div class="tour-action">
                  <h4 class="tour-box_price">
                    <span class="currency">$980.00</span>1200.00
                  </h4>
                  <span><i class="fa-light fa-clock"></i>7 Days</span>
                </div>
                <a href="contact.html" class="th-btn style4 th-icon btn-fw"
                  >Book Now</a
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="shape-mockup jump d-none d-xl-block"
          data-top="3%"
          data-left="-14%"
        >
          <img src="assets/img/shape/shape_2_2.png" alt="shape" />
        </div>
      </div>
    </section>
    <div class="elements-sec bg-white overflow-hidden">
      <div class="container-fluid">
        <div class="tags-container relative"></div>
      </div>
    </div>
    <div
      class="video-area2 overflow-hidden"
      data-bg-src="assets/img/bg/video_bg_2.jpg"
    >
      <div class="container th-container">
        <div class="video-box2">
          <h3 class="box-title">Watch Video</h3>
          <div class="video-shape">
            <div class="discount-wrapp">
              <a
                href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                class="play-btn popup-video"
                ><i class="fa-solid fa-play"></i
              ></a>
              <div class="discount-tag">
                <span class="discount-anime">travel Agency since in 1996.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-hidden space">
      <div class="container">
        <div class="row gy-3 justify-content-between align-items-center">
          <div class="col-lg-6">
            <div class="title-area">
              <span class="sub-title style1">Why Choose Cruise</span>
              <h2 class="sec-title">Making Every Journey Extraordinary.</h2>
            </div>
          </div>
          <div class="col-lg-5">
            <p class="mb-60">
              A cruise tour is a unique and luxurious way to explore multiple
              destinations while enjoying a floating resort experience.
              Combining the thrill of travel with the comfort of world-class
              amenities, a cruise offers something for everyone—adventure
              seekers, relaxation enthusiasts, and even families.
            </p>
          </div>
        </div>
        <div class="row gy-80">
          <div class="col-md-6 col-xl-4">
            <div class="choose-item">
              <div class="box-icon">
                <img src="assets/img/icon/choose_3_1.svg" alt="image" />
              </div>
              <div class="media-body">
                <h3 class="box-title">Convenience</h3>
                <p class="box-text">
                  Travel to multiple destinations without the hassle of airport
                  lines or frequent packing.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-4">
            <div class="choose-item">
              <div class="box-icon">
                <img src="assets/img/icon/choose_3_2.svg" alt="image" />
              </div>
              <div class="media-body">
                <h3 class="box-title">Value for Money</h3>
                <p class="box-text">
                  Cruises often provide all-inclusive packages, making them
                  cost-effective compared to separate.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-4">
            <div class="choose-item">
              <div class="box-icon">
                <img src="assets/img/icon/choose_3_3.svg" alt="image" />
              </div>
              <div class="media-body">
                <h3 class="box-title">Perfect for All Ages</h3>
                <p class="box-text">
                  With activities for kids, teens, adults, and seniors, a cruise
                  is ideal for family vacations.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-4">
            <div class="choose-item">
              <div class="box-icon">
                <img src="assets/img/icon/choose_3_4.svg" alt="image" />
              </div>
              <div class="media-body">
                <h3 class="box-title">Scenic Views</h3>
                <p class="box-text">
                  Wake up to ever-changing scenery, from pristine beaches to icy
                  fjords, right from your window or balcony.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-4">
            <div class="choose-item">
              <div class="box-icon">
                <img src="assets/img/icon/choose_3_5.svg" alt="image" />
              </div>
              <div class="media-body">
                <h3 class="box-title">World-Class Dining</h3>
                <p class="box-text">
                  Cruise ships feature multiple restaurants, serving everything
                  from gourmet cuisine to casual dining.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-4">
            <div class="choose-item">
              <div class="box-icon">
                <img src="assets/img/icon/choose_3_6.svg" alt="image" />
              </div>
              <div class="media-body">
                <h3 class="box-title">Multiple Destinations</h3>
                <p class="box-text">
                  Popular routes include the Caribbean Islands, Mediterranean
                  coasts, Alaskan glaciers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section
      class="team-area6 position-relative space overflow-hidden"
      data-bg-src="assets/img/bg/team_bg_3.jpg"
    >
      <div class="container z-index-common">
        <div class="title-area text-center">
          <span class="sub-title">Meet with Guide</span>
          <h2 class="sec-title">Our Experienced Guide</h2>
        </div>
        <div class="slider-area">
          <div
            class="swiper th-slider teamSlider5 has-shadow"
            id="teamSlider5"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"}}}'
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="th-team team-box2">
                  <div class="team-img">
                    <img src="assets/img/team/team_4_1.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">Jesmin Marry</a>
                      </h3>
                      <div class="th-social">
                        <a target="_blank" href="https://facebook.com/"
                          ><i class="fab fa-facebook-f"></i
                        ></a>
                        <a target="_blank" href="https://twitter.com/"
                          ><i class="fab fa-twitter"></i
                        ></a>
                        <a target="_blank" href="https://instagram.com/"
                          ><i class="fab fa-instagram"></i
                        ></a>
                        <a target="_blank" href="https://www.youtube.com/"
                          ><i class="fab fa-youtube"></i
                        ></a>
                        <a target="_blank" href="https://linkedin.com/"
                          ><i class="fab fa-linkedin-in"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="th-team team-box2">
                  <div class="team-img">
                    <img src="assets/img/team/team_4_2.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">Jason Vermate</a>
                      </h3>
                      <div class="th-social">
                        <a target="_blank" href="https://facebook.com/"
                          ><i class="fab fa-facebook-f"></i
                        ></a>
                        <a target="_blank" href="https://twitter.com/"
                          ><i class="fab fa-twitter"></i
                        ></a>
                        <a target="_blank" href="https://instagram.com/"
                          ><i class="fab fa-instagram"></i
                        ></a>
                        <a target="_blank" href="https://www.youtube.com/"
                          ><i class="fab fa-youtube"></i
                        ></a>
                        <a target="_blank" href="https://linkedin.com/"
                          ><i class="fab fa-linkedin-in"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="th-team team-box2">
                  <div class="team-img">
                    <img src="assets/img/team/team_4_3.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">William Lily</a>
                      </h3>
                      <div class="th-social">
                        <a target="_blank" href="https://facebook.com/"
                          ><i class="fab fa-facebook-f"></i
                        ></a>
                        <a target="_blank" href="https://twitter.com/"
                          ><i class="fab fa-twitter"></i
                        ></a>
                        <a target="_blank" href="https://instagram.com/"
                          ><i class="fab fa-instagram"></i
                        ></a>
                        <a target="_blank" href="https://www.youtube.com/"
                          ><i class="fab fa-youtube"></i
                        ></a>
                        <a target="_blank" href="https://linkedin.com/"
                          ><i class="fab fa-linkedin-in"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="th-team team-box2">
                  <div class="team-img">
                    <img src="assets/img/team/team_4_4.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">Henry Joshep</a>
                      </h3>
                      <div class="th-social">
                        <a target="_blank" href="https://facebook.com/"
                          ><i class="fab fa-facebook-f"></i
                        ></a>
                        <a target="_blank" href="https://twitter.com/"
                          ><i class="fab fa-twitter"></i
                        ></a>
                        <a target="_blank" href="https://instagram.com/"
                          ><i class="fab fa-instagram"></i
                        ></a>
                        <a target="_blank" href="https://www.youtube.com/"
                          ><i class="fab fa-youtube"></i
                        ></a>
                        <a target="_blank" href="https://linkedin.com/"
                          ><i class="fab fa-linkedin-in"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="th-team team-box2">
                  <div class="team-img">
                    <img src="assets/img/team/team_4_1.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">Jesmin Marry</a>
                      </h3>
                      <div class="th-social">
                        <a target="_blank" href="https://facebook.com/"
                          ><i class="fab fa-facebook-f"></i
                        ></a>
                        <a target="_blank" href="https://twitter.com/"
                          ><i class="fab fa-twitter"></i
                        ></a>
                        <a target="_blank" href="https://instagram.com/"
                          ><i class="fab fa-instagram"></i
                        ></a>
                        <a target="_blank" href="https://www.youtube.com/"
                          ><i class="fab fa-youtube"></i
                        ></a>
                        <a target="_blank" href="https://linkedin.com/"
                          ><i class="fab fa-linkedin-in"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="th-team team-box2">
                  <div class="team-img">
                    <img src="assets/img/team/team_4_2.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">Jason Vermate</a>
                      </h3>
                      <div class="th-social">
                        <a target="_blank" href="https://facebook.com/"
                          ><i class="fab fa-facebook-f"></i
                        ></a>
                        <a target="_blank" href="https://twitter.com/"
                          ><i class="fab fa-twitter"></i
                        ></a>
                        <a target="_blank" href="https://instagram.com/"
                          ><i class="fab fa-instagram"></i
                        ></a>
                        <a target="_blank" href="https://www.youtube.com/"
                          ><i class="fab fa-youtube"></i
                        ></a>
                        <a target="_blank" href="https://linkedin.com/"
                          ><i class="fab fa-linkedin-in"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="th-team team-box2">
                  <div class="team-img">
                    <img src="assets/img/team/team_4_3.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">William Lily</a>
                      </h3>
                      <div class="th-social">
                        <a target="_blank" href="https://facebook.com/"
                          ><i class="fab fa-facebook-f"></i
                        ></a>
                        <a target="_blank" href="https://twitter.com/"
                          ><i class="fab fa-twitter"></i
                        ></a>
                        <a target="_blank" href="https://instagram.com/"
                          ><i class="fab fa-instagram"></i
                        ></a>
                        <a target="_blank" href="https://www.youtube.com/"
                          ><i class="fab fa-youtube"></i
                        ></a>
                        <a target="_blank" href="https://linkedin.com/"
                          ><i class="fab fa-linkedin-in"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="th-team team-box2">
                  <div class="team-img">
                    <img src="assets/img/team/team_4_4.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">Henry Joshep</a>
                      </h3>
                      <div class="th-social">
                        <a target="_blank" href="https://facebook.com/"
                          ><i class="fab fa-facebook-f"></i
                        ></a>
                        <a target="_blank" href="https://twitter.com/"
                          ><i class="fab fa-twitter"></i
                        ></a>
                        <a target="_blank" href="https://instagram.com/"
                          ><i class="fab fa-instagram"></i
                        ></a>
                        <a target="_blank" href="https://www.youtube.com/"
                          ><i class="fab fa-youtube"></i
                        ></a>
                        <a target="_blank" href="https://linkedin.com/"
                          ><i class="fab fa-linkedin-in"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="shape-mockup movingX d-none d-xl-block"
          data-top="8%"
          data-left="-15%"
        >
          <img src="assets/img/shape/shape_2_1.png" alt="shape" />
        </div>
        <div
          class="shape-mockup jump d-none d-xl-block"
          data-top="23%"
          data-right="-14%"
        >
          <img src="assets/img/shape/shape_2_2.png" alt="shape" />
        </div>
        <div
          class="shape-mockup spin d-none d-xl-block"
          data-bottom="21%"
          data-left="-14%"
        >
          <img src="assets/img/shape/shape_2_3.png" alt="shape" />
        </div>
        <div
          class="shape-mockup movingX d-none d-xl-block"
          data-bottom="12%"
          data-right="-14%"
        >
          <img src="assets/img/shape/shape_2_4.png" alt="shape" />
        </div>
      </div>
    </section>
    <div class="space">
      <div class="container">
        <div
          class="row justify-content-lg-between justify-content-center align-items-center"
        >
          <div class="col-lg-7">
            <div
              class="title-area text-center text-lg-start mb-20 pe-xl-5 me-xl-5"
            >
              <span class="sub-title">Best Memorable Places</span>
              <h2 class="sec-title">
                Explore the most beautiful place in the world
              </h2>
            </div>
          </div>
          <div class="col-auto">
            <div class="sec-btn">
              <a href="gallery.html" class="th-btn style3 th-icon"
                >Enter Gallery</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="container th-container2">
        <div class="row gy-24 gx-24 justify-content-center">
          <div class="col-lg-3 gallery-box_wrapp">
            <div class="gallery-box">
              <div class="gallery-img global-img">
                <a
                  href="assets/img/gallery/gallery_13_1.jpg"
                  class="popup-image"
                  ><div class="icon-btn">
                    <i class="fal fa-magnifying-glass-plus"></i>
                  </div>
                  <img
                    src="assets/img/gallery/gallery_13_1.jpg"
                    alt="gallery image"
                /></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 gallery-box_wrapp">
            <div class="gallery-box">
              <div class="gallery-img global-img">
                <a
                  href="assets/img/gallery/gallery_13_2.jpg"
                  class="popup-image"
                  ><div class="icon-btn">
                    <i class="fal fa-magnifying-glass-plus"></i>
                  </div>
                  <img
                    src="assets/img/gallery/gallery_13_2.jpg"
                    alt="gallery image"
                /></a>
              </div>
            </div>
            <div class="gallery-box">
              <div class="gallery-img global-img">
                <a
                  href="assets/img/gallery/gallery_13_3.jpg"
                  class="popup-image"
                  ><div class="icon-btn">
                    <i class="fal fa-magnifying-glass-plus"></i>
                  </div>
                  <img
                    src="assets/img/gallery/gallery_13_3.jpg"
                    alt="gallery image"
                /></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 gallery-box_wrapp">
            <div class="gallery-box">
              <div class="gallery-img global-img">
                <a
                  href="assets/img/gallery/gallery_13_4.jpg"
                  class="popup-image"
                  ><div class="icon-btn">
                    <i class="fal fa-magnifying-glass-plus"></i>
                  </div>
                  <img
                    src="assets/img/gallery/gallery_13_4.jpg"
                    alt="gallery image"
                /></a>
              </div>
            </div>
            <div class="gallery-box">
              <div class="gallery-img global-img">
                <a
                  href="assets/img/gallery/gallery_13_5.jpg"
                  class="popup-image"
                  ><div class="icon-btn">
                    <i class="fal fa-magnifying-glass-plus"></i>
                  </div>
                  <img
                    src="assets/img/gallery/gallery_13_5.jpg"
                    alt="gallery image"
                /></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 gallery-box_wrapp">
            <div class="gallery-box">
              <div class="gallery-img global-img">
                <a
                  href="assets/img/gallery/gallery_13_6.jpg"
                  class="popup-image"
                  ><div class="icon-btn">
                    <i class="fal fa-magnifying-glass-plus"></i>
                  </div>
                  <img
                    src="assets/img/gallery/gallery_13_6.jpg"
                    alt="gallery image"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="testi-area10 overflow-hidden space" id="testi-sec">
      <div class="container-fluid p-0">
        <div class="title-area text-center">
          <span class="sub-title">Testimonial</span>
          <h2 class="sec-title">What Client Say About us</h2>
        </div>
        <div class="slider-area">
          <div
            class="swiper th-slider testiSlider10"
            id="testiSlider0"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testi-card2">
                  <div class="box-img">
                    <img
                      src="assets/img/testimonial/testi_2_1.jpg"
                      alt="testimonial"
                    />
                  </div>
                  <div class="box-content">
                    <p class="box-text">
                      “Each villa boasts spacious layouts designed for modern
                      living. Open floor plans, large windows, and customizable
                      interior designs allow.”
                    </p>
                    <div class="box-wrapper">
                      <div class="media-body">
                        <h3 class="box-title">Maria Doe</h3>
                        <span class="box-desig">Los Angeles</span>
                      </div>
                      <div class="box-quote">
                        <img src="assets/img/icon/testi-quote3.svg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card2">
                  <div class="box-img">
                    <img
                      src="assets/img/testimonial/testi_2_2.jpg"
                      alt="testimonial"
                    />
                  </div>
                  <div class="box-content">
                    <p class="box-text">
                      “Cruises often offer guided excursions at each port, such
                      as city tours, snorkeling adventures, wildlife safaris, or
                      cultural experiences.”
                    </p>
                    <div class="box-wrapper">
                      <div class="media-body">
                        <h3 class="box-title">Andrew Simon</h3>
                        <span class="box-desig">Miami</span>
                      </div>
                      <div class="box-quote">
                        <img src="assets/img/icon/testi-quote3.svg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card2">
                  <div class="box-img">
                    <img
                      src="assets/img/testimonial/testi_2_1.jpg"
                      alt="testimonial"
                    />
                  </div>
                  <div class="box-content">
                    <p class="box-text">
                      “Cruises often provide all-inclusive packages, making them
                      cost-effective compared to separate bookings for flights,
                      hotels, and meals.”
                    </p>
                    <div class="box-wrapper">
                      <div class="media-body">
                        <h3 class="box-title">Alex Jordan</h3>
                        <span class="box-desig">San Francisco</span>
                      </div>
                      <div class="box-quote">
                        <img src="assets/img/icon/testi-quote3.svg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card2">
                  <div class="box-img">
                    <img
                      src="assets/img/testimonial/testi_2_2.jpg"
                      alt="testimonial"
                    />
                  </div>
                  <div class="box-content">
                    <p class="box-text">
                      “Each villa boasts spacious layouts designed for modern
                      living. Open floor plans, large windows, and customizable
                      interior designs allow.”
                    </p>
                    <div class="box-wrapper">
                      <div class="media-body">
                        <h3 class="box-title">Maria Doe</h3>
                        <span class="box-desig">Los Angeles</span>
                      </div>
                      <div class="box-quote">
                        <img src="assets/img/icon/testi-quote3.svg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card2">
                  <div class="box-img">
                    <img
                      src="assets/img/testimonial/testi_2_1.jpg"
                      alt="testimonial"
                    />
                  </div>
                  <div class="box-content">
                    <p class="box-text">
                      “Cruises often offer guided excursions at each port, such
                      as city tours, snorkeling adventures, wildlife safaris, or
                      cultural experiences.”
                    </p>
                    <div class="box-wrapper">
                      <div class="media-body">
                        <h3 class="box-title">Angelina Rose</h3>
                        <span class="box-desig">Miami</span>
                      </div>
                      <div class="box-quote">
                        <img src="assets/img/icon/testi-quote3.svg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card2">
                  <div class="box-img">
                    <img
                      src="assets/img/testimonial/testi_2_1.jpg"
                      alt="testimonial"
                    />
                  </div>
                  <div class="box-content">
                    <p class="box-text">
                      “Cruises often provide all-inclusive packages, making them
                      cost-effective compared to separate bookings for flights,
                      hotels, and meals.”
                    </p>
                    <div class="box-wrapper">
                      <div class="media-body">
                        <h3 class="box-title">Maria Doe</h3>
                        <span class="box-desig">San Francisco</span>
                      </div>
                      <div class="box-quote">
                        <img src="assets/img/icon/testi-quote3.svg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card2">
                  <div class="box-img">
                    <img
                      src="assets/img/testimonial/testi_2_2.jpg"
                      alt="testimonial"
                    />
                  </div>
                  <div class="box-content">
                    <p class="box-text">
                      “Each villa boasts spacious layouts designed for modern
                      living. Open floor plans, large windows, and customizable
                      interior designs allow.”
                    </p>
                    <div class="box-wrapper">
                      <div class="media-body">
                        <h3 class="box-title">Andrew Simon</h3>
                        <span class="box-desig">Los Angeles</span>
                      </div>
                      <div class="box-quote">
                        <img src="assets/img/icon/testi-quote3.svg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card2">
                  <div class="box-img">
                    <img
                      src="assets/img/testimonial/testi_2_1.jpg"
                      alt="testimonial"
                    />
                  </div>
                  <div class="box-content">
                    <p class="box-text">
                      “Cruises often offer guided excursions at each port, such
                      as city tours, snorkeling adventures, wildlife safaris, or
                      cultural experiences.”
                    </p>
                    <div class="box-wrapper">
                      <div class="media-body">
                        <h3 class="box-title">Alex Jordan</h3>
                        <span class="box-desig">Miami</span>
                      </div>
                      <div class="box-quote">
                        <img src="assets/img/icon/testi-quote3.svg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slider-pagination"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="overflow-hidden space-top overflow-hidden" id="blog-sec">
      <div class="container">
        <div class="mb-30 text-center text-md-start">
          <div class="row align-items-center justify-content-between">
            <div class="col-md-7">
              <div class="title-area mb-md-0">
                <span class="sub-title">About Us Restaurant</span>
                <h2 class="sec-title">News & Articles From Tourm</h2>
              </div>
            </div>
            <div class="col-md-auto">
              <a href="blog.html" class="th-btn style4 th-icon"
                >See More Articles</a
              >
            </div>
          </div>
        </div>
        <div class="slider-area">
          <div
            class="swiper th-slider has-shadow"
            id="blogSlider1"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="blog-box style3 th-ani">
                  <div class="blog-img">
                    <img src="assets/img/blog/blog_11_1.jpg" alt="blog image" />
                  </div>
                  <div class="blog-box_content">
                    <div class="blog-meta">
                      <a class="author" href="blog.html">07 March, 2024</a>
                      <a href="blog.html">Alone Mask</a>
                    </div>
                    <h3 class="box-title">
                      <a href="blog-details.html"
                        >10 Reason why you should visit New Jersy</a
                      >
                    </h3>
                    <a href="blog-details.html" class="th-btn style4 th-icon"
                      >Read More</a
                    >
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="blog-box style3 th-ani">
                  <div class="blog-img">
                    <img src="assets/img/blog/blog_11_2.jpg" alt="blog image" />
                  </div>
                  <div class="blog-box_content">
                    <div class="blog-meta">
                      <a class="author" href="blog.html">10 March, 2024</a>
                      <a href="blog.html">Alone Mask</a>
                    </div>
                    <h3 class="box-title">
                      <a href="blog-details.html"
                        >The best time to visit japan & enjoy the cherry
                        blossoms</a
                      >
                    </h3>
                    <a href="blog-details.html" class="th-btn style4 th-icon"
                      >Read More</a
                    >
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="blog-box style3 th-ani">
                  <div class="blog-img">
                    <img src="assets/img/blog/blog_11_3.jpg" alt="blog image" />
                  </div>
                  <div class="blog-box_content">
                    <div class="blog-meta">
                      <a class="author" href="blog.html">12 March, 2024</a>
                      <a href="blog.html">Alone Mask</a>
                    </div>
                    <h3 class="box-title">
                      <a href="blog-details.html"
                        >The 7 amazing destinations for adventure seekers</a
                      >
                    </h3>
                    <a href="blog-details.html" class="th-btn style4 th-icon"
                      >Read More</a
                    >
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="blog-box style3 th-ani">
                  <div class="blog-img">
                    <img src="assets/img/blog/blog_11_2.jpg" alt="blog image" />
                  </div>
                  <div class="blog-box_content">
                    <div class="blog-meta">
                      <a class="author" href="blog.html">15 March, 2024</a>
                      <a href="blog.html">Alone Mask</a>
                    </div>
                    <h3 class="box-title">
                      <a href="blog-details.html"
                        >10 Reason why you should visit New Jersy</a
                      >
                    </h3>
                    <a href="blog-details.html" class="th-btn style4 th-icon"
                      >Read More</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="shape-mockup shape1 d-none d-xxl-block"
          data-bottom="20%"
          data-left="-17%"
        >
          <img src="assets/img/shape/shape_1.png" alt="shape" />
        </div>
        <div
          class="shape-mockup shape2 d-none d-xl-block"
          data-bottom="5%"
          data-left="-17%"
        >
          <img src="assets/img/shape/shape_2.png" alt="shape" />
        </div>
        <div
          class="shape-mockup shape3 d-none d-xxl-block"
          data-bottom="12%"
          data-left="-10%"
        >
          <img src="assets/img/shape/shape_3.png" alt="shape" />
        </div>
      </div>
    </section>
    <div class="brand-area overflow-hidden space">
      <div class="container th-container">
        <div
          class="swiper th-slider brandSlider1"
          id="brandSlider1"
          data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"6"},"1400":{"slidesPerView":"8"}}}'
        >
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_1.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_1.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_2.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_2.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_3.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_3.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_4.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_4.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_5.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_5.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_6.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_6.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_7.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_7.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_8.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_8.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_4.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_4.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_3.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_3.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_2.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_2.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_1.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_1.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Homecruise