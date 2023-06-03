import { Router } from 'express';
import { getelaboralTodo,getelaboral,postelaboral,putelaboral,deleteelaboral,getelaboralPorId } from '../controllers/elaboral';

const elaboralRouter = Router();

elaboralRouter.get('/', getelaboralTodo);
elaboralRouter.get('/:idexperiencia_laboral', getelaboral);
elaboralRouter.post('/', postelaboral);
elaboralRouter.put('/:idexperiencia_laboral', putelaboral);
elaboralRouter.delete('/:idexperiencia_laboral', deleteelaboral);

elaboralRouter.get('/:idexperiencia_laboral', getelaboralPorId);

export default elaboralRouter;