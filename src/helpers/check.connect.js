'use strict'

const { default: mongoose } = require("mongoose")
const os = require('os')
const _TIMEOUT = 5000;

// count connection
const countConnect = () => {
  const numConnection = mongoose.connections.length
  console.log(`Number of connection:: ${numConnection}`)
}

// check overload every 5 seconds
const checkOverload = () => {
  setInterval(() => {
    const numCores = os.cpus().length
    const memoryUsage = process.memoryUsage().rss
    const numConnection = mongoose.connections.length

    // Example maximum number of connection based on number of cores
    const maxConnection = numCores * 5;

    console.log(`Active connections:: ${numConnection}`)
    console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`)
    console.log(`Number of cores:: ${numCores}`)

    if (numConnection > maxConnection) {
      console.log(`Connection overload detected!`)
      // notify.send(...)
    }
  }, _TIMEOUT) 
}

module.exports = {
  countConnect,
  checkOverload
}