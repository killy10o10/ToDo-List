import tasks from '../__mocks__/tasksArray.js';

document.body.innerHTML += `
<ul class="flex-column list-container border">
  <li class="abc">
    <p>Buy Milk</p>
  </li>
</ul>
`;

const currentListItem = document.querySelector('.abc');
const pTag = currentListItem.querySelector('p');
const initial = 'Buy Milk';
const elementValue = 'tomato';
let ind = 0;

const edit = (desc, newDesc) => {
  pTag.textContent = newDesc;
  tasks.forEach((element, index) => {
    if (element.description === desc) {
      element.description = newDesc;
      ind = index;
    }
  });
};

describe('Edit task', () => {
  edit(initial, elementValue);

  test('Check if task array is updated', () => {
    expect(tasks[ind].description).toBe('tomato');
  });

  test('Check if li is update', () => {
    expect(pTag.textContent).toBe('tomato');
  });
});
