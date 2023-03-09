const { ObjectId } = require("mongodb");

class GenresService {
    constructor(client) {
        this.Genres = client.db().collection("genres");
    }
    // Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
    extractGenresData(payload) {
        const genres = {
            genreName: payload.genreName,
            subGenre: payload.subGenre
        };
        // remove undefined fields. 
        Object.keys(genres).forEach(
            (key) => genres[key] === undefined && delete genres[key]
        );
        return genres;
    }

    async create(payload) {
        const genres = this.extractGenresData(payload);
        const result = await this.Genres.findOneAndUpdate(
            genres,
            { $set: genres },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.Genres.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({ name: { $regex: new RegExp(name), $options: "i" }, });
    }

    async findById(id) {
        return await this.Genres.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractGenresData(payload);
        const result = await this.Genres.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );
        return result.value;
    }

    async delete(id) {
        const result = await this.Genres.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll(filter) {
        const result = await this.Genres.deleteMany(filter);
        return result.deletedCount;
    }
    //Push genre from array
    async pushSubGenre(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = payload;
        const result = await this.Genres.findOneAndUpdate(
            filter,
            { $push: update },
            { returnDocument: "after" }
        );
        return result.value;
    }
    //Remove genre from array
    async removeSubGenre(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = payload;
        const result = await this.Genres.findOneAndUpdate(
            filter,
            { $pull: update },
            { returnDocument: "after" }
        );
        return result.value;
    }
    async drop() {
        const result = await this.Genres.drop()
        return result
    }
}

module.exports = GenresService;