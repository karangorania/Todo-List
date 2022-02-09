const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-btn');
const todoClearAll = document.getElementById('todo-delete');

// Event Listener Handler

function todoButtonHandler() {
  //   event.preventDefault();
  if (todoInput.value === '') {
    alert('Please enter a task!');
  } else {
    const todoList = document.getElementById('todo-list');
    const newTodo = document.createElement('li');
    newTodo.textContent = todoInput.value;
    const newTodo1 = document.createElement('button');
    newTodo1.textContent = ' ❌ ';
    newTodo.appendChild(newTodo1);
    todoList.appendChild(newTodo);
    todoInput.value = '';
  }
}

const todoDelete = document.querySelector('ul');

function todoDeleteHandler(node) {
  const todoList = document.getElementById('todo-list');
  todoList.removeChild(node.target.parentNode);
}

//ClearAll task  function
function todoClearAllHandler(event) {
  event.preventDefault();
  const todoList = document.getElementById('todo-list');
  const clearAllTodo = document.createElement('button');
  clearAllTodo.innerHTML = 'Clear All';
  todoList.innerHTML = '';
}

// Event Listener
todoButton.addEventListener('click', todoButtonHandler);
todoDelete.addEventListener('click', todoDeleteHandler);
todoClearAll.addEventListener('click', todoClearAllHandler);
