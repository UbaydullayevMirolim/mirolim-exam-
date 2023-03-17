class Blog {
    constructor(image = null, title, text, isDeleted = false) {
        this.image = image;
        this.title = title;
        this.text = text;
        this.isDeleted = isDeleted;
    }
}

module.exports = Blog;