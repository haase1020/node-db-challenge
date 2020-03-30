
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
       
          name: 'code',
          description: 'code till you are excellent!',
          completed: false
        },
        {
           
          name: 'sleep',
          description: 'sleep until you are well rested',
          completed: false
        },
        {
          
          name: 'eat',
          description: 'eat enough to focus',
          completed: true
        },
      ]);
    });
};
