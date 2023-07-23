const users = require('../models/user');


const createUser = async(req, res) => {

    const { name, lastName, email, password } = req.body;  //manera de estructuracion para acceder a lo que hay dentro de la contante
    try {
        await users.create({
            name: name,
            lastName: lastName,
            email: email,
            password: password
        })
        res.status(200).json({msg:'Usuario creado correctamente'})

    } catch (error) {
        console.log('error', error)
    }
}

module.exports = createUser;