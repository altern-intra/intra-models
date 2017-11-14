const models = require('require-all')({
  dirname     :  __dirname + '/models',
  excludeDirs :  /^\.(git|svn)$/,
  recursive   : true
});
console.log(models)
module.exports = models;
