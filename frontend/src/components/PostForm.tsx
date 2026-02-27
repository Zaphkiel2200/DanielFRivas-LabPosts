import { useState } from 'react';

interface PostFormProps {
  onSubmit: (title: string, description: string, imageUrl: string) => void;
}

export const PostForm = ({ onSubmit }: PostFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !imageUrl) return;
    onSubmit(title, description, imageUrl);
    setTitle('');
    setDescription('');
    setImageUrl('');
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título del post"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL de la imagen"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <textarea
        placeholder="Descripción..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
      />
      <button type="submit">Publicar Post</button>
    </form>
  );
};
