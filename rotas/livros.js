import { Router } from 'express';
const router = Router();

import { getLivros, getLivro, postLivro, patchLivro, deleteLivro, getLivrosEditora } from '../controladores/livros.js';

router.get('/', getLivros);

router.get('/busca', getLivrosEditora);

router.get('/:id', getLivro);

router.post('/', postLivro);

router.patch('/:id', patchLivro);

router.delete('/:id', deleteLivro);

export default router;