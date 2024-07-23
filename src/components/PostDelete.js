import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PostDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDelete = async () => {
    const userConfirmed = window.confirm('Are you sure you want to delete this post?');
    if (!userConfirmed) {
      return;
    }

    setLoading(true);
    setError('');
    try {
      console.log('Attempting to delete post with id:', id);
      const response = await axios.delete(`http://localhost:5000/api/posts/${id}`);
      console.log('Delete response:', response);
      if (response.status === 200) {
        alert('Post deleted successfully');
        navigate('/');
      } else {
        alert('Failed to delete the post');
        console.error('Failed to delete post:', response);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
        setError(`Error: ${error.response.data.message || 'Unknown error'}`);
      } else if (error.request) {
        // Network error
        console.error('Network error:', error.request);
        setError('Network error. Please check your connection.');
      } else {
        console.error('Error deleting post:', error.message);
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Delete Post</h1>
      <p>Are you sure you want to delete this post?</p>
      <button onClick={handleDelete} disabled={loading}>
        {loading ? 'Deleting...' : 'Delete'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PostDelete;
