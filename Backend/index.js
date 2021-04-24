const express = require('express');
const mongoose = require('mongoose');
const expenseRouter = require('./routes/expenseRouter');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER_NAME}/${process.env.MONGO_DEFAULT_DATABASE}`

app.use(express.json());
app.use('/expense', expenseRouter);

mongoose.connect(MONGODB_URI)
    .then(() => {
        app.listen(port);
    }).catch(err => {
        console.log(err);
    });
