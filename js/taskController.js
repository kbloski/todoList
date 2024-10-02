const enumStatus = {
    list: ['new','in-progress','made'],
    getDefaultStatus: () => { return list[0] },

}


class TaskController {
    tasklist = [];
    

    createTask(subtitle, description){
        const newTask = {
            subtitle,
            description,
            status: enumStatus.getDefaultStatus()
        }
    }

}