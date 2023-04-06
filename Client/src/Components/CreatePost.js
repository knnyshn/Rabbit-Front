import React, { useState } from 'react';
import axios from 'axios';

// This is the component to create a post after logging in etc.

function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const token = localStorage.getItem('token'); // get the user's JWT token from local storage
      const response = await axios.post('/api/posts', { title, body }, { headers: { Authorization: `Bearer ${token}` } });
      console.log(response.data); // handle successful form submission
    } catch (error) {
      console.error(error); // handle form submission error
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <br />
      <label>
        Body:
        <textarea value={body} onChange={(event) => setBody(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreatePost;
