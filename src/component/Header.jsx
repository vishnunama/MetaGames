import React from 'react'
import "./Header.css"

// import SwipeableTemporaryDrawer from "./resnav";

import { useNavigate } from 'react-router-dom';
import SwipeableTemporaryDrawer from './resnav';

function Header() {
    const navigate = useNavigate();

  return (
    <header className="header" id="header-sroll">
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <div className="desk-menu">
          <div className="logo">
            <h1 className="logo-adn">
              <a className="e1">
                <img className="logo fade-in one" src="./assets/img/metakopslogo.png" alt />
                {/* <img src="./assets/img/metakopslogo.png"
                                      alt="Davidson Silva"> */}
              </a>
            </h1>
          </div>
          <nav className="box-menu">
            <div className="menu-container">
              <div className="menu-head">
                <a className="e1">
                  <img src="./Assets/img/metakopslogo.png" alt="Davidson Silva" />
                </a>
              </div>
              <div className="menu-header-container">
                <ul id="cd-primary-nav" className="menu">
                  <li className="contact menu-item ">
                         <a
                          style={{ cursor: "pointer",fontSize:"15px" }}
                          onClick={() => navigate("/")}
                        >
                          Home
                        </a>                  </li>
                  <li className="contact menu-item ">
                    <a  style={{ cursor: "pointer",fontSize:"15px" }} onClick={() => navigate("/AboutUs")} >About</a>
                  </li>
                  <li className="contact menu-item ">
                    <a  style={{ cursor: "pointer",fontSize:"15px" }}  onClick={() => navigate("/OurProcess")}>Our Process</a>
                  </li>
                  <li className="contact menu-item ">
                    <a  style={{ cursor: "pointer",fontSize:"15px" }} onClick={() => navigate("/Portfolio")}>Portfolio</a>
                  </li>
                  <li className="contact menu-item ">
                    <a  style={{ cursor: "pointer",fontSize:"15px" }} onClick={() => navigate("/ContactUs")}>Contact Us</a>
                  </li>
                  {/* <li class="line"></li> */}
                </ul>
              </div>
            </div>
            <div className="hamburger-menu">
              <SwipeableTemporaryDrawer/>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</header>

  )
}

export default Header;