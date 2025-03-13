const express = require("express");
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// /api/v1/info
app.use("/api", apiRoutes);
app.use(bodyParser.json());

app.listen(ServerConfig.PORT, () => {
  console.log(`SucessFully Started the server on Port: ${ServerConfig.PORT}`);
});
