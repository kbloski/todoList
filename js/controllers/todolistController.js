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

    #createListElement( task ){
            const liElement = document.createElement('li');
            liElement.classList = 'todolist-item';
            
            const titleEl = document.createElement('p');
            titleEl.innerText = task.title;
            titleEl.classList = 'todolist-item-title'
            liElement.appendChild( titleEl );

            const descriptionEl = document.createElement('p');
            descriptionEl.innerText = task.description;
            liElement.appendChild( descriptionEl);

            const buttonDel = document.createElement('button');
            buttonDel.classList = 'btn btn-danger';
            buttonDel.innerText = 'Usuń';
            buttonDel.addEventListener('click', ()=>{
                taskController.deleteById( task.id );
                this.render();
            })
            liElement.appendChild( buttonDel );


            this.listElement.appendChild( liElement );
    }


    render() {
        this.listElement.innerHTML = '';
        this.tasksList = taskController.getAll();


        for (const task of this.tasksList) {
            this.#createListElement( task )
        }
    }
}


export const todoListController = new TodoListController();
taskController.createTask('Test #1', 'Opis zadania 1')
taskController.createTask('Test #2', 'Opis zadania 2')
todoListController.render();