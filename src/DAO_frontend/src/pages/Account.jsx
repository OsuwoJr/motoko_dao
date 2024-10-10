import React, { useEffect, useState } from "react";
import BadgeSystem from "../components/BadgeSystem";

const Account = () => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    async function fetchAccountData() {
      // Fetch account data from backend
      const res = await fetch("/api/account");
      const data = await res.json();
      setAccount(data);
    }

    fetchAccountData();
  }, []);

  return (
    <div>
      <h2>Your Account</h2>
      <BadgeSystem userBadges={userBadges} />
      {account ? (
        <div>
          <p>Balance: {account.balance} FAN</p>
          <p>Staked: {account.staked} FAN</p>
        </div>
      ) : (
        <p>Loading account data...</p>
      )}
    </div>
  );
};

export default Account;
