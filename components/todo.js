import { TaskField } from "./inputField.js";

import { TodoList } from "./todoLists.js";

const template = document.createElement("template");
template.innerHTML = `
<style>
#todo-wrapper {
  width: 50%;
 
  flex-direction: column;
  background: #f5f5f5;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  padding: 40px;
  border-radius: 40px;
}
#todo-wrapper h1{
  text-align: center
}
</style>
<div id="todo-wrapper">
        <h1>Create TODO's</h1>
</div>
`;
class Todo extends HTMLElement {
  constructor() {
    super();

    this.tasks = [];

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("#todo-wrapper").appendChild(new TaskField());
    this.todoList = new TodoList();
    this.shadowRoot.querySelector("#todo-wrapper").appendChild(this.todoList);

    this.addTask = this.shadowRoot
      .querySelector("task-field")
      .shadowRoot.querySelector("#add-task");

    this.taskInput = this.shadowRoot
      .querySelector("task-field")
      .shadowRoot.querySelector("#enter-task");

    // this.todoList.renderList(this.tasks);

    this.actions();
  }
  actions() {
    this.addTask.addEventListener("click", () => this.populateTodoList());
    this.todoList.addEventListener("done", (e) =>
      this.completeTask(e.detail.id)
    );
    this.todoList.addEventListener("delete", (e) =>
      this.deleteTask(e.detail.id)
    );
    this.taskInput.addEventListener("keypress", (e) => {
      if (e.code === "Enter") this.populateTodoList();
    });
  }
  populateTodoList() {
    if (this.taskInput.value === "") return;
    let id = this.tasks.length ? this.tasks[0].id + 1 : 1;
    const task = { id: id, task: this.taskInput.value, done: false };
    this.tasks = [task, ...this.tasks];
    this.taskInput.value = "";
    this.todoList.renderList(this.tasks);
  }
  completeTask(id) {
    this.tasks.forEach((task) => {
      if (task.id === id) task.done = !task.done;
    });

    this.todoList.renderList(this.tasks);
  }
  deleteTask(id) {
    this.tasks.forEach((task, index) => {
      if (task.id === id) this.tasks.splice(index, 1);
    });

    this.todoList.renderList(this.tasks);
  }
}

window.customElements.define("todo-application", Todo);
