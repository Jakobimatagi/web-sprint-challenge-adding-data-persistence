// build your server here and require it from index.js
const express = require('express');
const ProjectRouter = require('./project/router');

const db = require('../data/dbConfig');

const server = express();

server.use(express.json());
server.use('/api', ProjectRouter)
module.exports = server;