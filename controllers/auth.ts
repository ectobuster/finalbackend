import { Request, Response, NextFunction } from 'express';
import usuarios from '../models/usuarios';
import bcryptjs from 'bcryptjs';
import generarJWT from '../utils/generarJWT';
import { Navigate, useNavigate } from 'react-router-dom';


export const login = async (req: Request, res: Response) => {
  
  const { email, contrasenia } = req.body;

  
  try {

    //Verificar el email

    const usuario = await usuarios.findOne({
      where: {
        email,
      },

    })

    if( ! usuario ){
      return res.status(400).json({
        msg: 'Usuario o contraseña no son correctos 1'
      })
    }

    //verificar si el estado es activo
    if( usuario.dataValues.estado == 0 ){
      return res.status(400).json({
        msg: 'Usuario inactivo'
      })
    }

    //verficar la contraseña
    if (req.body.contrasenia = usuario.dataValues.contrasenia){
      const token = await generarJWT(usuario.dataValues.idusuario);

     res.json({ 

      token,
      usuario: usuario.dataValues,
      msg: 'ingreso al login',
    

      estatus: 1, 
})
    }

    // const validPassword = contrasenia, usuario.dataValues.contrasenia ;
    
    // var salt = bcryptjs.genSaltSync(10);
    // var hash = bcryptjs.hashSync(contrasenia, salt);

    // var salt2 = bcryptjs.genSaltSync(10);
    // var hash2 = usuario.dataValues.contrasenia.hashSync(contrasenia, salt2);

    // if (hash=hash2) {
    //   return navigate('/CMS')
    // }

    // if( ! validPassword ){
    //   return res.status(400).json({
    //     msg: 'Usuario o contraseña no son correctos 2'
    //   })
    // }

    //generar el token 
    // const token = await generarJWT(usuario.dataValues.idusuario);
    // res.json({
    //   token,
    //   usuario: usuario.dataValues,
    //   msg: 'ingreso al login',
    // })

  } catch (error) {
    res.status(500).json({
      error,
      msg: 'error en el login',
    })
  }
};

export const logout = async(req: Request, res: Response) => {
  res.json({
    msg: 'El usuario cerro sesión correctamente',
  })
};

export const validateToken = async(req: Request, res: Response) => {

  const { uid } = req.body;

  const usuario = await usuarios.findByPk(uid);

  if( ! usuario ){
    return res.status(400).json({
      msg: 'Usuario no existe'
    })
  }

  res.json({
    usuario,
    msg: 'El usuario cerro sesión correctamente',
  })
};