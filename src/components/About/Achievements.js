import React from "react";
import { SiLeetcode } from "react-icons/si";
import { FaTrophy, FaUsers, FaGraduationCap } from "react-icons/fa";

const stats = [
  {
    icon: <SiLeetcode />,
    value: "800+",
    label: "DSA Problems Solved",
  },
  {
    icon: <FaTrophy />,
    value: "Top 1.5%",
    label: "JEE Mains 2022",
  },
  {
    icon: <FaUsers />,
    value: "2,000+",
    label: "Students Served via TechKriya & Vulcanzy",
  },
  {
    icon: <FaGraduationCap />,
    value: "7.97",
    label: "CGPA at NIT Andhra Pradesh",
  },
];

function Achievements() {
  return (
    <div className="stats-grid">
      {stats.map((s, i) => (
        <div key={i} className="stat-card">
          <div className="stat-icon">{s.icon}</div>
          <p className="stat-value">{s.value}</p>
          <p className="stat-label">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Achievements;
