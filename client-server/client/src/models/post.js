
class Post {
  /**
     * Represents a post.
     * @constructor
     * @param {string} id - The id of the post.
     * @param {string} title - The title of the post.
     * @param {string} description - The description of the post.
     * @param {string} date - The date of the post.
     * @param {boolean} isPublished - isPublished of the post.
     * @param {boolean} isLiked - isLiked of the post.
     */
    constructor(id, title, description, date, isPublished, isLiked) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.isPublished = isPublished;
        this.isLiked = isLiked;
    }
}

export default Post;