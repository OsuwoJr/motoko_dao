import React from "react";
import { Link } from "react-router-dom";

const ProposalCard = ({ proposal }) => {
  return (
    <div className="proposal-card">
      <h3>{proposal.title}</h3>
      <p>{proposal.description}</p>
      <Link to={`/discussion/${proposal.id}`}>Discuss</Link>
      <button>Vote Yes</button>
      <button>Vote No</button>
    </div>
  );
};

export default ProposalCard;
