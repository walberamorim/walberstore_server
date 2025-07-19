import { Router } from 'express';
const router = Router();

import { getAutores, getAutor, postAutor, patchAutor, deleteAutor } from '../controladores/autores.js';

router.get('/', getAutores);
router.get('/:id', getAutor);

router.post('/', postAutor);

router.patch('/:id', patchAutor);

router.delete('/:id', deleteAutor);

export default router;