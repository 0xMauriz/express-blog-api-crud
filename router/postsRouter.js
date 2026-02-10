const express = require('express')
const router = express.Router();
const posts = require('../data/posts.js')
const postsController = require('../controllers/postsController.js')



router.get('/', postsController.index)

router.post('/', (req, res) => {
    res.send('Creazione nuovo post');
})

router.get('/:id', postsController.show)

router.put('/:id', (req, res) => {
    res.send('Modifica integrale del post ' + req.params.id)
})

router.patch('/:id', (req, res) => {
    res.send('Modifica parziale del post ' + req.params.id)
})

router.delete('/:id', postsController.destroy)

module.exports = router;