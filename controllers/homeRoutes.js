const router = require("express").Router();
const { Post, Comment, User } = require("../models");

    // get all posts for the homepage
router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll();
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/post/:id", async (req, res) => {
    // get a single post
});

router.get("/login", (req, res) => {
    // login
});

router.get("/signup", (req, res) => {
    // signup
})

module.exports = router;