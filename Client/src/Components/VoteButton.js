import React, { useState } from 'react';
import api from '../api/apiConfig'

function VoteButton(props) {
  const [vote, setVote] = useState(props.vote);

  const handleVote = async (action) => {
    const response = await api.post(`/posts/${props.postId}/${action}/`, {}, {
      headers: {
        Accept: "application/json",
        Authorization: `JWT ${localStorage.getItem('token')}`
      }
    });
    setVote(response.data.vote);
  }

  return (
    <div className='vote-button'>
      <button className='upvote' onClick={() => handleVote('upvote')}>
        <i className='fas fa-chevron-up'></i>
      </button>
      <span className='vote-count'>{vote}</span>
      <button className='downvote' onClick={() => handleVote('downvote')}>
        <i className='fas fa-chevron-down'></i>
      </button>
    </div>
  );
}

export default VoteButton;

