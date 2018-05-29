import Post from '../models/post';
import PostDAO from './PostDAO';

export default class MongoDBPostDAO extends PostDAO {
  /**
     * @param {Object} newPost
     * @return {Promise}
     */
  add(newPost) {
    try {
      const post = new Post(newPost);
      return post.save();
    }
    catch(error) {
      throw error;
    }
  }

  /**
     * @param {String} id
     * @return {Promise}
     */
  remove(id) {
    try {
      return Post.findByIdAndRemove(id);
    }
    catch(error) {
      throw error;
    }
  }
  
  /**
     * @param {String} id
     * @return {Promise}
     */
  getById(id) {
    try {
      return Post.findOne({ _id: id });
    }
    catch(error) {
      throw error;
    }
    
  }

  /**
     * @param {Object} post
     * @return {Promise}
     */
  update(post) {
    try {
      return Post.update({ _id: post._id }, {
        title: post.title,
        description: post.description,
        isPublished: post.isPublished,
        isLiked: post.isLiked,
      });
    }
    catch(error) {
      throw error;
    }
  }

  
  /**
     * @return {Promise}
     */
  getAll() {
    try {
      return Post.find().sort('-date');
    }
    catch(error) {
      throw error;
    }
  }
}
