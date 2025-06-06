import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import "swiper/css/effect-coverflow";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Service() {
  useEffect(() => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(el => new bootstrap.Tooltip(el));
  }, []);
  const tourPackages = [
    {
      id: 1,
      title: "Caravan Trip Package",
      image: "assets/img/tour/tour_box_13.jpg",
      rating: 4.8,
      price: 980,
      duration: "7 Days",
    },
    {
      id: 2,
      title: "Sleeper Buses Package",
      image: "assets/img/tour/tour_box_14.jpg",
      rating: 4.8,
      price: 980,
      duration: "7 Days",
    },
    {
      id: 3,
      title: "Trips by Train Package",
      image: "assets/img/tour/tour_box_15.jpg",
      rating: 4.8,
      price: 980,
      duration: "7 Days",
    },
    {
      id: 4,
      title: "Travel by Air Flight Package",
      image: "assets/img/tour/tour_box_16.jpg",
      rating: 4.8,
      price: 980,
      duration: "7 Days",
    },
    {
      id: 5,
      title: "Cruise Transports Package",
      image: "assets/img/tour/tour_box_17.jpg",
      rating: 4.8,
      price: 980,
      duration: "7 Days",
    },
    {
      id: 6,
      title: "Travel by Air Flight Package",
      image: "assets/img/tour/tour_box_18.jpg",
      rating: 4.8,
      price: 980,
      duration: "7 Days",
    },
    {
      id: 7,
      title: "Sleeper Buses Package",
      image: "assets/img/tour/tour_box_19.jpg",
      rating: 4.8,
      price: 980,
      duration: "7 Days",
    },
    {
      id: 8,
      title: "Trips by Train Package",
      image: "assets/img/tour/tour_box_20.jpg",
      rating: 4.8,
      price: 980,
      duration: "7 Days",
    },
  ];

  const tours = [
    {
      img: "assets/img/tour/tour_box_5.jpg",
      title: "The Plaza, New York",
      price: "$980.00",
      days: 7,
      rating: 5,
      ratingCount: 4.8,
    },
    {
      img: "assets/img/tour/tour_box_6.jpg",
      title: "Hotel Ritz Paris",
      price: "$970.00",
      days: 7,
      rating: 5,
      ratingCount: 4.8,
    },
    {
      img: "assets/img/tour/tour_box_7.jpg",
      title: "Claridge’s, London",
      price: "$960.00",
      days: 7,
      rating: 5,
      ratingCount: 4.8,
    },
    {
      img: "assets/img/tour/tour_box_8.jpg",
      title: "Taj Mahal Palace, India",
      price: "$940.00",
      days: 7,
      rating: 5,
      ratingCount: 4.8,
    },
    {
      img: "assets/img/tour/tour_box_9.jpg",
      title: "Peninsula Hong Kong",
      price: "$970.00",
      days: 7,
      rating: 5,
      ratingCount: 4.8,
    },
    {
      img: "assets/img/tour/tour_box_10.jpg",
      title: "The Ritz Hotel London",
      price: "$940.00",
      days: 7,
      rating: 5,
      ratingCount: 4.8,
    },
    {
      img: "assets/img/tour/tour_box_11.jpg",
      title: "The Shelbourne Hotel, Dublin",
      price: "$990.00",
      days: 7,
      rating: 5,
      ratingCount: 4.8,
    },
    {
      img: "assets/img/tour/tour_box_12.jpg",
      title: "Beverly Hills Hotel",
      price: "$950.00",
      days: 7,
      rating: 5,
      ratingCount: 4.8,
    },
  ];

  const services = [
    {
      id: 1,
      title: "Air Ticketing",
      image: "90829-OIUNUM-725.jpg",
      description: "This involves booking flights for individuals or groups. It includes searching for available flights, comparing prices, and arranging bookings according to the traveler's preferences and schedules.",
    },
    {
      id: 2,
      title: "Holiday Packages",
      image: "destination_4_2.jpg",
      description: "Holiday packages bundle together flights, accommodation, meals, transportation, and often activities or tours, providing convenience and cost savings compared to booking each element individually"
    },
    {
      id: 2,
      title: "Honeymoon Packages",
      image: "charming-kissing-people-seafront.jpg",
      description: "Honeymoon packages are specialized holiday packages tailored for newlyweds. They often include romantic experiences, luxury accommodations, and special amenities to make the honeymoon memorable."
    },
    {
      id: 4,
      title: "Certificate Attestation",
      image: "333528-P9XN19-230.jpg",
      description: "Certificate attestation is the process of verifying the authenticity of educational, personal, or commercial documents for use in foreign countries. This is often required for employment, education, immigration, or other purposes."
    },
    {
      id: 5,
      title: "Visa & Passport Services",
      image: "1602.m00.i125.n038.P.c25.323775368 Visa stamping. Visa stamp on Passport or visa application.jpg",
      description: "Visa and passport services assist individuals in obtaining visas and passports for international travel. This includes providing guidance on visa requirements, assisting with application processes, and ensuring that all necessary documents are in order."
    },
    {
      id: 6,
      title: "Hotel Reservation",
      image: "52865.jpg",
      description: "We specialize in securing comfortable and convenient accommodations tailored to our preferences and budget, ensuring a seamless booking experience for your travels"
    },
    {
      id: 7,
      title: "Travel Insurance",
      image: "destination_4_7.jpg",
      description: "Safeguard your journey with our comprehensive trave insurance packages, providing you with peace of mind and financial protection against unforeseen circumstances during your trip."
    },
    {
      id: 8,
      title: "Travel Gift Voucher",
      image: "destination_4_8.jpg",
      description: "Give the gift of unforgettable experiences with our travel gift vouchers, allowing your loved ones to explore the world and create cherished memories at their leisure."
    },
    {
      id: 8,
      title: "Houseboat Reservation",
      image: "destination_4_6.jpg",
      description: "Embark on a serene journey through picturesque waterways with our houseboat reservation services, offering unique and luxurious accommodations amidst breathtaking natural landscapes."
    },
  ];

  return (
    <div>
      <div className="breadcumb-wrapper" style={{ backgroundImage: "url('/assets/img/bg/breadcumb-bg.jpg')" }}>
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Services</h1>
            <ul className="breadcumb-menu">
              <Link to="/"><li><a>Home</a></li></Link>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="about-area position-relative overflow-hidden overflow-hidden space mb-0"
        id="about-sec"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="img-box3">
                <div className="img1">
                  <img src="assets/img/normal/about_3_1.jpg" alt="About" />
                </div>
                <div className="img2">
                  <img src="assets/img/normal/about_3_2.jpg" alt="About" />
                </div>
                <div className="img3 movingX">
                  <img src="assets/img/normal/about_3_3.jpg" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="ps-xl-4">
                <div className="title-area mb-20">
                  <span className="sub-title style1">Welcome To Tourm</span>
                  <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                    We are world reputeted travel agency
                  </h2>
                </div>
                <p className="pe-xl-5">
                  There are many variations of passages of available but the
                  majority have suffered alteration in some form, by injected hum
                  randomised words.
                </p>
                <p className="mb-30 pe-xl-5">
                  Leiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt.
                </p>
                <div className="about-item-wrap">
                  <div className="about-item style2">
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
                  <div className="about-item style2">
                    <div className="about-item_img">
                      <img src="assets/img/icon/about_1_2.svg" alt="" />
                    </div>
                    <div className="about-item_centent">
                      <h5 className="box-title">Safety First Always</h5>
                      <p className="about-item_text">
                        There are many variations of passages of available but the
                        majority.
                      </p>
                    </div>
                  </div>
                  <div className="about-item style2">
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
                  <Link className="th-btn style3 th-icon" to="/contact">
                    Contact With Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="shape-mockup movingX d-none d-xxl-block"
            data-top="0%"
            data-left="-18%"
          >
            <img src="assets/img/shape/shape_2_1.png" alt="shape" />
          </div>
          <div
            className="shape-mockup jump d-none d-xxl-block"
            data-top="28%"
            data-right="-15%"
          >
            <img src="assets/img/shape/shape_2_2.png" alt="shape" />
          </div>
          <div
            className="shape-mockup spin d-none d-xxl-block"
            data-bottom="18%"
            data-left="-112%"
          >
            <img src="assets/img/shape/shape_2_3.png" alt="shape" />
          </div>
          <div
            className="shape-mockup movixgX d-none d-xxl-block"
            data-bottom="18%"
            data-right="-12%"
          >
            <img src="assets/img/shape/shape_2_4.png" alt="shape" />
          </div>
        </div>
      </div>
      <section
        className="position-relative overflow-hidden space"
        id="destination-sec"
      >
        <div className="container">
          <div className="row gy-4 gx-4">
            {services.map((elemt, index) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                <div className="destination-item th-ani">
                  <div className="destination-item_img global-img">
                    <img
                      src={`assets/img/destination/${elemt.image}`}
                      alt="image"
                    />
                  </div>
                  <div className="destination-content">
                    <h3 className="box-title">
                      <Link to="/service-details"><span className='service-title'>{elemt.title}</span></Link>
                    </h3>
                    <p className="destination-text p-2 line-clamp-3"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title={elemt.description}>{elemt.description}</p>
                    <Link to="/contact" className="th-btn style4 th-icon">
                      Book Now</Link>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="destination-item th-ani">
              <div className="destination-item_img global-img">
                <img
                  src="assets/img/destination/destination_4_2.jpg"
                  alt="image"
                />
              </div>
              <div className="destination-content">
                <h3 className="box-title">
                 <Link to="/service-details"> <a>Tour Guide</a></Link>
                </h3>
                <p className="destination-text">22 Listing</p>
              <Link to="/contact">  <a  className="th-btn style4 th-icon"
                  >Book Now</a></Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="destination-item th-ani">
              <div className="destination-item_img global-img">
                <img
                  src="assets/img/destination/destination_4_3.jpg"
                  alt="image"
                />
              </div>
              <div className="destination-content">
                <h3 className="box-title">
                 <Link to="/service-details"> <a >Cozy Event</a></Link>
                </h3>
                <p className="destination-text">23 Listing</p>
                <Link to="/contact"><a className="th-btn style4 th-icon"
                  >Book Now</a></Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="destination-item th-ani">
              <div className="destination-item_img global-img">
                <img
                  src="assets/img/destination/destination_4_4.jpg"
                  alt="image"
                />
              </div>
              <div className="destination-content">
                <h3 className="box-title">
                <Link to="/service-details">  <a>Interesting Rest</a></Link>
                </h3>
                <p className="destination-text">24 Listing</p>
               <Link to="/contact"> <a className="th-btn style4 th-icon"
                  >Book Now</a></Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="destination-item th-ani">
              <div className="destination-item_img global-img">
                <img
                  src="assets/img/destination/destination_4_5.jpg"
                  alt="image"
                />
              </div>
              <div className="destination-content">
                <h3 className="box-title">
                <Link to="/service-details">  <a >Kayaking</a></Link>
                </h3>
                <p className="destination-text">25 Listing</p>
              <Link to="/contact">  <a className="th-btn style4 th-icon"
                  >Book Now</a></Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="destination-item th-ani">
              <div className="destination-item_img global-img">
                <img
                  src="assets/img/destination/destination_4_6.jpg"
                  alt="image"
                />
              </div>
              <div className="destination-content">
                <h3 className="box-title">
                 <Link to="/service-details"> <a >Safe Flight</a></Link>
                </h3>
                <p className="destination-text">26 Listing</p>
              <Link to="/contact">  <a className="th-btn style4 th-icon"
                  >Book Now</a></Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="destination-item th-ani">
              <div className="destination-item_img global-img">
                <img
                  src="assets/img/destination/destination_4_7.jpg"
                  alt="image"
                />
              </div>
              <div className="destination-content">
                <h3 className="box-title">
                 <Link to="/service-details"> <a>Entertainment</a></Link>
                </h3>
                <p className="destination-text">27 Listing</p>
               <Link to="/contact"> <a  className="th-btn style4 th-icon"
                  >Book Now</a></Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="destination-item th-ani">
              <div className="destination-item_img global-img">
                <img
                  src="assets/img/destination/destination_4_8.jpg"
                  alt="image"
                />
              </div>
              <div className="destination-content">
                <h3 className="box-title">
                  <Link to="/service-details"><a >Delicisious Food</a></Link>
                </h3>
                <p className="destination-text">28 Listing</p>
              <Link to="/contact">  <a className="th-btn style4 th-icon"
                  >Book Now</a></Link>
              </div>
            </div>
          </div> */}
          </div>
          <div
            className="shape-mockup shape1 d-none d-xxl-block"
            data-bottom="17%"
            data-right="-9%"
          >
            <img src="assets/img/shape/shape_1.png" alt="shape" />
          </div>
          <div
            className="shape-mockup shape2 d-none d-xl-block"
            data-bottom="8%"
            data-right="-8%"
          >
            <img src="assets/img/shape/shape_2.png" alt="shape" />
          </div>
          <div
            className="shape-mockup shape3 d-none d-xxl-block"
            data-bottom="15%"
            data-right="-4%"
          >
            <img src="assets/img/shape/shape_3.png" alt="shape" />
          </div>
        </div>
      </section>
      <section
        className="tour-area3 position-relative bg-top-center overflow-hidden space"
        id="service-sec"
        style={{ backgroundImage: "url('/assets/img/bg/tour_bg_1.jpg')" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area text-center">
                <span className="sub-title">Best Experience</span>
                <h2 className="sec-title">Amazing Travel Experience</h2>
              </div>
            </div>
          </div>
          <div className="nav nav-tabs tour-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link th-btn active"
              id="nav-step1-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-step1"
              type="button"
            >
              <img src="assets/img/icon/tour_icon_1.svg" alt="" />Tour Package
            </button>
            <button
              className="nav-link th-btn"
              id="nav-step2-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-step2"
              type="button"
            >
              <img src="assets/img/icon/tour_icon_2.svg" alt="" />Hotel
            </button>
            <button
              className="nav-link th-btn"
              id="nav-step3-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-step3"
              type="button"
            >
              <img src="assets/img/icon/tour_icon_3.svg" alt="" />Transport
            </button>
          </div>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade active show" id="nav-step1" role="tabpanel">
              <div className="slider-area tour-slider">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation
                  // pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
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
                            <Link to="/tour-details"><a>{title}</a></Link>
                          </h3>
                          <div className="tour-rating">
                            <div className="star-rating" role="img" aria-label={`Rated ${rating} out of 5`}>
                              <span style={{ width: `${(rating / 5) * 100}%` }}>
                                Rated <strong className="rating">{rating.toFixed(2)}</strong> out of 5 based on{' '}
                                <span className="rating">{ratingCount}</span>(4.8 Rating)
                              </span>
                            </div>
                            <Link to="/tour-details"> <a className="woocommerce-review-link">
                              (<span className="count">{ratingCount}</span> Rating)
                            </a></Link>
                          </div>
                          <h4 className="tour-box_price">
                            <span className="currency">{price}</span>/Person
                          </h4>
                          <div className="tour-action">
                            <span>
                              <i className="fa-light fa-clock"></i>
                              {days} Days
                            </span>
                            <Link to="/contact">   <a className="th-btn style4 th-icon">
                              Book Now
                            </a></Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-step2" role="tabpanel">
              <div className="slider-area tour-slider">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
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
                  {tours.map(({ img, title, price, days, rating, ratingCount }, index) => (
                    <SwiperSlide key={index}>
                      <div className="tour-box th-ani gsap-cursor">
                        <div className="tour-box_img global-img">
                          <img src={img} alt={title} />
                        </div>
                        <div className="tour-content">
                          <h3 className="box-title">
                            <Link to="/tour-details"> <a>{title}</a></Link>
                          </h3>
                          <div className="tour-rating">
                            <div
                              className="star-rating"
                              role="img"
                              aria-label={`Rated ${rating} out of 5`}
                            >
                              <span style={{ width: "100%" }}>
                                Rated <strong className="rating">{rating.toFixed(2)}</strong> out of 5 based on{" "}
                                <span className="rating">{ratingCount}</span>(4.8 Rating)
                              </span>
                            </div>
                            <Link to="/tour-details"><a className="woocommerce-review-link">
                              (<span className="count">{ratingCount}</span> Rating)
                            </a></Link>
                          </div>
                          <h4 className="tour-box_price">
                            <span className="currency">{price}</span>/Person
                          </h4>
                          <div className="tour-action">
                            <span>
                              <i className="fa-light fa-clock"></i>
                              {days} Days
                            </span>
                            <Link to="/tour-guider-details"><a className="th-btn style4 th-icon">
                              Book Now
                            </a></Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-step3" role="tabpanel">
              <div className="slider-area tour-slider slider-drag-wrap">
                <Swiper
                  modules={[Pagination, Navigation, Autoplay]}
                  spaceBetween={30}
                  pagination={{ el: ".slider-pagination", clickable: true }}
                  navigation={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    576: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                    1200: { slidesPerView: 3 },
                    1400: { slidesPerView: 4 },
                  }}
                  className="th-slider has-shadow"
                >
                  {tourPackages.map((tour) => (
                    <SwiperSlide key={tour.id}>
                      <div className="tour-box th-ani gsap-cursor">
                        <div className="tour-box_img global-img">
                          <img src={tour.image} alt={tour.title} />
                        </div>
                        <div className="tour-content">
                          <h3 className="box-title">
                            <Link to="/tour-details"> <a>{tour.title}</a></Link>
                          </h3>
                          <div className="tour-rating">
                            <div
                              className="star-rating"
                              role="img"
                              aria-label={`Rated 5.00 out of 5`}
                            >
                              <span style={{ width: "100%" }}>
                                Rated <strong className="rating">5.00</strong> out of 5
                                based on <span className="rating">{tour.rating}</span> (
                                {tour.rating} Rating)
                              </span>
                            </div>
                            <Link to="/tour-details"> <a

                              className="woocommerce-review-link"
                            >
                              (<span className="count">{tour.rating}</span> Rating)
                            </a></Link>
                          </div>
                          <h4 className="tour-box_price">
                            <span className="currency">${tour.price.toFixed(2)}</span>
                            /Person
                          </h4>
                          <div className="tour-action">
                            <span>
                              <i className="fa-light fa-clock"></i> {tour.duration}
                            </span>
                            <Link to="/tour-guider-details">   <a

                              className="th-btn style4 th-icon"
                            >
                              Book Now
                            </a></Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className="slider-pagination"></div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="position-relative space-bottom">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Let’s Checkin</span>
            <h2 className="sec-title">Affordable Pricing plans</h2>
          </div>
          <div className="row gy-4 justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="price-card">
                <div className="offer-tag">Popular</div>
                <div className="price-card_wrapp">
                  <div className="price-card_icon">
                    <img src="assets/img/icon/price_1_1.svg" alt="img" />
                  </div>
                  <h3 className="box-title">Basic Plan</h3>
                </div>
                <div className="price-card_content">
                  <h4 className="price-card_price">
                    $785.00<span className="duration">/Per Night</span>
                  </h4>
                  <p className="price-card_text">
                    Essential services for basic and signle person seeking.
                  </p>
                  <div className="checklist">
                    <ul>
                      <li>Up to 2 members</li>
                      <li>Room Service Fees</li>
                      <li>Driver Service Feet</li>
                      <li>Tour management</li>
                      <li>Collaboration</li>
                      <li>Entrance Fees</li>
                      <li>Guide Fees in Destination</li>
                    </ul>
                  </div>
                </div>
                <div className="price-btn">
                  <Link to="/contact"> <a className="th-btn style3 w-100"
                  >Get Started</a></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="price-card active">
                <div className="offer-tag">Popular</div>
                <div className="price-card_wrapp">
                  <div className="price-card_icon">
                    <img src="assets/img/icon/price_1_2.svg" alt="img" />
                  </div>
                  <h3 className="box-title">Advanced Plan</h3>
                </div>
                <div className="price-card_content">
                  <h4 className="price-card_price">
                    $980.00<span className="duration">/Per Night</span>
                  </h4>
                  <p className="price-card_text">
                    Essential services for basic and signle person seeking.
                  </p>
                  <div className="checklist">
                    <ul>
                      <li>Up to 2 members</li>
                      <li>Room Service Fees</li>
                      <li>Driver Service Feet</li>
                      <li>Tour management</li>
                      <li>Collaboration</li>
                      <li>Entrance Fees</li>
                      <li>Auto refresh ads</li>
                    </ul>
                  </div>
                </div>
                <div className="price-btn">
                  <Link to="/contact"> <a className="th-btn style3 w-100"
                  >Get Started</a></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="price-card">
                <div className="offer-tag">Popular</div>
                <div className="price-card_wrapp">
                  <div className="price-card_icon">
                    <img src="assets/img/icon/price_1_3.svg" alt="img" />
                  </div>
                  <h3 className="box-title">Premium Plan</h3>
                </div>
                <div className="price-card_content">
                  <h4 className="price-card_price">
                    $1580.00<span className="duration">/Per Night</span>
                  </h4>
                  <p className="price-card_text">
                    Essential services for basic and signle person seeking.
                  </p>
                  <div className="checklist">
                    <ul>
                      <li>Up to 2 members</li>
                      <li>Room Service Fees</li>
                      <li>Driver Service Feet</li>
                      <li>Tour management</li>
                      <li>Collaboration</li>
                      <li>Entrance Fees</li>
                      <li>Auto refresh ads</li>
                    </ul>
                  </div>
                </div>
                <div className="price-btn">
                  <Link to="/contact">   <a className="th-btn style3 w-100"
                  >Get Started</a></Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="shape-mockup movingX d-none d-xxl-block"
            data-bottom="0%"
            data-right="-18%"
          >
            <img
              className="gmovingX"
              src="assets/img/normal/about-slide-img.png"
              alt="shape"
            />
          </div>
          <div
            className="shape-mockup d-none d-xl-block"
            data-bottom="-13%"
            data-left="-16%"
          >
            <img src="assets/img/shape/shape_6.png" alt="shape" />
          </div>
          <div
            className="shape-mockup jump d-none d-xl-block"
            data-top="15%"
            data-left="-10%"
          >
            <img src="assets/img/shape/shape_2_2.png" alt="shape" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service