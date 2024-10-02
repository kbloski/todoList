import { taskController } from "../controllers/taskController.js";
import { todoListController } from "../controllers/todolistController.js";

document.getElementById('task-form').addEventListener('submit', event => {
    event.preventDefault();
    const title = document.getElementsByName('title')[0];
    const description = document.getElementsByName('description')[0];

    taskController.createTask(title.value, description.value);
    todoListController.render();

    title.value = '';
    description.value = '';
});