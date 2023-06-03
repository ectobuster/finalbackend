import { Request, Response } from 'express';
import proyectos from '../models/proyectos';

export const getproyectosTodo = async (req: Request, res: Response) => {

  const users = await proyectos.findAll();

  res.json({
      msg: 'get proyectos',
      users
  })
}

export const getproyectos = async (req: Request, res: Response) => {

  const { idproyecto } = req.params;

  const users = await proyectos.findByPk(idproyecto);

  if(users){
    res.json({
      msg: 'get proyectos',
      users
    })
  }else{
    res.status(404).json({
      msg: 'el proyectos red  no existe',
    })
  }
}

export const postproyectos = async (req: Request, res: Response) => {  
  const { body } = req;
  const result = await proyectos.create(body);
  res.status(201).json({
    success: true,
    message: "proyecto creado correctamente",
    data: result,
  });
}

export const putproyectos = (req: Request, res: Response) => {

  const { idproyecto } = req.params;
  const { body } = req;

  const usuarioActualizado = proyectos.update(body, {
    where: {
      idproyecto: idproyecto
    }
  });

  res.json({
      msg: 'El proyecto fue editado correctamente',
      body,
      idproyecto,
      usuarioActualizado
  })
}

export const deleteproyectos = async (req: Request, res: Response) => {

  const { idproyecto } = req.params;
  await proyectos.destroy({
    where: {
      idproyecto: idproyecto
    }
  });

  res.json({
      msg: 'el proyecto fue eliminado correctamente',
      idproyecto
  })
}

export const getproyectosPorId = async (req: Request, res: Response) => {

  const { idproyecto } = req.params;

  const proyectoEncontrada = await proyectos.findByPk(idproyecto);

  if(proyectoEncontrada){
    res.json({
      msg: 'getproyectosPorId',
      idproyecto,
      proyecto: proyectoEncontrada
    })
  }else{
    res.status(404).json({
      msg: 'Los proyectos no existen',
    })
  }
}