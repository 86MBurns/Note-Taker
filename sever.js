const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.use(express.json());

app.use('/', htmlRoutes);

app.use('/api', apiRoutes);

app.listen(PORT, ()=> {
    console.log(`serever on port ${PORT}`)
});