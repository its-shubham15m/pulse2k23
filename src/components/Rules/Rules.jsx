import React from "react";
import "./Rules.css";
const Rules = () => {
    return (
        <div className="rules section" id="rules">
            <div className="rules-content container">
                <div className="section-header">
                    <div className="sub-title">RULES & REGULATIONS</div>
                    <div className="title">How do I register?</div>
                </div>
                <div className="rules-text">
                    <div>
                        Register through the Google Form link provided or click on Register here.
                    </div>
                    <div>
                        Two members per team. Inter-department teams are allowed.
                    </div>
                    <div>
                        Rs. 50 entry fee per team to be paid in cash at room no.
                        A202 (2nd Floor) On successful registration and payment
                        you will be issued a receipt.
                    </div>
                    <div>
                        Participants must carry their college ID card along with
                        the receipt on the day of the event.
                    </div>
                </div>
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

export default Rules;
