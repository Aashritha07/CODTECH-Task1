import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <div key={post._id} className="blog-post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <div className="buttons">
            <Link to={`/edit/${post._id}`}><button>Edit</button></Link>
            <Link to={`/delete/${post._id}`}><button className="delete">Delete</button></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
