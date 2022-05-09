const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

// shows all posts
router.get("/", withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: ['id', 'title', 'descirption', 'user_name', 'date_created']
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('all-posts', {
            layout: 'dashboard',
            posts,
          });
    } catch (err) {
        res.status(500).json(err);
    }
});

// for showing new posts to the user
router.get("/new", withAuth, (req, res) => {
res.render('postData', {
    layout: 'dashboard',
  });
})

router.get("/edit/:id", withAuth, async (res, req) => {
    // To be able to find posts by primary key and render the edit post on the dashboard
})

module.exports = router;