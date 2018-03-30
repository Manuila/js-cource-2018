const fs = require('fs');
const fsOpen = util.promisify(fs.open);
const fsReadFile = util.promisify(fs.readFile);
const fsWriteFile = util.promisify(fs.writeFile);
const { O_APPEND, O_RDONLY, O_CREAT } = fs.constants;

class FileManager {
  
      openFile(path) {
        return fsOpen(this.path, O_APPEND | O_CREAT)
      }

      readFile(path) {
        return fsReadFile(this.path, { encoding: 'utf8', flag: O_RDONLY | O_CREAT })
      }

      writeFile(path, data) {
        return fsWriteFile(this.path, data);
      }
    }
module.exports = FileManager;