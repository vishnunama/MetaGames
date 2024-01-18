import React from 'react'

function ContactUs() {
  return (
    <div>


      <div>
  <section className="page-header pt-5 bg-tertiary">
    <img className="bg-img" src="./assets/img/blog-background-01.png" alt />
    <div className="bg-filter" />
    <div className="container pt-5">
      <div className="row">
        <div className="col-8 mx-auto text-center text-white">
          <h2 className="mb-3 text-capitalize text-white">Contact Us</h2>
          <ul className="list-inline breadcrumbs text-capitalize" style={{fontWeight: 500}}>
            <li className="list-inline-item text-white"><a className="text-white" href="https://www.metakops.com/">Home</a>
            </li>
            <li className="list-inline-item text-white">/ &nbsp; <a className="text-white" href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* contect us sec-7 */}
  <section className="section position-relative py-5">
    <video className="bg-img" playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop"><source src="./assets/mp4/bg.mp4" type="video/mp4" /></video>
    {/* <img class="bg-img c-bg-img" src="./assets/img/Rectangle1.png" alt=""> */}
    <div className="bg-filter" />
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6 pb-5">
          <div className="section-title text-center teext-white">
            <h1 className="text-white g-text">Let’s get connected</h1>
            <p className="text-white">Get in touch with our team to reimagine your game with a new gaming revolution.</p>
          </div>
        </div>
        <div className="col-lg-10">
          <div className="shadow rounded p-5 bg-lightl">
            <div className="row">
              <div className="col-12 mb-4">
                <h4 className="text-white">Leave Us A Message</h4>
              </div>
              <div className="col-lg-6 bg-white py-5 px-5 rounded">
                <div className="contact-form">
                  <form action="#!">
                    <div className="form-group mb-4 pb-2">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                      <input type="text" className="form-control mb-2 shadow-none" id="contact_name" />
                    </div>
                    <div className="form-group mb-4 pb-2">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                      <input type="email" className="form-control shadow-none" id="contact_email" />
                    </div>
                    <div className="form-group mb-4 pb-2">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label">Write Message</label>
                      <textarea className="form-control shadow-none" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                    </div>
                    <a href="#!" className="btn btn-outline-primary text-primary1 bg-primary1 fade-in one fs-6">Submit</a>
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
                      <br />9AM TO 6PM </div>
                  </div>
                  <div className="block mt-4">
                    <h4 className="h5">Address</h4>
                    <div className="content">
                      Ashok Nagar, Udaipur,.
                      <br />Rajasthan 313001.</div>
                  </div>
                  <div className="block mt-4">
                    <h4 className="h5">Address</h4>
                    <div className="content">Vaishali Tower II,Nursery Cir,
                      <br /> Vaishali Nagar,
                      <br />Jaipur, Rajasthan 302021.</div>
                  </div>
                  <div className="block">
                    <ul className="list-unstyled list-inline my-4 social-icons">
                      <li className="list-inline-item me-3"><a title="Explorer Facebook Profile" className="text-white" href="https://www.facebook.com/metakops"><i className="fab fa-facebook-f" /></a>
                      </li>
                      <li className="list-inline-item me-3"><a title="Explorer LinkedIn Profile" className="text-white" href="https://www.linkedin.com/company/metakops/"><i className="fab fa-linkedin" /></a>
                      </li>
                      <li className="list-inline-item me-3"><a title="Explorer Instagram Profile" className="text-white" href="https://www.instagram.com/metakops/"><i className="fab fa-instagram" /></a>
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
  <section className="p-5">
    <div className="row">
      <div className="col-md-12">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.0452421785244!2d73.7041964!3d24.5876348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xafaec26228c11f8!2sMETAKOPS%20-%20Best%20Mobile%20Game%20and%20app%20development%20Company%20Udaipur!5e0!3m2!1sen!2sin!4v1664810369701!5m2!1sen!2sin" width="100%" height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  </section>
</div>

    </div>
  )
}

export default ContactUs;