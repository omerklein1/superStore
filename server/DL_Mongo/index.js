const
    fs = require('fs'),
    path = require('path'),
    tasksPath = path.join(__dirname, './dataPRO.json')

async function create(task) {

    const tasks = await read()

    if (tasks.find(t => (t.id == task.id || t.name == task.name)))
        throw 'Task already exist'

    tasks.unshift(task)
    writeToJson(tasks)

    return task

}

async function read(filter) {

    let tasks

    try {
        tasks = require(tasksPath)
    } catch (error) {
        tasks = []
    }

    if (!Array.isArray(tasks))
        return []

    if (filter)
        tasks = tasks.filter(filter)

    return tasks

}


async function readOne(id) {

    const list = await read(t => t.id == id),
        task = list[0]

    if (!task) throw 'Task does not exist'

    return task

}

async function update(task) {

    const tasks = await read(),
        index = tasks.findIndex(t => t.id == task.id)

    if (index == -1) throw 'Task does not exist'

    Object.assign(tasks[index], task)

    writeToJson(tasks)

    return tasks[index]

}

async function del(id) {

    const tasks = await read(),
        index = tasks.findIndex(t => t.id == id)

    if (index == -1) throw 'Task does not exist'

    tasks.splice(index, 1)

    writeToJson(tasks)

    return { success: `Task deleted` }

}

module.exports = { create, read, readOne, update, del }

function writeToJson(tasks) {
    fs.writeFileSync(tasksPath, JSON.stringify(tasks))
} 
