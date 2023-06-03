import { DataTypes } from "sequelize";
import db from "../db/connection";

const proyectos = db.define('proyectos', {
 
  idproyecto : {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },

    nombre: {
      type: DataTypes.STRING
    },
    descripcion: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING
    },
    imagen: {
        type: DataTypes.STRING
    },
    fecha: {
      type: DataTypes.DATE
    },
  },
  
  {
    tableName: 'proyectos'
  })
   
  export default proyectos;