import tasks from '../__mocks__/tasksArray.js';

const clearCompleted = () => {
  const newtasks = tasks.filter((task) => task.completed === true);
  newtasks.forEach((element) => {
    tasks.splice(tasks.indexOf(element), 1);
  });
};

describe('Check if clear completed works', () => {
  clearCompleted();
  test('does it work?', () => {
    expect(tasks.length).toBe(2);
  });
});