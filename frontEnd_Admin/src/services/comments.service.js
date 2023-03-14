import createApiClient from "./api.service";

class CommentsService {
    constructor(baseUrl = "/api/Comments") {
        this.api = createApiClient(baseUrl);
    }
    async getAll(data) {
        return (await this.api.get("/", data)).data;
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

export default new CommentsService();
