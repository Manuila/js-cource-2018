import Post from '../models/post';
import PostDAO from './PostDAO';

export default class MongoDBPostDAO extends PostDAO {
  /**
     * @param {Object} newPost
     * @return {Promise}
     */
  add(newPost) {
    const post = new Post(newPost);
    return post.save();
  }

  /**
     * @param {String} id
     * @return {Promise}
     */
  remove(id) {
    return Post.findByIdAndRemove(id);
  }

  /**
     * @param {String} id
     * @return {Promise}
     */
  getById(id) {
    return Post.findOne({ _id: id });
  }

  /**
     * @param {String} id
     * @param {Object} data
     * @return {Promise}
     */
  update(id, data) {
    return Post.update({ _id: id }, data);
  }

  /**
     * @return {Promise}
     */
  getAll() {
    return Post.find().sort('-date');
  }
}
