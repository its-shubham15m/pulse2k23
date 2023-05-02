import React, { useState, useEffect, useMemo } from "react";
import "./Members.css";
import member1 from "../../members/Sourav Ghosh.jpg";
import member2 from "../../members/Ahelee Mukherjee.jpg";
import member3 from "../../members/Subhodeep Neogi.jpg";
import member4 from "../../members/Sreemoyee Chatterjee.jpg";
import member5 from "../../members/Chayan Gupta.jpg";
import member6 from "../../members/Diptanshu Ghosh.jpg";
import member7 from "../../members/Hrishika.jpg";
import member8 from "../../members/Shubham Gupta.jpg";
import member9 from "../../members/Lalita Bhattacharya.jpg";
import member10 from "../../members/Meghna Si.jpg";
import member11 from "../../members/Shreyan Chowdhury.jpg";
import member12 from "../../members/Sanjana Shaw.jpg";
import member13 from "../../members/Riya Karmakar.jpg";
import member14 from "../../members/Deep Chakraborty.jpg";
import member15 from "../../members/Supratim Dey.jpg";
import member16 from "../../members/Kallol Mondal.jpg";
import member17 from "../../members/Sayantan Karmakar.jpg";
import member18 from "../../members/Avantika Roy.jpg";

const Members = () => {
  const membersArr = useMemo(
    () => [
      { id: 1, name: "Sourav Ghosh", image: member1, whatsappLink: "https://wa.me/9123737575" },
      { id: 2, name: "Ahelee Mukherjee", image: member2, whatsappLink: "https://wa.me/8274819991" },
      { id: 3, name: "Subhodeep Neogi", image: member3, whatsappLink: "https://wa.me/8337081510" },
      { id: 4, name: "Sreemoyee Chatterjee", image: member4, whatsappLink: "https://wa.me/8100065320" },
      { id: 5, name: "Chayan Gupta", image: member5, whatsappLink: "https://wa.me/9330066202" },
      { id: 6, name: "Diptanshu Ghosh", image: member6, whatsappLink: "https://wa.me/7364074601" },
      { id: 7, name: "Hrishika", image: member7, whatsappLink: "https://wa.me/7564056032" },
      { id: 8, name: "Shubham Gupta", image: member8, whatsappLink: "https://wa.me/9674644518" },
      { id: 9, name: "Lalita Bhattacharya", image: member9, whatsappLink: "https://wa.me/8981511092" },
      { id: 10, name: "Meghna Si", image: member10, whatsappLink: "https://wa.me/9748638473" },
      { id: 11, name: "Shreyan Pal Chowdhury", image: member11, whatsappLink: "https://wa.me/8420231825" },
      { id: 12, name: "Sanjana Shaw", image: member12, whatsappLink: "https://wa.me/8240934380" },
      { id: 13, name: "Riya Karmakar", image: member13, whatsappLink: "https://wa.me/7602372605" },
      { id: 14, name: "Deep Chakraborty", image: member14, whatsappLink: "https://wa.me/6291907144" },
      { id: 15, name: "Supratim De", image: member15, whatsappLink: "https://wa.me/9330431771" },
      { id: 16, name: "Kallol Mondal", image: member16, whatsappLink: "https://wa.me/9064963090" },
      { id: 17, name: "Sayantan Karmakar", image: member17, whatsappLink: "https://wa.me/9875532517" },
      { id: 18, name: "Avantika Roy", image: member18, whatsappLink: "https://wa.me/6290755133" },
    ],
    []
  );

  const [startIndex, setStartIndex] = useState(0);
  const [visibleMembers, setVisibleMembers] = useState([]);

  useEffect(() => {
    let interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex === membersArr.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [membersArr]);

  useEffect(() => {
    const endIndex =
      startIndex + 5 < membersArr.length ? startIndex + 5 : membersArr.length;
    setVisibleMembers([
      ...membersArr.slice(startIndex, endIndex),
      ...(endIndex === membersArr.length
        ? membersArr.slice(0, 5 - (membersArr.length - startIndex))
        : []),
    ]);
  }, [startIndex, membersArr]);

  return (
    <div className="agenda section" id="agenda">
      <div className="agenda-content container">
        <div className="section-header">
          <div className="sub-title">ORGANIZERS</div>
          <div className="title">Pusle.exe 2K23</div>
        </div>
      <div className="members-container">
          <div className="members-wrapper">
            {visibleMembers.map((member) => (
              <div className="members-slide" key={member.id}>
                <img src={member.image} alt={member.name} />
                <p>{member.name}</p>
                <div className="cta-buttons">
                    <div className="tertiary-btn">
                        <a href={member.whatsappLink}>WhatsApp &gt;</a>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Members;
