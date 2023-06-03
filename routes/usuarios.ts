import { Router } from 'express';
import { getusuariosTodo,getusuarios,postusuarios,putusuarios,deleteusuarios,getusuariosPorId } from '../controllers/usuarios';
import upload from "../utils/multer";

const usuariosRouter = Router();

usuariosRouter.get('/', getusuariosTodo);
usuariosRouter.get('/:idusuario', getusuarios);
usuariosRouter.post('/', upload.single('foto'), postusuarios);
usuariosRouter.put('/:idusuario', upload.single('foto'), putusuarios);
usuariosRouter.delete('/:idusuario', deleteusuarios);

usuariosRouter.get('/:idusuario', getusuariosPorId);

export default usuariosRouter;