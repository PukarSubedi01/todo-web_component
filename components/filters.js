const toDoFilter = {
  SHOW_ALL: "All",
  SHOW_ACTIVE: "Active",
  SHOW_COMPLETED: "Completed",
};

const template = document.createElement("template");
template.innerHTML = `
<style>
#filters {
    display: flex;
    flex-direction: row;
    margin-top: 30px
  }
  #clear-todos {
    margin-left: 20px;
    font-size: 0.8em;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background: red;
    color: white;
  }
</style>

<div id="filters">
<div id="radio-btn-group" style="margin-top:5px">
  ${Object.values(toDoFilter).map(
    (filter) =>
      `
        <input
          class="radio-btns"
          name="filters"
          type="radio"
          value=${filter}
        /><label>${filter}</label>
      `
  )}
</div>
<button id="clear-todos">
  Clear Completed
</button>
</div>
`;

export class Filters extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
window.customElements.define("task-filter", Filters);
