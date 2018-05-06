import Post from '../models/Post.js';
import uuidv1 from 'uuid/v1';
import dateFormat from 'dateformat';

class PostService {
     /**
     * @return {Post}
     */
    create = () => {
        const post = new Post();
        post.id = uuidv1();
        post.date = dateFormat(new Date(), "mmmm dS, yyyy, h:MM:ss TT");
        post.title = '';
        post.description = '';
        post.isPublished = false;
        post.isLiked = false;
        return post;
    }
}

export default PostService;