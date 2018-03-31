const PostStorage = require('./PostStorage')
const path = require('path');
const STORAGE_PATH = path.resolve('./store.json');

class PostRepository {
    constructor(postStorage) {
        this.postStorage = new PostStorage(STORAGE_PATH);
      }
      create(post) {
        return this.postStorage.getPosts()
          .then((posts) => {
            posts.push(post);
            this.postStorage.savePosts(posts);
            return true;
          }) 
      }
      delete(id){
        return this.postStorage.getPosts()
        .then((posts) => {
          const index = posts.findIndex((post) => post.id === id)
          if(index === -1) {
            return false;
          }
          else {
            posts.splice(index, 1);
            this.postStorage.savePosts(posts);
            return true;
          }
        })
      }
      getAll(){
        return this.postStorage.getPosts();
      }
      update(id, ...props){
        return this.postStorage.getPosts()
        .then((posts) => {
          const index = posts.findIndex((post) => post.id === id)
          if(index === -1) {
            return false;
          }
          else {
            posts[index].title = props[0];
            posts[index].description = props[1];
            this.postStorage.savePosts(posts);
            return true;
          }
        })
      }
      setLike(id){
        return this.postStorage.getPosts()
        .then((posts) => {
          const index = posts.findIndex((post) => post.id === id)
          if(index === -1) {
            return false;
          }
          else {
            posts[index].isLiked = true;
            this.postStorage.savePosts(posts);
            return true;
          }
        })
      }
      setComment(id, _comment){
        return this.postStorage.getPosts()
        .then((posts) => {
          const index = posts.findIndex((post) => post.id === id)
          if(index === -1) {
            return false;
          }
          else {
            posts[index].comment = _comment;
            this.postStorage.savePosts(posts);
            return true;
          }
        })
      }
  }
    module.exports = PostRepository;