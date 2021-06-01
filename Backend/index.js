const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const expenseRouter = require('./routes/expenseRouter');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER_NAME}/${process.env.MONGO_DEFAULT_DATABASE}`

// ======== CORS Policy =======
const allowedPort = process.env.ALLOWED_ORIGIN_PORT;
const whitelist = [`http://127.0.0.1:${allowedPort}`, `http://localhost:${allowedPort}`];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 // Allow if origin found in whitelist
      || !origin) { // or a REST tool (postman) is being used or same origin.
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS ' + origin));
    }
  },
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Apply CORS policy
app.all('*', cors(corsOptions), function (req, res, next) {
  next();
});

app.use(express.json());
app.use('/expense', expenseRouter);

mongoose.connect(MONGODB_URI)
    .then(() => {
        app.listen(port);
    }).catch(err => {
        console.log(err);
    });