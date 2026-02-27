import express from 'express';
import cors from 'cors';
import { PostService } from './features/posts/post.service';
import { PostController } from './features/posts/post.controller';
import { PostRouter } from './features/posts/post.router';
import { errorsMiddleware } from './middlewares/errorsMiddleware';

const app = express();

app.use(cors());
app.use(express.json());

const postService = new PostService();
const postController = new PostController(postService);
const postRouter = new PostRouter(postController);

app.use('/api', postRouter.router);

app.use(errorsMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

export default app;
