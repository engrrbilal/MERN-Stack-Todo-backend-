const express = require('express');
const mongoose = require('mongoose');
const app = express();
const todos = require('./routes/todos');

mongoose.connect(`mongodb://localhost/todos`, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to mongodb'))
app.use(express.json());
app.use('/api/todos', todos);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));