import React from 'react'
import { FaFacebookF, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

// import videoSource from './assets/mp4/bg.mp4';


function Message() {
  return (
   <div>
  <section className="cta position-relative py-5 changing overflow-hidden">
    <img className="bg-img" src="./assets/img/blog-background-01.png" alt />
    <div className="bg-filter" />
    {/* <img class="bg-img" src="./assets/img/h2-img-3.png" alt=""> */}
    <div className=" justify-content-center text-center py-5 d-flex w-100 overflow-hidden row">
      <div className="col-lg-5 container c-contant-text ps-5 row gx-5 ms-5 align-items-center">
        <h1 style={{fontSize:"50px"}} className="display-4 pb-3 glow-text c-head text-white fw-bold g-text g-text-h">Why Choose Us</h1>
        {/* <h2 class="text-white display-1 lh-1 mb-4 ">
                  WE MAKE DREAMS <br> COME TO LIFE
              </h2> */}
        <p className="lead fw-normal text-light mb-0 ">We feed the needs of our clients with the best team distribution. In addition, our pool of talent helps us achieve outstanding and astonishing results in each project that we undertake.</p>
        <p className="lead fw-normal text-light mb-4 ">Our mission at MetaBlock is to create the most useful solutions for our clients and to help them achieve all their digital goals.</p>
        {/* <a href="#!" class="btn btn-outline-primary text-primary1 bg-transparent">Explore games</a> */}
      </div>
      <div className="col-lg-6">
        <div className="row gap-5 c-contant-1 d-flex justify-content-center">
          <div className="award-1 col-lg-4 p-0 px-1 pt-1">
            <div className="text-start text-white p-award-1 rounded-10 p-3">
              <h1 className="fs-4 year">YEARS of Work Exp.</h1>
              <h1 className="text-warning">10+</h1>
              <p>substantial experience in delivering IT solutions &amp; services.</p>
            </div>
          </div>
          <div className="award-1 col-lg-4 p-0 px-1 pt-1">
            <div className="text-start text-white p-award-1 rounded-10 p-3">
              <h1 className="fs-4 year">Team Member</h1>
              <h1 className="text-warning">100+</h1>
              <p>We have the best team of developers and designers with diverse skills that help us work into multiple services.</p>
            </div>
          </div>
          <div className="award-1 col-lg-4 p-0 px-1 pt-1">
            <div className="text-start text-white p-award-1 rounded-10 p-3">
              <h1 className="fs-4 year">Happy Clients</h1>
              <h1 className="text-warning">1000+</h1>
              <p>From customer service to customer satisfaction and loyalty</p>
            </div>
          </div>
          <div className="award-1 col-lg-4 p-0 px-1 pt-1">
            <div className="text-start text-white p-award-1 rounded-10 p-3">
              <h1 className="fs-4 year">Cost Effective</h1>
              <h1 className="text-warning">100%</h1>
              <p> We offer 100% cost-effective service in 100% satisfaction way.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   <section className="cta position-relative py-5 changing overflow-hidden">
    <img className="bg-img" src="./assets/img/blog-background-01.png" alt />
    <div className="bg-filter" />
    {/* <img class="bg-img" src="./assets/img/h2-img-3.png" alt=""> */}
    <div style={{paddingBottom:"100px"}}  className=" justify-content-center text-center  d-flex w-100 overflow-hidden row">
      <div className="col-lg-5 container c-contant-text ps-5 row gx-5 ms-5 align-items-center">
        {/* <h1 style={{fontSize:"50px"}} className="display-4 pb-3 glow-text c-head text-white fw-bold g-text g-text-h">Why Choose Us</h1>
        {/* <h2 class="text-white display-1 lh-1 mb-4 ">
                  WE MAKE DREAMS <br> COME TO LIFE
              </h2> */}
        <p className="lead fw-normal text-light mb-0 ">In-house development, coupled with reliable product delivery, underscores our commitment as your trusted partner. Our focus on incorporating the latest technologies empowers us to provide innovative solutions, ensuring we remain at the forefront of the industry.</p>
        <p className="lead fw-normal text-light mb-4 ">With a dedicated emphasis on in-house development, our team is empowered to craft tailored solutions that precisely meet your needs. The successful delivery of products reflects our unwavering commitment to quality and efficiency, solidifying our role as a trusted partner in your journey. </p>
        {/* <a href="#!" class="btn btn-outline-primary text-primary1 bg-transparent">Explore games</a> */} 
      </div>
      <div className="col-lg-6">
        <div className="row gap-5 c-contant-1 d-flex justify-content-center">
          <div className="award-1 col-lg-4 p-0 px-1 pt-1">
            <div className="text-start text-white p-award-1 rounded-10 p-3">
              <h1 className="fs-4 year">In House Development</h1>
              <h1 className="text-warning">1000+</h1>
              <p>In-house development ensures control, agility, and seamless integration.</p>
            </div>
          </div>
          <div className="award-1 col-lg-4 p-0 px-1 pt-1">
            <div className="text-start text-white p-award-1 rounded-10 p-3">
              <h1 className="fs-4 year">Product delivered</h1>
              <h1 className="text-warning">100% </h1>
              <p>Complete product delivery achieved, 100% fulfillment.</p>
            </div>
          </div>
          <div className="award-1 col-lg-4 p-0 px-1 pt-1">
            <div className="text-start text-white p-award-1 rounded-10 p-3">
              <h1 className="fs-4 year">Your trusted Partner</h1>
              <h1 className="text-warning">100%</h1>
              <p>Your trusted partner in success, committed to delivering excellence and value.</p>
            </div>
          </div>
          <div className="award-1 col-lg-4 p-0 px-1 pt-1">
            <div className="text-start text-white p-award-1 rounded-10 p-3">
              <h1 className="fs-4 year">Latest technologies</h1>
              <h1 className="text-warning">100%</h1>
              <p>Innovating effortlessly with the latest technologies for seamless progress.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  {/* contect us sec-7 */}
  <section className="section position-relative py-5">
    <video className="bg-img" playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
      <source src="./assets/img/blog/WhatsApp Video 2024-02-02 at 16.53.25_c5287eef.mp4" type="video/mp4" />
    </video>
    {/* <img class="bg-img c-bg-img" src="./assets/img/Rectangle1.png" alt=""> */}
    <div className="bg-filter" />
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6 pb-5">
          <div className="section-title text-center teext-white">
            <h1 className="text-white pb-3 g-text">Let’s get connected</h1>
            <p className="text-white">Get in touch with our team to reimagine your game with a new gaming revolution.
            </p>
          </div>
        </div>
        <div className="col-lg-10">
          <div className="shadow rounded p-5 bg-lightl">
            <div className="row">
              <div className="col-12 mb-4">
                <h4 className="text-white">Leave Us A Message</h4>
              </div>
              <div className="col-lg-6 bg-white py-5 px-5 rounded c-box">
                <div className="contact-form">
                  <form action="#!">
                    <div className="form-group mb-4 pb-2">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Full
                        Name</label>
                      <input type="text" className="form-control mb-2 shadow-none" id="contact_name" />
                    </div>
                    <div className="form-group mb-4 pb-2">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Email
                        address</label>
                      <input type="email" className="form-control shadow-none" id="contact_email" />
                    </div>
                    <div className="form-group mb-4 pb-2">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label">Write
                        Message</label>
                      <textarea className="form-control shadow-none" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                    </div>
                    <div className="w-fit">
                      <a href="#!" className="color-btn nohover gap-2">Submit</a>
                    </div>
                    {/* <a href="#!" class="btn btn-outline-primary text-primary1 bg-primary1 fade-in one fs-6">Submit</a> */}
                    {/* <button class="btn btn-primary-outline w-50" type="submit">Send Message</button> */}
                  </form>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="contact-info text-white">
                  <div className="block mt-0">
                    <h4 className="h5">Still Have Questions?</h4>
                    <div className="content">Call Us We Will Be Happy To Help
                      <br /> <a href="tel:+919358593001" style={{color: 'white', /* display: 'none', */
                                          /* color: 'var(--bs-link-color)', */
                                          textDecoration: 'none'}}> +919358593001 </a>
                                        
                      <br />  <br /> Monday - Saturday
                      <br />10AM TO 7PM
                      <br />  <br />  <a href="tel:+919358593003" style={{color: 'white', /* display: 'none', */
                                          /* color: 'var(--bs-link-color)', */
                                          textDecoration: 'none'}}> +919358593003 </a>
                    </div>
                  </div>
                   <br /> 
                  <div className="block mt-4">
                    <h4 className="h5">Address</h4>
                    <div className="content">tammana Apartment
                      <br />Sarti Nagar, Shyam Nagar
                      <br />  Jaipur, Rajasthan 302019.
                    </div>
                  </div>
                  <div className="block">
                    <ul className="list-unstyled list-inline my-4 social-icons">
      <li className="list-inline-item me-3">
        <a title="Explorer Facebook Profile" className="text-white" target='blank' href="https://www.facebook.com/metablocktechnologies/">
          <FaFacebookF />
        </a>
      </li>
      <li className="list-inline-item me-3">
        <a title="Explorer LinkedIn Profile" className="text-white" target='blank' href="https://www.linkedin.com/company/metablocktechnologies/mycompany/">
          <FaLinkedin />
        </a>
      </li>
      <li className="list-inline-item me-3">
        <a title="Explorer Instagram Profile" className="text-white"  target='blank' href="https://www.instagram.com/metablocktechnologies1/">
          <FaInstagram />
        </a>
      </li>
      <li className="list-inline-item me-3">
        <a title="Explorer YouTube Profile" className="text-white" target='blank' href="https://www.youtube.com/@metablocktechnologies">
          <FaYoutube />
        </a>
      </li>
    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Message;