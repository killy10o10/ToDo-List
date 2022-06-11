import { tasks } from "./globalVariables";

const deleteItem = (currentListItem) => {
  const pTag = currentListItem.querySelector('p');
  let initial = pTag.textContent;

  tasks.forEach(element => {
    if(element.description === initial) {
      tasks.splice(tasks.indexOf(element), 1);
    }
  });
  tasks.forEach((element, ind) => {
    element.index = ind + 1;
  });
  localStorage.setItem('tasks',  JSON.stringify(tasks));
  currentListItem.remove();
}

export default deleteItem;
