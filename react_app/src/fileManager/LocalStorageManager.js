class LocalStorageManager {

    constructor(key) {
        this.key = key;
    }
     /**
     * @return {Object}
     */
    read = () => {
        return JSON.parse(localStorage.getItem(this.key));
    }
    
    /**
     * @param {Object} data
     */
    write = (data) => {
        localStorage.setItem(this.key, JSON.stringify(data));
    }
}

export default LocalStorageManager;