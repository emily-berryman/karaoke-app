
exports.up = function(knex) {
  return knex.schema.createTable('songs', table => {
    table.increments('id').primary()
    table.string('title')
    table.string('URL')

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('songs')
};
