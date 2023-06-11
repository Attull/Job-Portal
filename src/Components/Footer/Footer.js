import React from "react";
import icon from "../../assests/images/Innomatics_Icon.png";

function Footer() {
  return (
    <div className="container mt-5 bg-dark text-white">
      <div className="row">
        <div className="col-sm-12 col-md-3 bg-white">
          <img src={icon} alt="icon of innomatics" className="w-100 img-fluid"  />
        </div>
        <div className="col-sm-12 col-md-3">
          <ul>
            <h1>Courses</h1>
            <li>Full Stack Development</li>
            <li>Data Science</li>
            <li>Digital Marketing</li>
            <li>Data Analytics</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-3">
          <ul>
            <h1>Carrers</h1>
            <li>FrontEnd</li>
            <li>BackEnd</li>
            <li>Data Scientist</li>
            <li>Data Analytics</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-3">
          <ul>
            <h1>Locations</h1>
            <li>JNTU Metro Station , Nizampet. </li>
            <li>oppst Sarthcity Mall , Gachibowil.</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

