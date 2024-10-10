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
        
        <button onClick={() => setIsStakingOpen(true)}>Stake Tokens</button>
      </div>
      <StakingModal isOpen={isStakingOpen} onClose={() => setIsStakingOpen(false)} />
    </nav>
  );
};

export default Navbar;
