import { TaskField } from "./inputField.js";
import { Filters } from "./filters.js";
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

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("#todo-wrapper").appendChild(new TaskField());
    this.todoList = new TodoList();
    this.shadowRoot.querySelector("#todo-wrapper").appendChild(this.todoList);
    this.shadowRoot.querySelector("#todo-wrapper").appendChild(new Filters());

    this.addTask = this.shadowRoot
      .querySelector("task-field")
      .shadowRoot.querySelector("#add-task");
    this.actions();
  }
  actions() {
    this.addTask.addEventListener("click", () => {});
  }
  populateTodoList() {}
}

window.customElements.define("todo-application", Todo);
