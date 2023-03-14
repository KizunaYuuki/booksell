import createApiClient from "./api.service";

class UsersService {
    constructor(baseUrl = "/api/Users") {
        this.api = createApiClient(baseUrl);
    }

    async getAll(data) {
        return (await this.api.post("/", data)).data;
    }
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async updateUser(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
}

export default new UsersService();
