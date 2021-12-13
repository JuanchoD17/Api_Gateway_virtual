const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class ProductoAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.producto_api_url;
    }

    async createProducto(producto){
        producto = new Object(JSON.parse(JSON.stringify(producto)));
        return await this.post(`/producto`,producto);
    }

    async listProductos(){
        return await this.get(`/producto`);
    }

    async updateProducto(producto,productId){
        producto = new Object(JSON.parse(JSON.stringify(producto)));
        return await this.put(`/producto/${productId}`,producto);
    }

    async deleteProducto(id){
        return await this.delete(`/producto/${id}`)
    }

    async createCarrito(carrito){
        carrito = new Object(JSON.parse(JSON.stringify(carrito)));
        return await this.post(`/carrito`,carrito);
    }

    async getCarrito(userId){
        return await this.get(`/carrito/${userId}`);
    }

    async updateCarrito(carrito){ 
        carrito = new Object(JSON.parse(JSON.stringify(carrito)));
        return await this.put(`/carrito`,carrito);
    }

    async deleteCarrito(carrito,userId){
        const formulario ={
            "productId": carrito
        };
        console.log(carrito);
        formulario = new Object(JSON.parse(JSON).stringify(formulario))
        return await this.delete(`/carrito/${userId}/`,formulario);
    }
                  
}

module.exports = ProductoAPI;