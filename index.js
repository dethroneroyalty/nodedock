const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log("Here we go on: " + process.env.PORT);
});
