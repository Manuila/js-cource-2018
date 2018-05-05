
class PostLocalStorage {
    
    getAllPosts = () => {
       return JSON.parse(window.localStorage.getItem('posts')) || [];
    }
    
    saveAllPosts = (newPosts) => {
        window.localStorage.setItem('posts', JSON.stringify(newPosts));
    }
    
    countPosts = () => {
        const posts =  this.getAllPosts();
        return posts.length ? posts : 0;
    }
}

export default PostLocalStorage;