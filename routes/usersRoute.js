const router = require('express').Router();
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../controller/usersController');

//users - route
router.get('/users', getAllUsers);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
