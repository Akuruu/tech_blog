const router = require("express").Router();

// finish the required routes
const apiRoutes = require('controllers/api');
const homeRoutes = require('controllers/homeRoutes.js');
const dashboardRoutes = require('controllers/dashboardRoutes.js');

router.use('/api', apiRoutes);

router.use("/", homeRoutes);
res.send()
// finish the other needed routes with router.use()


//router.use("", dashboardRoutes);

//router.use("", apiRoutes);
module.exports = router;