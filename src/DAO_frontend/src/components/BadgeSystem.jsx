// BadgeSystem.jsx
import React from "react";

const BadgeSystem = ({ userBadges }) => {
  return (
    <div className="badge-system">
      <h3>Your Achievements</h3>
      <ul>
        {userBadges.map((badge, index) => (
          <li key={index}>{badge}</li>
        ))}
      </ul>
    </div>
  );
};

export default BadgeSystem;


