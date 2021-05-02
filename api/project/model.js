// build your `Project` model here
const db = require('./config.js')

module.exports = {
    find,
    findById,
    getResources,
    getTasks
}

function find() {
    return db("projects");
}

function findById(id) {
    return db("projects")
    .where({ id })
    .first()
}

function getResources(){
    return db('resources')
}

function getTasks(){
    return db('tasks')
}