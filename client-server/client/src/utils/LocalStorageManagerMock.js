class LocalStorageManagerMock {

    constructor() {
        this.key = '';
        this.store = {};
      }

      read = () => {
        return this.store[this.key] || null;
      }
    
      write = (data) => {
        this.store[this.key] = data;
      }
}

export default LocalStorageManagerMock;