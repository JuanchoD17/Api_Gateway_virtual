const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class MedioAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = serverConfig.medio_api_url;
    }

    async createMedio(medio,userId){
        medio = new Object(JSON.parse(JSON.stringify(medio)));
        return await this.post(`/create/${userId}`,medio);
    }

    async ListMedio(userId){
        return await this.get(`/${userId}`);
    }

    async updateMedio(medio,userId){
        medio = new Object(JSON.parse(JSON.stringify(medio)));
        return await this.post(`/update/${userId}`,medio);
    }

    async deleteMedio(medio,userId){
        medio = new Object(JSON.parse(JSON.stringify(medio)));
        return await this.post(`/delete/${userId}`,medio);
    }
}

module.exports = MedioAPI;