import deleteItem from './addRemove.js';
import edit from './edit.js';
import { toDoList } from './globalVariables.js';
import { checkCompletedTask, completedTask } from './interactiveList.js';

const addToDoList = (todoValue) => {
  toDoList.innerHTML += `
          <li class="list-item"> <input type="checkbox" class="checkbox"> <p class="todo-desc">${todoValue.description}</p>
          <i class="bi bi-three-dots-vertical"></i> <i class="bi bi-trash"></i></li>
  `;

  const editIcon = Array.from(document.querySelectorAll('.bi-three-dots-vertical'));
  const deleteIcon = Array.from(document.querySelectorAll('.bi-trash'));
  const checkBox = Array.from(document.querySelectorAll('.checkbox'));

  editIcon.forEach((icon) => {
    icon.addEventListener('click', () => {
      const currentListitem = icon.closest('.list-item');
      edit(currentListitem);
    });
  });

  deleteIcon.forEach((icon) => {
    icon.addEventListener('click', () => {
      const currentListitem = icon.closest('.list-item');
      deleteItem(currentListitem);
    });
  });

  checkBox.forEach((check) => {
    const currentListItem = check.closest('.list-item');
    checkCompletedTask(check, currentListItem);
    check.addEventListener('change', (event) => {
      completedTask(currentListItem, event);
    });
  });
};

// toDoList.addEventListener('click', (e) => {
//   if (e.target.classList.contains('checkbox')) {
//     const currenTrashIcon = document.querySelectorAll('.bi-trash');
//     const currentDotIcon = document.querySelectorAll('.bi-three-dots-vertical');
//     currentDotIcon.forEach((icon) => {
//       icon.classList.toggle('hide');
//     });
//     currenTrashIcon.forEach((trash) => {
//       trash.classList.toggle('active');
//     });
//     const currentCheckBox = e.target.closest('.list-item');
//     currentCheckBox.classList.toggle('cancelList');
//   }
// });

export default addToDoList;