import localStorageManager from '../fileManager/LocalStorageManager';

class LocalStoragePostRepository{

    constructor(postMapper) {
        this.postMapper = postMapper;
    };

    /**
     * @param {Object} post
     */
    add = (post) => {
        const localPosts = this.postMapper.mapAll();
        localPosts.unshift(post);
        localStorageManager.write('posts', localPosts);
    };

    /**
     * @param {Number} index
     * @param {Object} post
     */
    addAt = (index, post) => {
        const localPosts = this.postMapper.mapAll();
        localPosts.splice(index, 1, post);
        localStorageManager.write('posts', localPosts);
    }

    /**
     * @param {Object} post
     */
    remove = (post) => {
        const postId = post.id;
        const localPosts = this.postMapper.mapAll();
        const newPosts = localPosts.filter((post) => {
          return post.id !== postId;
        });
        localStorageManager.write('posts', newPosts);
    };

    /**
     * @param {Object} post
     */
    indexOf = (post) => {
        const localPosts = this.postMapper.mapAll();
        const index = localPosts.findIndex((storedPost) => storedPost.id === post.id);
        return index;
    }

    findPost = (post) => {
        const localPosts = this.postMapper.mapAll();
        const index = localPosts.findIndex((storedPost) => storedPost.id === post.id);
        return localPosts[index] || null;
    }

    getAll = () => {
        return this.postMapper.mapAll();;
    };

    /**
     * @param {Function} predicate
     */
    find = (predicate) => {
        const localPosts = this.postMapper.mapAll();
        const index = localPosts.findIndex((post) => predicate(post));
        return localPosts[index] || null;
    }

    count = () => {
        const localPosts = this.postMapper.mapAll();
        return  localPosts.length ? localPosts : 0;
    }
}

export default LocalStoragePostRepository;