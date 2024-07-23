import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PostCreate = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/posts', { title, content });
      navigate('/');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit} >
        <input style={{height:30, width:500,color:'black'}}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /><br/><br/>
        <textarea style={{height:100, width:500}}
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        /><br/>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default PostCreate;
