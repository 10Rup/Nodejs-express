const Task = require('../model/Task')


const getAllTasks = async (req, res)=>{
    try {
        const dataall = await Task.find({})
        res.status(201).json({dataall})
    } catch (error){
        res.status(500).json({msg: error.errors.name.message})
    }
}

const getTask = async (req, res)=>{
    try {
        const {id:filtervalue} = req.params
        const find_data  = await Task.findOne({_id:filtervalue})
        res.status(201).json({find_data})
    } catch (error){
        res.status(500).json({msg: error.errors.name.message})
    }
}

const createTask =async (req, res)=>{
    try {
        const newtask = await Task.create(req.body)
        res.status(201).json({newtask})
    } catch (error){
        res.status(500).json({msg: error.errors.name.message})
    }

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