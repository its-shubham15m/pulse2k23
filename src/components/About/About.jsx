import React from "react";
import EventCard from "../EventCard/EventCard";
import "./About.css";

import Quiz from "../../img/quiz.png";
import AudioVideo from "../../img/social-media.png";
import CodeHunt from "../../img/boy.png";

const About = () => {
    return (
        <div className="about section" id="about">
            <div className="about-content container">
                <div className="section-header">
                    <div className="sub-title">ABOUT THE EVENT</div>
                    <div className="title">What is Pulse.exe 2K23?</div>
                </div>
                <div className="about-text">
                    <div>
                        Pulse.exe, is the annual technical event organized by the IT Department of MCKV Institute of Engineering, is set to deliver an exceptional experience for students looking to prove their mettle in the fields of critical thinking, vigilance, and curiosity. 
                    </div>
                    <div>
                        Pulse.exe promises to deliver a unique opportunity to showcase your intellect and knowledge, and emerge as a true champion of your field.
                    </div>
                    <div>
                        Students of all departments will compete in teams to prove their knowledge and skills.
                    </div>
                    <div>The event comprises of 3 rounds as follows:</div>
                </div>
                <div className="round-cards">
                    <EventCard
                        roundNum="1"
                        roundName="Apti-Quest"
                        subtitle="(All Registered Teams)"
                        icon={Quiz}
                        description="Answer 30 MCQ questions in 30 minutes based on Aptitude, Technical and General Knowledge."
                    ></EventCard>
                    <EventCard
                        roundNum="2"
                        roundName="Tech-Spotlight"
                        subtitle="(Top 30 teams from Round-1)"
                        icon={AudioVideo}
                        description="Answer 20 questions shown on the screen in 30 mins. But be quick! Each question only stays on the screen for 30 secs."
                    ></EventCard>
                    <EventCard
                        roundNum="3"
                        roundName="Code-Odyssey"
                        subtitle="(Top 5 teams from Round-2)"
                        icon={CodeHunt}
                        description="Solve your way through 4 given coding problems. Each problem unlocks the next problem."
                    ></EventCard>
                </div>
            </div>
        </div>
    );
};

export default About;
