const fs = require('fs');
const { O_APPEND, O_RDONLY, O_CREAT } = fs.constants;
// O_APPEND - append to an existing file;
// O_RDONLY - open the file for reading only;
// O_CREAT - create a file if it does not exist;
class FileManager {
  
  static openFile(path) {
        return fs.openSync(path, O_APPEND | O_CREAT)
      }

  static readFile(path) {
        return fs.readFileSync(path, { encoding: 'utf8', flag: O_RDONLY | O_CREAT })
      }

  static writeFile(path, data) {
        return fs.writeFileSync(path, data);
      }
    }
module.exports = FileManager;
