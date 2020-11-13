 
const express = require('express')
const router = express.Router()

const db = require('../db/dbFunc.js')

router.get('/', (req, res) => {
  db.getSongs()
    .then(songs => {
      res.json(songs)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const newSong = req.body
  db.createSongEntry(newSong)
  .then(() => res.json(newSong))
})
module.exports = router