import { TodoTask } from "./todoTask.js";

const template = document.createElement("template");
template.innerHTML = `
<style>
.task-list {
    width: 50%;
    margin: 0 auto;
    background: aliceblue;
    border-radius: 5px;
}

h3 {
    padding: 5px;
    color: rgb(65, 63, 63);
    margin: 0;
}
</style>

<div class="task-list">
    
</div>
`;
export class TodoList extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  renderList(tasks) {
    this.shadowRoot.innerHTML = "";
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    tasks.forEach((element) => {
      const task = this.shadowRoot
        .querySelector(".task-list")
        .appendChild(new TodoTask());
      task.shadowRoot.querySelector("#todo-task").textContent = element.task;

      this.checkTaskStatus(task, element.done);

      const checkBox = task.shadowRoot.querySelector(
        ".todo-item #check-status"
      );
      const deleteBtn = task.shadowRoot.querySelector(".todo-item #delete");

      deleteBtn.addEventListener("click", () => {
        this.dispatchEvent(
          new CustomEvent("delete", { detail: { id: element.id } })
        );
      });

      checkBox.addEventListener("click", () => {
        this.dispatchEvent(
          new CustomEvent("done", { detail: { id: element.id } })
        );
      });
    });
  }

  checkTaskStatus(task, done) {
    const toggleTask = task.shadowRoot.querySelector(".todo-item #todo-task");

    if (done) {
      toggleTask.classList.add("strike");
    } else {
      toggleTask.classList.remove("strike");
    }
  }
}

window.customElements.define("todo-list", TodoList);
