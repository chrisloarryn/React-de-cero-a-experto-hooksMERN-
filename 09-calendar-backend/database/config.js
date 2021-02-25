const mongoose = require('mongoose')
const AppError = require('../utils/appError')

const dbConnection = async () => {
  // mongodb+srv://chrisloarryn:ltbGMTpNQuugHBH3@cluster0.wvkde.mongodb.net/test
  try {
    mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    console.log('DB Online')
  } catch (error) {
    console.log(error)
    new AppError('Error initializeApp', 400)
  }
}

module.exports = { dbConnection }
