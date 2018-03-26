class Answer {
    constructor(title, description) {
        this.title = title;
        this.description = description;
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