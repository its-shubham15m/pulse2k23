import React, { useState, useEffect, useMemo } from "react";
import "./Advisior.css";
import member1 from "../../members/Anurag Banerjee (Medium).jpg";
import member2 from "../../members/Anuska Kar.jpg";
import member3 from "../../members/Pritha Biswas.jpg";
import member4 from "../../members/Saikat Dey.jpg";
import member5 from "../../members/Srijit Sarkar.jpg";

const Advisior = () => {
  const membersArr = useMemo(
    () => [
      { id: 1, name: "Anurag Banerjee", image: member1, whatsappLink: "https://wa.me/+918777013696" },
      { id: 2, name: "Anuska Kar", image: member2, whatsappLink: "https://wa.me/+919874702562" },
      { id: 3, name: "Pritha Biswas", image: member3, whatsappLink: "https://wa.me/+916290615502" },
      { id: 4, name: "Saikat Dey", image: member4, whatsappLink: "https://wa.me/+919434959513" },
      { id: 5, name: "Srijit Sarkar", image: member5, whatsappLink: "https://wa.me/+919432902403" },
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
      startIndex + 3 < membersArr.length ? startIndex + 3 : membersArr.length;
    setVisibleMembers([
      ...membersArr.slice(startIndex, endIndex),
      ...(endIndex === membersArr.length
        ? membersArr.slice(0, 3 - (membersArr.length - startIndex))
        : []),
    ]);
  }, [startIndex, membersArr]);

  return (
    <div className="agenda section" id="agenda">
      <div className="agenda-content container">
        <div className="section-header">
          <div className="sub-title">ADVISIORS</div>
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

export default Advisior;
