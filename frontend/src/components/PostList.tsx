interface Post {
    id?: number;
    title: string;
    content: string;
}

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
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                ))
            )}
        </div>
    );
};
