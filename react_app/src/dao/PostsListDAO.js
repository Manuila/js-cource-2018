class PostsListDAO {

    constructor(fileManager) {
        this.fileManager = fileManager;
    }
  
    /**
     * @param {Post} post
     */
    add = (post) => {
        const localPosts = this.fileManager.read() || [];
        localPosts.unshift(post);
        this.fileManager.write(localPosts);
    }

    /**
     * @param {Post} post
     */
    remove = (post) => {
        const postId = post.id;
        const localPosts = this.fileManager.read();
        const newPosts = localPosts.filter((post) => {
          return post.id !== postId;
        });
        this.fileManager.write(newPosts);
    }

    /**
     * @param {String} id
     * @return {Post}
     */
    getById = (id) => {
        const localPosts = this.fileManager.read();
        const index = localPosts.findIndex((post) => post.id === id);
        return localPosts[index] || null;
    }

    /**
     * @param {Post} post
     */
    update = (post) => {
        const localPosts = this.fileManager.read();
        const index = localPosts.findIndex((storedPost) => storedPost.id === post.id);
        localPosts[index] = post;
        this.fileManager.write(localPosts);
    }

    /**
     * @return {Array}
     */
    getAll = () => {
        const localPosts = this.fileManager.read();
        return localPosts;
    }
}

export default PostsListDAO;