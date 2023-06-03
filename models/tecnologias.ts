import { DataTypes } from "sequelize";
import db from "../db/connection";

const tecnologias = db.define('tecnologias', {
 
    idtecnologia : {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },

    nombre: {
      type: DataTypes.STRING
    },
    imagen: {
        type: DataTypes.STRING
    },
  },
  
  {
    tableName: 'tecnologias'
  })
   
  export default tecnologias;