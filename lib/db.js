const {username,  password} = process.env;
const connectionSrt = "mongodb+srv://"+username+":"+password+"@cluster0.70c2j.mongodb.net/patient?retryWrites=true&w=majority&appName=Cluster0";
const mongoose = require('mongoose');
mongoose.connect(connectionSrt, {useNewUrlParser: true, useUnifiedTopology: true});
