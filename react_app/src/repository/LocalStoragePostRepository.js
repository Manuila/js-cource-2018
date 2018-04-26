class LocalStoragePostRepository{

    constructor(postLocalStorage) {
        this.postLocalStorage = postLocalStorage;
    };

    add = (post) => {
        const localPosts = this.postLocalStorage.getAllPosts();
        localPosts.unshift(post);
        this.postLocalStorage.saveAllPosts(localPosts);
    };

    remove = (post) => {
        const postId = post.id;
        const newPosts = this.postLocalStorage.getAllPosts().filter((post) => {
          return post.id !== postId;
        });
        this.postLocalStorage.saveAllPosts(newPosts);
    };

    update = (post) => {
        const localPosts = this.postLocalStorage.getAllPosts();
        const index = localPosts.findIndex((storedPost) => storedPost.id === post.id);
        localPosts[index] = post;
        this.postLocalStorage.saveAllPosts(localPosts);
      }
    
    getAll = () => {
        return this.postLocalStorage.getAllPosts();
    };

    getById = (id) => {
        const localPosts = this.postLocalStorage.getAllPosts();
        const index = localPosts.findIndex((storedPost) => storedPost.id===id);
        return localPosts[index] || null;

    };
}

export default LocalStoragePostRepository;