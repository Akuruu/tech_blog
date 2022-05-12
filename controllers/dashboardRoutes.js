const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

// Shows all posts
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

// Showing new posts to the user
router.get("/new", withAuth, (req, res) => {
res.render('postData', {
    layout: 'dashboard',
  });
})

// To be able to find posts by primary key and render the edit post on the dashboard
router.get("/edit/:id", withAuth, async (res, req) => {
    try {
        const postData = await Post.findByPk(req.params.id);

        if (postData) {
            const post = postData.get({ plain: true });
            res.render('edit-post', {
                layout: 'dashboard',
                post,
            });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;