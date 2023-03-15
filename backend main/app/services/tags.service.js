const { ObjectId } = require("mongodb");

class TagsService {
    constructor(client) {
        this.Tags = client.db().collection("tags");
    }
    // Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
    extractTagsData(payload) {
        const tags = {
            nameTag: payload.nameTag,
        };
        // remove undefined fields. 
        Object.keys(tags).forEach(
            (key) => tags[key] === undefined && delete tags[key]
        );
        return tags;
    }

    async create(payload) {
        const tags = this.extractTagsData(payload);
        const result = await this.Tags.findOneAndUpdate(
            tags,
            { $set: tags },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.Tags.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({ name: { $regex: new RegExp(name), $options: "i" }, });
    }

    async findById(id) {
        return await this.Tags.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async delete(id) {
        const result = await this.Tags.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll(filter) {
        const result = await this.Tags.deleteMany(filter);
        return result.deletedCount;
    }

    async drop() {
        const result = await this.Tags.drop()
        return result
    }
}

module.exports = TagsService;