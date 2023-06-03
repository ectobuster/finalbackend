
import * as yup from 'yup';

export const usuarioSchema = yup.object().shape({
    nombre: yup.string().required(),
    email: yup.string().email().required(),
    contrasenia: yup.string().min(8, "La contraseña debe tener almenos 8 caracteres").required(),
    estado: yup.number().required('Required'),

})

export const usuarioSchemaupdate = yup.object().shape({
    nombre: yup.string().required(),
    email: yup.string().email().required(),
    estado: yup.number().required('Required'),

})