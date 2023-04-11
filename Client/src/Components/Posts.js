import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
// import Thumbnail from './Thumbnail';
// import VoteButton from './VoteButton';

// This is the component for the Posts on the front (or home) page of Reddit.

function Posts() {

  const [posts, setPosts] = useState([]);
  // let postsdummy = Array(10).fill();
  // useEffect(() => {
  //   fetch('https://rabbit-app-back.herokuapp.com/burrows/?format=json')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data.)
  //       // setPosts(Object.values(data))
  //     });
  // }, []);
  

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('https://rabbit-app-back.herokuapp.com/posts/?format=json', {
        headers: {
          Accept: "application/json"
          // Authorization: `JWT ${localStorage.getItem('token')}`
        }
      });
      console.log(response);
      setPosts(response.data);
    }
    fetchPosts();
  }, []);

  return (
    <div className='beeg-container'>
      <div className='posts-container'>
        {posts.map((post) => (
          <div className=''>
          {/* UP/DOWNVOTE
          THUMBNAIL */}
          <div className='post'>
            <p className='single-post'/>
          <Link to={`/burrow/${post.burrow.name}/${post.id}/`}>
            <div className='title'>
              <p>{post.title}</p>
            </div>
          </Link>
            <div className='post-details'>
              <p class='tagline'>
                submitted by {post.user.username} in {post.burrow.name}.
              </p>
            </div>
            <ul className='post-buttons'>
              <button className='comments'>{post.comments.length} Comments</button>
              <button className='share'>Share</button>
              <button className='save'>Save</button>
            </ul>
          </div>
          </div>
        ))}
      </div>
    <div className='posts-container'>
      
      </div>
      <Sidebar />
    </div>
  );
}

export default Posts;






