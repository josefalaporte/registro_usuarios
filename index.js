const express = require('express');
const app = express();  //app será el express dentro de la aplicación para levantar el servidor
const conn = require('./services/db');
const userModel = require('./models/user');
const createUser = require ('./controllers/create');


app.use(express.json());
app.use(express.urlencoded({extended: true}));


//RUTAS
app.post('/create', createUser );
app.get(); //obtener lista de los usuarios
app.get(); //obtener detalles de un usuario en particular
app.put(); //modificar algunos datos: dieccion, numero de telefono
app.delete(); //borrar fisicamente al usuario
app.put(); //borado logico de un usuario (cambiar una propiedad de la base de datos)



const port = 3001;

const database = async () => {
    try {
        await conn.authenticate();
    console.log("Base de datos conectada")
    await userModel.sync({ force: true }); 
    } catch (error) {
        console.log("Algo salio mal en la conección con la base de datos ")
    }   
};




app.listen(port, () =>{
    database();
    console.log("Servidor ejecutandose correctamente")
});