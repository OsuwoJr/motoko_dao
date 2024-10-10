import React from "react";
import VotingGraph from "../components/VotingGraph";

const ProposalTimeline = ({ timeline }) => {
  return (
    <div className="proposal-timeline">
      <h3>Proposal Timeline</h3>
      <VotingGraph votesYes={proposal.votesYes} votesNo={proposal.votesNo} />
      <ul>
        {timeline.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProposalTimeline;
