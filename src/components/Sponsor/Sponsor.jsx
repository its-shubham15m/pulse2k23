import React from "react";
import "./Sponsor.css";
import pic1 from "../../img/iic_mckvie.jpg";
import pic2 from "../../img/rotaract_mckvie.jpg";
import pic3 from "../../img/iic_hrd.jpg";

function Sponsor() {
  return (
    <div className="sponsor-header1">
      <div className="section-header1">
        <div className="title1">Associated by..</div>
      </div>
      <div className="sponsor-container">
        <img
          src={pic1}
          className="sponsor-image left-image"/>
        <img
          src={pic2}
          className="sponsor-image middle-image"/>
        <img
          src={pic3}
          className="sponsor-image right-image"/>
      </div>
    </div>
  );
}

export default Sponsor;
