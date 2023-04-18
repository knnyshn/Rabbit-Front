import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import api from "../api/apiConfig"

function PostDetails() {
  const { postId } = useParams();
  const [post, setPost] = useState();
  useEffect(() => {
    const fetchPost = async () => {
      const response = await api.get(`/posts/${postId}/?format=json`);
      console.log(response);
      setPost(response.data);
    };
    fetchPost();
  }, [postId]);

  //   console.log(post);
  //   const { postComment } = useParams()
  //   const [ comment, setComment ] = useState()
  //   useEffect(() => {
  //     const fetchComment = async () => {
  //         const response = await axios.get(`https://rabbit-app-back.herokuapp.com/${postComment}/?format=json`, {
  //             headers: {
  //                 Accept: "application/json"

  //             }
  //         })
  //         console.log(response);
  //         setComment(response.data);
  //     }
  //     fetchComment()
  //   }, [postComment])

  return (
    <div>
      <Header />
      <div>
        {post ? (
          <div>
            <div className="post-details-container">
              <div className="post-details">
                <h1 className="title-details">{post.title}</h1>
                <p className="body-details">{post.content}</p>
                <p class="tagline">
                  submitted by {post.user.username} in {post.burrow.name}
                </p>
              </div>
            </div>
            <div>
              {post.comments.map((item) => (
                <div className="big-comment-container">
                  <h2 className="comment-user">{post.user.username}:</h2>
                  <h3 className="comment-container">{item.content}</h3>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
}

export default PostDetails;
