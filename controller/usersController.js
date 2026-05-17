const { nanoid } = require('nanoid');
let users = require('../models/userModel');

//get users - all users
const getAllUsers = (req, res) => {
  res.status(200).json({ users });
};

//post user - new user
const createUser = (req, res) => {
  const newUser = {
    id: nanoid(),
    username: req.body.username,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json({ users });
};

//put user - update user
const updateUser = (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.username = username;
  user.email = email;

  res.status(200).json({ users });
};

//delete - user
const deleteUser = (req, res) => {
  const userId = req.params.id;
  const initialLength = users.length;
  const findUser = users.filter((u) => u.id !== userId);

  if (findUser.length === initialLength) {
    return res.status(404).json({ message: 'User not found' });
  }
  return res.status(200).json({ findUser });
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
