const mongoose = require('mongoose')

const ObjectID = mongoose.Schema.Types.ObjectId;

const Activity = new mongoose.Schema({
  title: String,
  moduleId: ObjectID,
  codeActivity: String,
  competence: String,
  description: String,
  semester: Number,
  credits: Number,
  timeline: {
    begin: Date,
    end: Date,
    end_register: Date
  },
  instances: [],
  registered: [],
  assistant: [],
  resp: []
})

class ActivityClass {
  constructor(db) {
    this.db = db;
    this.module = Activity;
    this.schema = this.getSchema();
    this.collection = this.schema.collection;
  }

  formatFromIntranet(activity) {
    const  {events, ...formatedActivity} = activity;
    return formatedActivity;
  }

  buildBulkFromIntranet(bulk, activity) {
    bulk
      .find({
        codeacti: activity.codeacti
      })
      .upsert()
      .update({
        $set: this.formatFromIntranet(activity)
      })
  }

  getSchema() {
    return this.db.model('Activity', this.module.loadClass(ActivityClass));
  }
}

module.exports = ActivityClass;
