var _ = require('lodash');

class LocalStoragePostRepository{

    constructor(postLocalStorage) {
        this.postLocalStorage = postLocalStorage;
    };

    /**
     * @param {Object} post
     */
    add = (post) => {
        const localPosts = this.postLocalStorage.getAllPosts();
        console.log(localPosts);
        localPosts.unshift(post);
        this.postLocalStorage.saveAllPosts(localPosts);
    };

    /**
     * @param {Number} index
     * @param {Object} post
     */
    addAt = (index, post) => {
        const localPosts = this.postLocalStorage.getAllPosts();
        localPosts.splice(index, 1, post);
        this.postLocalStorage.saveAllPosts(localPosts);
    }

    /**
     * @param {Object} post
     */
    remove = (post) => {
        const postId = post.id;
        const newPosts = this.postLocalStorage.getAllPosts().filter((post) => {
          return post.id !== postId;
        });
        this.postLocalStorage.saveAllPosts(newPosts);
    };

    /**
     * @param {Object} post
     */
    indexOf = (post) => {
        const localPosts = this.postLocalStorage.getAllPosts();
        const index = localPosts.findIndex((storedPost) => storedPost.id === post.id);
        return index;
    }

    getAll = () => {
        return this.postLocalStorage.getAllPosts();
    };

    /**
     * @param {Function} predicate
     */
    find = (predicate) => {
        const localPosts = this.postLocalStorage.getAllPosts();
        const index = localPosts.findIndex((post) => predicate(post));
        return localPosts[index] || null;
    }
}

export default LocalStoragePostRepository;