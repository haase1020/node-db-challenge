
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          name: 'monitor',
          description: null
        },
        {
          name: 'table',
          description: null
        },
        {
          name: 'power cord',
          description: null
        }
        
      ]);
    });
};
