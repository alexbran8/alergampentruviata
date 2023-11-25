import React from "react";
import "./index.styles.css";

import teamData from "../../data/team.json";
import projectsData from "../../data/projects.json";



const STATS_LIST = [
  { key: "runners", text: "Runners", value:teamData.length },
  { key: "2023Projects", text: "Projects", value: projectsData.length },
  { key: "2023KM", text: "2023 KM", value:  teamData.reduce((acc,cur)=> acc + cur.ytdKm,0)  },
  { key: "totalKM", text: "Total KM", value: teamData.reduce((acc,cur)=> acc + cur.totalKm,0)}
];

export const Stats = () => {
  return (
    <div className="stats-container">
      <div className={`stats-list`}>
        {STATS_LIST.map((item, idx) => (
          <div key={idx}>
            <svg
              width="75"
              height="75"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="50" fill="#7B7B7B" />
              <circle
                cx="50"
                cy="50"
                r="48.5"
                stroke="black"
                strokeOpacity="0.5"
                strokeWidth="3"
              />
              <text
                x="50"
                y="60"
                textAnchor="middle"
                fontSize="30"
                fill="white"
              >
                {item.value}
              </text>
            </svg>
            <div className="stats-subtitle">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
