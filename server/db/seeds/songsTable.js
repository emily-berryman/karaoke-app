exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('songs').delete()
    .then(() => {
      // Inserts seed entries
      return knex('songs').insert([
        {
          id: 1,
          title: 'John Legend - All of Me (Karaoke Version)',

          
          url: 'https://www.youtube.com/watch?v=kr8wPkdHFA0'
        }
      ])
    })
}