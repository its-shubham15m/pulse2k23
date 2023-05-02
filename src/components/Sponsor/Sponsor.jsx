import React from "react";
import "./Sponsor.css";
import pic1 from "../../img/iic_mckvie.jpg";
import pic2 from "../../img/iic_hrd.jpg";
import pic3 from "../../img/g20.jpg";

function Sponsor() {
  return (
    <div className="sponsor-header1">
      <div className="section-header1">
        <div className="title1">Associated by..</div>
      </div>
      <div className="sponsor-container">
        <img
          src={pic1}
          className="sponsor-image left-image"
          alt="Sponsor 1"/>
        <img
          src={pic2}
          className="sponsor-image middle-image"
          alt="Sponsor 2"/>
        <img
          src={pic3}
          className="sponsor-image right-image"
          alt="Sponsor 3"/>
      </div>
    </div>
  );
}

export default Sponsor;
