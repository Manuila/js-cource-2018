const uuidv1 = require('uuid/v1');
class EntityTodo {
    constructor(id = uuidv1(), answer, user, date) {
        this.id = id;
        this.answer = answer;
        this.user = user;
        this.date = date;
      }
      get getId() {
        return this.id;
      }
      get getAnswer(){
          return this.answer;
      }
      set setAnswer(value){
          this.answer = value;
      }
      get getUser(){
          return this.user;
      }
      set setUser(value){
          this.user = value;
      }
      get getDate(){
          return this.date
      }
    }

    module.exports = EntityTodo;