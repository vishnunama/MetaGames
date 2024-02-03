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
import Carousel from './Carousel';

function Home() {
   const navigate = useNavigate();
   return (
    <>

      <section className="masthead d-flex ">
  {/* background image */}
  <div>

  </div>
  <div style={{paddingTop:"50px",marginBottom:"40px"}} className="bg-img sm-h110vh">

<Carousel />
  </div>

  {/* <img className="bg-img sm-h100vh" src="./assets/img/WhatsApp Image 2024-02-02 at 14.07.18_ef1ff58a.jpg" alt />  */}

  {/* <div class="bg-filter"></div> */}
  <div className="container px-5 d-flex w-100 overflow-hidden">
    <div className="row gx-5 align-items-center ">
      <div className="col-lg-6 p-0">
        {/* Mashead text and app badges*/}
        <div className="">
          <h1 className="display-4 pb-3 glow-text lh-1 mb-3 text-start fw-bold fade-in one g-text ">
            The Next Revolution in IT

          </h1>
          <p className="lead fw-normal mb-4 fade-in one text-white">We are focused on making India young and economically strong by promoting business, education and financial freedom.</p>
          <div className="d-flex flex-column flex-lg-row align-items-center fade-in one w-fit">
            {/* <a class="me-lg-3 mb-4 mb-lg-0 " href="#! "><img class="app-badge " src="assets/img/google-play-badge.svg " alt="... " /></a> */}
            {/* <a href="#! "><img class="app-badge " src="assets/img/app-store-badge.svg " alt="... " /></a> */}
            {/* <a href="#!" class="btn btn-outline-primary text-primary1 bg-primary1 fade-in one">Explore games</a> */}
            <a onClick={()=>navigate("/Aboutus")} style={{cursor:"pointer"}} className="color-btn btn-hover gap-2">Know about <IonIcon icon={rocketOutline} className="fs-5 rocket" /></a>
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
          <img className="w-100" src="./assets/img/Create a real photo in 169 aspect ratio illustrati.jpg" alt />
        </div>
      </div>
      <div className="col-lg-7 mt-5 mt-lg-0">
        <div className="section-title ps-0 ps-lg-5">
          <p className="fs-4 fw-semibold mb-2 g-text lg-text-center">
             Blockchain Development services </p>
          <h3 className="h1 display-4 mb-3 fw-bold lg-text-center">Web Development &amp; Blockchain  Development Company
          </h3>
          <div className="content">
            <p className="fs-5  mb-3">Trusted partner for 30+ companies. Expert IT solutions. Elevate your ventures with our innovative and tailored expertise.</p>
            <p className="fs-5  mb-3">We are a top Blockchain app development company, proficient in both web and blockchain development. Our skilled team excels in integrating decentralized solutions for diverse applications, from smart contracts to games and exchanges. Join us as we redefine possibilities and empower businesses in the evolving digital landscape.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    <section className="cta position-relative overflow-hidden">
  <img className="bg-img" src="./assets/img/person sitting at a desk (1).jpg" style={{width: '50%!important'}} alt />
  <div className="bg-filter-dark" />
  {/* <img class="bg-img" src="./assets/img/h2-img-3.png" alt=""> */}
  <div className="row">
    <div className="cta-content col-lg-6 d-flex align-items-center justify-content-center overflow-hidden">
      <div className="container px-5 row gx-5 py-5 align-items-center">
        <h1 className="display-5 pb-3 glow-text lh-1 mb-3 text-white fw-bold g-text text-center">Best Web & Mobile App Development Company</h1>
        {/* <h2 class="text-white display-1 lh-1 mb-4 ">
              WE MAKE DREAMS <br> COME TO LIFE
          </h2> */}
        <p className="lead fw-normal text-white mb-4 text-center">
         A full-stack mobile and website development company that caters to all your requirements. We specialize in eCommerce and Custom application development for international and regional brands.
        </p>
        {/* <a href="#!" class="btn btn-outline-primary text-primary1 bg-transparent">Explore games</a> */}
      </div>
    </div>
    <div className="col-lg-6 ">
      <img className="cta-content-img" src="./assets/img/person sitting at a desk (1).jpg" alt />
    </div>
  </div>
</section>
{/* <Carousel/> */}

<ProsessAndServices />
<TrendingProducts />
<AboutNews/>
<Message/>












</>


   )
 }
 
 export default Home
