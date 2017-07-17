const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/flickies'
const Movie = require('./models/Movie')
const User = require('./models/User')

// connect to mongo
mongoose.connect(url, {
  useMongoClient: true
})
mongoose.Promise = global.Promise

// create Movie
// new movie will come from your form
// var newMovie = new Movie({
//   name: 'Wonder Womam',
//   genre: 'Superhero',
//   year: 2017,
//   rating: 200
// })
//
// newMovie.save(function (err, data) {
//   if (err) throw err
//
//   console.log('new movie created')
//   console.log('new movie', data)
// })

var newUser = new User({
  name: 'Prima',
  email: 'prima@ga.co',
  password: '123123'
})

// newUser.save(function (err, data) {
//   if (err) throw err
//   console.log('new user created')
// })

// READ
User.findOne({
  password: 123123
}, function (err, users) {
  if (err) throw err

  console.log(users)
})

// UPDATE
qObj = {
  name: 'Shimei'
}
upObj = {
  $set: {
    email: 'wong.shimei@ga.co'
  }
}

User.findOneAndUpdate(qObj, upObj, {new: true}, function (err, data) {
  if (err) throw err
})

// delete
User.findOneAndRemove({name: 'Prima'}, function (err, removeData) {
  if (err) throw console.error()
  console.log(removeData)
})
