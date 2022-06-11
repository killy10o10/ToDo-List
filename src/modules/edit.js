import { tasks } from './globalVariables.js';

const edit = (currentListItem) => {
  currentListItem.querySelector('.bi-three-dots-vertical').style.display = 'none';
  currentListItem.querySelector('.bi-trash').style.display = 'block';
  const pTag = currentListItem.querySelector('p');
  const initial = pTag.textContent;
  pTag.contentEditable = true;
  pTag.focus();
  pTag.addEventListener('keypress', (eve) => {
    currentListItem.querySelector('.bi-three-dots-vertical').style.display = 'block';
    currentListItem.querySelector('.bi-trash').style.display = 'none';
    if (eve.key === 'Enter') {
      pTag.contentEditable = false;
      const elementValue = pTag.textContent;
      tasks.forEach((element) => {
        if (element.description === initial) {
          element.description = elementValue;
          localStorage.setItem('tasks', JSON.stringify(tasks));
        }
      });
    }
  });
};

export default edit;