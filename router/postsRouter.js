const express = require('express')
const app = express()
const router = express.Router();
const postsController = require('../controllers/postsController.js')

router.get('/', postsController.index)

router.post('/', postsController.store)

router.get('/:id', postsController.show)

router.put('/:id', postsController.update)

router.patch('/:id', (req, res) => {
    res.send('Modifica parziale del post ' + req.params.id)
})

router.delete('/:id', postsController.destroy)

module.exports = router;