class PostService {
  constructor(postDAO) {
    this.postDAO = postDAO;
  }

  /**
   * @return {Promise}
   */
  add(post) {
    return this.postDAO.add(post);
  }

  /**
   * @return {Promise}
   */
  remove(id) {
    return this.postDAO.remove(id);
  }

  /**
   * @return {Promise}
   */
  getById(id) {
    return this.postDAO.getById(id);
  }

  /**
     * @param {Post} post
     */
  update(id, data) {
    return this.postDAO.update(id, data);
  }

  /**
     * @return {Promise}
     */
  getAll() {
    return this.postDAO.getAll();
  }
}

export default PostService;
