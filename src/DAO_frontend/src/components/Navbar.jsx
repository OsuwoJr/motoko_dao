import React, { useState } from "react";
import { Link } from "react-router-dom";
import StakingModal from "./StakingModal";

const Navbar = () => {
  const [isStakingOpen, setIsStakingOpen] = useState(false);

  return (
    <nav className="navbar">
      <div>
        <Link to="/">FanArena DAO</Link>
      </div>
      <div>
        <Link to="/proposals">Proposals</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/account">Account</Link>
        <button onClick={() => setIsStakingOpen(true)}>Stake Tokens</button>
      </div>
      <StakingModal isOpen={isStakingOpen} onClose={() => setIsStakingOpen(false)} />
    </nav>
  );
};

export default Navbar;
