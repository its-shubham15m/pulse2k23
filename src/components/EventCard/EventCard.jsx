import React from "react";
import "./EventCard.css";

const EventCard = ({ roundNum, roundName, subtitle, icon, description }) => {
    return (
        <div className="eventcard">
            <div className="eventcard-content">
                <div className="round-details">
                    <div className="round-num">Round {roundNum}</div>
                    <div className="round-name">{roundName}</div>
                    <div className="round-subtitle">{subtitle}</div>
                </div>
                <div className="icon">
                    <img src={icon} alt="round-icon" />
                </div>
                <div className="round-desc">{description}</div>
            </div>
        </div>
    );
};

export default EventCard;
