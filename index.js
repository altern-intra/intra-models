const models = require('require-all')({
  dirname     :  __dirname + '/models',
  filter      :  /(.+Controller)\.js$/,
  excludeDirs :  /^\.(git|svn)$/,
  recursive   : true
});

module.exports = models;
