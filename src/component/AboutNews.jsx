import React from 'react'
// import 'swiper/swiper-bundle.min.css';


function AboutNews() {
  return (
     <div>
  <section className="py-5 blogs position-relative ">
    <img className="bg-img" src="./assets/img/blog-background-01.png" alt />
    <div className="bg-filter blog-filter" />
    <div className="w-100 d-flex align-items-center justify-content-center flex-column pb-5">
      <h1 className="display-6 px-1 pb-3 pb-2 text-center pt-5 glow-text lh-1 mb-3 text-white fw-bold section-title g-text">
        What’s New? Latest Insights &amp; News
      </h1>
      <p className="text-center text-white">Explore some of our most interesting &amp; informative blogs &amp; ideas.</p>
    </div>
    <div className="swiper mySwiper1 mx-5 py-5 ">
      <div className="swiper-wrapper">
        <div className="swiper-slide d-flex align-items-center justify-content-center">
          <div className="item blog-item bg-white pt-0 py-4 rounded-10 d-flex align-items-start justify-content-center w-75 flex-column">
            <div className="shadow-effect rounded-10 overflow-hidden d-flex align-items-start justify-content-center flex-column">
              <img className="img-circle blog-img w-100 rounded mb-3" src="./assets/img/blog/Top-Mobile-Game-Development-Companies-in-India.png" alt />
              <div className="text-start px-3 pb-2 fw-semibold text-dark">Top Mobile Game Development Companies In India </div>
              <p className="text-start px-3 text-trun">Mobile game developers are creating game applications for various reasons, such as the increasing capabilities </p>
            </div>
            <div className="testimonial-name text-btn text-start mx-3 position-relative"><a href="Top-Mobile-Game-Development-Companies-in-India.html">Read more</a> </div>
          </div>
        </div>
        <div className="swiper-slide d-flex align-items-center justify-content-center">
          <div className="item blog-item bg-white pt-0 py-4 rounded-10 d-flex align-items-start justify-content-center w-75 flex-column">
            <div className="shadow-effect rounded-10 overflow-hidden d-flex align-items-start justify-content-center flex-column">
              <img className="img-circle blog-img w-100 rounded mb-3" src="./assets/img/blog/Top-10-Mind-Blowing-Free-AI-Tools-in-2023.png" alt />
              <div className="text-start px-3 pb-2 fw-semibold text-dark">Top 10 Mind-Blowing Free AI Tools In 2023</div>
              <p className="text-start px-3 text-trun">Artificial Intelligence (AI) is having a transformative impact on numerous domains, encompassing arts, writing, and education.</p>
            </div>
            <div className="testimonial-name text-btn text-start mx-3 position-relative"><a href>Read more</a></div>
          </div>
        </div>
        <div className="swiper-slide d-flex align-items-center justify-content-center">
          <div className="item blog-item bg-white pt-0 py-4 rounded-10 d-flex align-items-start justify-content-center w-75 flex-column">
            <div className="shadow-effect rounded-10 overflow-hidden d-flex align-items-start justify-content-center flex-column">
              <img className="img-circle blog-img w-100 rounded mb-3" src="./assets/img/blog/Top-10-mobile-game-development-platforms-or-technology.png" alt />
              <div className="text-start px-3 pb-2 fw-semibold text-dark">Top 10 Mobile Game Dev Platforms Or Technology</div>
              <p className="text-start px-3 text-trun">In today's world, the number of smartphone users has reached billions worldwide. These devices serve multiple purposes</p>
            </div>
            <div className="testimonial-name text-btn text-start mx-3 position-relative"><a href="Top-10-Mind-Blowing-Free-AI-Tools-in-2023.html">Read more</a></div>
          </div>
        </div>
        <div className="swiper-slide d-flex align-items-center justify-content-center">
          <div className="item blog-item bg-white pt-0 py-4 rounded-10 d-flex align-items-start justify-content-center w-75 flex-column">
            <div className="shadow-effect rounded-10 overflow-hidden d-flex align-items-start justify-content-center flex-column">
              <img className="img-circle blog-img w-100 rounded mb-3" src="./assets/img/blog/Top-Mobile-Game-Development-Companies-in-India.png" alt />
              <div className="text-start px-3 pb-2 fw-semibold text-dark">Top 5 Trends That Will Shape Gaming’s Future</div>
              <p className="text-start px-3 text-trun">Today, the video gaming industry generates more revenue than the movie and sports industries combined. This growth has been particularly</p>
            </div>
            <div className="testimonial-name text-btn text-start mx-3 position-relative"><a href="Top-5-Trends-that-will-shape-gamings-future.html">Read more</a></div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination" />
    </div>
  </section>
  {/* testimonials */}
  <section className="py-5 testimonials position-relative ">
    {/* <img class="bg-img" src="./assets/img/bg2.jpg" alt="">
  <div class="bg-filter "></div> */}
    <div className="w-100 d-flex align-items-center justify-content-center flex-column pb-5">
      <h1 className="display-6  pb-3 text-center pt-5 glow-text lh-1 mb-3 text-white fw-bold section-title g-text">
        What Clients Say About Us
      </h1>
      <p className="text-center text-dark">We hold the superiority and trust in the global market!</p>
    </div>
    <div className="swiper mySwiper mx-5 py-5">
      <div className="swiper-wrapper">
        <div className="swiper-slide d-flex align-items-center justify-content-center">
          <div className="item test-item bg-white p-3 py-4 rounded-10 d-flex align-items-center justify-content-center w-75 flex-column">
            <div className="shadow-effect d-flex align-items-center justify-content-center flex-column">
              <img className="img-circle w-25 rounded-pill mb-3" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt />
              <p className="text-center"><sup>"</sup> Metakops a name which came across while I randomly searching for game development companies in Udaipur.The game was too much trickier with different modules but the core developer team has damn good experience
                and they showed how it will be done. Thank you so much for your services.
                <sup>"</sup>
              </p>
            </div>
            <div className="testimonial-name">Deepesh Gohil</div>
          </div>
        </div>
        <div className="swiper-slide d-flex align-items-center justify-content-center">
          <div className="item test-item bg-white p-3 py-4 rounded-10 d-flex align-items-center justify-content-center w-75 flex-column">
            <div className="shadow-effect d-flex align-items-center justify-content-center flex-column">
              <img className="img-circle w-25 rounded-pill mb-3" src="./assets/img/kashish.jpeg" alt />
              <p className="text-center">I have developed a mobile grocery app with META KOPS game development company. I had a wonderful experience with the services and I am truly satisfied with the upbringings. Thanks Metakops for great services and quality.🤟</p>
            </div>
            <div className="testimonial-name"> Kashish </div>
          </div>
        </div>
        <div className="swiper-slide d-flex align-items-center justify-content-center">
          <div className="item test-item bg-white p-3 py-4 rounded-10 d-flex align-items-center justify-content-center w-75 flex-column">
            <div className="shadow-effect d-flex align-items-center justify-content-center flex-column">
              <img className="img-circle w-25 rounded-pill mb-3" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt />
              <p className="text-center">Best Company for B2B services in Mobile app and Game development sector. great team everyone is very supportive and dedicated to work. IdeaBox Recommended METAKOPS for B2b work and individual also.</p>
            </div>
            <div className="testimonial-name">Ideabox Technology</div>
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