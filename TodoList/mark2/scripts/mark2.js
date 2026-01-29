let todoList = JSON.parse(localStorage.getItem('todoList')) || 
[
  {
  task: 'make dinner', 
  dueDate: '2026-01-19'
  },

  {
  task: 'wash dishes', 
  dueDate: '2026-01-19'
  }
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { task, dueDate } = todoObject;

    const html = `
      <div>${task}</div>

      <div>${dueDate}</div>

      <button class="delete-todo-button js-delete-todo-button">
        Delete
      </button>
    `;

    todoListHTML += html;
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
  
  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
        saveToStorage();
      });
    });
};


document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
});


function addTodo() {
  const taskElement = document.querySelector('.js-name-input');
  const task = taskElement.value;

  const dueDateElement = document.querySelector('.js-due-date-input');
  const dueDate = dueDateElement.value;

  todoList.push(
    {
      task, 
      dueDate
    }
  );

  taskElement.value = '';
  dueDateElement.value = '';

  renderTodoList();

  saveToStorage();
};


function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
};