class LocalStorageManager {

    static read = (nameData) => {
        return JSON.parse(window.localStorage.getItem(nameData));;
    }

    static write = (nameData, data) => {
        window.localStorage.setItem(nameData, JSON.stringify(data));
    }
}

export default LocalStorageManager;