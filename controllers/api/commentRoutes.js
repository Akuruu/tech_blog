const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// create a comment
router.post("/", withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_name: req.session.user_name,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;