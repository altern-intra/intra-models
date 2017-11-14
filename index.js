const models = require('require-all')({
  dirname     :  __dirname + '/models',
  excludeDirs :  /^\.(git|svn)$/,
  recursive   : true
});

module.exports = models;
