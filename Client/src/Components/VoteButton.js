import React, { useState } from 'react';
import axios from 'axios';

function VoteButton({ postId }) {
  const [voteCount, setVoteCount] = useState(0);
  const [voteType, setVoteType] = useState(null);

  const handleVote = async (type) => {
    const response = await axios.post(`/api/posts/${postId}/vote/`, {
      type: type,
    }, {
      headers: {
        // Authorization: `JWT ${localStorage.getItem('token')}`
      }
    });
    setVoteCount(response.data.vote_count);
    setVoteType(response.data.vote_type);
  };

  return (
    <div>
      <button disabled={voteType === 'up'} onClick={() => handleVote('up')}>
        Upvote
      </button>
      <span>{voteCount}</span>
      <button disabled={voteType === 'down'} onClick={() => handleVote('down')}>
        Downvote
      </button>
    </div>
  );
}

export default VoteButton;
