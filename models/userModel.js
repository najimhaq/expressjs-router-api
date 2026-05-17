const { nanoid } = require('nanoid');

const users = [
  {
    id: nanoid(),
    username: 'Najimul',
    email: 'najimulhaq@email.com',
  },
  {
    id: nanoid(),
    username: 'Haque',
    email: 'haque@email.com',
  },
  {
    id: nanoid(),
    username: 'Raiyan',
    email: 'raiyan@email.com',
  },
];

module.exports = users;
