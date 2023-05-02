import React from "react";
import "./Agenda.css";

const Agenda = () => {
  return (
    <div className="agenda section" id="agenda">
      <div className="agenda-content container">
        <div className="section-header">
          <div className="sub-title">SCHEDULE & AGENDA</div>
          <div className="title">The Timeline</div>
        </div>
        <div className="agenda-text">
            <div className="arrow-container">
                <div className="arrow-line"></div>
            </div>
            <div className="agenda-time">10:00 AM - 10:30 AM</div>
            <div className="agenda-name">Inauguration</div>
            Lighting of the Lamp & Dignitaries' Speech
        </div>
        <div className="agenda-text">
            <div className="arrow-container">
                <div className="arrow-line"></div>
            </div>
            <div className="agenda-time">11:00 AM - 11:30 AM</div>
            <div className="agenda-name">Apti-Quest</div>
            30 minutes round based on Aptitude, Technical and General Knowledge.
        </div>
        <div className="agenda-text">
            <div className="arrow-container">
                <div className="arrow-line"></div>
            </div>
            <div className="agenda-time">11:30 AM - 12:00 PM</div>
            <div className="agenda-name">Round 1 Results</div>
            Top 30 teams from Round-1.
        </div>
        <div className="agenda-text">
            <div className="arrow-container">
                <div className="arrow-line"></div>
            </div>
            <div className="agenda-time">12:00 PM - 12:30 PM</div>
            <div className="agenda-name">Lunch Break</div>
            Refreshments will be offered from our side to the qualifying teams.
        </div>
        <div className="agenda-text">
            <div className="arrow-container">
                <div className="arrow-line"></div>
            </div>
            <div className="agenda-time">01:00 PM - 01:30 PM</div>
            <div className="agenda-name">Tech-Spotlight</div>
            30 minutes round based on Audio-Visual Interative Session.
        </div>
        <div className="agenda-text">
            <div className="arrow-container">
                <div className="arrow-line"></div>
            </div>
            <div className="agenda-time">01:30 PM - 02:00 PM</div>
            <div className="agenda-name">Round 2 Results</div>
            Top 5 teams from Round-2.
        </div>
        <div className="agenda-text">
            <div className="arrow-container">
                <div className="arrow-line"></div>
            </div>
            <div className="agenda-time">02:15 PM - 03:30 PM</div>
            <div className="agenda-name">Code-Odyssey</div>
            75 minutes round based on 4 given coding problems, where each problem unlocks the next problem.
        </div>
        <div className="agenda-text">
            <div className="arrow-container">
                <div className="arrow-line"></div>
            </div>
            <div className="agenda-time">03:30 PM - 04:00 PM</div>
            <div className="agenda-name">Prize Distribution</div>
            The winners will be announced by our team and prizes would be distributed.
        </div>
      </div>
    </div>
  );
};

export default Agenda;
