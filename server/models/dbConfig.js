require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(
    `${process.env.DB_HOST}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_ADRESS}/${process.env.DB_NAME}`,
    { useNewUrlParser: true },
    (err) => {
        if(!err) console.log(`Server connected to MongoDB !`);
        else console.log(`Server can't connected to MongoDB : ${err}`);
    }
)