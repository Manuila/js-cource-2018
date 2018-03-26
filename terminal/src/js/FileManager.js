const fs = require('fs');
const util = require('util');

const fsOpen = util.promisify(fs.open);
const fsReadFile = util.promisify(fs.readFile);
const fsWriteFile = util.promisify(fs.writeFile);
const { O_APPEND, O_RDONLY, O_CREAT } = fs.constants;

class FileManager {
    
    constructor(path) {
        this.path = path;
      }
      
    openFile() {
      return fsOpen(this.path, O_APPEND | O_CREAT)
    }

    readFile() {
      return fsReadFile(this.path, { encoding: 'utf8', flag: O_RDONLY | O_CREAT })
    }

    writeFile(data) {
      return fsWriteFile(this.path, data);
    }
}

module.exports = FileManager;