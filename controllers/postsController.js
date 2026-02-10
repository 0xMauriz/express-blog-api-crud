const posts = require("../data/posts.js");

function index(req, res) {
    res.json(posts);
}

function show(req, res) {

    const id = Number(req.params.id)
    const singlePost = posts.find((post) => post.id === id);
    res.json(singlePost);

}

function store(req, res) {

}

function update(req, res) {

}

function destroy(req, res) {

    const id = Number(req.params.id)

    const singlePost = posts.find((post) => post.id === id);

    if (!singlePost) {
        res.status(404)

        return res.json({
            status: 404,
            error: 'Not found',
            message: 'Il post non esiste'
        })
    }

    posts.splice(posts.indexOf(singlePost), id)

    res.sendStatus(204)

    console.log(posts);

}

module.exports = { index, show, store, update, destroy }