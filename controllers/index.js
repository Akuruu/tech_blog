const router = require("express").Router();

// finish the required routes
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/api', apiRoutes);

router.use("/", homeRoutes);
// res.send();
// finish the other needed routes with router.use()


//router.use("", dashboardRoutes);

//router.use("", apiRoutes);
module.exports = router;