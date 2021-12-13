const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class MedioAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = serverConfig.medio_api_url;
    }

    async createMedio(medio,userId){
        medio = new Object(JSON.parse(JSON.stringify(medio)));
        return await this.post(`/create/${userId}/`,medio);
    }

    async getMedio(userId){
        return await this.get(`/${userId}/`);
    }

    async updateMedio(medio,userId){
        medio = new Object(JSON.parse(JSON.stringify(medio)));
        return await this.put(`/update/${userId}/`,medio);
    }

    async deleteMedio(medio,userId){
        console.log(medio);
        medio = new Object(JSON.parse(JSON.stringify(medio)));
        console.log(medio);
        return await this.delete(`/delete/${userId}/`,medio);
    }
}

module.exports = MedioAPI;