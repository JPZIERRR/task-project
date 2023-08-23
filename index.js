const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3003;

const conn = require('./db/conn');

// Models
const Task = require('./models/Task');

// routes
const taskRoutes = require('./routes/tasksRoutes');
const homeRoute = require('./routes/homeRoute');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

app.use(express.static('public'));

app.use('/tasks', taskRoutes);
app.use('/', homeRoute);

conn
  .sync()
  .then(() => {
    app.listen(port);
  })
  .catch(err => console.log(err));
