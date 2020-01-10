function increment(selector) {
  let parentContainer = document.querySelector(selector);

  let textarea = document.createElement("textarea");
  textarea.className = "counter";
  textarea.value = 0;
  textarea.setAttribute("disabled", true);

  let incrementBtn = createBtn("incrementBtn", "Increment");
  let addBtn = createBtn("addBtn", "Add");

  function createBtn(id, text) {
    let btn = document.createElement("button");
    btn.className = "btn";
    btn.setAttribute("id", id);
    btn.textContent = text;

    return btn;
  }
  incrementBtn.addEventListener('click', incrementNum);
  addBtn.addEventListener('click', addNewListItem);

  function addNewListItem() {
    let li = document.createElement("li");
    li.textContent = textarea.value;
    ul.appendChild(li);
  }

  function incrementNum() {
    textarea.value++;
  }

  let ul = document.createElement("ul");
  ul.className = "results";

  parentContainer.appendChild(textarea);
  parentContainer.appendChild(incrementBtn);
  parentContainer.appendChild(addBtn);
  parentContainer.appendChild(ul);
}