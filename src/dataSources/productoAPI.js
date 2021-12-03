const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig       = require('../server');

class ProductoAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseUrl = serverConfig.producto_api_url;
    }

    async createProducto(producto){
        producto = new Object(JSON.parse(JSON.stringify(producto)));
        return await this.post('/producto',producto);
    }

    async listProducts(){
        return await this.get('/producto');
    }

    async updateProducto(producto, productId){
        producto = new Object(JSON.parse(JSON.stringify(producto)));
        return await this.put(`/producto/${productId}`,producto);
    }

    async deleteProducto(productId){
        return await this.delete(`/producto/${productId}`)
    }

    async createCarrito(carrito){
        carrito = new Object(JSON.parse(JSON.stringify(carrito)));
        return await this.post('/carrito',carrito);
    }

    async carritoById(userId){
        return await this.get(`/carrito/${userId}`);
    }

    async updateCarrito(carrito){
        carrito = new Object(JSON.parse(JSON.stringify(carrito)));
        return await this.put('/carrito',carrito);
    }

    async deleteCarrito(carrito,userId){
        carrito = new Object(JSON.parse(JSON).stringify(carrito))
        return await this.delete(`/carrito/${userId}`,carrito);
    }
                  
}

module.exports = ProductoAPI;