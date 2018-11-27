// ei kuulu enää ohjelmaan !
//

const mongoose = require('mongoose')

// korvaa url oman tietokantasi urlilla. ethän laita salasanaa Githubiin!
const url = 'mongodb://seppo:taalasmaa1@ds157528.mlab.com:57528/muistiinpano'

mongoose.connect(url)

const Note = mongoose.model('Note', {
  content: String,
  date: Date,
  important: Boolean
})
/*
const note = new Note({
  content: 'Selain pystyy suorittamaan vain javascriptiä',
  date: new Date(),
  important: true
})

note
  .save() // tallentaa tietokantaa, palauttaa promisen
  .then(response => {
    console.log('note saved!')
    mongoose.connection.close()
  })
*/
Note
  .find({})
  .then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })