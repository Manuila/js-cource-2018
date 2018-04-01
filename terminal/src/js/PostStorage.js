const FileManager = require('./FileManager');
class PostStorage {
  constructor(path) {
    this.path = path;
  }
  getPosts(){
    return FileManager.readFile(this.path)
    .then((data) => {
      if(!data) data = '{"posts":[]}';
      return JSON.parse(data);
      })
      .then((obj) => {
        return obj.posts;
      })
      .catch((error) => {
        throw error;
      });
  }
  async savePosts(updatedPosts){
       await FileManager.writeFile(this.path, JSON.stringify({posts:updatedPosts}));
  }
}
    module.exports = PostStorage;