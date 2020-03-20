const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findTasks,
    // findResources,
    // findProjectResources,
    // add,
    // addTask,
    // addResource,
    // addProjectResource,
    // update,
    // remove
}

function find() {
    return db('projects');
}

function findById(id) {
    if(!db('projects').where({ id })){
        return null;
    } else {
        return db('projects').where({ id }).first();
    }
}

function findTasks(id) {
    return db('projects as p')
    .where('p.id', id)
    .join('tasks as t', 'p.id', 't.project_id')
    .select('p.name', 'p.description', 't.task_number', 't.description', 't.notes')
    .select('p.name', 'p.description', 't.task_number','t.description', 't.notes')
    .where('t.project_id', id)
    .orderBy('t.task_number');
}