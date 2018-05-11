import Post from '../models/post';

export function getPosts(req, res) {
  Post.find().exec((error, posts) => {
    error ? res.status(404).send(error) : res.send(posts)
  });
}

export function deletePost(req, res) {
  Post.findOne({ _id: req.params.id }).exec((error, post) => {
    error ? res.status(500).send(error) :  post.remove(() => res.status(200).end());
  });
}

export function addPost(req, res) {
  if(!req.body.post.title) res.status(403).end();
  const post = new Post({
    title: req.body.post.title,
    description: req.body.post.description
  });
  post.save((error, saved) => {
    error ? res.status(500).send(error) : res.send({ post: saved });
  });
}

export function getPost(req, res) {
  Post.findOne({ _id: req.params.id }).exec((error, post) => {
    error ? res.status(404).send(error) : res.send(post);
  });
}