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
      get getId() {
        return this.id;
      }
      get getTitle() {
          return this.title;
      }
      set setTitle(value) {
          this.title = value;
      }
      get getDescription() {
          return this.description;
	  }
      set setDescription(value){
          this.description = value;
      }
      get getUser() {
          return this.user;
      }
      set setUser(value) {
          this.user = value;
      }
      get getDate() {
          return this.date
      }
    }

    module.exports = Post;