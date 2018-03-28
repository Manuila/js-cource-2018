const FileManager = require('./FileManager');
class EntityTodoContext {
    constructor(fileManager) {
        this.fileManager = new FileManager();
      }
      get getFileManager() {
        return this.fileManager;
      }
      set setFileManager(value) {
        this.fileManager = value;
      }
      serialize(_data = '{}'){
        return this.fileManager.readFile()
        .then((data) => {
          if(!data) data = _data;
          return JSON.parse(data);
         })
         .catch((error) => {
            throw error;
          });
      }
      saveChanges(updatedObj){
          return this.fileManager.writeFile(JSON.stringify(updatedObj));
      }
    }
    module.exports = EntityTodoContext;