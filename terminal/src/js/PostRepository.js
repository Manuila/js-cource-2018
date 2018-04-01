const PostStorage = require('./PostStorage')
const path = require('path');
const STORAGE_PATH = path.resolve('./store.json');

class PostRepository {
    constructor(postStorage) {
        this.postStorage = new PostStorage(STORAGE_PATH);
      }

      add(post) {
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
          const index = posts.findIndex((storedPost) => storedPost.id === id)
          if(index === -1) {
            return false;
          } else {
            posts.splice(index, 1);
            this.postStorage.savePosts(posts);
            return true;
          }
        })
      }

      getAll(){
        return this.postStorage.getPosts();
      }

      update(post){ 
        return this.postStorage.getPosts()
        .then((posts) => {
          const index = posts.findIndex((storedPost) => storedPost.id === post.id)
          if(index === -1) {
            return false;
          } else {
            posts[index] = post;
            this.postStorage.savePosts(posts);
            return true;
          }
        })
      }

      getById(id){
        return this.get((post) => post.id===id);
      }

      get(predicate){
        return this.postStorage.getPosts()
        .then((posts) => {
          const index = posts.findIndex((storedPost) => predicate(storedPost))
          return posts[index] || null;
        })
      }

  }
    module.exports = PostRepository;