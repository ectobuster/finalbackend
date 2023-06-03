import { Router } from 'express';
import { gettecnologiasTodo,gettecnologias,posttecnologias,puttecnologias,deletetecnologias,gettecnologiasPorId } from '../controllers/tecnologias';

const tecnologiasRouter = Router();

tecnologiasRouter.get('/', gettecnologiasTodo);
tecnologiasRouter.get('/:idtecnologia', gettecnologias);
tecnologiasRouter.post('/', posttecnologias);
tecnologiasRouter.put('/:idtecnologia', puttecnologias);
tecnologiasRouter.delete('/:idtecnologia', deletetecnologias);

tecnologiasRouter.get('/:idtecnologia', gettecnologiasPorId);

export default tecnologiasRouter;