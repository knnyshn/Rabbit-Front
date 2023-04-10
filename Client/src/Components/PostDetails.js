import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'

function PostDetails() {
    const { postId } = useParams()
    const [ post, setPost ] = useState()
    useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`https://rabbit-app-back.herokuapp.com/posts/${postId}/?format=json`, {
        headers: {
          Accept: "application/json"
          // Authorization: `JWT ${localStorage.getItem('token')}`
        }
      });
      console.log(response);
      setPost(response.data);
    }
    fetchPost();
  }, [postId]);
    

    return (
        <div>
            <Header />
            <div>
                {post ? 
                (
                    <div className='post-container'>
                    <div className='post-detail'>
                        <h1 className='title-detail'>{post.title}</h1>
                        <p className='body-detail'>
                            {post.content}
                        </p>
                        <p class='tagline'>
                            submitted by {post.user} in {post.burrow}.
                        </p>
                    </div>
                    <div className='comment-container'>
                        <h2>
                            {post.comment}
                        </h2>
                    </div>
                    </div>
                ) : (
                    <h1>Loading</h1>
                    )}
            </div>
        </div>
    )
}

export default PostDetails