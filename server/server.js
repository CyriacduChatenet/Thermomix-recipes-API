require('dotenv').config();
require('./models/dbConfig');
const express = require('express');
const bodyParser = require('body-parser');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api/recipes', recipeRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server stated on port ${process.env.PORT}`);
})