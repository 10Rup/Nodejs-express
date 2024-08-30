const tasksDOM = document.querySelector('.tasks')
const loadingDOM = document.querySelector('.loading-text')
const formDOM = document.querySelector('.task-form')
const taskInputDOM = document.querySelector('.task-input')
const formAlertDOM = document.querySelector('.form-alert')

const showTasks = ()=>{
    tasksDOM.innerHTML = `<h5 class="empty-list"> hello every one</h5>`
}

showTasks()