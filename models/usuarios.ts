import { DataTypes } from "sequelize";
import db from "../db/connection";

const usuarios = db.define('usuarios', {
 
    idusuario : {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },

    nombre: {
      type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    contrasenia: {
        type: DataTypes.STRING
    },
    foto: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.TINYINT
    },
    edad: {
        type: DataTypes.INTEGER
    },
    descripcion: {
        type: DataTypes.STRING
    },    
  },
  
  {
    tableName: 'usuarios'
  })
   
  export default usuarios;