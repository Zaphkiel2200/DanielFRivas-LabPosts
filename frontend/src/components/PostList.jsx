import { useState, useEffect } from 'react';
import PostCard from './PostCard';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        fetch('http://localhost:3000/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map(post => (
                <PostCard key={post.id} {...post} onDelete={fetchPosts} />
            ))}
        </div>
    );
};

export default PostList;
