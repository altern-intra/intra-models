const mongoose = require('mongoose')

const ObjectID = mongoose.Schema.Types.ObjectId

const Instance = new mongoose.Schema({
  title: String,
  location: String,
  code: String
})


class InstanceClass {
  constructor(db) {
    this.db = db;
    this.module = Instance;
    this.schema = this.getSchema();
    this.collection = this.schema.collection;
  }

  getSchema() {
    return this.db.model('Instance', this.module.loadClass(InstanceClass));
  }
}

module.exports = InstanceClass;
