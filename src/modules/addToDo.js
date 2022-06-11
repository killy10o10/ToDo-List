import deleteItem from './addRemove.js';
import edit from './edit.js';
import { toDoList } from './globalVariables.js';

const addToDoList = (todoValue) => {
  toDoList.innerHTML += `
          <li class="list-item"> <input type="checkbox" class="checkbox"> <p class="todo-desc">${todoValue.description}</p>
          <i class="bi bi-three-dots-vertical"></i> <i class="bi bi-trash"></i></li>
  `;
  
  const editIcon = Array.from(document.querySelectorAll('.bi-three-dots-vertical'));
  const deleteIcon = Array.from(document.querySelectorAll('.bi-trash'));
  
  editIcon.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      const currentListitem = icon.closest('.list-item');
      edit(currentListitem);
    });
  });

  deleteIcon.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      const currentListitem = icon.closest('.list-item');
      deleteItem(currentListitem);
    });
  });
};

export default addToDoList;