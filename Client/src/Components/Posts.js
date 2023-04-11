import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar/Sidebar';
import LikeDislikeButton from './LikenDislike/Vote';
import { Link, useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../App';
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

  let { user, setUser } = useContext(AuthenticationContext)

  const navigate = useNavigate()
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('https://rabbit-app-back.herokuapp.com/posts/?format=json', {
        headers: {
          Accept: "application/json"
          // Authorization: `JWT ${localStorage.getItem('token')}`
        }
      });
      //console.log(response);
      setPosts(response.data);
    }
    fetchPosts();
  }, []);
  if (!user) {
    navigate('/auth/login/')
  }
  return (
    <div className='beeg-container'>
      <div className='posts-container'>
        {posts.map((post) => (
          <div key={post.id} className=''>
              <div className='post px-2'>
              <p className='single-post' />
              <Link to={`/post/${post.id}`}>
                <div className='title'>
                  <p>{post.title}</p>
                </div>
              </Link>
              <div className='post-details'>
                <p className='tagline'>
                  submitted by {post.user} in {post.burrow}
                </p>
              </div>
              <ul className='post-buttons'>
                <button className='comments'>{post.comments.length} Comments</button>
                <button className='share'>Share</button>
                <button className='save'>Save</button>
                </ul>
                <div className='mt-4'>
                <LikeDislikeButton />
              </div>
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






