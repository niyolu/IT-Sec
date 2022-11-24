const express = require('express');
const router = express.Router();
const db = require('../helpers/db');
const { get_session } = require('../helpers/sessionstore');
const path = require('path');
const fs = require('fs');

transform_post = (post) => { return `<li><p style="font-weight: bold">${post.username}:</p><p>${post.text}</p></li>`; };

router.get('/', (req, res) => {
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

        console.log(rows);
        console.log("posts_data", posts_data)

        fs.readFile(static_file, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }

            const templated_html = data.replace("INSERT_POSTS", posts_data)
            res.send(templated_html);
        });
    });
});

router.post("/", (req, res) => {
    const user = req.body.username;
    // if (get_session(user) != req.cookies['session']){
    //     res.status(400).send("Unauthorized");
    //     return;
    // }
 
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

module.exports = router;