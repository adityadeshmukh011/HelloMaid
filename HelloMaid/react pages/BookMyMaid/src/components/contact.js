import React, { Component } from "react";
import contact from "./Images/04.jpg";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${contact})`,
          height: "1000px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          <h1 style={{ text: "white" }}>CONTACT </h1>
          <br />
          <br />

          <center>
            <table border="4" className="table table-bordered table-solid">
              <tr>
                &nbsp;<th>Name </th> &nbsp;
                <th>Email ID</th>&nbsp;
                <th>Contact Number</th>&nbsp;&nbsp;
              </tr>
              <tr>
                &nbsp; <td>Aditya Palkar</td>&nbsp;
                <td>apalkar22@gmail.com</td>&nbsp;
                <td>9130812106</td>&nbsp;&nbsp;
              </tr>

              <tr>
                &nbsp; <td>Abhijit Wagh</td>&nbsp;
                <td>abhiwagh70@gmail.com</td>&nbsp;
                <td>7219554986</td>&nbsp;&nbsp;
              </tr>

              <tr>
                &nbsp; <td>Aditi Pawar</td>&nbsp;
                <td>adac0666@gmail.com</td>&nbsp;
                <td>9657835855</td>&nbsp;&nbsp;
              </tr>

              <tr>
                &nbsp; <td>Aditya Deshmukh</td>&nbsp;
                <td>adityadeshmukh011@gmail.com</td>&nbsp;
                <td>7719907801</td>&nbsp;&nbsp;
              </tr>

              <tr>
                &nbsp; <td>Aditya Wath</td>&nbsp;
                <td>wath.adi@gmail.com</td>&nbsp;
                <td>7387279721</td>&nbsp;&nbsp;
              </tr>
            </table>
          </center>
        </div>
      </div>
    );
  }
}

export default Contact;
