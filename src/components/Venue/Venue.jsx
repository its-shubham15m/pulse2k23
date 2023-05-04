import React from "react";
import "./Venue.css";
import Calender from "../../img/calendar.png";
import Address from "../../img/address.png";

const Venue = () => {
    return (
        <div className="venue section" id="venue">
            <div className="venue-content container">
                <div className="section-header">
                    <div className="sub-title">DATE AND VENUE</div>
                    <div className="title">When & Where</div>
                </div>
                <div className="venue-card">
                    <div className="venue-icon">
                        <img src={Calender} alt="venue-icon" />
                    </div>
                    <div className="venue-info">Thursday, 1st June, 2023</div>
                    <div className="venue-info">Reporting Time: 9:30am</div>
                </div>
                <div className="venue-card">
                    <div className="venue-icon">
                        <img src={Address} alt="venue-icon" />
                    </div>
                    <div className="venue-info">
                        2nd Floor, IT Department, MCKVIE
                    </div>
                    <div className="venue-info">
                        243, GT Road North, Howrah, West Bengal 711 204
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Venue;
