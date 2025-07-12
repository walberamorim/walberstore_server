const {Router} = require('express');
const router = Router();

const {getLivros, getLivro} = require('../controladores/livros');

router.get('/', getLivros);
router.get('/:id', getLivro);

router.post('/', (req, res) => {
    try {
        res.send('Você fez um post!');
    } catch (error) {
        res.status(500).send(error);
    }
    
});

router.patch('/', (req, res) => {
    try {
        res.send('Voce fez um patch!');
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/', (req, res) => {
    try {
        res.send('Voce fez um delete!');
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;