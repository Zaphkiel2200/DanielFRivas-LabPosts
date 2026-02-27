import type { Post } from '../types';

interface PostListProps {
    posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
    return (
        <div className="post-list">
            {posts.length === 0 ? (
                <p style={{ textAlign: 'center', opacity: 0.5 }}>No hay posts todavía.</p>
            ) : (
                posts.map((post, index) => (
                    <div key={post.id || index} className="post-card">
                        {post.imageUrl && <img src={post.imageUrl} alt={post.title} style={{ width: '100%', borderRadius: '8px' }} />}
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};
