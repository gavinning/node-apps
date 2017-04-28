const path = require('path')
const Apps = require('./app')
const apps = new Apps(path.dirname(__dirname))

console.log(apps)
