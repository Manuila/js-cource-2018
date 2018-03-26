class User {
    constructor(name) {
        this.name = name;
      }
      get getName() {
        return this.name;
      }
      set setName(value) {
        this.name = value;
      }
    }

    module.exports = User;