const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER_NAME}/${process.env.MONGO_DEFAULT_DATABASE}`

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to DB');
        app.listen(process.env.PORT || 3000);
    }).catch(err => {
        console.log(err);
    });
