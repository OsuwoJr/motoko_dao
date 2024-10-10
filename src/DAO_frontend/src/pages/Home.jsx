import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to FanArena DAO</h1>
      <p>Participate in governance by voting on proposals, staking tokens, and earning rewards!</p>
      <div className="homebar">
        <div>
        <Link className="primary-btn" to="/proposals">Proposals</Link>
        </div>
        <div>
        <Link  className="primary-btn" to="/leaderboard">Leaderboard</Link>
        </div>
        <div>
        <Link className="primary-btn" to="/account">Account</Link>
        </div>
      </div>
      
    </div>
    
  );
};

export default Home;
