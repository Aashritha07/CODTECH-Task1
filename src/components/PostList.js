// src/components/PostList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="post-list">
      {posts.map(post => (
        <div key={post._id}>
          <Link to={`/posts/${post._id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
