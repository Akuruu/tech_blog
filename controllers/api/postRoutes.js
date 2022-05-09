const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
    try {
        const postdata = await Post.create(req.body);
        res.status(200).json(postdata);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put("/:id", withAuth, async (req, res) => {
    // Update a post
});

router.delete("/:id", withAuth, async (req, res) => {
    // Delete the post
});

module.exports = router;