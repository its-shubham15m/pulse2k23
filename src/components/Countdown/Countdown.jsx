import React from "react";
import "./Countdown.css";

const Countdown = ({ timerDays, timerHours, timerMins, timerSecs }) => {
    return (
        <div className="timer-container">
            <div className="timer">
                <section className="time-card">
                    <p className="time-card-count">{timerDays}</p>
                    <p className="time-card-name">Days</p>
                </section>
                <span>:</span>
                <section className="time-card">
                    <p className="time-card-count">{timerHours}</p>
                    <p className="time-card-name">Hours</p>
                </section>
                <span>:</span>
                <section className="time-card">
                    <p className="time-card-count">{timerMins}</p>
                    <p className="time-card-name">Mins</p>
                </section>
                <span>:</span>
                <section className="time-card">
                    <p className="time-card-count">{timerSecs}</p>
                    <p className="time-card-name">Secs</p>
                </section>
            </div>
        </div>
    );
};

Countdown.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMins: 10,
    timerSecs: 10,
};

export default Countdown;
