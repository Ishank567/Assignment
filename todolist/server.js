const express = require('express')
const srv = express()
  
const todolistroute = require('./routes/todolist')

srv.use(express.json())
srv.use(express.urlencoded({extended: true}))

srv.use('/todolist', todolistroute)


srv.listen(1122)