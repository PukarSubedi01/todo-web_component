const template = document.createElement("template");
template.innerHTML = `
<style>
.input-container {
  
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  .input-container input {
    width: 60%;
    border: none;
    font-size: 1em;
    border: 1px solid blue;
    border-radius: 10px;
    background: #e4e7ee;
  }
  .input-container button {
    margin-left: 20px;
    font-size: 0.8em;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background: #4c6ab4;
    color: white;
  }
  </style>
  <div class="input-container">
          <input id = "enter-task"
            placeholder="Task"
          />
          <button id = "add-task">Add Todo</button>
        </div>

`;

export class TaskField extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
window.customElements.define("task-field", TaskField);
