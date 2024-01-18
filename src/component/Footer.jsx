import React from 'react'

function Footer() {
  return (
     <footer className="text-center text-lg-start text-white  position-relative">
  {/* <img class="bg-img" src="./assets/img/blog-background-01.png" alt=""> */}
  <div className="bg-filter" />
  {/* Section: Links  */}
  <section className>
    <div className="container text-center text-md-start ">
      {/* Grid row */}
      <div className="row  py-5">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-4">
          {/* Content */}
          <h6 className="text-uppercase fw-bold">Company name</h6>
          <img className="w-75 mb-3" src="./assets/img/metakopslogo.png" alt />
          {/* <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px" /> */}
          <p>
            METAKOPS is a prime mobile app and Game Development Company. We Offering Various gaming solutions like Ludo games, Poker, casinos, andar bahar game, carrom board game, fantasy sport game, slot game, color prediction game, and Multi-Game with amazing Technologies.
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold">SERVICES</h6>
          <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
          <p>
            <a href="mobile-app-development.html" className="text-white">Mobile App Development</a>
          </p>
          <p>
            <a href="mobile-game-development.html" className="text-white">Mobile Game Development</a>
          </p>
          <p>
            <a href="html5-game-development.html" className="text-white">HTML5 Game Development</a>
          </p>
          <p>
            <a href="ios-app-development.html" className="text-white">iOS App Development</a>
          </p>
          <p>
            <a href="#" className="text-white">Unity 3D Game Development</a>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold">Useful links</h6>
          <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
          <p>
            <a href="about.html" className="text-white">About</a>
          </p>
          <p>
            <a href="blog.html" className="text-white">Our Blog</a>
          </p>
          <p>
            <a href="terms-condition.html" className="text-white">Terms and Condition</a>
          </p>
          <p>
            <a href="privacy-policy.html" className="text-white">Privacy Policy</a>
          </p>
          <p>
            <a href="career.html" className="text-white"> Career</a>
          </p>
          <p>
            <a href="faq.html" className="text-white">FAQ</a>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold">Contact</h6>
          <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
          <p><i className="fas fa-home mr-3" /> Ashok Nagar, Udaipur, Rajasthan 313001.</p>
          <p><i className="fas fa-envelope mr-3" /> info@metakops.com</p>
          <p><i className="fa fa-whatsapp mr-3" /> + 91 73 0000 3151</p>
          <p><i className="fas fa-phone mr-3" /> + 91 73 0000 3151</p>
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
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}
  {/* Copyright */}
  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    © 2022-23 Copyright:
    <a className="text-white">METAKOPS</a>
  </div>
  {/* Copyright */}
</footer>

  )
}

export default Footer;