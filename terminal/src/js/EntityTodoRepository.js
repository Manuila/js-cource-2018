class EntityTodoRepository {
    constructor(fileManager) {
        this.fileManager = fileManager;
      }
      create(entityTodo) {
          return this.fileManager.readFile()
         .then((data) => {
           if(!data) data = '{"todos":[]}';
           return JSON.parse(data);
          })
          .then((obj) => {
            obj.todos.push(entityTodo);
            return obj;
          })
          .then((updatedObj) => {
            return JSON.stringify(updatedObj);
          })
          .then((data) => {
            this.fileManager.writeFile(data);
          })
          .catch((error) => {
            throw error;
          });
      }
      update(id){
          // TODO update todo
      }
      delete(id){
        return this.fileManager.readFile()
        .then((data) => {
          if (!data) data = '{}';
          return JSON.parse(data);
        })
        .then((obj) => {
          const index = obj.todos.findIndex((entityTodo) => entityTodo.id === id)
          obj.todos.splice(index, 1);
          return obj;
        })
        .then((updatedObj) => {
          return JSON.stringify(updatedObj);
        })
        .then((data) => {
          this.fileManager.writeFile(data);
        })
        .catch((error) => {
          throw error;
        });
      }
      getAll(){
        return this.fileManager.readFile()
        .then((data) => {
          if (!data) data = '{}';
          return JSON.parse(data);
        })
        .then((storage) => {
          return storage.todos || [];
        })
        .catch((error) => {
          throw error;
        });
      }
    }

    module.exports = EntityTodoRepository;