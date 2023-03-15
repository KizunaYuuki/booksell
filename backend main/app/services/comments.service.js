const { ObjectId } = require("mongodb");

class CommentsService {
    constructor(client) {
        this.Comments = client.db().collection("comments");
    }
    // Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
    extractCommentsData(payload) {
        const comments = {
            content: payload.content,
            rateStar: payload.rateStar,
            commentDate: payload.commentDate,
            phone: payload.phone,
            _idBook: payload._idBook,
        };
        // remove undefined fields. 
        Object.keys(comments).forEach(
            (key) => comments[key] === undefined && delete comments[key]
        );
        return comments;
    }

    async create(payload) {
        const comments = this.extractCommentsData(payload);
        const result = await this.Comments.findOneAndUpdate(
            comments,
            { $set: comments },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.Comments.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({ name: { $regex: new RegExp(name), $options: "i" }, });
    }

    async findById(id) {
        return await this.Comments.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async delete(id) {
        const result = await this.Comments.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll(filter) {
        const result = await this.Comments.deleteMany(filter);
        return result.deletedCount;
    }

    async drop() {
        const result = await this.Comments.drop()
        return result
    }
}

module.exports = CommentsService;