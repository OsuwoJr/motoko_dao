// Leaderboard.jsx
import React from "react";

const Leaderboard = ({ topVoters, topProposers }) => {
  return (
    <div className="leaderboard">
      <h2>Top Voters</h2>
      <ul>
        {topVoters.map((voter, index) => (
          <li key={index}>{voter}</li>
        ))}
      </ul>

      <h2>Top Proposers</h2>
      <ul>
        {topProposers.map((proposer, index) => (
          <li key={index}>{proposer}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
