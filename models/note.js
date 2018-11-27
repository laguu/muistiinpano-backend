const mongoose = require('mongoose')

const url = 'mongodb://seppo:taalasmaa1@ds157528.mlab.com:57528/muistiinpano'

mongoose.connect(url)
mongoose.Promise = global.Promise

const Note = mongoose.model('Note', {
  content: String,
  date: Date,
  important: Boolean
})

module.exports = Note