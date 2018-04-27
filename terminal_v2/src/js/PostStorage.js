const FileManager = require('./FileManager');
const Post = require('./Post');

class PostStorage {
  constructor(path) {
    this.path = path;
    this.savedPosts= this._deserialize();
  }

  _deserialize() {
    let data = FileManager.readFile(this.path);
    const dataObj = JSON.parse(data || null);
    return (dataObj && dataObj.posts || []).map((obj) => {
      return Object.setPrototypeOf(obj, Post.prototype);
    })
  }

  posts() {
    return this.savedPosts;
  }

  save(newPosts) {
    FileManager.writeFile(this.path, JSON.stringify({posts:newPosts}));
  }
}
    module.exports = PostStorage;