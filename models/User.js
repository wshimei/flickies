const mongoose = require('mongoose')
const Schema = mongoose.Schema
const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    require: true,
    match: emailRegex
  },
  password: {
    type: String,
    require: true
  }
})

userSchema.pre('save', function (next) {
  var savingUser = this
  savingUser.password += 123257680960752351

  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
