import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
const router = new Router();

// Get all Posts
router.route('/').get(PostController.getPosts);

// Delete a post by id
router.route('/:id').delete(PostController.deletePost);

// Add a new Post
router.route('/').post(PostController.addPost);

// Get one post by id
router.route('/:id').get(PostController.getPost);

export default router;
