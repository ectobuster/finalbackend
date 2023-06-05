import { Request, Response } from 'express';
import tecnologias from '../models/tecnologias';

export const gettecnologiasTodo = async (req: Request, res: Response) => {

  const users = await tecnologias.findAll();

  res.json({
      msg: 'get tecnologias',
      users
  })
}

export const gettecnologias = async (req: Request, res: Response) => {

  const { idtecnologia } = req.params;

  const users = await tecnologias.findByPk(idtecnologia);

  if(users){
    res.json({
      msg: 'get tecnologias',
      users
    })
  }else{
    res.status(404).json({
      msg: 'el tecnologias red  no existe',
    })
  }
}

export const posttecnologias = async (req: Request, res: Response) => {  
  const { body } = req;
  const result = await tecnologias.create(body);
  res.status(201).json({
    success: true,
    message: "tecnologia creada correctamente",
    data: result,
  });
}

export const puttecnologias = (req: Request, res: Response) => {

  const { idtecnologia } = req.params;
  const { body } = req;

  const tecnologiActualizada = tecnologias.update(body, {
    where: {
      idtecnologia: idtecnologia
    }
  });

  res.json({
      msg: ' la tecnologia fue editada correctamente',
      body,
      idtecnologia,
      tecnologiActualizada
  })
}

export const deletetecnologias = async(req: Request, res: Response) => {

  const { idtecnologia } = req.params;
  await tecnologias.destroy({
    where: {
      idtecnologia: idtecnologia
    }
  });

  res.json({
      msg: 'La tecnologia fue eliminada correctamente',
      idtecnologia
  })
}

export const gettecnologiasPorId = async (req: Request, res: Response) => {

  const { idtecnologia } = req.params;

  const tecnologiaEncontrada = await tecnologias.findByPk(idtecnologia);

  if(tecnologiaEncontrada){
    res.json({
      msg: 'getusuariosPorId',
      idtecnologia,
      tecnologia: tecnologiaEncontrada
    })
  }else{
    res.status(404).json({
      msg: 'Las tecnologias no existen',
    })
  }
}