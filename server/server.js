require('dotenv').config();
require('./models/dbConfig');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const recipeRoutes = require('./routes/recipeRoutes');
const clientRoutes = require('./routes/clientRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../index.html')))

app.use('/api/recipes', recipeRoutes);
app.use('/', clientRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server stated on port ${process.env.PORT}`);
})