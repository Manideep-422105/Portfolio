import React from "react";
import { ImPointRight } from "react-icons/im";
import { HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";

function ExperienceCard({ role, company, location, duration, stack, points }) {
  return (
    <div className="exp-card">
      <div className="exp-card-header">
        <div>
          <h3 className="exp-role">{role}</h3>
          <h4 className="exp-company">
            <span className="purple">{company}</span>
          </h4>
        </div>
        <div className="exp-meta">
          <span>
            <HiOutlineCalendar /> {duration}
          </span>
          <span>
            <HiOutlineLocationMarker /> {location}
          </span>
        </div>
      </div>

      <div className="exp-stack">
        {stack.map((tech) => (
          <span key={tech} className="exp-stack-tag">
            {tech}
          </span>
        ))}
      </div>

      <ul className="exp-points">
        {points.map((p, i) => (
          <li key={i}>
            <ImPointRight className="exp-bullet" /> {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;
