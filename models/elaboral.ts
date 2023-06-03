import { DataTypes } from "sequelize";
import db from "../db/connection";

const elaboral = db.define('experiencia_laboral', {
 
  idexperiencia_laboral : {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    fecha_inicio: {
      type: DataTypes.DATE
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
    foto: {
        type: DataTypes.STRING
    },
  },
  
  {
    tableName: 'experiencia_laboral'
  })
   
  export default elaboral;