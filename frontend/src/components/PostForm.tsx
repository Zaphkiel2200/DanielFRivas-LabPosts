import { useState } from 'react';

interface PostFormProps {
  onSubmit: (title: string, content: string) => void;
}

export const PostForm = ({ onSubmit }: PostFormProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    onSubmit(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título del post"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Contenido..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={4}
      />
      <button type="submit">Publicar Post</button>
    </form>
  );
};
