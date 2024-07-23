// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PostCreate from './components/PostCreate';
import PostEdit from './components/PostEdit';
import PostDelete from './components/PostDelete';
import PostView from './components/PostView';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<PostCreate />} />
          <Route path="/edit/:id" element={<PostEdit />} />
          <Route path="/delete/:id" element={<PostDelete />} />
          <Route path="/view/:id" element={<PostView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
