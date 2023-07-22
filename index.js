const express = require('express');
const app = express();  //app será el express dentro de la aplicación para levantar el servidor
const conn = require('./services/db')

const userModel = require('./models/user')
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = 3001;

const database = async () => {
    try {
        await conn.sync();
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