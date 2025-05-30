import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import "swiper/css/effect-coverflow";
// import "./BrandSlider.css"; // Custom CSS for hover

function Home() {
  const blogPosts = [
    {
      img: 'assets/img/blog/blog_1_1.jpg',
      date: 'July 05 2024',
      readTime: '6 min read',
      title: '10 Reasons why you should visit New Jersey',
      link: '/blog-details',
    },
    {
      img: 'assets/img/blog/blog_1_1.jpg',
      date: 'July 05 2024',
      readTime: '6 min read',
      title: '10 Reasons why you should visit New Jersey',
      link: '/blog-details',
    },
    {
      img: 'assets/img/blog/blog_1_1.jpg',
      date: 'July 05 2024',
      readTime: '6 min read',
      title: '10 Reasons why you should visit New Jersey',
      link: '/blog-details',
    },
    {
      img: 'assets/img/blog/blog_1_1.jpg',
      date: 'July 05 2024',
      readTime: '6 min read',
      title: '10 Reasons why you should visit New Jersey',
      link: '/blog-details',
    },
    {
      img: 'assets/img/blog/blog_1_1.jpg',
      date: 'July 05 2024',
      readTime: '6 min read',
      title: '10 Reasons why you should visit New Jersey',
      link: '/blog-details',
    },
    {
      img: 'assets/img/blog/blog_1_1.jpg',
      date: 'July 05 2024',
      readTime: '6 min read',
      title: '10 Reasons why you should visit New Jersey',
      link: '/blog-details',
    },
    {
      img: 'assets/img/blog/blog_1_2.jpg',
      date: 'July 06 2024',
      readTime: '7 min read',
      title: 'The best time to visit Japan & enjoy the cherry blossoms',
      link: '/blog-details',
    },
    {
      img: 'assets/img/blog/blog_1_3.jpg',
      date: 'July 07 2024',
      readTime: '8 min read',
      title: '7 Amazing destinations for adventure seekers',
      link: '/blog-details',
    },
    // Add more posts as needed
  ];
  const brands = [
    "brand_1_1.svg",
    "brand_1_2.svg",
    "brand_1_3.svg",
    "brand_1_4.svg",
    "brand_1_5.svg",
    "brand_1_6.svg",
    "brand_1_7.svg",
    "brand_1_8.svg",
    "brand_1_4.svg",
    "brand_1_3.svg",
    "brand_1_2.svg",
    "brand_1_1.svg",
  ];
  const teamMembers = [
    {
      name: "Jacob Jones",
      img: "assets/img/team/team_1_1.jpg",
      designation: "Tourist Guide",
      detailsLink: "/tour-guider-details",
    },
    {
      name: "Jane Cooper",
      img: "assets/img/team/team_1_2.jpg",
      designation: "Tourist Guide",
      detailsLink: "/tour-guider-details",
    },
    {
      name: "Guy Hawkins",
      img: "assets/img/team/team_1_3.jpg",
      designation: "Tourist Guide",
      detailsLink: "/tour-guider-details",
    },
    {
      name: "Jenny Wilson",
      img: "assets/img/team/team_1_4.jpg",
      designation: "Tourist Guide",
      detailsLink: "/tour-guider-details",
    },
    {
      name: "Jane Cooper",
      img: "assets/img/team/team_1_2.jpg",
      designation: "Tourist Guide",
      detailsLink: "/tour-guider-details",
    },
    {
      name: "Guy Hawkins",
      img: "assets/img/team/team_1_3.jpg",
      designation: "Tourist Guide",
      detailsLink: "/tour-guider-details",
    },
    {
      name: "Jenny Wilson",
      img: "assets/img/team/team_1_4.jpg",
      designation: "Tourist Guide",
      detailsLink: "/tour-guider-details",
    },
  ];
  return (
    <div>
      <div className="th-hero-wrapper hero-1" id="hero">
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          effect="fade"
          loop={true}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
          }}
          autoplay={{ delay: 5000 }}
          className="th-slider hero-slider-1"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="hero-inner">
              <div
                className="th-hero-bg"
                style={{
                  backgroundImage: `url(assets/img/hero/hero_bg_1_1.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="container">
                <div className="hero-style1">
                  <span className="sub-title style1" data-ani="slideinup" data-ani-delay="0.2s">
                    Get unforgetable pleasure with us
                  </span>
                  <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.4s">
                    Natural Wonder of the world
                  </h1>
                  <div className="btn-group" data-ani="slideinup" data-ani-delay="0.6s">
                    <a href="/tour" className="th-btn th-icon">Explore Tours</a>
                    <a href="/service" className="th-btn style2 th-icon">Our Services</a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="hero-inner">
              <div
                className="th-hero-bg"
                style={{
                  backgroundImage: `url(assets/img/hero/hero_bg_1_2.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="container">
                <div className="hero-style1">
                  <span className="sub-title style1" data-ani="slideinup" data-ani-delay="0.2s">
                    Get unforgetable pleasure with us
                  </span>
                  <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.4s">
                    Let’s make your best trip with us
                  </h1>
                  <div className="btn-group" data-ani="slideinup" data-ani-delay="0.6s">
                    <a href="/tour" className="th-btn th-icon">Explore Tours</a>
                    <a href="/service" className="th-btn style2 th-icon">Our Services</a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="hero-inner">
              <div
                className="th-hero-bg"
                style={{
                  backgroundImage: `url(assets/img/hero/hero_bg_1_3.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="container">
                <div className="hero-style1">
                  <span className="sub-title style1" data-ani="slideinup" data-ani-delay="0.2s">
                    Get unforgetable pleasure with us
                  </span>
                  <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.4s">
                    Explore beauty of the whole world
                  </h1>
                  <div className="btn-group" data-ani="slideinup" data-ani-delay="0.6s">
                    <a href="/tour" className="th-btn th-icon">Explore Tours</a>
                    <a href="/service" className="th-btn style2 th-icon">Our Services</a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Custom arrows */}
          <div className="th-swiper-custom">
            <button className="slider-arrow slider-prev">
              <img src="assets/img/icon/right-arrow.svg" alt="Prev" />
            </button>
            <div className="slider-pagination"></div>
            <button className="slider-arrow slider-next">
              <img src="assets/img/icon/left-arrow.svg" alt="Next" />
            </button>
          </div>
        </Swiper>
      </div>


      <div className="booking-sec">
        <div className="container">
          <form
            action="https://html.themeholy.com/tourm/demo/mail.php"
            method="POST"
            className="booking-form ajax-contact"
          >
            <div className="input-wrap">
              <div className="row align-items-center justify-content-between">
                <div className="form-group col-md-6 col-lg-auto">
                  <div className="icon"><i className="fa-light fa-route"></i></div>
                  <div className="search-input">
                    <label>Destination</label>
                    <select
                      name="subject"
                      id="subject"
                      className="form-select nice-select"
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
                      <option className="Italy">Italy</option>
                    </select>
                  </div>
                </div>
                <div className="form-group col-md-6 col-lg-auto">
                  <div className="icon">
                    <i className="fa-regular fa-person-hiking"></i>
                  </div>
                  <div className="search-input">
                    <label>Type</label>
                    <select className="nice-select" name="Adventure" id="Adventure">
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
                <div className="form-group col-md-6 col-lg-auto">
                  <div className="icon"><i className="fa-light fa-clock"></i></div>
                  <div className="search-input">
                    <label>Duration</label>
                    <select
                      className="form-select nice-select"
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
                <div className="form-group col-md-6 col-lg-auto">
                  <div className="icon">
                    <i className="fa-light fa-map-location-dot"></i>
                  </div>
                  <div className="search-input">
                    <label>Tour Category</label>
                    <select
                      name="subject"
                      id="category"
                      className="form-select nice-select"
                    >
                      <option
                        value="Normal"
                        selected="selected"
                        disabled="disabled"
                      >
                        Luxury
                      </option>
                      <option value="1">Delux</option>
                      <option value="2">Economy</option>
                    </select>
                  </div>
                </div>
                <div className="form-btn col-md-12 col-lg-auto">
                  <button className="th-btn">
                    <img src="assets/img/icon/search.svg" alt="" />Search
                  </button>
                </div>
              </div>
              <p className="form-messages mb-0 mt-3"></p>
            </div>
          </form>
        </div>
      </div>
      <section className="category-area bg-top-center" style={{ backgroundImage: 'url(assets/img/bg/category_bg_1.png)' }}>
        <div className="container th-container">
          <div className="title-area text-center">
            <span className="sub-title">Wornderful Place For You</span>
            <h2 className="sec-title">Tour Categories</h2>
          </div>

          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
              1400: { slidesPerView: 5 },
            }}
            className="th-slider has-shadow categorySlider"
          >
            {[
              { img: "category_1_1.jpg", title: "Cruises" },
              { img: "category_1_2.jpg", title: "Hiking" },
              { img: "category_1_3.jpg", title: "Airbirds" },
              { img: "category_1_4.jpg", title: "Wildlife" },
              { img: "category_1_5.jpg", title: "Walking" },
            ].map((item, index) =>
              Array(3).fill(0).map((_, i) => (
                <SwiperSlide key={`${item.title}-${i}`}>
                  <div className="category-card single">
                    <div className="box-img global-img">
                      <img src={`assets/img/category/${item.img}`} alt="Image" />
                    </div>
                    <h3 className="box-title">
                      <a href="/destination">{item.title}</a>
                    </h3>
                    <a className="line-btn" href="/destination">See more</a>
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>

          <div className="slider-pagination" />
        </div>
      </section>

      <div className="position-relative overflow-hidden">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Top Destination</span>
            <h2 className="sec-title">Popular Destination</h2>
          </div>
          <div className="slider-area">
            <Swiper
              className="swiper th-slider destination-slider slider-drag-wrap"
              modules={[EffectCoverflow]}
              effect="coverflow"
              centeredSlides={true}
              grabCursor={true}
              slidesPerView={4}
              initialSlide={2}
              coverflowEffect={{
                rotate: 0,
                stretch: 95,
                depth: 212,
                modifier: 1,
                slideShadows: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
              }}
            >
              <SwiperSlide>
                <div className="destination-box gsap-cursor">
                  <div className="destination-img">
                    <img src="assets/img/destination/destination_1_1.jpg" alt="destination image" />
                    <div className="destination-content">
                      <div className="media-left">
                        <h4 className="box-title">
                          <a href="/destination-details">Maldives</a>
                        </h4>
                        <span className="destination-subtitle">15 Listing</span>
                      </div>
                      <div>
                        <a href="/destination-details" className="th-btn style2 th-icon">
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="destination-box gsap-cursor">
                  <div className="destination-img">
                    <img src="assets/img/destination/destination_1_2.jpg" alt="destination image" />
                    <div className="destination-content">
                      <div className="media-left">
                        <h4 className="box-title">
                          <a href="/destination-details">Maldives</a>
                        </h4>
                        <span className="destination-subtitle">15 Listing</span>
                      </div>
                      <div>
                        <a href="/destination-details" className="th-btn style2 th-icon">
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="destination-box gsap-cursor">
                  <div className="destination-img">
                    <img src="assets/img/destination/destination_1_3.jpg" alt="destination image" />
                    <div className="destination-content">
                      <div className="media-left">
                        <h4 className="box-title">
                          <a href="/destination-details">Maldives</a>
                        </h4>
                        <span className="destination-subtitle">15 Listing</span>
                      </div>
                      <div>
                        <a href="/destination-details" className="th-btn style2 th-icon">
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="destination-box gsap-cursor">
                  <div className="destination-img">
                    <img src="assets/img/destination/destination_1_4.jpg" alt="destination image" />
                    <div className="destination-content">
                      <div className="media-left">
                        <h4 className="box-title">
                          <a href="/destination-details">Maldives</a>
                        </h4>
                        <span className="destination-subtitle">15 Listing</span>
                      </div>
                      <div>
                        <a href="/destination-details" className="th-btn style2 th-icon">
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="destination-box gsap-cursor">
                  <div className="destination-img">
                    <img src="assets/img/destination/destination_1_5.jpg" alt="destination image" />
                    <div className="destination-content">
                      <div className="media-left">
                        <h4 className="box-title">
                          <a href="/destination-details">Maldives</a>
                        </h4>
                        <span className="destination-subtitle">15 Listing</span>
                      </div>
                      <div>
                        <a href="/destination-details" className="th-btn style2 th-icon">
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="destination-box gsap-cursor">
                  <div className="destination-img">
                    <img src="assets/img/destination/destination_1_1.jpg" alt="destination image" />
                    <div className="destination-content">
                      <div className="media-left">
                        <h4 className="box-title">
                          <a href="/destination-details">Maldives</a>
                        </h4>
                        <span className="destination-subtitle">15 Listing</span>
                      </div>
                      <div>
                        <a href="/destination-details" className="th-btn style2 th-icon">
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>


              {/* You can repeat <SwiperSlide> for other destinations */}

            </Swiper>
          </div>


        </div>
      </div>
      <div
        className="about-area position-relative overflow-hidden space"
        id="about-sec"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="img-box1">
                <div className="img1">
                  <img src="assets/img/normal/about_1_1.jpg" alt="About" />
                </div>
                <div className="img2">
                  <img src="assets/img/normal/about_1_2.jpg" alt="About" />
                </div>
                <div className="img3">
                  <img src="assets/img/normal/about_1_3.jpg" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="ps-xl-4 ms-xl-2">
                <div className="title-area mb-20 pe-xl-5 me-xl-5">
                  <span className="sub-title style1">Let’s Go Together</span>
                  <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                    Plan Your Trip With us
                  </h2>
                  <p className="sec-text mb-30">
                    There are many variations of passages of available but the
                    majority have suffered alteration in some form, by injected
                    hum randomised words which don't look even slightly.
                  </p>
                </div>
                <div className="about-item-wrap">
                  <div className="about-item">
                    <div className="about-item_img">
                      <img src="assets/img/icon/map3.svg" alt="" />
                    </div>
                    <div className="about-item_centent">
                      <h5 className="box-title">Exclusive Trip</h5>
                      <p className="about-item_text">
                        There are many variations of passages of available but the
                        majority.
                      </p>
                    </div>
                  </div>
                  <div className="about-item">
                    <div className="about-item_img">
                      <img src="assets/img/icon/guide.svg" alt="" />
                    </div>
                    <div className="about-item_centent">
                      <h5 className="box-title">Professional Guide</h5>
                      <p className="about-item_text">
                        There are many variations of passages of available but the
                        majority.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-35">
                  <a href="/about" className="th-btn style3 th-icon"
                  >Learn More</a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="shape-mockup shape1 d-none d-xl-block"
            data-top="12%"
            data-left="-16%"
          >
            <img src="assets/img/shape/shape_1.png" alt="shape" />
          </div>
          <div
            className="shape-mockup shape2 d-none d-xl-block"
            data-top="20%"
            data-left="-16%"
          >
            <img src="assets/img/shape/shape_2.png" alt="shape" />
          </div>
          <div
            className="shape-mockup shape3 d-none d-xl-block"
            data-top="14%"
            data-left="-10%"
          >
            <img src="assets/img/shape/shape_3.png" alt="shape" />
          </div>
          <div
            className="shape-mockup about-shape movingX d-none d-xxl-block"
            data-bottom="0%"
            data-right="-11%"
          >
            <img src="assets/img/normal/about-slide-img.png" alt="shape" />
          </div>
          <div
            className="shape-mockup about-rating d-none d-xxl-block"
            data-bottom="50%"
            data-right="-20%"
          >
            <i className="fa-sharp fa-solid fa-star"></i><span>4.9k</span>
          </div>
          <div
            className="shape-mockup about-emoji d-none d-xxl-block"
            data-bottom="25%"
            data-right="5%"
          >
            <img src="assets/img/icon/emoji.png" alt="" />
          </div>
        </div>
      </div>
      <section
        className="tour-area position-relative bg-top-center overflow-hidden space"
        id="service-sec"
         style={{ backgroundImage: "url('/assets/img/bg/tour_bg_1.jpg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="title-area text-center">
                <span className="sub-title">Best Place For You</span>
                <h2 className="sec-title">Most Popular Tour</h2>
                <p className="sec-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="slider-area tour-slider">
            <Swiper
              modules={[Navigation]}
              navigation
              // pagination={{ clickable: true }}
              spaceBetween={20}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
                1300: { slidesPerView: 4 },
              }}
              className="th-slider has-shadow slider-drag-wrap"
            >
              {[ // Create an array for your tours, then map over it:
                {
                  img: 'assets/img/tour/tour_box_1.jpg',
                  title: 'Greece Tour Package',
                  rating: 5,
                  ratingCount: 4.8,
                  price: '$980.00',
                  days: 7,
                },
                {
                  img: 'assets/img/tour/tour_box_2.jpg',
                  title: 'Italy Tour package',
                  rating: 5,
                  ratingCount: 4.8,
                  price: '$980.00',
                  days: 7,
                },
                {
                  img: 'assets/img/tour/tour_box_3.jpg',
                  title: 'Dubai Tour Package',
                  rating: 5,
                  ratingCount: 4.8,
                  price: '$980.00',
                  days: 7,
                },
                {
                  img: 'assets/img/tour/tour_box_3.jpg',
                  title: 'Dubai Tour Package',
                  rating: 5,
                  ratingCount: 4.8,
                  price: '$980.00',
                  days: 7,
                },
                {
                  img: 'assets/img/tour/tour_box_3.jpg',
                  title: 'Dubai Tour Package',
                  rating: 5,
                  ratingCount: 4.8,
                  price: '$980.00',
                  days: 7,
                },
                {
                  img: 'assets/img/tour/tour_box_3.jpg',
                  title: 'Dubai Tour Package',
                  rating: 5,
                  ratingCount: 4.8,
                  price: '$980.00',
                  days: 7,
                },
                {
                  img: 'assets/img/tour/tour_box_3.jpg',
                  title: 'Dubai Tour Package',
                  rating: 5,
                  ratingCount: 4.8,
                  price: '$980.00',
                  days: 7,
                },
                {
                  img: 'assets/img/tour/tour_box_3.jpg',
                  title: 'Dubai Tour Package',
                  rating: 5,
                  ratingCount: 4.8,
                  price: '$980.00',
                  days: 7,
                },
                {
                  img: 'assets/img/tour/tour_box_4.jpg',
                  title: 'Switzerland',
                  rating: 5,
                  ratingCount: 4.8,
                  price: '$980.00',
                  days: 7,
                },
                // Add more if needed
              ].map(({ img, title, rating, ratingCount, price, days }, index) => (
                <SwiperSlide key={index}>
                  <div className="tour-box th-ani gsap-cursor">
                    <div className="tour-box_img global-img">
                      <img src={img} alt={title} />
                    </div>
                    <div className="tour-content">
                      <h3 className="box-title">
                        <a href="/tour-details">{title}</a>
                      </h3>
                      <div className="tour-rating">
                        <div className="star-rating" role="img" aria-label={`Rated ${rating} out of 5`}>
                          <span style={{ width: `${(rating / 5) * 100}%` }}>
                            Rated <strong className="rating">{rating.toFixed(2)}</strong> out of 5 based on{' '}
                            <span className="rating">{ratingCount}</span>(4.8 Rating)
                          </span>
                        </div>
                        <a href="/tour-details" className="woocommerce-review-link">
                          (<span className="count">{ratingCount}</span> Rating)
                        </a>
                      </div>
                      <h4 className="tour-box_price">
                        <span className="currency">{price}</span>/Person
                      </h4>
                      <div className="tour-action">
                        <span>
                          <i className="fa-light fa-clock"></i>
                          {days} Days
                        </span>
                        <a href="/contact" className="th-btn style4 th-icon">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <div className="gallery-area">
        <div className="container th-container">
          <div className="title-area text-center">
            <span className="sub-title">Make Your Tour More Pleasure</span>
            <h2 className="sec-title">Recent Gallery</h2>
          </div>
          <div className="row gy-10 gx-10 justify-content-center align-items-center">
            <div className="col-md-6 col-lg-2">
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a href="assets/img/gallery/gallery_1_1.jpg" className="popup-image"
                  ><div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img
                      src="assets/img/gallery/gallery_1_1.jpg"
                      alt="gallery image"
                    /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a href="assets/img/gallery/gallery_1_2.jpg" className="popup-image"
                  ><div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img
                      src="assets/img/gallery/gallery_1_2.jpg"
                      alt="gallery image"
                    /></a>
                </div>
              </div>
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a href="assets/img/gallery/gallery_1_3.jpg" className="popup-image"
                  ><div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img
                      src="assets/img/gallery/gallery_1_3.jpg"
                      alt="gallery image"
                    /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a href="assets/img/gallery/gallery_1_4.jpg" className="popup-image"
                  ><div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img
                      src="assets/img/gallery/gallery_1_4.jpg"
                      alt="gallery image"
                    /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a href="assets/img/gallery/gallery_1_5.jpg" className="popup-image"
                  ><div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img
                      src="assets/img/gallery/gallery_1_5.jpg"
                      alt="gallery image"
                    /></a>
                </div>
              </div>
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a href="assets/img/gallery/gallery_1_6.jpg" className="popup-image"
                  ><div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img
                      src="assets/img/gallery/gallery_1_6.jpg"
                      alt="gallery image"
                    /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a href="assets/img/gallery/gallery_1_7.jpg" className="popup-image"
                  ><div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img
                      src="assets/img/gallery/gallery_1_7.jpg"
                      alt="gallery image"
                    /></a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="shape-mockup d-none d-xl-block"
            data-top="-25%"
            data-left="0%"
          >
            <img src="assets/img/shape/line.png" alt="shape" />
          </div>
          <div
            className="shape-mockup movingX d-none d-xl-block"
            data-top="30%"
            data-left="-3%"
          >
            <img
              className="gmovingX"
              src="assets/img/shape/shape_4.png"
              alt="shape"
            />
          </div>
        </div>
      </div>
      <div className="counter-area space">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xl-3 counter-card-wrap">
              <div className="counter-card">
                <div className="counter-shape"><span></span></div>
                <div className="media-body">
                  <h3 className="box-number">
                    <span className="counter-number">12</span>
                  </h3>
                  <h6 className="counter-title">Years Experience</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 counter-card-wrap">
              <div className="counter-card">
                <div className="counter-shape"><span></span></div>
                <div className="media-body">
                  <h3 className="box-number">
                    <span className="counter-number">97</span>%
                  </h3>
                  <h6 className="counter-title">Retention Rate</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 counter-card-wrap">
              <div className="counter-card">
                <div className="counter-shape"><span></span></div>
                <div className="media-body">
                  <h3 className="box-number">
                    <span className="counter-number">8</span>k
                  </h3>
                  <h6 className="counter-title">Tour Completed</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 counter-card-wrap">
              <div className="counter-card">
                <div className="counter-shape"><span></span></div>
                <div className="media-body">
                  <h3 className="box-number">
                    <span className="counter-number">19</span>k
                  </h3>
                  <h6 className="counter-title">Happy Travellers</h6>
                </div>
              </div>
            </div>
          </div>
          <div
            className="shape-mockup shape1 d-none d-xl-block"
            data-top="30%"
            data-left="-15%"
          >
            <img src="assets/img/shape/shape_1.png" alt="shape" />
          </div>
          <div
            className="shape-mockup shape2 d-none d-xl-block"
            data-top="45%"
            data-left="-13%"
          >
            <img src="assets/img/shape/shape_2.png" alt="shape" />
          </div>
          <div
            className="shape-mockup shape3 d-none d-xl-block"
            data-top="32%"
            data-left="-7%"
          >
            <img src="assets/img/shape/shape_3.png" alt="shape" />
          </div>
          <div
            className="shape-mockup d-none d-xl-block"
            data-bottom="-24%"
            data-left="-15%"
          >
            <img src="assets/img/shape/shape_6.png" alt="shape" />
          </div>
          <div
            className="shape-mockup jump d-none d-xl-block"
            data-top="5%"
            data-right="-10%"
          >
            <img src="assets/img/shape/shape_5.png" alt="shape" />
          </div>
        </div>
      </div>
      <section
        className="bg-smoke space overflow-hidden"
        style={{ backgroundImage: "url('/assets/img/bg/team_bg_1.png')" }}
      >
        <div className="container z-index-common">
          <div className="title-area text-center">
            <span className="sub-title">Meet with Guide</span>
            <h2 className="sec-title">Tour Guide</h2>
          </div>
          <div className="slider-area">
            <Swiper
              modules={[Navigation, Pagination]}
              className="swiper th-slider teamSlider1 has-shadow"
              id="teamSlider1"
              spaceBetween={30}
              slidesPerView={4}
              pagination={{ clickable: true, el: ".slider-pagination" }}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
            >
              {teamMembers.map(({ name, img, designation, detailsLink }, idx) => (
                <SwiperSlide key={idx} className="swiper-slide">
                  <div className="th-team team-box">
                    <div className="team-img">
                      <img src={img} alt="Team" />
                    </div>
                    <div className="team-content">
                      <div className="media-body">
                        <h3 className="box-title">
                          <a href={detailsLink}>{name}</a>
                        </h3>
                        <span className="team-desig">{designation}</span>
                        <div className="th-social">
                          <a target="_blank" rel="noreferrer" href="https://facebook.com/">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a target="_blank" rel="noreferrer" href="https://twitter.com/">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a target="_blank" rel="noreferrer" href="https://instagram.com/">
                            <i className="fab fa-instagram"></i>
                          </a>
                          <a target="_blank" rel="noreferrer" href="https://linkedin.com/">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <div className="slider-pagination"></div> */}
          </div>
        </div>
      </section>
      <section className="testi-area overflow-hidden space" id="testi-sec">
        <div className="container-fluid p-0">
          <div className="title-area mb-20 text-center">
            <span className="sub-title">Testimonial</span>
            <h2 className="sec-title">What Client Say About us</h2>
          </div>
          <div className="slider-area">
            <div className="swiper th-slider testiSlider1 has-shadow" id="testiSlider1">
              <Swiper
                modules={[Pagination]}
                pagination={{ el: ".slider-pagination", clickable: true }}
                initialSlide={2}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  767: { slidesPerView: 2, centeredSlides: true },
                  992: { slidesPerView: 2, centeredSlides: true },
                  1200: { slidesPerView: 2, centeredSlides: true },
                  1400: { slidesPerView: 3, centeredSlides: true },
                }}
                className="swiper-wrapper"
              >
                {[
                  {
                    name: "Maria Doe",
                    image: "assets/img/testimonial/testi_1_1.jpg",
                    role: "Traveller",
                  },
                  {
                    name: "Andrew Simon",
                    image: "assets/img/testimonial/testi_1_2.jpg",
                    role: "Traveller",
                  },
                  {
                    name: "Alex Jordan",
                    image: "assets/img/testimonial/testi_1_1.jpg",
                    role: "Traveller",
                  },
                  {
                    name: "Maria Doe",
                    image: "assets/img/testimonial/testi_1_2.jpg",
                    role: "Traveller",
                  },
                  {
                    name: "Angelina Rose",
                    image: "assets/img/testimonial/testi_1_1.jpg",
                    role: "Traveller",
                  },
                  {
                    name: "Maria Doe",
                    image: "assets/img/testimonial/testi_1_1.jpg",
                    role: "Traveller",
                  },
                  {
                    name: "Andrew Simon",
                    image: "assets/img/testimonial/testi_1_2.jpg",
                    role: "Traveller",
                  },
                  {
                    name: "Alex Jordan",
                    image: "assets/img/testimonial/testi_1_1.jpg",
                    role: "Traveller",
                  },
                ].map((testimonial, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <div className="testi-card">
                      <div className="testi-card_wrapper">
                        <div className="testi-card_profile">
                          <div className="testi-card_avater">
                            <img src={testimonial.image} alt="testimonial" />
                          </div>
                          <div className="media-body">
                            <h3 className="box-title">{testimonial.name}</h3>
                            <span className="testi-card_desig">{testimonial.role}</span>
                          </div>
                        </div>
                        <div className="testi-card_review">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <i key={i} className="fa-solid fa-star"></i>
                          ))}
                        </div>
                      </div>
                      <p className="testi-card_text">
                        “A home that perfectly blends sustainability with luxury
                        until I discovered Ecoland Residence. From the moment I
                        stepped into this community, I knew it was where I wanted to
                        live. The commitment to eco-friendly living”
                      </p>
                      <div className="testi-card-quote">
                        <img src="assets/img/icon/testi-quote.svg" alt="img" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="slider-pagination"></div>
            </div>
          </div>
        </div>
        <div
          className="shape-mockup d-none d-xl-block"
          data-bottom="-2%"
          data-right="0%"
        >
          <img src="assets/img/shape/line2.png" alt="shape" />
        </div>
        <div
          className="shape-mockup movingX d-none d-xl-block"
          data-top="30%"
          data-left="5%"
        >
          <img src="assets/img/shape/shape_7.png" alt="shape" />
        </div>
      </section>
      <div className="brand-area overflow-hidden space-bottom">
        <div className="container th-container">
          <div className="brand-slider-wrapper">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              spaceBetween={30}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 6 },
                1400: { slidesPerView: 8 },
              }}
              className="brandSlider1"
            >
              {brands.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="brand-box">
                    <a href="#">
                      <img
                        className="original"
                        src={`assets/img/brand/${img}`}
                        alt="Brand Logo"
                      />
                      <img
                        className="gray"
                        src={`assets/img/brand/${img}`}
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>       
           </div>
      </div>
      <section
        className="bg-smoke overflow-hidden space overflow-hidden"
        id="blog-sec"
      >
        <div className="container">
          <div className="mb-30 text-center text-md-start">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-7">
                <div className="title-area mb-md-0">
                  <span className="sub-title">About Us Restaurant</span>
                  <h2 className="sec-title">News & Articles From Tourm</h2>
                </div>
              </div>
              <div className="col-md-auto">
                <a href="/blog" className="th-btn style4 th-icon"
                >See More Articles</a>
              </div>
            </div>
          </div>
          <div className="slider-area">
            <div className="swiper th-slider has-shadow" id="blogSlider1">
              <Swiper
                modules={[Navigation]}
                navigation
                // pagination={{ clickable: true }}
                spaceBetween={30}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  576: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 },
                }}
              >
                {blogPosts.map((post, index) => (
                  <SwiperSlide key={index}>
                    <div className="blog-box th-ani">
                      <div className="blog-img global-img">
                        <img src={post.img} alt="blog image" />
                      </div>
                      <div className="blog-box_content">
                        <div className="blog-meta">
                          <a className="author" href="/blog">{post.date}</a>
                          <a href="/blog">{post.readTime}</a>
                        </div>
                        <h3 className="box-title">
                          <a href={post.link}>{post.title}</a>
                        </h3>
                        <a href={post.link} className="th-btn style4 th-icon">Read More</a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div
            className="shape-mockup shape1 d-none d-xxl-block"
            data-bottom="20%"
            data-left="-17%"
          >
            <img src="assets/img/shape/shape_1.png" alt="shape" />
          </div>
          <div
            className="shape-mockup shape2 d-none d-xl-block"
            data-bottom="5%"
            data-left="-17%"
          >
            <img src="assets/img/shape/shape_2.png" alt="shape" />
          </div>
          <div
            className="shape-mockup shape3 d-none d-xxl-block"
            data-bottom="12%"
            data-left="-10%"
          >
            <img src="assets/img/shape/shape_3.png" alt="shape" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home