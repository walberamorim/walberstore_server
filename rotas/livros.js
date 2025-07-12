const {Router} = require('express');
const router = Router();

const {getLivros, getLivro, postLivro, patchLivro, deleteLivro} = require('../controladores/livros');

router.get('/', getLivros);
router.get('/:id', getLivro);

router.post('/', postLivro);

router.patch('/:id', patchLivro);

router.delete('/:id', deleteLivro);

module.exports = router;