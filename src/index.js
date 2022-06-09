import './styles/main.scss';

const tasks = [
  {
    description: 'walk the dog',
    completed: true,
    index: 1,

  },
  {
    description: 'Read books',
    completed: true,
    index: 2,

  },
  {
    description: 'Go to the gym',
    completed: false,
    index: 3,

  },
  {
    description: 'Eat fufu',
    completed: false,
    index: 4,

  },

];

const toDoList = document.querySelector('.todo-list');

function addToDoList() {
  tasks.forEach((task) => {
    toDoList.innerHTML += `
        <li> <input type="checkbox" name="completed" id="completed"> <p>${task.description}</p> <i
                        class="bi bi-three-dots-vertical"></i></li>`;
  });
}

addToDoList();