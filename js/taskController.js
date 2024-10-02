const enumStatus = Object.freeze(
    {
        list: ['new', 'in-progress', 'completed'],
        getDefaultStatus: function () { return this.list[0] },
        getProgressStatus: function () { return this.list[1] },
        getCompletedStatus: function () { return this.list[2] }
    }
);


class TaskController {
    tasklist = [];
    #MAX_LIST_LENGTH = 20;

    createTask(subtitle = 'Default Task Title', description = '') {
        if (this.MAX_LIST_LENGTH >= this.tasklist.length);

        const newTask = {
            id: Math.round(Math.random() * 100000),
            subtitle: subtitle,
            description,
            status: enumStatus.getDefaultStatus()
        }

        this.tasklist.push(newTask);
        return newTask;
    };

    getAll() {
        return this.tasklist ?? [];
    }

    getById(id) {
        return this.tasklist.find(task => task.id === id) ?? null;
    }

    updateById(id, task) {
        const newTaskList = this.tasklist.map(prev => {
            if (prev.id !== id) return task;
            const newTask = { ...prev, ...task };
            return newTask;
        });

        this.tasklist = newTaskList;
    }

    deleteById(id) {
        const newTaskList = this.tasklist.filter(task => task.id !== id);
        let counter = this.tasklist.length - newTaskList.length;

        this.tasklist = newTaskList;
        return counter;

    };
};

export const taskController = new TaskController();