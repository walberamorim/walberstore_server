import { Router } from 'express';
import { getFavoritos, getFavorito, postFavorito, deleteFavorito } from '../controladores/favoritos.js';
const router = Router();

router.get('/', getFavoritos);
router.get('/:id', getFavorito);

router.post('/:id', postFavorito);

router.delete('/:id', deleteFavorito);

export default router;