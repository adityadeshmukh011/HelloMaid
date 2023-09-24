import React, { Component } from "react";
import aboutus from "./Images/04.jpg";

class AboutUs extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${aboutus})`,
          height: "1000px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 class="text-black">About Us </h1>
        <br />
        <p class=" text-red">We are giving platform for maids and users </p>
        <h2>Our Team</h2>
        <hr />
        <div class="row">
          <div class="column">
            <div>
              <div>
                <h2>Aditya Palkar</h2>
                <p class="title">CDAC Thiruvananthapuram</p>
              </div>
            </div>

            <div class="column">
              <div>
                <div>
                  <h2>Abhijit Wagh</h2>
                  <p class="title"> CDAC Thiruvananthapuram</p>
                </div>
              </div>
            </div>

            <div class="column">
              <div>
                <div>
                  <h2>Aditi Pawar</h2>
                  <p class="title"> CDAC Thiruvananthapuram</p>
                </div>
              </div>
            </div>

            <div class="column">
              <div>
                <div>
                  <h2>Aditya Deshmukh</h2>
                  <p class="title">CDAC Thiruvananthapuram</p>
                </div>
              </div>
            </div>

            <div class="column">
              <div>
                <div>
                  <h2>Aditya Wath</h2>
                  <p class="title"> CDAC Thiruvananthapuram</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
