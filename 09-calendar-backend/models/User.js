const { Schema, model } = require('mongoose')

const UserSchema = Schema({
  name: {
    type: String,
    require: [true, 'Name is required.']
  },
  email: {
    type: String,
    require: [true, 'Email is required.'],
    unique: true
  },
  password: {
    type: String,
    require: [true, 'Password is required.']
  }
})

module.exports = model('User', UserSchema)
