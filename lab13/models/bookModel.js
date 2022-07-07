let db = []
let counter = 0;

module.exports = class Book {
    constructor(id, title, isbn, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author
    }

    save() {
        this.id = ++counter;
        db.push(this);
        return this;
    }

    update() {
        const index = db.findIndex(b => b.id == this.id)
        db.splice(index, 1, this)
        return this;
    }


    static getAll() {
        return db;
    }

    static getById(id) {
        return db.find(s => s.id == id)
    }

    static delete(id) {
        db = db.filter(s => s.id != id);
    }

}

