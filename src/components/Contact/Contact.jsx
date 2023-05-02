import React from "react";
import "./Contact.css";
const Contact = () => {
    return (
        <div className="contact section" id="contact">
            <div className="contact-content container">
                <div className="section-header">
                    <div className="sub-title">CONTACT US</div>
                    <div className="title">Have a question?</div>
                </div>
                <div className="contact-text">
                    <div>
                        If you have any further query contact our advisories, feel free to contact us.
                    </div>
                    <div>
                        <span className="contact-heading">
                            Student In-Charges
                        </span>
                        <div>Lalita Bhattacharya: +91 89815 11092</div>
                        <div>Shubham Gupta: +91 96746 44518</div>
                        <div>Subhodeep Neogi: +91 83370 81510</div>
                        <div>Sreemoyee Chatterjee: +91 81000 65320</div>
                    </div>
                    <div>
                        <span className="contact-heading">
                            Teacher Co-ordinater
                        </span>
                        <div>Jayanti Mahato: +91 97325 26103</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
