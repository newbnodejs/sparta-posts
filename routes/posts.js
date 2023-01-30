const express = require("express");
const router = express.Router();
const Post = require("./schema/post");

router.get("/", async (_, res) => {
    try {
        const posts = await Post.find(); // [{}, {}, {}]
        res.json({ data: posts });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post("/", async (req, res) => {
    const { user, title, content, password} = req.body;

    // 객체 구조
    // const user = req.body.user;
    // const title = req.body.title;
    // const content = req.body.content;
    // const password = req.body.password;
    
    try {
        const post = await Post.create({
            user,
            title,
            content,
            password
        });
        res.json({ data: post });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;