import { taskController } from "../controllers/taskController.js";

const fileLink = document.getElementById("link-task-list-download");

document.getElementById("btn-download-task-list").addEventListener('click', event => {
    const target = event.target;
    target.innerText = 'Create new file'

    let inputFileText = `
        ### Twoja lista zadań do wykonania ###

    `
    const tasks = taskController.getAll();
    tasks.forEach( (task, index) => {
        inputFileText += `
            #Task: ${index}
            title: ${task.title}
            description: ${task.description}
        `
    })

    const blob = new Blob([inputFileText], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);


    fileLink.innerText = `Download file link`;
    fileLink.href = url;
    fileLink.download = 'TaskList.txt'
});