import createApiClient from "./api.service";

class ImagesService {
    constructor(baseUrl = "/api/Images") {
        this.api = createApiClient(baseUrl);
    }
    async getAll(data) {
        return (await this.api.get("/", data)).data;
    }
    async create(data) {
        return (await this.api.post("/", data)).data;
    }
    async deleteAll() {
        return (await this.api.delete("/")).data;
    }
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
}

export default new ImagesService();
