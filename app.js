const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./router/postsRouter.js')
const posts = require('./data/posts.js')

app.get('/', (req, res) => {
    res.json(posts)
})

app.use('/posts', postsRouter)

app.listen(port, () => {
    console.log(`In ascolto sulla porta ${port}`);
})