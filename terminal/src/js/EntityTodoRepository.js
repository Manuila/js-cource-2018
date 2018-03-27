class EntityTodoRepository {
    constructor(fileManager) {
        this.fileManager = fileManager;
      }
      create(entityTodo) {
          return this.fileManager.openFile()
          .then(() => {
            return this.fileManager.readFile();
          })
          .then((data) => {
            if(!data){
              data = '{"todos":[]}';
            }
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
          // TODO delete item
      }
      getAll(){
          // TODO get all
      }
    }

    module.exports = EntityTodoRepository;