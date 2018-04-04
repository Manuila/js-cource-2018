const PostStorage = require('./PostStorage');
const path = require('path');
const STORAGE_PATH = path.resolve('./store.json');

class PostContext {
    constructor(postStorage) {
        this.postStorage = new PostStorage(STORAGE_PATH);
    }

    //get a copy posts
    get posts() {
        const receivedPosts = this.postStorage.posts();
        return receivedPosts;
    }

    saveChanges() {
        this.postStorage.save(this.posts);
    }

    //return a copy posts
    toList() {
        return new Promise((resolve) => {
            resolve(this.posts);
        }); 
    }
    
    add(post) {
        return new Promise((resolve, reject) => {
            if(post.title && post.description){
                this.posts.push(post);
                resolve(true);
            } else {
                reject({message:`Data is inconsistent`});
            }
        });
    }

    remove(id) {
        return new Promise((resolve, reject) => {
            const index = this.posts.findIndex((post) => post.id === id);
            if(index >= 0){
                this.posts.splice(index, 1);
                resolve(true);
            } else {
                reject({message:`Object is not exist`});
            }
        });
    }

    get(predicate) {
        return new Promise((resolve, reject) => {
            const index = this.posts.findIndex((post) => predicate(post));
            if(index >= 0){
                resolve(this.posts[index]);
            } else {
                reject({message:`Object is not exist`});
            }
            //resolve(this.posts[index] || null);
        });
      }
}

module.exports = PostContext;