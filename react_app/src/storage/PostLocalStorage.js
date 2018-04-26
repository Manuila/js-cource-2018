class PostLocalStorage {
    
    getAllPosts = () => {
        return JSON.parse(window.localStorage.getItem('posts'));
    }
    
    saveAllPosts = (newPosts) => {
        window.localStorage.setItem('posts', JSON.stringify(newPosts));
    }
}

export default PostLocalStorage;