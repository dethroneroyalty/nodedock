const express = require("express");

const app = express();

app.use((req, res) => {
  res.send(`<h1> Hello man ${process.env.NAME}</h1>`);
})

app.listen(80, () => {
  console.log("Here we go on 3000");
})

process.on("SIGINT", () => { console.log("Caught Ctrl-C.."); process.exit() });
process.on("SIGTERM", () => { console.log("Caught kill.."); process.exit() });
