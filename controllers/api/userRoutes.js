const router = require("express").Router();
const { User } = require("../../models");

// Creates a new instance of user
router.post("/", async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});


router.post("/login", async (req, res) => {
    // User login
});

router.post("/logout", async (req, res) => {
    // User logout
});

module.exports = router;