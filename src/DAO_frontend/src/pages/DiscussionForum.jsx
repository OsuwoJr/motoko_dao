
import React from "react";

const DiscussionForum = ({ proposalId }) => {
  return (
    <div className="discussion-forum">
      <h2>Discussion for Proposal {proposalId}</h2>
      {/* Use a comment system or integrate decentralized messaging */}
      <div className="comments-section">
        {/* Comments */}
      </div>
      <input type="text" placeholder="Add a comment" />
      <button>Submit</button>
    </div>
  );
};

export default DiscussionForum;