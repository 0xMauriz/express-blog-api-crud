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

    res.send(req.body);

    const newId = posts[posts.length - 1].id + 1;

    const newPost = {

        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    posts.push(newPost);

    console.log(posts);

    res.status(201);
    res.json(posts);


}

function update(req, res) {

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


    singlePost.title = req.body.title;
    singlePost.content = req.body.content;
    singlePost.image = req.body.image;
    singlePost.tags = req.body.tags;

    res.json(singlePost)

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