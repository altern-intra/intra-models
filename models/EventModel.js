const mongoose = require('mongoose')

const ObjectID = mongoose.Schema.Types.ObjectId

const Event = new mongoose.Schema({
  activityId: ObjectID,
  eventId: String,
  schoolYear: Number,
  semester: Number,
  location: String,
  eventTitle: String,
  startDate: Date,
  endDate: Date,
  teacher: Array,
  duration: Number,
  room: Array,
})


class EventClass {
  constructor(db) {
    this.db = db;
    this.module = Event;
    this.schema = this.getSchema();
    this.collection = this.schema.collection;
  }

  getSchema() {
    return this.db.model('Event', this.module.loadClass(EventClass));
  }
}

module.exports = EventClass;
