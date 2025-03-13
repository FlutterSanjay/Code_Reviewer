const express = require("express");
const { InfoController } = require("../../controller");
const aiResponse = require("./ai_response");

const router = express.Router();
router.get("/info", InfoController.info);

router.use("/prompt", aiResponse); // Add Controller

module.exports = router;
