export default class PostDAO {
  /**
   * @param {Object} newPost
   * @return {Promise}
   */
  add(newPost) {
    throw new Error('Not implemented');
  }

  /**
   * @param {String} id
   * @return {Promise}
   */
  remove(id) {
    throw new Error('Not implemented');
  }

  /**
   * @param {String} id
   * @return {Promise}
   */
  getById(id) {
    throw new Error('Not implemented');
  }

  /**
     * @param {String} id
     * @param {Object} data
     * @return {Promise}
     */
  update(id, data) {
    throw new Error('Not implemented');
  }

  /**
     * @return {Promise}
     */
  getAll() {
    throw new Error('Not implemented');
  }
}

