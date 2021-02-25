const { Schema, model } = require('mongoose')

const EventSchema = Schema({
  title: {
    type: String,
    required: [true, 'title is required.']
  },
  notes: {
    type: String
  },
  start: {
    type: Date,
    required: [true, 'start is required.']
  },
  end: {
    type: Date,
    required: [true, 'end is required.']
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'user is required.']
  }
})

EventSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject()
  object.id = _id
  object._id = _id
  return object
})

module.exports = model('Event', EventSchema)
