import React, { useState } from "react";

const StakingModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState("");

  if (!isOpen) return null;

  const handleStake = () => {
    // Trigger backend staking function
    onStake(amount);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Stake Tokens</h3>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount to stake"
        />
        <button className="primary-btn" onClick={handleStake}>Stake</button>
        <button className="secondary-btn" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default StakingModal;
