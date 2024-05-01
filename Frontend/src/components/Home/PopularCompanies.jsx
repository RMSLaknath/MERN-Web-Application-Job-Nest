import React from "react";
import { FaMicrosoft, FaApple, FaGoogle } from "react-icons/fa";
import { SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "1 Microsoft Way, Redmond, WA, United States",
      openPositions: 17,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Tesla",
      location: "1 Tesla Road Austin, TX 78725, United States",
      openPositions: 5,
      icon: <SiTesla />,
    },
    {
      id: 3,
      title: "Apple",
      location: "One Apple Park Way; Cupertino, CA 95014, U.S.A.",
      openPositions: 12,
      icon: <FaApple />,
    },
    {
      id: 3,
      title: "Google",
      location: "1600 Amphitheatre Parkway in Mountain View, California",
      openPositions: 8,
      icon: <FaGoogle />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;