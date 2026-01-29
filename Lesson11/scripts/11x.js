let todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  task: 'make dinner',
  dueDate: '2026-01-13'
}, 
{
  task: 'wash dishes', 
  dueDate: '2026-01-13'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { task, dueDate } = todoObject;

    const html = `
      <div>${task}</div>

      <div>${dueDate}</div>

      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();

        saveToStorage();
      " class="delete-todo-button">Delete</button>
    `;

    todoListHTML += html;
  };

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

};

function addTodo() {
  const taskElement = document.querySelector('.js-name-input');
  const task = taskElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push(
    {
      task, 
      dueDate
    }
  );

  taskElement.value = '';

  renderTodoList();

  saveToStorage();
};

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
};