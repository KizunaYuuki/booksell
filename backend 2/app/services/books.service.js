const { ObjectId } = require("mongodb");

class BooksService {
    constructor(client) {
        this.Books = client.db().collection("books");
    }
    // Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
    extractBooksData(payload) {
        const books = {
            bookName: payload.bookName,
            author: payload.author,
            pulicYear: payload.pulicYear,
            publisherName: payload.publisherName,
            bookDes: payload.bookDes,
            bookPrice: payload.bookPrice,
            supplisherName: payload.supplisherName,
            bookStock: payload.bookStock,
            originalPrice: payload.originalPrice,
            receiptPrice: payload.receiptPrice,
            promotionPrice: payload.promotionPrice,
            tag: payload.tag,
            size: payload.size,
            generName: payload.generName,
            quantityPage: payload.quantityPage,

        };
        // remove undefined fields. 
        Object.keys(books).forEach(
            (key) => books[key] === undefined && delete books[key]
        );
        return books;
    }

    async create(payload) {
        const books = this.extractBooksData(payload);
        const result = await this.Books.findOneAndUpdate(
            books,
            { $set: books },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.Books.find(filter).sort({ time: -1 });
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({ name: { $regex: new RegExp(name), $options: "i" }, });
    }

    async findById(id) {
        return await this.Books.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = payload;
        const result = await this.Books.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );
        return result.value;
    }
    //Add image to array
    async pushImg(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = payload;
        const result = await this.Books.findOneAndUpdate(
            filter,
            { $push: update },
            { returnDocument: "after" }
        );
        return result.value;
    }
    //Remove image from array
    async removeImg(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = payload;
        const result = await this.Books.findOneAndUpdate(
            filter,
            { $pull: update },
            { returnDocument: "after" }
        );
        return result.value;
    }

    async delete(id) {
        const result = await this.Books.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll(filter) {
        const result = await this.Books.deleteMany(filter);
        return result.deletedCount;
    }
    async drop() {
        const result = await this.Books.drop()
        return result
    }
}

module.exports = BooksService;