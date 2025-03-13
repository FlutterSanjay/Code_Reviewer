const { StatusCodes } = require("http-status-codes");
const { AiService } = require("../service");

async function aiResponse(req, res) {
  const code = req.body.code;
  console.log(code);
  if (!code) {
    return res.status(400).send("Prompt is Required");
  }
  const response = await AiService.generatePrompt(code);

  return res.status(StatusCodes.OK).json(response);
}

module.exports = { aiResponse };
