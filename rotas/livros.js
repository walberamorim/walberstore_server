import { Router } from 'express';
const router = Router();

import { getLivros, getLivro, postLivro, patchLivro, deleteLivro } from '../controladores/livros.js';

router.get('/', getLivros);
router.get('/:id', getLivro);

router.post('/', postLivro);

router.patch('/:id', patchLivro);

router.delete('/:id', deleteLivro);

export default router;