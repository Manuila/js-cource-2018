const fs = require('fs');
const util = require('util');
const fsOpen = util.promisify(fs.open);
const fsReadFile = util.promisify(fs.readFile);
const fsWriteFile = util.promisify(fs.writeFile);
const { O_APPEND, O_RDONLY, O_CREAT } = fs.constants;

class FileManager {
  
  static openFile(path) {
        return fsOpen(path, O_APPEND | O_CREAT)
      }

  static readFile(path) {
        return fsReadFile(path, { encoding: 'utf8', flag: O_RDONLY | O_CREAT })
      }

  static writeFile(path, data) {
        return fsWriteFile(path, data);
      }
    }
module.exports = FileManager;