import { Router } from 'express';
import PostController from '../controllers/PostController';
const router = new Router();
const postController = new PostController();
// Get all Posts
router.route('/').get(postController.getPosts);

// Delete a post by id
router.route('/:id').delete(postController.deletePost);

// Add a new Post
router.route('/').post(postController.addPost);

// Get one post by id
router.route('/:id').get(postController.getPost);

// Update post by id
router.route('/:id').put(postController.updatePost);

export default router;
