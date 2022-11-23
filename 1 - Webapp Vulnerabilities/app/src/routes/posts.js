const express = require('express');
const router = express.Router();
const db = require('../helpers/db');
const path = require('path');

router.get('/', (req, res) => {
    const static_file = path.join(__dirname, "../../", "static/post.html");
    // get posts
    // insert posts into static file
    res.sendFile(static_file);
});

