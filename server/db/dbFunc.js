const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getSongs(db = connection) {
  return db('songs').select()
}

module.exports = {
  getSongs,
}