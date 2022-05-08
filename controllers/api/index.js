const { route } = require("../../../.Main/controllers/api");

const router = require("express").Router();

// Finish the required pathing for these variables
// const userRoutes = ;
// const postRoutes = ;
// const commentRoutes = ;

router.use("/user", userRoutes);
// write the rest of the router.use routes

// router.use("/post", postRoutes);

// router.use("/comment", CommentRoutes);

module.exports = router;