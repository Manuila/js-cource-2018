const uuidv1 = require('uuid/v1');
class Answer {
    constructor(id = uuidv1(), title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
      }
      get getId() {
        return this.id;
      }
      get getTitle() {
        return this.title;
      }
      set setTitle(value){
          this.title = value;
      }
      get getDescription() {
        return this.description;
      }
      set setDescription(value){
          this.description = value;
      }
    }

    module.exports = Answer;