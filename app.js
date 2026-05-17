const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/usersRoute');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//css link
app.use(express.static('public'));

//home - route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

//users - router
app.use(userRouter);

//error route - not found
app.use(function (req, res, next) {
  res.status(404).send('404 - Not Found!');
});

//error - server - error
app.use(function (err, req, res, next) {
  res.status(500).send('500 - Something was error!');
});

module.exports = app;
