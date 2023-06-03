import * as yup from 'yup';
export const usuarioSchemaActualizar = yup.object().shape({
    nombre: yup.string().required(),
    email: yup.string().email().required(),
    foto: yup.string().required(),
  })