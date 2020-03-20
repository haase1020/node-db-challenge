const express = require('express');

const ProjectRouter = require('./projects/project-router.js');
const ResourceRouter = require('./projects/resource-router.js');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);

server.get('/', (req,res) => {
    res.send ('<h2> Welcome To The Land of Projects</h2>');
})

module.exports = server;