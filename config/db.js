const mongoose = require('mongoose');
const mongoDB_url = process.env.MONGODB_URL;

mongoose.connect(mongoDB_url, {useNewUrlParser: true})