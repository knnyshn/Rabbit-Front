import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

function PostDetails() {
  const { postId } = useParams();
  const [post, setPost] = useState();
  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(
        `https://rabbit-app-back.herokuapp.com/posts/${postId}/?format=json`,
        {
          headers: {
            Accept: "application/json",
            // Authorization: `JWT ${localStorage.getItem('token')}`
          },
        }
      );
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
                  submitted by {post.user} in {post.burrow}
                </p>
              </div>
            </div>
            <div>
                          {post.comments.map((item) => (
                  <>
                  <p className="comment-user">{post.user}:</p>
                  <p className="comment-container">{item.content}</p>
                  </>
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
