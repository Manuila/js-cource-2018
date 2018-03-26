const uuidv1 = require('uuid/v1');
const Answer = require('./Answer');
const User = require('./User');
class EntityTodo {
    constructor(id = uuidv1(), answer, user, date) {
        this.id = id;
        this.answer = new Answer();
        this.user = new User();
        this.date = new Date();
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