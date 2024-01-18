import React from 'react'
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
        <h1 className="display-4 pb-3 glow-text c-head text-white fw-bold g-text g-text-h">We're changing the game, just like you</h1>
        {/* <h2 class="text-white display-1 lh-1 mb-4 ">
                  WE MAKE DREAMS <br> COME TO LIFE
              </h2> */}
        <p className="lead fw-normal text-light mb-0 ">We feed the needs of our clients with the best team distribution. In addition, our pool of talent helps us achieve outstanding and astonishing results in each project that we undertake.</p>
        <p className="lead fw-normal text-light mb-4 ">Our mission at Metakops is to create the most useful solutions for our clients and to help them achieve all their digital goals.</p>
        {/* <a href="#!" class="btn btn-outline-primary text-primary1 bg-transparent">Explore games</a> */}
      </div>
      <div className="col-lg-6">
        <div className="row gap-5 c-contant-1 d-flex justify-content-center">
          <div className="award-1 col-lg-4 p-0 px-1 pt-1">
            <div className="text-start text-white p-award-1 rounded-10 p-3">
              <h1 className="fs-4 year">YEARS of Work Exp.</h1>
              <h1 className="text-warning">5+</h1>
              <p>substantial experience in delivering IT solutions &amp; services.</p>
            </div>
          </div>
          <div className="award-1 col-lg-4 p-0 px-1 pt-1">
            <div className="text-start text-white p-award-1 rounded-10 p-3">
              <h1 className="fs-4 year">Team Member</h1>
              <h1 className="text-warning">30+</h1>
              <p>We have the best team of developers and designers with diverse skills that help us work into multiple services.</p>
            </div>
          </div>
          <div className="award-1 col-lg-4 p-0 px-1 pt-1">
            <div className="text-start text-white p-award-1 rounded-10 p-3">
              <h1 className="fs-4 year">Happy Clients</h1>
              <h1 className="text-warning">100+</h1>
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
  {/* contect us sec-7 */}
  <section className="section position-relative py-5">
    <video className="bg-img" playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
      <source src="./assets/mp4/bg.mp4" type="video/mp4" />
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
                      <br /> <a href="tel:+917300003151" style={{color: 'white', /* display: 'none', */
                                          /* color: 'var(--bs-link-color)', */
                                          textDecoration: 'none'}}> +917300003151 </a>
                      <br />Monday - Friday
                      <br />9AM TO 6PM
                    </div>
                  </div>
                  <div className="block mt-4">
                    <h4 className="h5">Address</h4>
                    <div className="content">
                      Ashok Nagar, Udaipur,.
                      <br />Rajasthan 313001.
                    </div>
                  </div>
                  <div className="block mt-4">
                    <h4 className="h5">Address</h4>
                    <div className="content">Vaishali Tower II,Nursery Cir,
                      <br /> Vaishali Nagar,
                      <br />Jaipur, Rajasthan 302021.
                    </div>
                  </div>
                  <div className="block">
                    <ul className="list-unstyled list-inline my-4 social-icons">
                      <li className="list-inline-item me-3"><a title="Explorer Facebook Profile" className="text-white" href="https://www.facebook.com/metakops"><i className="fab fa-facebook-f" /></a>
                      </li>
                      <li className="list-inline-item me-3"><a title="Explorer LinkedIn Profile" className="text-white" href="https://www.linkedin.com/company/metakops/"><i className="fab fa-linkedin" /></a>
                      </li>
                      <li className="list-inline-item me-3"><a title="Explorer Instagram Profile" className="text-white" href="https://www.instagram.com/metakops/"><i className="fab fa-instagram" /></a>
                      </li>
                      <li className="list-inline-item me-3"><a title="Explorer YouTube Profile" className="text-white" href="https://www.youtube.com/channel/UCc_fToXkpzL5efmHiQ1cy6A"><i className="fab fa-youtube" /></a>
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