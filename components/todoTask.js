const template = document.createElement("template");
template.innerHTML = `
<style>
.todo-item {
    margin-top: 20px;
    width: 100%
    
  }
  #check-status{
    margin-left: 20px;
    font-size: 0.8em;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background: green;
    color: white;

  }
  .todo-item label {
    margin-left: 10px;
    font-size: 1.2em;
  }
  .strike{
    text-decoration: line-through;
    color: red;
}
#delete {
  margin-left: 20px;
  font-size: 0.8em;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background: red;
  color: white;
}
  </style>
 
  
        <div class="todo-item">
         <label id = "todo-task">This is my todo</label>
         <Button
         id = "check-status"
          
           
         >Complete</Button>
         <button id="delete">
Delete  
</button>
        </div>
      

`;

export class TodoTask extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
window.customElements.define("todo-task", TodoTask);
