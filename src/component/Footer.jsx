import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faEnvelope, faWhatsapp } from '@fortawesome/free-solid-svg-icons';
import { FaEnvelope, FaHome, FaWhatsapp } from 'react-icons/fa';
import { FaFacebookF, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

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
          <img className="w-75 mb-3" src="./assets/img/WhatsApp_Image_2024-01-09_at_18.14.16_c401108b-removebg-preview.webp" alt />
          {/* <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px" /> */}
          <p>
MetaBlock is an Web/Mobile App Development Company. In our 07+ years of experience we have continually delivered modern technology solutions that have strengthen enterprise’s technical infrastructure and helped them lead in their business domain. </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold">SERVICES</h6>
          <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
          <p>
            <a href="mobile-app-development.html" className="text-white">Application Development</a>
          </p>
          <p>
            <a href="mobile-game-development.html" className="text-white">Software Development</a>
          </p>
          <p>
            <a href="html5-game-development.html" className="text-white">BlockChain Development</a>
          </p>
          <p>
            <a href="ios-app-development.html" className="text-white">Web Development</a>
          </p>
          <p>
            <a href="#" className="text-white"> Gameing Development</a>
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
          {/* <p>
            <a href="blog.html" className="text-white">Our Blog</a>
          </p> */}
          <p>
            <a href="terms-condition.html" className="text-white">Terms and Condition</a>
          </p>
          <p>
            <a href="privacy-policy.html" className="text-white">Privacy Policy</a>
          </p>
          {/* <p>
            <a href="career.html" className="text-white"> Career</a>
          </p> */}
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
          <p><FaHome  className="mr-3" /> Shyam Nagar, Jaipur, Rajasthan 302012.</p>
<p><FaEnvelope className="mr-3" /> info@metablock.com</p>
<a style={{color:"white"}} href="tel:91 9358593001"><p><FaWhatsapp className="mr-3" />+91 91 9358593001</p></a>
{/* <p><FaWhatsapp className="mr-3" /> +91 9358593001</p> */}
          {/* <p><i className="fas fa-phone mr-3" /> + 91 73 0000 3151</p> */}
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
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}
  {/* Copyright */}
  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    © 2023-24 Copyright:
    <a className="text-white">METABLOCK</a>
  </div>
  {/* Copyright */}
</footer>

  )
}

export default Footer;