const Task = require('../model/Task')


const getAllTasks = async (req, res)=>{
    try {
        const dataall = await Task.find({})
        // const newdata = {tasks: dataall, length: dataall.length}
        // res.status(201).json({tasks: dataall, length: dataall.length})
        res.status(201).json({dataall})
        // console.log(newdata.length)
    } catch (error){
        res.status(500).json({msg: error.errors.name.message})
    }
}

const getTask = async (req, res)=>{
    try {
        const {id:filtervalue} = req.params
        const find_data  = await Task.findOne({_id:filtervalue})

        if(!find_data){
            return res.status(404).json({msg: `No data found with id ${filtervalue}`})
        }
        res.status(201).json({find_data})
         
    } catch (error){
        res.status(500).json({msg: error})
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

const updateTask = async(req, res)=>{
    try {
        const {id : taskId} = req.params
        const updated_record = await Task.findOneAndUpdate({_id:taskId}, req.body, {
            new: true,
            runValidators: true
        })
    
        // if(!updated_record){
        //     return res.status(404).json({msg: `No data found with id ${taskId}`})
        // }
        res.status(200).json({id:taskId, data:req.body})
    } catch (error){
        res.status(500).json({msg: error})
    }
}

const deleteTask = async (req, res)=>{
    try {
        const {id : taskId} = req.params
        const task_data = await Task.findOneAndDelete({_id : taskId})

        if (!task_data){
            return res.status(404).json({msg:`No task found with id : ${taskId}`})
        }
        res.status(201).json({task_data})

    } catch (error){
        res.status(500).json({msg: error})
    }
}



module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}