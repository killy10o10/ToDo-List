import './styles/main.scss';
import addToDoList from './modules/addToDo.js';
import MyObject from './modules/myObject.js';
import { tasks, toDoList } from './modules/globalVariables.js';

const textinput = document.querySelector('input');
const enterIcon = document.querySelector('.input');
const clearbtn = document.querySelector('#clear-completed');
textinput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && textinput.value) {
    e.preventDefault();
    const newToDo = new MyObject();
    newToDo.description = textinput.value;
    newToDo.index = tasks.length + 1;
    addToDoList(newToDo);
    tasks.push(newToDo);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    textinput.value = null;
  }
});

enterIcon.addEventListener('click', () => {
  if (textinput.value) {
    const newToDo = new MyObject();
    newToDo.description = textinput.value;
    newToDo.index = tasks.length + 1;
    addToDoList(newToDo);
    tasks.push(newToDo);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    textinput.value = null;
  }
});

tasks.forEach((element) => {
  addToDoList(element);
});

clearbtn.addEventListener('click', () => {
  toDoList.innerHTML = '';
  const newtasks = tasks.filter((task) => task.completed === true);
  newtasks.forEach((element) => {
    tasks.splice(tasks.indexOf(element), 1);
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  tasks.forEach((element) => {
    addToDoList(element);
  });
});