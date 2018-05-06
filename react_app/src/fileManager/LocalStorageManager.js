class LocalStorageManager {

     /**
     * @param {string} nameData
     * @return {Object}
     */
    static read = (nameData) => {
        return JSON.parse(window.localStorage.getItem(nameData));
    }
    
    /**
     * @param {string} nameData
     * @param {Object} data
     */
    static write = (nameData, data) => {
        window.localStorage.setItem(nameData, JSON.stringify(data));
    }
}

export default LocalStorageManager;