import React from 'react'
// import 'swiper/swiper-bundle.min.css';


function AboutNews() {
  return (
     <div>
 
  {/* testimonials */}
  <section className="py-5 testimonials position-relative ">
    {/* <img class="bg-img" src="./assets/img/bg2.jpg" alt="">
  <div class="bg-filter "></div> */}
    <div className="w-100 d-flex align-items-center justify-content-center flex-column pb-5">
      <h1 className="display-6  pb-3 text-center pt-5 glow-text lh-1 mb-3 text-white fw-bold section-title g-text">
        What Clients Say About Us
      </h1>
      <p className="text-center text-dark">We hold the superiority and trust in the IT Services</p>
    </div>
    <div className="swiper mySwiper mx-5 py-5">
      <div className="swiper-wrapper">
        <div style={{margin:"50px 0px"}} className="swiper-slide d-flex align-items-center justify-content-center">
          <div className="item test-item bg-white p-3 py-4 rounded-10 d-flex align-items-center justify-content-center w-75 flex-column">
            <div className="shadow-effect d-flex align-items-center justify-content-center flex-column">
              <img style={{backgroundColor:"wheat"}} className="img-circle w-25 rounded-pill mb-3" src="./assets/img/pngtree-young-indian-man-png-image_10149662.png" alt />
              <p className="text-center"><sup>"</sup> Working with Team MetaBlock was a real delight. They are extremely professional and
                                    they have good expertise in Custom Development. Highly recommended.
                <sup>"</sup>
              </p>
            </div>
            <div className="testimonial-name">Deepesh Gohil</div>
          </div>
        </div>
        <div style={{margin:"50px 0px"}} className="swiper-slide d-flex align-items-center justify-content-center">
          <div className="item test-item bg-white p-3 py-4 rounded-10 d-flex align-items-center justify-content-center w-75 flex-column">
            <div className="shadow-effect d-flex align-items-center justify-content-center flex-column">
              <img style={{backgroundColor: "wheat"}} className="img-circle w-25 rounded-pill mb-3" src="./assets/img/indian-man-portrait-close-up-happy-young-56800239.webp" alt />
              <p className="text-center">The team of MetaBlock is very supportive and helpful. They created website for my
                                    business with eye-catchy user-interface and latest features.</p>
            </div>
            <div className="testimonial-name"> Rahul sharma </div>
          </div>
        </div>
        <div className="swiper-slide d-flex align-items-center justify-content-center">
          <div className="item test-item bg-white p-3 py-4 rounded-10 d-flex align-items-center justify-content-center w-75 flex-column">
            <div className="shadow-effect d-flex align-items-center justify-content-center flex-column">
              <img className="img-circle w-25 rounded-pill mb-3" src="./assets/img/eddd7797e2a100927074e8682aa7b03b.jpg" alt />
              <p className="text-center">I have been working with MetaBlock and his team, The entire project has been a
                                    pleasure to work on because of his team response quickly, is reliable, and takes
                                    care of any requests immediately. </p>
            </div>
            <div className="testimonial-name">Sumit sharma</div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination" />
    </div>
  </section>
</div>

  )
}

export default AboutNews;