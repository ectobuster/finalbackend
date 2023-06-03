import {NextFunction ,Request, Response } from 'express';
import usuarios from '../models/usuarios';
import { usuarioSchema, usuarioSchemaupdate } from '../validate/usuarioSchema';
import { type } from 'os';



export const getusuariosTodo = async (req: Request, res: Response) => {

  const users = await usuarios.findAll();

  res.json({
      msg: 'get usuarios',
      users
  })
}

export const getusuarios = async (req: Request, res: Response) => {

  const { idusuario } = req.params;

  const users = await usuarios.findByPk(idusuario);

  if(users){
    res.json({
      msg: 'get usuarios',
      users
    })
  }else{
    res.status(404).json({
      msg: 'el usuarios red  no existe',
    })
  }
}

export const postusuarios = async(req: Request, res: Response, next: NextFunction) => {  
  try {
    const { body } = req;
  const filename = req.file?.filename;
  await usuarioSchema.validate(body)

  body.foto = filename;

  const result = await usuarios.create(body);
  res.status(201).json({
    success: true,
    message: "usuario creado correctamente",
    data: result,
  });
  } catch (error: any) {
    next(error);
    return res.status(500).json({ type: error.name , message : error.message} )
  }
}

export const putusuarios = async(req: Request, res: Response) => {

  const { idusuario } = req.params;
  const { body } = req;

    const filename = req.file?.filename;
    body.idrol = 1;
    body.foto = filename;
    await usuarioSchemaupdate.validate(body);

  const usuarioActualizado = usuarios.update(body, {
    where: {
      idusuario: idusuario
    }
  });

  res.json({
      msg: 'el usuario fue editado correctamente',
      body,
      idusuario,
      usuarioActualizado
  })
}

export const deleteusuarios = async(req: Request, res: Response) => {

  const { idusuario } = req.params;
  await usuarios.destroy({ 
    where: {
      idusuario: idusuario
    }
  });

  res.json({
      msg: 'el usuario fue eliminado correctamente',
      idusuario
  })
}

export const getusuariosPorId = async (req: Request, res: Response) => {

  const { idusuario } = req.params;

  const usuariosEncontrada = await usuarios.findByPk(idusuario);

  if(usuariosEncontrada){
    res.json({
      msg: 'getusuariosPorId',
      idusuario,
      usuarios: usuariosEncontrada
    })
  }else{
    res.status(404).json({
      msg: 'Los usuarios no existen',
    })
  }
}