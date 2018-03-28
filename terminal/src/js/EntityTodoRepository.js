const EntityTodoContext = require('./EntityTodoContext')
class EntityTodoRepository {
    constructor(entityTodoContext) {
        this.entityTodoContext = new EntityTodoContext();
      }
      set setStoragePath(value) {
        this.entityTodoContext.getFileManager.setPath = value;
      }
      create(entityTodo) {
        return this.entityTodoContext.serialize('{"todos":[]}')
          .then((obj) => {
            obj.todos.push(entityTodo);
            this.entityTodoContext.saveChanges(obj);
            return true;
          }) 
      }
      delete(id){
        return this.entityTodoContext.serialize()
        .then((obj) => {
          const index = obj.todos.findIndex((entityTodo) => entityTodo.id === id)
          if(index === -1) {
            //console.log("Element does not exist!")
            return false;
          }
          else{
            obj.todos.splice(index, 1);
            this.entityTodoContext.saveChanges(obj);
            return true;
          }
        }) 
      }
      getAll(){
        return this.entityTodoContext.serialize()
        .then((storage) => {
          return storage.todos || [];
        })
        .catch((error) => {
          throw error;
        });
    }
  }
    module.exports = EntityTodoRepository;