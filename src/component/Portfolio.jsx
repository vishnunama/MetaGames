// import React from 'react'
// import "./Portfolio.css"

// function Portfolio() {
//   return (
//     <div>


//        <section className="page-header pt-5 bg-tertiary py-5">
//   <img className="bg-img" src="https://www.metakops.com/assets/img/top-banner-metakops-gaming-studio.png" alt />
//   <div className="bg-filter" />
//   <div className="container w-100 pt-5">
//     <div className="row w-100">
//       <div className="col-8 mx-auto text-center text-white">
//         <h2 className="mb-3 text-capitalize text-white">Portfolio</h2>
//         <ul className="list-inline breadcrumbs text-capitalize" style={{fontWeight: 500}}>
//           <li className="list-inline-item text-white"><a className="text-white" href="https://www.metakops.com/">Home</a>
//           </li>
//           <li className="list-inline-item text-white">/ &nbsp; <a className="text-white" href="career.html">portfolio</a>
//           </li>
//         </ul>
//         {/* <p>Metakops is a product engineering company.</p> */}
//       </div>
//     </div>
//   </div>
// </section>


//     <section className="portfolio">
//   <div className="container">
//     <div className="tab-wrap">
//       {/* active tab on page load gets checked attribute */}
//       <input type="radio" id="tab1" name="tabGroup1" className="tab" defaultChecked />
//       <label htmlFor="tab1">All</label>
//       <input type="radio" id="tab2" name="tabGroup1" className="tab" />
//       <label htmlFor="tab2">App</label>
//       <input type="radio" id="tab3" name="tabGroup1" className="tab" />
//       <label htmlFor="tab3">Game</label>
//       <input type="radio" id="tab4" name="tabGroup1" className="tab" />
//       <label htmlFor="tab4">Graphic</label>
//       <div className="tab__content">
//         <div className="row portfolio-container" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500}>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/application-development-by-metakops-gaming-development-company (5).png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <div>
//                   <a href="assets/img/portfolio/application-development-by-metakops-gaming-development-company.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/gaming-development-by-metakops-gaming-development-company.png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <div>
//                   <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/best-graphic-desgin-services-by-metakops-gaming-development-company.png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <h3> </h3>
//                 <div>
//                   <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title=" "><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-card">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/gaming-development-by-metakops-gaming-development-company (3).png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <h3> </h3>
//                 <div>
//                   <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title=" "><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/best-graphic-desgin-services-by-metakops-gaming-development-company (3).png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <div>
//                   <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/application-development-by-metakops-gaming-development-company (6).png" className="img-fluid" alt />
//               <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <div>
//                   <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-card">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/gaming-development-by-metakops-gaming-development-company (6).png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <h3> </h3>
//                 <div>
//                   <a href="assets/img/portfolio/" data-gallery="portfolioGallery" className="portfolio-lightbox" title=" "><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-card">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/gaming-development-by-metakops-gaming-development-company (2).png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <h3> </h3>
//                 <div>
//                   <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title=" "><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/application-development-by-metakops-gaming-development-company.png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <div>
//                   <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 1"><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/*Application-development-*/}
//       <div className="tab__content">
//         <div className="row portfolio-container" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500}>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/application-development-by-metakops-gaming-development-company.png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <div>
//                   <a href="assets/img/portfolio/" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/application-development-by-metakops-gaming-development-company (2).png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <div>
//                   <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/application-development-by-metakops-gaming-development-company (3).png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <h3> </h3>
//                 <div>
//                   <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title=" "><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/application-development-by-metakops-gaming-development-company (4).png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <h3> </h3>
//                 <div>
//                   <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title=" "><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/application-development-by-metakops-gaming-development-company (5).png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <h3> </h3>
//                 <div>
//                   <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title=" "><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/application-development-by-metakops-gaming-development-company (6).png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <h3> </h3>
//                 <div>
//                   <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title=" "><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/*Gaming-development-*/}
//       <div className="tab__content">
//         <div className="row portfolio-container" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500}>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-card">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/gaming-development-by-metakops-gaming-development-company.png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <h3> </h3>
//                 <div>
//                   <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title=" "><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-card">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/gaming-development-by-metakops-gaming-development-company (2).png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <h3> </h3>
//                 <div>
//                   <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title=" "><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/gaming-development-by-metakops-gaming-development-company (3).png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <div>
//                   <a href="assets/img/portfolio/gaming-development-by-metakops-gaming-development-company.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 1"><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/gaming-development-by-metakops-gaming-development-company (4).png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <div>
//                   <a href="assets/img/portfolio/gaming-development-by-metakops-gaming-development-company.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 1"><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/gaming-development-by-metakops-gaming-development-company (5).png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <div>
//                   <a href="assets/img/portfolio/gaming-development-by-metakops-gaming-development-company.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 1"><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/gaming-development-by-metakops-gaming-development-company (6).png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <div>
//                   <a href="assets/img/portfolio/gaming-development-by-metakops-gaming-development-company.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 1"><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/*Graphic services*/}
//       <div className="tab__content">
//         <div className="row portfolio-container" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500}>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/best-graphic-desgin-services-by-metakops-gaming-development-company.png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <div>
//                   <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 1"><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/best-graphic-desgin-services-by-metakops-gaming-development-company (2).png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <div>
//                   <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 1"><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/best-graphic-desgin-services-by-metakops-gaming-development-company (3).png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <div>
//                   <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 1"><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/best-graphic-desgin-services-by-metakops-gaming-development-company (4).png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <div>
//                   <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 1"><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/best-graphic-desgin-services-by-metakops-gaming-development-company (5).png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <div>
//                   <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 1"><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
//             <div className="portfolio-item">
//               <img src="assets/img/portfolio/best-graphic-desgin-services-by-metakops-gaming-development-company (6).png" className="img-fluid" alt />
//               <div className="portfolio-info">
//                 <div>
//                   <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 1"><i className="bx bx-plus" /></a>
//                   <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//     </div>
//   )
// }

// export default Portfolio