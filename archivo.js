//Responsabilidad unica //Single Responsability

//Inicial - no cumple con el principio
function createUser(name, email){
    let re = /^([\w-]+(?:\.[\w-]+))@((?:[\w-]+\.)\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    let isEmailValid = re.test(email);
    if(isEmailValid) {
        createUserInDatabase(name, email)
    }
}

//Desacople
const { name, email } = req.body;
function validateRequest (name, email) {
    let re = /^([\w-]+(?:\.[\w-]+))@((?:[\w-]+\.)\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i; //expresion regular para validar lineas de caracteres
    //validar formato de email@email.com
    let isEmailValid = re.test(email);
    if(isEmailValid){
        createUser(name, email)
    }
};

function createUser(name, email){
    createUserInDatabase(name, email)
;}


//Principio Abierto/Cerrado   //Open/Close //debe estar abieto a extencione pero cerrado a modificaciones

let allowedRoles = ["admin", "owner", "adminInvitado"]

function checkPrivilege(user){
    if(allowedRoles.includes(user.role)){
        return true; //user has privilege
    }else{
        return false;
    }
}

//funcion externa que permite agregar nuevos roles sin hacer una modificación
function addRole(role) {
    allowedRoles.push(role)  
};


//principio de sustitucion de Liskov  //Liskov Sustitution
var Licence = function(user){        //estructura inicial que calcula impuesto
    this.calculateFee = function() {  

    }
}

Licence.prototype.BusunessLicence = function(user){  
    this.calculateFee(user)   //estructura dependiente de la primera, heredan la funcionabilidad
} //va a acalcular el impuesto igual que su papá

Licence.prototype.BusunessLicence = function(user){
    this.calculateFee(user)
    this.getUsers = function(){   //estructura dependiente de la primera, heredan la funcionabilidad

    }  //aquí hace lo mismo pero s ele agregan unos datos
}

//principio de segregación de interfaz   //Interface Segregation
//Principle (ISP) of SOLID states that “Clients should not be forced to depend on methods they do not use.”















//const user = new user

class User{
    constructor(user){
        this.user = user;
        this.initiateUser();
        this.setupOptions = user.options
    }
    initiateUser(){
        this.name = this.user,this.namethis.setupOptions()
 }
}

const user2 = new User({});


//Principio de inversión de dependencia   //Dependency Inversion  //modulos de alto nivel no deberian depender de modulos de bajo nivel y ambos deberian depender de abstracciones

const axios = require("axios")//Es de alto nivel  //se basa en la abstracción  //axios por si solo no funciona  

axios.get("/someAddress/someResource", function (response){//Es de bajo nivel  //se basa en la abstracción
    this.setState({
        value1: response.value1,
        value2: response.value2
    });
});