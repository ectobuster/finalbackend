import { Router } from 'express';
import { getproyectosTodo,getproyectos,postproyectos,putproyectos,deleteproyectos,getproyectosPorId } from '../controllers/proyectos';

const proyectosRouter = Router();

proyectosRouter.get('/', getproyectosTodo);
proyectosRouter.get('/:idproyecto', getproyectos);
proyectosRouter.post('/', postproyectos);
proyectosRouter.put('/:idproyecto', putproyectos);
proyectosRouter.delete('/:idproyecto', deleteproyectos);

proyectosRouter.get('/:idproyecto', getproyectosPorId);

export default proyectosRouter;