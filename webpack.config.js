const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};

//Goes to source folder and look at index.js. This will be where the logic of our code will be written
//Once you run the webpack command write to main.js (destination)
