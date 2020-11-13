const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getSongs(db = connection) {
  return db('songs').select().orderBy('id', 'desc').limit(5)
}

function createSongEntry (newSong, db = connection){
  return db('songs').insert(newSong).then(ids => {
    return ids[0]
  })
}

module.exports = {
  getSongs,
  createSongEntry
}