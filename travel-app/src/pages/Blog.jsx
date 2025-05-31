import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <div>
    <div className="breadcumb-wrapper" style={{ backgroundImage: "url('/assets/img/bg/breadcumb-bg.jpg')" }}>
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">Blog Lists View</h1>
          <ul className="breadcumb-menu">
            <li><Link to="/"><a>Home</a></Link></li>
            <li>Blog Lists View</li>
          </ul>
        </div>
      </div>
    </div>
    <section className="th-blog-wrapper space-top space-extra-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-lg-7">
            <div className="th-blog blog-single has-post-thumbnail">
              <div className="blog-img">
                <Link to="/blog-details">
                  <a
                    ><img src="assets/img/blog/blog-s-1-1.jpg" alt="Blog Image"
                  /></a>
                </Link>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                <Link to="/blog">
                    <a className="author"
                      ><i className="fa-light fa-user"></i>by David Smith</a>
                </Link>
                  <Link to="/blog">
                    <a
                      ><i className="fa-solid fa-calendar-days"></i>05 May, 2025</a>
                  </Link>
                  <Link to="/blog-details"><a><img src="assets/img/icon/map.svg" alt="" />Tour Guide</a></Link>
                </div>
                <h2 className="blog-title">
                  <Link to="/blog-details">
                    <a
                      >Living sustainability: A day in the life at realar
                      residence</a>
                  </Link>
                </h2>
                <p className="blog-text">
                  Uniquely pursue emerging experiences before liemerging
                  content. Efficiently underwhelm customer directed total
                  linkage after B2C synergy. Dynamically simplify superior human
                  capital whereas efficient infrastructures generate business
                  web-readiness after wireless outsourcing.
                </p>
                <Link to="/blog-details">
                  <a className="th-btn style4 th-icon"
                    >Read More</a>
                </Link>
              </div>
            </div>
         <div className="th-blog blog-single has-post-thumbnail">
  <div className="blog-img th-slider">
    <Swiper
      effect="fade"
      loop={true}
      navigation={{
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
      }}
      modules={[EffectFade, Navigation]}
    >
      {[
        "assets/img/blog/blog-s-1-2.jpg",
        "assets/img/blog/blog-s-1-4.jpg",
      ].map((src, index) => (
        <SwiperSlide key={index}>
          <Link to="/blog-details">
            <a>
              <img src={src} alt="Blog Image" />
            </a>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Custom navigation buttons */}
    <button className="slider-arrow slider-prev">
      <i className="far fa-arrow-left"></i>
    </button>
    <button className="slider-arrow slider-next">
      <i className="far fa-arrow-right"></i>
    </button>
  </div>

  <div className="blog-content">
    <div className="blog-meta">
      <Link to="/blog"><a className="author">
        <i className="fa-light fa-user"></i>by David Smith
      </a></Link>
     <Link to="/blog">
        <a>
          <i className="fa-solid fa-calendar-days"></i>05 May, 2025
        </a>
     </Link>
     <Link to="/blog-details">
        <a>
          <img src="assets/img/icon/map.svg" alt="" />Tour Guide
        </a>
     </Link>
    </div>
    <h2 className="blog-title">
      <Link to="/blog-details">
        <a>
          Exploring The Green Spaces Of Realar Residence Harmony with Nature
        </a>
      </Link>
    </h2>
    <p className="blog-text">
      Uniquely pursue emerging experiences before liemerging content. Efficiently underwhelm customer directed total
      linkage after B2C synergy. Dynamically simplify superior human capital whereas efficient infrastructures generate
      business web-readiness after wireless outsourcing.
    </p>
    <Link to="/blog-details">
      <a className="th-btn style4 th-icon">
        Read More
      </a>
    </Link>
  </div>
</div>
            <div className="th-blog blog-single has-post-thumbnail">
              <div className="blog-content">
                <div className="blog-meta">
                 <Link to="/blog">
                    <a className="author"
                      ><i className="fa-light fa-user"></i>by David Smith</a>
                 </Link>
                  <Link to="/blog">
                    <a
                      ><i className="fa-solid fa-calendar-days"></i>05 May, 2025</a>
                  </Link>
                 <Link to="/blog-details">
                    <a
                      ><img src="assets/img/icon/map.svg" alt="" />Tour Guide</a>
                 </Link>
                </div>
                <h2 className="blog-title">
                <Link to="/blog-details">
                    <a
                      >Enrich Your Mind Envision Your Future Education for
                      Success</a>
                </Link>
                </h2>
                <p className="blog-text">
                  Uniquely pursue emerging experiences before liemerging
                  content. Efficiently underwhelm customer directed total
                  linkage after B2C synergy. Dynamically simplify superior human
                  capital whereas efficient infrastructures generate business
                  web-readiness after wireless outsourcing.
                </p>
             <Link to="/blog-details">
                  <a className="th-btn style4 th-icon"
                    >Read More</a>
             </Link>
              </div>
            </div>
            <div className="th-blog blog-single has-post-thumbnail">
              <div className="blog-img" data-overlay="bg-title" data-opacity="5">
              <Link to="/blog-details">
                  <a
                    ><img
                      src="assets/img/blog/blog-s-1-2.jpg"
                      alt="Blog Image" /></a>
              </Link><a
                  href="https://www.youtube.com/watch?v=cQfIUPw72Dk"
                  className="play-btn popup-video"
                  ><i className="fas fa-play"></i></a>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
               <Link to="/blog">
                    <a className="author"
                      ><i className="fa-light fa-user"></i>by David Smith</a>
               </Link>
                 <Link to="/blog">
                    <a
                      ><i className="fa-solid fa-calendar-days"></i>05 May, 2025</a>
                 </Link>
                 <Link to="/blog-details">
                    <a 
                      ><img src="assets/img/icon/map.svg" alt="" />Tour Guide</a>
                 </Link>
                </div>
                <h2 className="blog-title">
                <Link to="/blog-details">
                    <a 
                      >University className starting soon while the lovely valley team
                      work</a>
                </Link>
                </h2>
                <p className="blog-text">
                  Uniquely pursue emerging experiences before liemerging
                  content. Efficiently underwhelm customer directed total
                  linkage after B2C synergy. Dynamically simplify superior human
                  capital whereas efficient infrastructures generate business
                  web-readiness after wireless outsourcing.
                </p>
                <Link to="/blog-details">
                  <a className="th-btn style4 th-icon"
                    >Read More</a>
                </Link>
              </div>
            </div>
            <div className="th-pagination">
              <ul>
                <li><Link to="/blog"><a className="active">1</a></Link></li>
                <li><Link to="/blog"><a>2</a></Link></li>
                <li><Link to="/blog"><a>3</a></Link></li>
                <li><Link to="/blog"><a>4</a></Link></li>
                <li>
                 <Link to="/blog">
                    <a className="next-page"
                      >Next <img src="assets/img/icon/arrow-right4.svg" alt=""
                    /></a>
                 </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area">
              <div className="widget widget_search">
                <form className="search-form">
                  <input type="text" placeholder="Search" />
                  <button type="submit"><i className="far fa-search"></i></button>
                </form>
              </div>
              <div className="widget widget_categories">
                <h3 className="widget_title">Categories</h3>
                <ul>
                  <li>
                  <Link to="/blog">
                      <a
                        ><img src="assets/img/theme-img/map.svg" alt="" />City
                        Tour</a>
                  </Link>
                    <span>(8)</span>
                  </li>
                  <li>
                 <Link to="/blog">
                      <a
                        ><img src="assets/img/theme-img/map.svg" alt="" />Beach
                        Tours</a>
                 </Link>
                    <span>(6)</span>
                  </li>
                  <li>
                 <Link to="/blog">
                      <a 
                        ><img src="assets/img/theme-img/map.svg" alt="" />Wildlife
                        Tours</a>
                 </Link>
                    <span>(2)</span>
                  </li>
                  <li>
                   <Link to="/blog">
                      <a
                        ><img src="assets/img/theme-img/map.svg" alt="" />News &
                        Tips</a>
                   </Link>
                    <span>(7)</span>
                  </li>
                  <li>
                   <Link to="/blog">
                      <a
                        ><img
                          src="assets/img/theme-img/map.svg"
                          alt=""
                        />Adventure Tours</a>
                   </Link>
                    <span>(9)</span>
                  </li>
                  <li>
                    <Link to="/blog">
                      <a
                        ><img src="assets/img/theme-img/map.svg" alt="" />Mountain
                        Tours</a>
                    </Link>
                    <span>(10)</span>
                  </li>
                </ul>
              </div>
              <div className="widget">
                <h3 className="widget_title">Recent Posts</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-img">
                    <Link to="/blog-details">
                        <a
                          ><img
                            src="assets/img/blog/recent-post-1-1.jpg"
                            alt="Blog Image"
                        /></a>
                    </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link to="/blog-details">
                          <a className="text-inherit" 
                            >Exploring The Green Spaces Of the island maldives</a>
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link to="/blog">
                          <a
                            ><i className="fa-regular fa-calendar"></i>22/6/ 2025</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                    <Link to="/blog-details">
                        <a
                          ><img
                            src="assets/img/blog/recent-post-1-2.jpg"
                            alt="Blog Image"
                        /></a>
                    </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link to="/blog-details">
                          <a className="text-inherit"
                            >Harmony With Nature Of Belgium Tour and travle</a>
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                       <Link to="/blog">
                          <a
                            ><i className="fa-regular fa-calendar"></i>25/6/ 2025</a>
                       </Link>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                    <Link to="/blog-details">
                        <a
                          ><img
                            src="assets/img/blog/recent-post-1-3.jpg"
                            alt="Blog Image"
                        /></a>
                    </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link to="/blog-details">
                          <a className="text-inherit" 
                            >Exploring The Green Spaces Of Realar Residence</a>
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                      <Link to="/blog">
                          <a
                            ><i className="fa-regular fa-calendar"></i>27/6/ 2025</a>
                      </Link>
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
                  <Link to="/blog"><a>Rent</a></Link> <Link to="/blog"><a >Innovate</a></Link>
                  <Link to="/blog"><a >Hotel</a></Link> <Link to="/blog"><a >Modern</a></Link>
                  <Link to="/blog"><a >Luxury</a></Link> <Link to="/blog"><a>Travel</a></Link>
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

export default Blog