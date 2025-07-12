const { Router } = require('express');
const router = Router();

const {
    getFavoritos,
    getFavorito,
    postFavorito,
    patchFavorito,
    deleteFavorito
} = require('../controladores/favoritos');

router.get('/', getFavoritos);
router.get('/:id', getFavorito);

router.post('/', postFavorito);

router.patch('/:id', patchFavorito);

router.delete('/:id', deleteFavorito);

module.exports = router;