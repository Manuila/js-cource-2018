const PostContext = require('./PostContext')

class PostRepository {
    constructor(postContext) {
        this.postContext = new PostContext();
      }
      create(entityTodo) {
        return this.postContext.serialize('{"todos":[]}')
          .then((obj) => {
            obj.todos.push(entityTodo);
            this.postContext.saveChanges(obj);
            return true;
          }) 
      }
      delete(id){
        return this.postContext.serialize()
        .then((obj) => {
          const index = obj.todos.findIndex((entityTodo) => entityTodo.id === id)
          if(index === -1) {
            return false;
          }
          else {
            obj.todos.splice(index, 1);
            this.postContext.saveChanges(obj);
            return true;
          }
        })
      }
      getAll(){
        return this.postContext.serialize()
        .then((storage) => {
          return storage.todos || [];
        })
        .catch((error) => {
          throw error;
        });
      }
      update(id, ...props){
        return this.postContext.serialize()
        .then((obj) => {
          const index = obj.todos.findIndex((entityTodo) => entityTodo.id === id)
          if(index === -1) {
            return false;
          }
          else {
            obj.todos[index].answer.title = props[0];
            obj.todos[index].answer.description = props[1];
            this.postContext.saveChanges(obj);
            return true;
          }
        })
      }
      setLike(id){
        return this.postContext.serialize()
        .then((obj) => {
          const index = obj.todos.findIndex((entityTodo) => entityTodo.id === id)
          if(index === -1) {
            return false;
          }
          else {
            obj.todos[index].isLiked = true;
            this.postContext.saveChanges(obj);
            return true;
          }
        })
      }
      setComment(id, _comment){
        return this.postContext.serialize()
        .then((obj) => {
          const index = obj.todos.findIndex((entityTodo) => entityTodo.id === id)
          if(index === -1) {
            return false;
          }
          else {
            obj.todos[index].comment = _comment;
            this.postContext.saveChanges(obj);
            return true;
          }
        })
      }
  }
    module.exports = PostRepository;