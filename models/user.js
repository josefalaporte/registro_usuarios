const { DataTypes } = require("sequelize");
const dataBase =require('../services/db')

const Users = dataBase.define(
  "Users",
  {
    idUser: {
      type: DataTypes.UUID, //estructura de 32 caracteres, mongo usa esta secuencia
      defaultValue: DataTypes.UUIDV4, //este es de 36 caracteres
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, //validar que efectivamente tenaga este formato email@email.com
        notNull: {
          msg: "El correo es obligatorio", //mensaje en el caso de no introducir mail
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "La contraseña es obligatoria.",
        },
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El nombre es obligatorio",
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Apellido es obligatorio",
        },
      },
    },
    status: {
      type: DataTypes.ENUM("ACTIVE", "BLOCK", "DELETE"), //para saber si el usuario es o no activo en la pagina. Es para cambiar estados, no para eliminarlos de la base de datos.
      allowNull: false,
      defaultValue: "ACTIVE",
    },
  },
  {
    timestamps: true, //graba la fecha de creacion y actualizacion del registro
    createdAt: true,
    updateAt: true,
  }
);

module.exports = Users;
