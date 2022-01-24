const template = document.createElement("template");
template.innerHTML = `
<style>
.todo-item {
    margin-top: 20px;
    width: 100%
    
  }
  .todo-item label {
    margin-left: 10px;
    font-size: 1.2em;
  }
  </style>
 
  
        <div class="todo-item">
          <input
            type="checkbox"
          /><label id = "todo-task">This is my todo</label>
        </div>
      

`;

export class TodoList extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
window.customElements.define("todo-list", TodoList);
