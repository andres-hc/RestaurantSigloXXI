import express, {Application} from 'express';


//Clase que inicializa express para configurar la REST API
class RestaurantServer{

    public app: Application;

    constructor(){

        this.app = express();
        this.config();
        this.routes();
    }
    //define el puerto del servidor
    config(): void{
        this.app.set('port',process.env.Port || 3000);
    }
    //Define las rutas del servidor
    routes(): void{

    }
    
    //Inicializa el servidor
    start(){
        this.app.listen(this.app.get('port'), () =>{
            console.log('SERVER ON PORT ', this.app.get('port'));
        });
    }
}

const restaurantServer = new RestaurantServer();

restaurantServer.start();