const { db } = require("./db/db");
const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");

const app = express();

require("dotenv").config();
console.log("MongoDB URL:", process.env.MONGODB_URL); // Ensure this prints the correct URL

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);
const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("listening to port:", PORT);
  });
};
server();
