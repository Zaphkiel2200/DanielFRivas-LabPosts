import { Request, Response } from 'express';
import Boom from '@hapi/boom';
import { PostService } from './post.service';

export class PostController {
    private postService: PostService;

    constructor(postService: PostService) {
        this.postService = postService;
    }

    getPosts = (req: Request, res: Response) => {
        const posts = this.postService.getPosts();
        return res.json(posts);
    };

    createPost = (req: Request, res: Response) => {
        const { title, description, imageUrl } = req.body;

        if (title === undefined) {
            throw Boom.badRequest('title is required');
        }

        if (description === undefined) {
            throw Boom.badRequest('description is required');
        }

        if (imageUrl === undefined) {
            throw Boom.badRequest('imageUrl is required');
        }

        const post = this.postService.createPost({
            title,
            description,
            imageUrl,
        });

        return res.json(post);
    };

    deletePost = (req: Request, res: Response) => {
        const { id } = req.params;
        this.postService.deletePost(id as string);
        return res.status(204).send();
    };
}
