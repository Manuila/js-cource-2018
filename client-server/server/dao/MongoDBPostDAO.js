import Post from '../models/post';

  /**
   * @param {Object} newPost
   * @return {Promise}
   */
  export function add(newPost) {
    const post = new Post(newPost);
    return post.save();
  }

  /**
   * @param {String} id
   * @return {Promise}
   */
  export function remove(id) {
    return Post.findByIdAndRemove(id);
  }

  /**
   * @param {String} id
   * @return {Promise}
   */
  export function getById(id) {
   return Post.findOne({ _id: id});
  }

  /**
   * @param {String} id
   * @param {Object} data
   * @return {Promise}
   */
  export function update(id, data) {
    return Post.update({ _id: id }, data);
  }

  /**
   * @return {Promise}
   */
  export function getAll() {
    return Post.find().sort('-date');
  }


