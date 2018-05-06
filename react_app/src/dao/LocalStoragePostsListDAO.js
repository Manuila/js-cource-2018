import LocalStorageManager from '../fileManager/LocalStorageManager'

class LocalStoragePostsListDAO {

    /**
     * @param {Post} post
     */
    add = (post) => {
        const localPosts = LocalStorageManager.read('posts') || [];
        localPosts.unshift(post);
        LocalStorageManager.write('posts', localPosts);
    }

    /**
     * @param {Post} post
     */
    remove = (post) => {
        const postId = post.id;
        const localPosts = LocalStorageManager.read('posts');
        const newPosts = localPosts.filter((post) => {
          return post.id !== postId;
        });
        LocalStorageManager.write('posts', newPosts);
    }

    /**
     * @param {String} id
     * @return {Post}
     */
    getById = (id) => {
        const localPosts = LocalStorageManager.read('posts');
        const index = localPosts.findIndex((post) => post.id === id);
        return localPosts[index] || null;
    }

    /**
     * @param {Post} post
     */
    update = (post) => {
        const localPosts = LocalStorageManager.read('posts');
        const index = localPosts.findIndex((storedPost) => storedPost.id === post.id);
        localPosts[index] = post;
        LocalStorageManager.write('posts', localPosts);
    }

    /**
     * @return {Array}
     */
    getAll = () => {
        const localPosts = LocalStorageManager.read('posts');
        return localPosts;
    }
}

export default LocalStoragePostsListDAO;