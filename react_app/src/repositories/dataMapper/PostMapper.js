import Post from '../../models/Post.js';
import localStorageManager from '../../fileManager/LocalStorageManager';

class PostMapper {

    mapAll = () => {
        const savedPosts = localStorageManager.read('posts');
        return (savedPosts || []).map((obj) => {
            return Object.setPrototypeOf(obj, Post.prototype);
        })
    }
}

export default PostMapper;