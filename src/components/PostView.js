import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Blog.css'

const PostView = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
      setPost(res.data);
    };

    fetchPost();
  }, [id]);

  return (
    <div >
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostView;
