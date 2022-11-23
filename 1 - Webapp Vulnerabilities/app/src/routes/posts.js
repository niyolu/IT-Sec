const express = require('express');
const postsRouter = express.Router();
const db = require('../helpers/db');
const path = require('path');
const fs = require('fs');

transform_post = (post) => {
    return `<li><div><p>${post.username}</p><p>${post.text}</p></div></li>`;
}

postsRouter.get('/', (req, res) => {
    const static_file = path.join(__dirname, "../../", "static/posts.html");
    const query = 'SELECT username, text FROM posts';
    db.connection.query(query, (err, rows, fields) => {
        if (err) {
            console.log(err);
            throw err
        };

        posts_data = rows
            .map(transform_post)
            .join('\n');

        console.log("posts_data", posts_data)

        fs.readFile(static_file, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            const templated_html = data.replace("INSERT_POSTS", posts_data)

            // console.log('templated posts html', templated_html );
            res.send(templated_html);
        });
    });
});

postsRouter.post("/", (req, res) => {
    const user = req.body.username;
    const text = req.body.text.replaceAll("\"", "'");
    const query = `INSERT INTO posts (username, text) VALUES ("${user}", "${text}")`;
    db.connection.query(query, (err, rows, fields) => {
        if (err) {
            console.log(err);
            throw err
        };
        res.send({user, text});
    });
});

module.exports = postsRouter;