import React from "react";
import "./Cta.css";

const Cta = () => {
    return (
        <div className="cta">
            <div className="cta-content container">
                <div className="cta-heading">Don't forget to register for an unforgettable event experience...</div>
                <div className="cta-heading">See you all there!</div>
                <div className="main-btn">
                    <a
                        href="https://forms.gle/37vn6pdfGodQWmH57"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Register Now &gt;
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Cta;
