const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const pokemonRouter = require("../routes/pokemon");

dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../public")));

// app.get("/", (req, res) => {
//   return res.status(200).json({
//     message: "hello world",
//   });
// });

app.use("/", pokemonRouter);

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
