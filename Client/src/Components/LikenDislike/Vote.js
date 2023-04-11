import { useState } from 'react';

function LikeDislikeButton() {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setDisliked(false);
  };

  const toggleDislike = () => {
    setDisliked(!disliked);
    setLiked(false);
  };

  return (
    <div className='flex gap-2'>
      <img
        className='w-4 h-8'
        src={liked ? './Assets/colorup.png' : './Assets/grayup.png'}
        alt="like button"
        onClick={toggleLike}
      />
      <img
        className='w-4 h-8'
        src={disliked ? './Assets/colordown.png' : './Assets/graydown.png'}
        alt="dislike button"
        onClick={toggleDislike}
      />
    </div>
  );
}

export default LikeDislikeButton;
