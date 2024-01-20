import React from 'react'

function ProsessAndServices() {
  return (
    <>
    <section className="position-relative">
    <div className="container-fluid process  py-5 h-100">
      <div className="w-100 d-flex align-items-center justify-content-center flex-column">
        <h1 className="display-6 pb-3 pb-2 text-center pt-5 glow-text lh-1 mb-3 text-main fw-bold section-title g-text">
          Our process</h1>
        <p className="lg-text-center">You are just simple four steps away to kick start your dream project with us:
        </p>
      </div>
      <div className="row row-cols-1 row-cols-lg-5 g-2 g-lg-3 row-box justify-content-center pb-5 mb-5 h-100 overflow-hidden">
        {/* Process 1 */}
        <div className="col">
          <div className="d-border">
            <div className="steps">
              <div className="process-icon">
                <img src="./assets/img/process/s1.png" alt className="Process-img" />
              </div>
              <div className="step-no">
                <div className="step-1">
                  <h6>Step</h6><span>1</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Analysis</h5>
              <p className="card-text">We respect our client at our utmost priority so we are find out the necessity of the software at the bases of client and figure out the cost</p>
            </div>
          </div>
        </div>
        {/* Process 2 */}
        <div className="col">
          <div className="d-border">
            <div className="steps">
              <div className="process-icon">
                <img src="./assets/img/process/s2.png" alt className="Process-img" />
              </div>
              <div className="step-no">
                <div className="step-1">
                  <h6>Step</h6><span>2</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Planning &amp; Strategy</h5>
              <p className="card-text">After preparing analysis, enlisting perspective of the client and make planning &amp; strategy to deliver best development services.</p>
            </div>
          </div>
        </div>
        {/* Process 3 */}
        <div className="col">
          <div className="d-border">
            <div className="steps">
              <div className="process-icon">
                <img src="./assets/img/process/s3.png" alt className="Process-img" />
              </div>
              <div className="step-no">
                <div className="step-1">
                  <h6>Step</h6><span>3</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Design and Development</h5>
              <p className="card-text">Next step to design &amp; develop the software with keeping ideas in mind which is specified by client and prepare user friendly software.</p>
            </div>
          </div>
        </div>
        {/* Process 4 */}
        <div className="col">
          <div className="d-border no-bor">
            <div className="steps">
              <div className="process-icon">
                <img src="./assets/img/process/s5.png" alt className="Process-img" />
              </div>
              <div className="step-no">
                <div className="step-1">
                  <h6>Step</h6><span>4</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Delivery</h5>
              <p className="card-text">After passes from all the process of quality check we deliver software to client in predefined time and get in touch for regular updates and queries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="position-relative py-5 ourservises ">
    <img className="bg-img" src="./assets/img/bg10.jpg" alt />
    <div className="bg-filter " />
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="display-6 pb-3 text-center pt-5 glow-text lh-1 mb-3 text-white fw-bold section-title g-text">
        Our services
      </h1>
      <p className="text-center text-white">Metakops deals in Games, App and Graphics as below mentioned</p>
    </div>
    {/* <div class="w-100 d-flex align-items-center justify-content-center">
      <h1 class="display-6 pb-4 text-center pt-5 glow-text lh-1 mb-3 text-white fw-bold section-title">Our services</h1>
  </div> */}
    <div className="content d-flex justify-content-center flex-wrap py-5">
      <a className="ser-card bg-transparent" href="#!">
        <div className="front" style={{backgroundImage: 'url(./assets/img/2.png)'}}>
          <p>Games</p>
        </div>
        <div className="back d-flex align-items-start flex-column justify-content-start py-4">
          <div className="head1">
            <p className="text-white fw-bold fs-3">Game</p>
          </div>
          <ul className>
            <li>Native Mobile Game</li>
            <li>3D Game Services</li>
            <li>HTML5 Game Services</li>
            <li>Unity Game Services</li>
            <li>Unreal Game Services</li>
            <li>Buildbox Game Services</li>
          </ul>
          {/* <div>
                  <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                  <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
              </div> */}
        </div>
      </a>
      <a className="ser-card bg-transparent" href="#!">
        <div className="front" style={{backgroundImage: 'url(./assets/img/3.png)'}}>
          <p>Apps</p>
        </div>
        <div className="back d-flex align-items-start flex-column justify-content-start py-4">
          <div className="head1">
            <p className="text-white fw-bold fs-3">Apps</p>
          </div>
          <ul className>
            <li>Mobile App Development</li>
            <li>iPhone App Development</li>
            <li>Android App Development</li>
            <li>React Native App Development</li>
            <li>Flutter App Development</li>
            <li>Kotlin App Development</li>
          </ul>
          {/* <div>
                  <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                  <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
              </div> */}
        </div>
      </a>
      <a className="ser-card bg-transparent" href="#!">
        <div className="front" style={{backgroundImage: 'url(./assets/img/4.png)'}}>
          <p>Graphics</p>
        </div>
        <div className="back d-flex align-items-start flex-column justify-content-start py-4">
          <div className="head1">
            <p className="text-white fw-bold fs-3">Graphics</p>
          </div>
          <ul className>
            <li>3D Game Modelling</li>
            <li>Mobile UI Design</li>
            <li>2D Character Design</li>
            <li>Slot Game Art</li>
            <li>3D Character Design</li>
            <li>Game Environment Art</li>
          </ul>
          {/* <div>
                  <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                  <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
              </div> */}
        </div>
      </a>
    </div>
  </section>
    </>
  )
}

export default ProsessAndServices;