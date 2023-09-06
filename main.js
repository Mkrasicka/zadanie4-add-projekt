const form = document.querySelector('form');
const ul = document.querySelector('ul');
const span = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const toDoList = [];

const addTask = function(e) {
  e.preventDefault();

  const input = form.querySelector('input');
  const li = document.createElement("li");
  li.className = "task";
  // ul.appendChild(li);
  let titleTask = input.value;
  li.textContent = titleTask;
  if (titleTask === "") return;

  const button = document.createElement("button");
  li.appendChild(button);
  button.textContent = "Delete";

  renderList();

  input.value = "";

  button.addEventListener('click', destroy);
}

form.addEventListener('submit', addTask);

const destroy = function(e) {
  // e.currentTarget.parentNode.remove();
  const index = e.target.parentNode.dataset.key;
  toDoList.splice(index,1)
  span.textContent = listItems.length;
  renderList();
}

const renderList = () => {
  ul.textContent = "";
  toDoList.forEach((toDoElement, index) => {
    // toDoElement.id = index;
    toDoElement.dataset.key = index;
    ul.appendChild(toDoElement);
  })
}
