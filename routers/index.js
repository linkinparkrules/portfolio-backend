const express = require("express");
const contactRouter = require("./contact");
const router = express.Router();

router.use("/", contactRouter);

module.exports = router;