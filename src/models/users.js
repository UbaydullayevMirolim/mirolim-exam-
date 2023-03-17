class User{
    username;
    id;
    name;
    password;
    
    constructor(id, username, name, password, image= null , isDeleted = false  ){
        this.id = id;
        this.username = username;
        this.name = name;
        this.password = password;
        this.image = image;
        this.isDeleted = isDeleted;
    }
}

module.exports = User;