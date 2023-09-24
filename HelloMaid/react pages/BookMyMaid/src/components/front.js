import React from "react";

import "animate.css";
import { alignPropType } from "react-bootstrap/esm/types";

class Front extends React.Component {
  render() {
    return (
      <>
        <header>
          <div id="nav-head" class="header-nav">
            <div class="container">
              <div class="row">
                <div class="col-md-2 col-sm-10 nav-img">
                  <img src="assets/images/3.jpg" alt="" />
                </div>
                <div class="col-md-6 col-sm-10 nav">
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  <h1 style={{ color: "white" }}> Hello Maid</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
        <br />
        <div id="home" class="slider">
          <div class="container">
            <div class="slider-titl row">
              <div class="col-md-6 slidgb">
                <h1>
                  We Promise to keep you stressfree regarding household chores
                </h1>
                <p>
                  Worried about the messy house and kitchen works?? Dont be
                  stressed!!! we are here to help you out!! Just book a maid and
                  get a neat and clean house with delicious food in kitchen
                  within no time!!
                </p>
                <div class="bnkji"></div>
              </div>
              <div class="col-md-6 slid-img">
                <img src="assets/images/cleaning.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <section id="aboutus" class="with-medical">
          <div class="container">
            <div class="inner-title">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <h2>About Us</h2>
              <p>Take a look at some of our key features</p>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-12 txtr">
                <h4>
                  Why choose services with <br />
                  <span> Hello Maid </span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer neque libero, pulvinar et elementum quis, facilisis eu
                  ante. Mauris non placerat sapien. Pellentesque tempor arcu non
                  odio scelerisque ullamcorper. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Nam varius eros consequat auctor
                  gravida. Fusce tristique lacus at urna sollicitudin pulvinar.
                  Suspendisse hendrerit ultrices mauris.
                </p>
                <ul>
                  <li>
                    <i class="fa fa-check"></i> Mauris non placerat sapien.
                    Pellentesque{" "}
                  </li>
                  <li>
                    <i class="fa fa-check"></i> Fusce tristique lacus at urna
                    sollicitudin{" "}
                  </li>
                  <li>
                    <i class="fa fa-check"></i> Orem ipsum dolor sit amet,
                    consectetur
                  </li>
                  <li>
                    <i class="fa fa-check"></i> Pellentesque tempor arcu non{" "}
                  </li>
                </ul>
              </div>

              <div class="col-lg-6 col-md-12">
                <div class="row">
                  <div class="col-md-6">
                    <div class="count-bx">
                      <h4>22K</h4>
                      <p>Services Done</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="count-bx">
                      <h4>11K</h4>
                      <p>Total Clients</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="count-bx">
                      <h4>465</h4>
                      <p>Projects Done</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="count-bx">
                      <h4>14Y</h4>
                      <p>Experiance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="serv" class="latest-features">
          <div class="container">
            <div class="inner-title">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <h2> Latest Features & Services</h2>
              <p>
                Take a look at some of latest features and services provided by
                our team
              </p>
            </div>

            <div class="row">
              <div class="col-md-3 col-sm-6">
                <div class="single-feature">
                  <img src="assets/images/services/clean1.jpg" alt="" />
                  <div class="bn-dgt">
                    <h5>Home Cleaning</h5>
                    <p>
                      High Performanc Lorem ipsum dolor sit amet, consectetur
                      adipiscing consectetur adipiscing elit. Donec ut erat nec
                      leo lobortis blandit.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-3 col-sm-6">
                <div class="single-feature">
                  <img src="assets/images/services/clean2.jpg" alt="" />
                  <div class="bn-dgt">
                    <h5>Washing </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec ipsum dolor sit amet, consectetur ut erat nec leo
                      lobortis blandit.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-3 col-sm-6">
                <div class="single-feature">
                  <img src="assets/images/services/clean3.jpg" alt="" />
                  <div class="bn-dgt">
                    <h5>Cooking</h5>
                    <p>
                      {" "}
                      Consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Donec ut erat nec leo
                      lobortis blandit.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="single-feature">
                  <img src="assets/images/services/clean4.jpg" alt="" />
                  <div class="bn-dgt">
                    <h5>Utensils</h5>
                    <p>
                      {" "}
                      Consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Donec ut erat nec leo
                      lobortis blandit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" class="our-team-cover">
          <div class="container">
            <div class="inner-title">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h2>Our Team</h2>
              <p>Take a look at our Team</p>
            </div>
            <div class="row">
              <div class="col-md-4 col-sm-6">
                <div class="our-team">
                  <div class="pic">
                    <img
                      src="assets/images/testimonial/Aditya Palkar.jpg"
                      alt=""
                    />
                  </div>

                  <div class="team-content">
                    <h3 class="title">Aditya Palkar</h3>
                    <span class="post"></span>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="our-team">
                  <div class="pic">
                    <img
                      src="assets/images/testimonial/Abhijit Wagh.jpg"
                      alt=""
                    />
                  </div>

                  <div class="team-content">
                    <h3 class="title">Abhijit Wagh</h3>
                    <span class="post"></span>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="our-team">
                  <div class="pic">
                    <img
                      src="assets/images/testimonial/Aditi Pawar.jpg"
                      alt=""
                    />
                  </div>

                  <div class="team-content">
                    <h3 class="title">Aditi Pawar</h3>
                    <span class="post"></span>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="our-team">
                  <div class="pic">
                    <img
                      src="assets/images/testimonial/Aditya Deshmukh.jpg"
                      alt=""
                    />
                  </div>

                  <div class="team-content">
                    <h3 class="title">Aditya Deshmukh</h3>
                    <span class="post"></span>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="our-team">
                  <div class="pic">
                    <img
                      src="assets/images/testimonial/Aditya Wath.jpg"
                      alt=""
                    />
                  </div>

                  <div class="team-content">
                    <h3 class="title">Aditya Wath</h3>
                    <span class="post"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="test" class="testimonial-container">
          <div class="container">
            <div class="inner-title row">
              <br />
              <br />
              <br />

              <h2>Testimonials</h2>
              <p>Take a look at what people say about us</p>
            </div>
            <div class="row">
              <div class="col-md-offset-2 float-auto col-md-10">
                <div id="testimonial-slider" class="owl-carousel">
                  <div class="testimonial">
                    <div class="pic">
                      <img
                        src="assets/images/testimonial/Aditya Deshmukh.jpg"
                        alt=""
                      />
                    </div>
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Assumenda deleniti dolor ipsum molestias mollitia ut.
                      Aliquam aperiam corporis cumque debitis delectus
                      dignissimos. Lorem ipsum dolor sit amet, consectetur.
                    </p>
                    <h3 class="title">
                      Aditya Deshmukh
                      <span class="post"> - Developer</span>
                    </h3>
                  </div>

                  <div class="testimonial">
                    <div class="pic">
                      <img
                        src="assets/images/testimonial/Aditya Palkar.jpg"
                        alt=""
                      />
                    </div>
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Assumenda deleniti dolor ipsum molestias mollitia ut.
                      Aliquam aperiam corporis cumque debitis delectus
                      dignissimos. Lorem ipsum dolor sit amet, consectetur.
                    </p>
                    <h3 class="title">
                      Aditya Palkar
                      <span class="post"> - Developer</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-sm-12">
                <h2>About Us</h2>
                <p>
                  Hello Maid website is made to make your maid hiring experience
                  much better and safer.
                </p>
                <p>
                  We focus on technologies that promise to reduce costs,
                  streamline processes and speed time-to-market, Backed by our
                  strong quality processes and rich experience managing
                  global...{" "}
                </p>
              </div>
              <div class="col-md-4 col-sm-12">
                <h2>Useful Links</h2>
                <ul class="list-unstyled link-list">
                  <li>
                    <a ui-sref="about" href="#about">
                      About us
                    </a>
                    <i class="fa fa-angle-right"></i>
                  </li>
                  <li>
                    <a ui-sref="portfolio" href="#/portfolio">
                      Services
                    </a>
                    <i class="fa fa-angle-right"></i>
                  </li>
                  <li>
                    <a ui-sref="products" href="#/products">
                      Latest news
                    </a>
                    <i class="fa fa-angle-right"></i>
                  </li>
                  <li>
                    <a ui-sref="gallery" href="#/gallery">
                      Features
                    </a>
                    <i class="fa fa-angle-right"></i>
                  </li>
                  <li>
                    <a ui-sref="contact" href="#/contact">
                      Contact us
                    </a>
                    <i class="fa fa-angle-right"></i>
                  </li>
                </ul>
              </div>
              <div class="col-md-4 col-sm-12 map-img">
                <h2>Contact Us</h2>
                <address class="md-margin-bottom-40">
                  Hello Maid <br />
                  Plot No:- 94, Pawanbhumi Layout, <br />
                  Wardha Road, Nagpur, Maharashtra. <br />
                  Phone: +91 9130812106 / 7719907801 <br />
                  Email:{" "}
                  <a href="mailto:info@bluedart.com" class="">
                    HelloMaid@gmail.com
                  </a>
                  <br />
                  Web:{" "}
                  <a href="smarteyeapps.com/" class="">
                    www.hellomaid.in
                  </a>
                </address>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
export default Front;
