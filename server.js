const express = require('express');
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const server = express();
const projectRouter = require('./projects/project-router')

server.use(helmet())
server.use(express.json())
server.use(morgan('dev'))
server.use(cors())
server.use('/api/projects', projectRouter);



server.get('/', (req,res) => {
    res.send ('<h2> Welcome To The Land of Projects</h2>');
})

module.exports = server;