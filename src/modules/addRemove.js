// class myObject {
//   constructor(description, completed, index) {
//     this.description = description;
//     this.completed = completed;
//     this.index = index;
//   }
// }
// const tasks = [];

const toDoList = document.querySelector('.todo-list');

const addToDoList = (todoValue) => {
  toDoList.innerHTML += `
          <li> <input type="checkbox" name="completed" id="completed"> <p>${todoValue}</p> <i
                          class="bi bi-three-dots-vertical"></i></li>`;
};

const textinput = document.querySelector('input');
const enterIcon = document.querySelector('.input');
textinput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && textinput.value) {
    e.preventDefault();
    addToDoList(textinput.value);
    textinput.value = null;
  }
});

enterIcon.addEventListener('click', () => {
  if (textinput.value) {
    addToDoList(textinput.value);
    textinput.value = null;
  }
});