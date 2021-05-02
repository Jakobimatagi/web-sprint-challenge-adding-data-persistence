// build your `/api/tasks` router here
const express = require('express')
const knex = require('knex')
const db = require("./config")
const Projects = require('./project-model')

const router = express.Router()

router.get('/tasks', (req, res) => {
    Projects.getTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
  })

  router.get('/tasks', (req, res) => {
    db('tasks')
    .where('tasks.project_id')
    .leftJoin('projects', '')
    .select('tasks.description')
})

router.get('/task_projects/:id', (req, res) => {
    // get a list of project resources
    db('tasks as t')
      .where('t.project_id', req.params.id)
      .select('t.description as Task_Description')
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

  router.post("/tasks", (req, res) => {
    const taskData = req.body

    db("tasks")
    .insert(taskData)
    .returning("id")
    .then(ids => {
        res.status(200).json({data: ids})
    })
    .catch(error => {
        res.status(500).json({message: error.message})
    })
})

router.get('/task_projects', (req, res) => {
    db('tasks')
    .where('tp.project_id')
    .join('projects.name as p', 'tasks.project_id', 'p.id')
    .select('p.project_name as projectName', 't.description as taskdesc')
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(error => {
      res.status(500).json(error);
    });
})