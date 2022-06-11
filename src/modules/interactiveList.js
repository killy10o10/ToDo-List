import { toDoList } from './globalVariables.js';

const completedTask = (e, newToDo, pTag) => {
  if (e.target.checked) {
    newToDo.completed = true;
    pTag.style.textDecoration = 'line-through';
  } else {
    newToDo.completed = false;
    pTag.style.textDecoration = 'none';
  }
};

const checkCompletedTask = (checkbox, newToDo, pTag) => {
  if (newToDo.completed) {
    checkbox.checked = true;
    pTag.style.textDecoration = 'line-through';
  }
};

const checkBox = toDoList.closest('.checkbox');
const pTag = toDoList.closest('p');
checkBox.addEventListener('change', (e) => {
  if (e.currentTarget.checked) {
    pTag.style.textDecoration = 'line-through';
  }
});

export { completedTask, checkCompletedTask };