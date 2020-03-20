const express = require('express');

const Projects = require('./project-model');

const router = express.Router();

router.get('/', (req,res) => {
    //GET all projects
    Projects.find()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: `you have an error: ${err}`})
    });
});

module.exports= router;