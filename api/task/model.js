// build your `Task` model here
const db = require('./config.js')

function getTasks(){
    return db('tasks')
}

module.exports = {
    getTasks,
}