const PostCard = ({ title, imageUrl, description, id, onDelete }) => {
    const handleDelete = () => {
        fetch(`http://localhost:3000/posts/${id}`, { method: 'DELETE' })
            .then(() => onDelete());
    };

    return (
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <img src={imageUrl} alt={title} style={{ width: '100px' }} />
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={handleDelete}>Eliminar</button>
        </div>
    );
};

export default PostCard;
