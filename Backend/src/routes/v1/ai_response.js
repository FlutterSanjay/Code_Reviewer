const express = require("express");
const { AiController } = require("../../controller");

const router = express.Router();

// /api/v1/prompt/get-review (POST)
router.post("/get-review", AiController.aiResponse);

module.exports = router;
