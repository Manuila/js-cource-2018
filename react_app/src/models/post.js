
class Post {
    constructor(id, title, description, date, isPublished, isLiked) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.isPublished = false;
        this.isLiked = false;
    }
}

export default Post;