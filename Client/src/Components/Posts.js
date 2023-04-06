// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Sidebar from './Sidebar';


// This is the component for the Posts on the front (or home) page of Reddit.

function Posts() {

  let postsdummy = Array(10).fill();
  console.log(postsdummy)
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await axios.get('/api/posts/', {
  //       headers: {
  //         Authorization: `JWT ${localStorage.getItem('token')}`
  //       }
  //     });
  //     setPosts(response.data.posts);
  //   }
  //   fetchPosts();
  // }, []);

  return (
    <div className='beeg-container'>
    <div className='posts-container'>
      {postsdummy.map(() => {
        return (
          <div className=''>
          {/* UP/DOWNVOTE */}
          {/* THUMBNAIL */}
          <div className='post'>
            <p className='single-post'/>

            <div className='title'>
              <p>TITLE</p>
            </div>
            <div className='post-details'>
              <p class='tagline'>
                submitted x hours ago by user in burrow y.
              </p>
            </div>
            <ul className='post-buttons'>
              <button className='comments'># of Comments</button>
              <button className='share'>Share</button>
              <button className='save'>Save</button>
            </ul>
          </div>
          </div>
        )
      })}
      </div>
      <Sidebar />
    </div>
  );
}

export default Posts;






