import { Request, Response } from 'express';
import elaboral from '../models/elaboral';

export const getelaboralTodo = async (req: Request, res: Response) => {

  const users = await elaboral.findAll();

  res.json({
      msg: 'get elaboral',
      users
  })
}

export const getelaboral = async (req: Request, res: Response) => {

  const { idexperiencia_laboral } = req.params;

  const users = await elaboral.findByPk(idexperiencia_laboral);

  if(users){
    res.json({
      msg: 'get elaboral',
      users
    })
  }else{
    res.status(404).json({
      msg: 'el elaboral red  no existe',
    })
  }
}

export const postelaboral = async (req: Request, res: Response) => {  
  const { body } = req;
  const result = await elaboral.create(body);
  res.status(201).json({
    success: true,
    message: "experiencia creado correctamente",
    data: result,
  });
};

export const putelaboral = (req: Request, res: Response) => {

  const { idexperiencia_laboral } = req.params;
  const { body } = req;

  const usuarioActualizado = elaboral.update(body, {
    where: {
      idexperiencia_laboral: idexperiencia_laboral
    }
  });

  res.json({
      msg: 'El proyecto fue editado correctamente',
      body,
      idexperiencia_laboral,
      usuarioActualizado
  })
}

export const deleteelaboral = async (req: Request, res: Response) => {

  const { idexperiencia_laboral } = req.params;
  await elaboral.destroy({
    where: {
      idexperiencia_laboral: idexperiencia_laboral
    }
  });

  res.json({
      msg: 'La experiencia fue eliminada correctamente',
      idexperiencia_laboral
  })
}

export const getelaboralPorId = async (req: Request, res: Response) => {

  const { idexperiencia_laboral } = req.params;

  const elaboralEncontrada = await elaboral.findByPk(idexperiencia_laboral);

  if(elaboralEncontrada){
    res.json({
      msg: 'getelaboralPorId',
      idexperiencia_laboral,
      elaboral: elaboralEncontrada
    })
  }else{
    res.status(404).json({
      msg: 'La elaboral no existen',
    })
  }
}