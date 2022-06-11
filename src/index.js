import './styles/main.scss';

class MyObject {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}
const tasks = [];
const toDoList = document.querySelector('.todo-list');

const editTodo = () => {

};

const addToDoList = (todoValue) => {
  toDoList.innerHTML += `
          <li class="list-item"> <input type="checkbox" class="checkbox"> <p class="todo-desc">${todoValue}</p> <i
                          class="bi bi-three-dots-vertical"></i> <i class="bi bi-trash"></i></li>
                         `;
  const checkBox = document.querySelectorAll('.checkbox');
  const newObject = new MyObject(todoValue, false, checkBox.length);
  tasks.push(newObject);
  localStorage.setItem('toDoList', JSON.stringify(tasks));

  const editIcon = document.querySelectorAll('.bi-three-dots-vertical');
  editIcon.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      const currentListitem = e.target.closest('.list-item');
      currentListitem.classList.toggle('checkedList');
      const currentPTag = document.querySelectorAll('.todo-desc');

      currentPTag.forEach((element) => {
        element.contentEditable = true;
        element.addEventListener('keypress', (eve) => {
          if (eve.key === 'Enter') {
            element.contentEditable = false;
            const elementValue = element.value;
            const localData = JSON.parse(localStorage.getItem('toDoList'));
            localData.description = elementValue;
            localStorage.setItem('toDoList', JSON.stringify(localData));
          }
        });
      });
      editTodo();
    });
  });
};

toDoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('checkbox')) {
    const currenTrashIcon = document.querySelectorAll('.bi-trash');
    const currentDotIcon = document.querySelectorAll('.bi-three-dots-vertical');
    currentDotIcon.forEach((icon) => {
      icon.classList.toggle('hide');
    });
    currenTrashIcon.forEach((trash) => {
      trash.classList.toggle('active');
    });
    const currentCheckBox = e.target.closest('.list-item');
    currentCheckBox.classList.toggle('cancelList');
  }
});

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