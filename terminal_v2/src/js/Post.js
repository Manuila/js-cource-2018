const uuidv1 = require('uuid/v1');
const dateFormat = require('dateformat');

class Post {
    constructor(id = uuidv1(), title, description, user, date, isLiked, comment) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.user = user;
        this.date = dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT");
        this.isLiked = false;
        this.comment = '';
    }
}

module.exports = Post;