const FileManager = require('./FileManager');
const path = require('path');
const STORAGE_PATH = path.resolve('./store.json');

class EntityTodoContext {
  
      serialize(_data = '{}'){
        return FileManager.readFile(STORAGE_PATH)
        .then((data) => {
          if(!data) data = _data;
          return JSON.parse(data);
         })
         .catch((error) => {
            throw error;
          });
      }
      saveChanges(updatedObj){
          return FileManager.writeFile(STORAGE_PATH, JSON.stringify(updatedObj));
      }
    }
    module.exports = EntityTodoContext;