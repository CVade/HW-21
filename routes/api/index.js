const router = require("express").Router();
const path = require("path");
const googleRoutes = require("./google");
const bookRoutes = require("./books");

router.use("/google", googleRoutes);
router.use("/books", bookRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
