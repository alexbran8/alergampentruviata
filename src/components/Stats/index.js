import React from "react";
import "./index.styles.css";

const STATS_LIST = [
  { text: "Runners", value: "10" },
  { text: "Days", value: "700" },
  { text: "Projects", value: "6" },
  { text: "Total KM", value: "20000" },
  { text: "2023 KM", value: "10000" },
];

export const Stats = () => {
  return (
    <div className="stats-container">
      <div className={`stats-list`}>
        {STATS_LIST.map((item, idx) => (
          <div key={idx}>
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 121"
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
