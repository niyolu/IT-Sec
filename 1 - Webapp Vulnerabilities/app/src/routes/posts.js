const express = require('express');
const postsRouter = express.Router();
const db = require('../helpers/db');
const path = require('path');

postsRouter.get('/', (req, res) => {
    const static_file = path.join(__dirname, "../../", "static/posts.html");
    // get posts
    // insert posts into static file
    res.sendFile(static_file);
});

module.exports = postsRouter;