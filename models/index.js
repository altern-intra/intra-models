// Load all files in directory
const normalizedPath = require("path").join(__dirname, "");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
  require("./" + file);
});
