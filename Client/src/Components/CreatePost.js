import React, { useState } from "react";
import Header from "./Header";

function CreatePost({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [burrow, setBurrow] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const post = { title, content, burrow };
    onSubmit(post);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <Header />
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <br />
          <label>
            Content:
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
          <br />
          <label>
            Burrow:
            <input
              type="burrow"
              value={burrow}
              onChange={(e) => setBurrow(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Create Post</button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
