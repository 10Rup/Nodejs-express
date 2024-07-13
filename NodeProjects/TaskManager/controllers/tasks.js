const Task = require('../model/Task')


const getAllTasks = (req, res)=>{
    res.send("All Data")
}

const getTask = (req, res)=>{
    res.json({id: req.params.id})
}

const createTask =async (req, res)=>{
    const newtask = await Task.create(req.body)
    res.status(201).json({newtask})
}

const updateTask = (req, res)=>{
    res.json(req.body)
}

const deleteTask = (req, res)=>{
    res.send('delete a task')
}



module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}