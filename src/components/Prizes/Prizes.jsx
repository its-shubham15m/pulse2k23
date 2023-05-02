import React from "react";
import "./Prizes.css";

import Point from "../../img/hand-gesture.png";
import Certificate from "../../img/certificate.png";
import Refreshment from "../../img/lunch-time.png";
import Present from "../../img/surprise.png";

const Prizes = () => {
    return (
        <div className="prizes section" id="prizes">
            <div className="prizes-content container">
                <div className="section-header">
                    <div className="sub-title">PRIZES</div>
                    <div className="title">What's in it for me?</div>
                </div>
                <div className="prize-cards">
                    <div className="prize-card">
                        <div className="prize-icon">
                            <img src={Point} alt="prize-icon" />
                        </div>
                        <div className="prize-info">
                            5 Mar Points guaranteed on registration and
                            participation
                        </div>
                    </div>
                    <div className="prize-card">
                        <div className="prize-icon">
                            <img src={Certificate} alt="prize-icon" />
                        </div>
                        <div className="prize-info">
                            E-Certificate for all participants and physical
                            certificates for top 3 teams.
                        </div>
                    </div>
                    <div className="prize-card">
                        <div className="prize-icon">
                            <img src={Refreshment} alt="prize-icon" />
                        </div>
                        <div className="prize-info">
                            Refreshments for all participants who qualify for
                            Round 2.
                        </div>
                    </div>
                    <div className="prize-card">
                        <div className="prize-icon">
                            <img src={Present} alt="prize-icon" />
                        </div>
                        <div className="prize-info">
                            Exiciting prizes for Top 3 teams + physical
                            certificates
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prizes;
