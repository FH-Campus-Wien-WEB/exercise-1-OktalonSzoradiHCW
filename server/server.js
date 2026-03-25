const express = require('express')
const path = require('path')
const app = express()

const movies = require('./movies.json')

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')))

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  const omdbData = movies.map(
    ({
      Title,
      Released,
      Runtime,
      Genre,
      Director,
      Writer,
      Actors,
      Plot,
      Poster,
      Metascore,
      imdbRating
    }) => ({
      Title,
      Released: new Date(Released).toLocaleDateString('en-CA'),
      Runtime: Number.parseInt(Runtime),
      Genres: Genre.split(', '),
      Directors: Director.split(', '),
      Writers: Writer.split(', '),
      Actors: Actors.split(', '),
      Plot,
      Poster,
      Metascore: Number(Metascore),
      imdbRating: Number(imdbRating)
    })
  )
  res.send(omdbData)
})

app.listen(3000)

console.log('Server now listening on http://localhost:3000/')
