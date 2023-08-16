import React from "react";
import "./App.css";
import About from "./components/About/About";
import Agenda from "./components/Agenda/Agenda";
import Contact from "./components/Contact/Contact";
import Cta from "./components/Cta/Cta";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Prizes from "./components/Prizes/Prizes";
import Rules from "./components/Rules/Rules";
import Venue from "./components/Venue/Venue";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Loader from "./components/Loader/Loader";
import Department from "./components/Department/Department";
import Members from "./components/Members/Members";
import Sponsor from "./components/Sponsor/Sponsor";
import Advisior from "./components/Advisior/Advisior";
import Datasheet from "./components/Datasheet/Datasheet";

const App = () => {
    return (
        <div>
            <Loader delay={2500}>
            <Hero></Hero>
            <Datasheet></Datasheet>
            <VideoPlayer></VideoPlayer>
            <About></About>
            <Department></Department>
            <Venue></Venue>
            <Rules></Rules>
            <Prizes></Prizes>
            <Agenda></Agenda>
            <Members></Members>
            <Advisior></Advisior>
            <Contact></Contact>
            <Cta></Cta>
            <Sponsor></Sponsor>
            <Footer></Footer>
            </Loader>
        </div>
    );
};

export default App;
