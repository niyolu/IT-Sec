const express = require('express');
const postsRouter = express.Router();
const db = require('../helpers/db');
const path = require('path');
const app = require('../app');

postsRouter.get('/', (req, res) => {
    const static_file = path.join(__dirname, "../../", "static/posts.html");
    // get posts

    
    // insert posts into static file

    res.sendFile(static_file);
});

postsRouter.post("/post", (req, res) => {
    var myData = new User(req.body);
    myData.save()
    .then(item => {
        console.log(item);
    })
    .catch(err => {
        res.status(400).send("unable to save to database");
    });
   });

module.exports = postsRouter;