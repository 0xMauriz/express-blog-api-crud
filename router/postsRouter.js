const express = require('express')
const router = express.Router();
const posts = require('../public/scripts/posts.js')



router.get('/', (req, res) => {
    res.send('Lista dei post: ');
})

router.post('/', (req, res) => {
    res.send('Creazione nuovo post');
})

router.get('/:id', (req, res) => {

    const id = Number(req.params.id)
    const singlePost = posts.find((post) => post.id === id);
    res.json(singlePost);

})

router.put('/:id', (req, res) => {
    res.send('Modifica integrale del post ' + req.params.id)
})

router.patch('/:id', (req, res) => {
    res.send('Modifica parziale del post ' + req.params.id)
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    res.send(`Cancello post ${id}`)
})

module.exports = router;