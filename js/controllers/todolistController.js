import { deleteTask } from "../services/deleteTask.js";
import { taskController } from "./taskController.js";

class TodoListController {
    constructor() {
        this.container = document.querySelector('.todolist');
        this.listElement;
        this.tasksList = [];
        this.#createList();
    }

    #createList() {
        const listUl = document.createElement('ul');
        listUl.classList = 'todolist-body';

        this.container.innerHTML = '';
        this.container.appendChild(listUl);
        this.listElement = listUl;
    }

    render() {
        this.listElement.innerHTML = '';
        this.tasksList = taskController.getAll();

        for (const task of this.tasksList) {
            this.listElement.innerHTML += `
                <li class='todolist-item'>
                    <div class='todolist-item-title'>
                        ${task.title}
                    </div>
                    <p>
                    ${task.description}
                    </p>
                    <button class='btn btn-danger' onclick=''>Usuń</button>
                    <button class='btn btn-warning'>Edytuj</button>
                </li>
            `
        }
    }
}


export const todoListController = new TodoListController();
taskController.createTask()
taskController.createTask()
todoListController.render();