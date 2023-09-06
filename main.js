const form = document.querySelector('form');
const ul = document.querySelector('ul');
const span = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');


const addTask = function(e) {
  e.preventDefault();



  const input = form.querySelector('input');
  const li = document.createElement("li");
  li.className = "task";
  ul.appendChild(li);
  li.textContent = input.value;
  if (input.value === "") return;

  const button = document.createElement("button");
  li.appendChild(button);
  button.textContent = "Delete";

  button.addEventListener('click', destroy);
  input.value = "";

  span.textContent = listItems.length;
}

form.addEventListener('submit', addTask);

const destroy = function(e) {
  e.currentTarget.parentNode.remove();
}
