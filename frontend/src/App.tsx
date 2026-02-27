import { useState, useEffect } from 'react';
import { PostForm } from './components/PostForm';
import { PostList } from './components/PostList';
import './App.css';

import type { Post } from './types';

const API_URL = 'https://daniel-f-rivas-lab-posts.vercel.app/api/posts';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleAddPost = async (title: string, description: string, imageUrl: string) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, imageUrl }),
      });
      if (response.ok) {
        fetchPosts(); // Refresh list after adding
      }
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="app-container">
      <h1>Lab Posts</h1>
      <PostForm onSubmit={handleAddPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;

