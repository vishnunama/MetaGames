 import React from 'react'
 import 'bootstrap/dist/css/bootstrap.min.css';

 import "./Home.css"
import ProsessAndServices from './ProsessAndServices';
import TrendingProducts from './TrendingProducts';
import AboutNews from './AboutNews';
import Message from './Message';
import { IonIcon } from '@ionic/react';
import { rocketOutline } from 'ionicons/icons';

import { useNavigate } from 'react-router-dom';

function Home() {
   const navigate = useNavigate();
   return (
    <>
      <section className="masthead d-flex ">
  {/* background image */}
  <img className="bg-img sm-h100vh" src="./assets/img/metakops-game-development-company-banner.png" alt />
  {/* <div class="bg-filter"></div> */}
  <div className="container px-5 d-flex w-100 overflow-hidden">
    <div className="row gx-5 align-items-center ">
      <div className="col-lg-6 p-0">
        {/* Mashead text and app badges*/}
        <div className="">
          <h1 className="display-4 pb-3 glow-text lh-1 mb-3 text-start fw-bold fade-in one g-text ">
            The Next Revolution in Gaming
          </h1>
          <p className="lead fw-normal mb-4 fade-in one text-white">Relive the passion of gaming by exploring new adventures along with its development.</p>
          <div className="d-flex flex-column flex-lg-row align-items-center fade-in one w-fit">
            {/* <a class="me-lg-3 mb-4 mb-lg-0 " href="#! "><img class="app-badge " src="assets/img/google-play-badge.svg " alt="... " /></a> */}
            {/* <a href="#! "><img class="app-badge " src="assets/img/app-store-badge.svg " alt="... " /></a> */}
            {/* <a href="#!" class="btn btn-outline-primary text-primary1 bg-primary1 fade-in one">Explore games</a> */}
            <a onClick={()=>navigate("/Aboutus")} style={{cursor:"pointer"}} className="color-btn btn-hover gap-2">Explore games <IonIcon icon={rocketOutline} className="fs-5 rocket" /></a>
          </div>
        </div>
      </div>
      <div className="col-lg-6 ">
        {/* Masthead device mockup feature*/}
        <div className="masthead-device-mockup ">
          <div className="device-wrapper ">
            {/* <img style="max-width: 100%; height: 100% " src="./assets/img/ " alt=" "> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="section core-value bg-tertiary py-5 pb-0 position-relative">
  <img className="bg-img parellex-img" src="./assets/img/gray-abstract-wireframe-technology-background.jpg" alt />
  <div className="container py-5">
    <div className="row align-items-center">
      <div className="col-lg-5">
        <div className="row position-relative gy-4">
          <img className="w-100" src="./assets/img/About-image.png" alt />
        </div>
      </div>
      <div className="col-lg-7 mt-5 mt-lg-0">
        <div className="section-title ps-0 ps-lg-5">
          <p className="fs-4 fw-semibold mb-2 g-text lg-text-center">
            We Provide Best tech solutions for your business</p>
          <h3 className="h1 display-4 mb-3 fw-bold lg-text-center">Mobile Game &amp; App Development Company in udaipur
          </h3>
          <div className="content">
            <p className="fs-5  mb-3">Trusted technical partner for more than 30+ companies from startups to enterprise leaders.</p>
            <p className="fs-5  mb-3">At Metakops, our team of designers and game developers bring expertise above and beyond the ordinary to each project. In addition, we also help the clients to provide the best user experience to their consumers.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    <section className="cta position-relative overflow-hidden">
  <img className="bg-img" src="./assets/img/pexels-fauxels-3184418.jpg" style={{width: '50%!important'}} alt />
  <div className="bg-filter-dark" />
  {/* <img class="bg-img" src="./assets/img/h2-img-3.png" alt=""> */}
  <div className="row">
    <div className="cta-content col-lg-6 d-flex align-items-center justify-content-center overflow-hidden">
      <div className="container px-5 row gx-5 py-5 align-items-center">
        <h1 className="display-5 pb-3 glow-text lh-1 mb-3 text-white fw-bold g-text text-center">WE MAKE DREAMS
          <br /> COME TO LIFE
        </h1>
        {/* <h2 class="text-white display-1 lh-1 mb-4 ">
              WE MAKE DREAMS <br> COME TO LIFE
          </h2> */}
        <p className="lead fw-normal text-white mb-4 text-center">
          The Game development is easy with METAKOPS and allows you to build and design your own Game. we create the games as you dream it. Metakops have Experience React Native and Flutter app developer based on across India. We deliver Mobile games, eCommerce
          development, enterprise software development, and all other EMERGING TECHNOLOGIES LIKE Blockchain Development, AR/VR, Machine Learning, and AI.
        </p>
        {/* <a href="#!" class="btn btn-outline-primary text-primary1 bg-transparent">Explore games</a> */}
      </div>
    </div>
    <div className="col-lg-6 ">
      <img className="cta-content-img" src="./assets/img/metakops-team.jpg" alt />
    </div>
  </div>
</section>

<ProsessAndServices />
<TrendingProducts />
<AboutNews/>
<Message/>







</>


   )
 }
 
 export default Home
