class PostService {
  constructor(postDAO) {
    this.postDAO = postDAO;
  }

  /**
   * @return {Promise}
   */
  add(post){
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
   * @return {Promise}
   */
  update(post) {
    return this.postDAO.update(post);
  }

  /**
     * @return {Promise}
     */
  getAll() {
    return this.postDAO.getAll();
  }
}

export default PostService;
