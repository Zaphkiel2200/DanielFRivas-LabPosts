import { useState } from 'react';

const PostForm = ({ onCreate }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description, imageUrl })
        }).then(() => {
            onCreate();
            setTitle('');
            setDescription('');
            setImageUrl('');
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="URL Imagen" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
            <input placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} />
            <input placeholder="Descripción" value={description} onChange={e => setDescription(e.target.value)} />
            <button type="submit">Crear</button>
        </form>
    );
};

export default PostForm;
