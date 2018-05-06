class PostsListService {
    constructor(postListDAO) {
        this.postListDAO = postListDAO;
    }
    
    /**
     * @param {Post} post
     */
    add = (post) => {
        this.postListDAO.add(post);
    }
    
    /**
     * @param {Post} post
     */
    remove = (post) => {
        this.postListDAO.remove(post);
    }

     /**
     * @param {String} id
     * @return {Post}
     */
    getById = (id) => {
        return this.postListDAO.getById(id);
    }

    /**
     * @param {Post} post
     */
    update = (post) => {
        this.postListDAO.update(post);
    }

    /**
     * @return {Array}
     */
    getAll = () => {
        return this.postListDAO.getAll();
    }

}

export default PostsListService;