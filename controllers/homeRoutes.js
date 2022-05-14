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

// get a single post
router.get("/post/:id", async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: {
                model: Post,
                attributes: ['id', 'title', 'description', 'user_name', 'date_created']
            }
        });
        if (!postData) {
            res.status(404).json({ message: "This post doesn't exist." });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
    }
    res.render('login');
  });

// signup
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('signup');
  });

module.exports = router;