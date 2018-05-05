import Post from '../models/post.js';
import uuidv1 from 'uuid/v1';
import dateFormat from 'dateformat';

class PostService {
    createPost = () => {
        const post = new Post();
        post.id = uuidv1();
        post.date = dateFormat(new Date(), "mmmm dS, yyyy, h:MM:ss TT");
        return post;
    }
}

export default PostService;