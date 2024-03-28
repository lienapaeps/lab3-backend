const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  start: {
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  end: {
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  farm: {
    type: Schema.Types.ObjectId,
    ref: "Farm",
  },
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
