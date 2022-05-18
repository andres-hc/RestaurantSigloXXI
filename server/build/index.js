"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Clase que inicializa express para configurar la REST API
class RestaurantServer {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    //define el puerto del servidor
    config() {
        this.app.set('port', process.env.Port || 3000);
    }
    //Define las rutas del servidor
    routes() {
    }
    //Inicializa el servidor
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('SERVER ON PORT ', this.app.get('port'));
        });
    }
}
const restaurantServer = new RestaurantServer();
restaurantServer.start();
