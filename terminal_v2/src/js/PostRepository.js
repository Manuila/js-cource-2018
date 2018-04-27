const PostContext = require('./PostContext')

class PostRepository {
  constructor(postContext) {
    this.postContext = new PostContext();
  }

   add(post) {
    return this.postContext.add(post)
    .then((result) => {
      this.postContext.saveChanges();
      return result;
    });
  }

   update(post) {
    return this.postContext.get((storedPost) => storedPost.id === post.id)
    .then((oldPost) =>{
      post = oldPost;
    })
    .then(() =>{
      this.postContext.saveChanges();
      return true;
    });
  }

   delete(id) {
     return this.postContext.remove(id)
     .then((result) => {
      this.postContext.saveChanges();
      return result;
     });
  }

  getById(id) {
    return this.postContext.get((post) => post.id===id)
    .then((post) => {
      return post;
    })
  }

   getAll() {
    return this.postContext.toList()
    .then((posts) => {
      return posts;
    });
  }
}
module.exports = PostRepository;