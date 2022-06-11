import './styles/main.scss';
import addToDoList from './modules/addToDo.js';
import MyObject from './modules/myObject';
import { tasks } from './modules/globalVariables';



const textinput = document.querySelector('input');
const enterIcon = document.querySelector('.input');
textinput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && textinput.value) {
    e.preventDefault();
    const newToDo = new MyObject();
    newToDo.description = textinput.value;
    newToDo.index = tasks.length + 1;
    addToDoList(newToDo);
    tasks.push(newToDo);
    localStorage.setItem('tasks',  JSON.stringify(tasks));
    textinput.value = null;
  }
});

enterIcon.addEventListener('click', () => {
  if (textinput.value) {
    const newToDo = new MyObject();
    newToDo.description = textinput;
    newToDo.index = tasks.length + 1;
    addToDoList(newToDo);
    tasks.push(newToDo);
    localStorage.setItem('tasks',  JSON.stringify(tasks));
    textinput.value = null;
  }
});

tasks.forEach(element => {
  addToDoList(element);
});
