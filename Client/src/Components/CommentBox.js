import React, { useState } from 'react';

function CommentBox(props) {
  const [comment, setComment] = useState('');

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Add your code here to submit the comment to the server
    setComment('');
  }

  return (
    <div className="comment-box">
      <form onSubmit={handleSubmit}>
        <textarea
          name="comment"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Add a comment"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentBox;