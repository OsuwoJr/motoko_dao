import React, { useState, useEffect } from "react";
import ProposalCard from "../components/ProposalCard";

const Proposals = () => {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    async function fetchProposals() {
      // Fetch proposals from the backend
      const res = await fetch("/api/proposals");
      const data = await res.json();
      setProposals(data);
    }

    fetchProposals();
  }, []);

  return (
    <div>
      <h2>Active Proposals</h2>
      <div>
        {proposals.map((proposal) => (
          <ProposalCard key={proposal.id} proposal={proposal} />
        ))}
      </div>
    </div>
  );
};

export default Proposals;
