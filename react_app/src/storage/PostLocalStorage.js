class PostLocalStorage {
    
    getAllPosts = () => {
        return JSON.parse(window.localStorage.getItem('posts')) || [];
    }
    
    saveAllPosts = (newPosts) => {
        window.localStorage.setItem('posts', JSON.stringify(newPosts));
    }
    
    count = () => {
        return JSON.parse(window.localStorage.getItem('posts')).length;
    }
}

export default PostLocalStorage;