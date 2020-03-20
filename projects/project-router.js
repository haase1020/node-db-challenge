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

router.get('/:id',(req,res)=> {
    //get one project by ID
    const { id } = req.params;
    Projects.findById(id)
    .then(project => {
        if(project) {
            res.status(200).json(project)
        } else {
            res.status(404).json({ message: `error ${err}`})
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: ` error here ${err}`})
    })
})

router.get('/:id/tasks', (req,res) => {
    //GET tasks by project ID
    const { id } =req.params
    Projects.findTasks(id)
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: `error ${err}`})
    })
})

router.get('/:id/resources',(req,res)=> {
    //GET resources by project ID
    const { id } = req.params;

    Projects.findProjectResources(id)
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: `error ${err}`})
    })
})

router.post('/', (req,res) => {
    //POST a new project
    const projectData = req.body;

    Projects.add(projectData)
    .then(project => {
        res.status(201).json(project);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: `error ${err}`});
    })
})

router.post('/:id/resources',(req,res)=> {
    //POST resources by project id --> this doesn't work!!
    const { id } = req.params;
    const resourceData = req.body;

    Projects.addProjectResource(id, resourceData)
    .then(project_resource => {
        res.status(201).json(project_resource);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: `error adding new project resource ${err}`})
    })
})

router.post('/:id/tasks', (req,res) => {
    //POST a new task for a project --> I think its working...
    const taskData = req.body;

    Projects.addTask(taskData)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message:`error ${err}`})
    })
})

router.put('/:id', (req,res) => {
    //UPDATE a project by ID --> its working!!
    const { id } = req.params;
    const changes = req.body;

    Projects.findById(id)
    .then(project => {
        if (project) {
            Projects.update(id,changes)
            .then(updatedProject => {
                res.status(200).json(updatedProject);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: `error ${err}`})
            })
        } else {
            res.status(404).json({ message: 'failed to get specified project'})
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message:`error${err}`})
    })
})

router.delete('/:id', (req,res)=> {
    //DELETE a project by ID
    const { id } = req.params;

    Projects.remove(id)
    .then(deleted => {
        res.status(200).json({ removed: deleted })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: `error ${err}`})
    })
})






module.exports= router;