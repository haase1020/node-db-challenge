
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          
          task_number: 1,
          description: 'Find computer',
          notes: 'Check under the couch or in cushions',
          completed: false,
          project_id: 1
        },
        {
          
          task_number: 2,
          description: 'Gather snacks',
          notes: null,
          completed: false,
          project_id: 1
        },
        {
          
          task_number: 3,
          description: 'Find a comfortable seat',
          notes: null,
          completed: false,
          project_id: 1
        },
        
        {
          
          task_number: 1,
          description: 'get bed ready',
          notes: null,
          completed: false,
          project_id: 2
        },
        {
          
          task_number: 2,
          description: 'brush teeth',
          notes: null,
          completed: false,
          project_id: 2
        },
        {
          
          task_number: 3,
          description: 'put on pajamas',
          notes: null,
          completed: false,
          project_id: 2
        },
       
        {
          
          task_number: 1,
          description: 'grab food supplies',
          notes: 'peanut butter is good',
          completed: true,
          project_id: 3
        },
        {
          
          task_number: 2,
          description: 'prepare water',
          notes: null,
          completed: true,
          project_id: 3
        },
        {
          
          task_number: 3,
          description: 'prepare food',
          notes: null,
          completed: true,
          project_id: 3
        }
        
      ]);
    });
};
