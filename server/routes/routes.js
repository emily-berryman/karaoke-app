 
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

module.exports = router