import PostService from '../services/PostService'
import * as MongoDBPostDAO from '../dao/MongoDBPostDAO'
import Post from '../models/post';

const postService = new PostService(MongoDBPostDAO);

export function getPosts(req, res) {
  postService.getAll()
  .then(posts => {
    return res.send(posts);
  })
  .catch(err => {
    res.status(404).send(err);
  });
}

export function deletePost(req, res) {
  const idPost = req.params.id;
  postService.remove(idPost)
  .then(post => {
    const response = {
      message: "Post successfully deleted",
      id: post._id
    }
    return res.status(200).send(response)
  })
  .catch(err => {
    res.status(400).send(err);
  });
}

export function addPost(req, res) {
  if(!req.body.post.title) res.status(403).end();
  const newPost = {
    title: req.body.post.title,
    description: req.body.post.description
  };
  postService.add(newPost)
  .then( saved => {
    res.status(200).send({ post: saved })
  })
  .catch(err => {
    res.status(400).send(err);
  });
}

export function getPost(req, res) {
  const idPost = req.params.id;
  postService.getById(idPost)
  .then(post => {
    return res.send(post);
  })
  .catch(err => {
    res.status(404).send(err);
  });
}

export function updatePost(req, res) {
  postService.update(req.params.id, req.body.post)
  .then( updated => {
    res.status(200).send({ post: updated })
  })
  .catch(err => {
    res.status(400).send(err);
  });
}