import tasks from '../__mocks__/tasksArray.js';

document.querySelector('body').innerHTML = `
<ul class="flex-column list-container border">
    <li class="abc">
    <input type="checkbox" checked>
    <p>Buy Milk</p>
  </li>
</ul>
`;

const currentListItem = document.querySelector('.abc');
let ind = 0;

const completedTask = (currentListItem) => {
  const pTag = currentListItem.querySelector('p');
  const checkbox = currentListItem.querySelector('input');
  let newToDo = {};
  tasks.forEach((element, index) => {
    if (element.description === pTag.textContent) {
      newToDo = element;
      ind = index;
    }
  });

  if (checkbox.checked) {
    newToDo.completed = true;
  } else {
    newToDo.completed = false;
  }
};

describe('Checkbox check', () => {
  completedTask(currentListItem);
  test('check if checkbox is checked', () => {
    expect(tasks[ind].completed).toBe(true);
  });
});
