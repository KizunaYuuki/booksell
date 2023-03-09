import createApiClient from "./api.service";

class DiaryService {
    constructor(baseUrl = "/api/uploads") {
        this.api = createApiClient(baseUrl);
    }
    async getAll(name) {
        return (await this.api.get(`/${name}`)).data;
    }
    async create(name, data) {
        return (await this.api.post(`/${name}`, data)).data;
    }
    async deleteAll(name) {
        return (await this.api.delete(`/${name}`)).data;
    }
    async get(name, id) {
        return (await this.api.get(`/${name}/${id}`)).data;
    }
    async update(name, id, data) {
        return (await this.api.put(`/${name}/${id}`, data)).data;
    }
    async delete(name, id) {
        return (await this.api.delete(`/${name}/${id}`)).data;
    }
    async dropCollection(name) {
        return (await this.api.post(`/drop/${name}`)).data;
    }
}

export default new DiaryService();
