import { check } from 'express-validator';

export const validarCamposActualizar =  [
    check('nombre_documento', 'El nombre de documento es obligatorio').not().isEmpty().isLength({ max: 50 }),
    check('usuario', 'el usuario es obligatorio').not().isEmpty().isLength({ max: 100 }),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('resultado', 'El resultado es obligatorio').not().isEmpty().isLength({ max: 15 }),

]