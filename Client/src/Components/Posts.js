import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('/api/posts/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      });
      setPosts(response.data.posts);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <Sidebar />
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;






