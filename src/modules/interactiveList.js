import { tasks, toDoList } from './globalVariables.js';

const completedTask = (listItem, e) => {
  const pTag = listItem.querySelector('p');
  pTag.classList.toggle('cancelList');
  let newToDo = {};
  tasks.forEach(element => {
    if(element.description === pTag.textContent) {
      newToDo = element;
    }
  });

  if (e.target.checked) {
    newToDo.completed = true;
    console.log(tasks);
  } else {
    newToDo.completed = false;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const checkCompletedTask = (checkbox, listItem) => {
  const pTag = listItem.querySelector('p');
  let newToDo = {};
  tasks.forEach(element => {
    if(element.description === pTag.textContent) {
      newToDo = element;
    }
  });
  if (newToDo.completed) {
    checkbox.checked = true;
    pTag.classList.add('cancelList');
  }
};

// const checkBox = toDoList.closest('.checkbox');
// const pTag = toDoList.closest('p');
// checkBox.addEventListener('change', (e) => {
//   if (e.currentTarget.checked) {
//     pTag.style.textDecoration = 'line-through';
//   }
// });

export { completedTask, checkCompletedTask };