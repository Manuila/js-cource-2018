import PostService from '../services/PostService';
import MongoDBPostDAO from '../dao/MongoDBPostDAO';

const postDAO = new MongoDBPostDAO();
const postService = new PostService(postDAO);

class PostController {

  getPosts(req, res) {
    postService.getAll()
      .then(posts => res.status(200).json({ posts }))
      .catch(error => res.status(404).send(error));
  }
  
  deletePost(req, res) {
    const idPost = req.params.id;
    postService.remove(idPost)
      .then(post => res.status(200).json({ post }))
      .catch(error => res.status(400).send(error));
  }
  
  addPost(req, res) {
    if (!req.body.post.title) res.status(403).end();
    const newPost = {
      title: req.body.post.title,
      description: req.body.post.description,
    };
    postService.add(newPost)
      .then(post => res.status(200).json({ post }))
      .catch(error => res.status(400).send(error));
  }
  
  updatePost(req, res) {
    postService.update(req.params.id, req.body.post)
      .then(post => res.status(200).json({ post }))
      .catch(error => res.status(400).send(error));
  }
  
  getPost(req, res) {
    const idPost = req.params.id;
    postService.getById(idPost)
      .then(post => res.status(200).json({ post }))
      .catch(error => res.status(404).send(error));
  }
}
export default PostController;
