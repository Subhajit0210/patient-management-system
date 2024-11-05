const mongoose = require('mongoose');
const { username, password } = process.env;

// URL-encode the password if it has special characters
const encodedPassword = encodeURIComponent(password);
const connectionSrt = `mongodb+srv://${username}:${encodedPassword}@cluster0.70c2j.mongodb.net/patient?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(connectionSrt, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log("Successfully connected to MongoDB"))
.catch(error => console.error("MongoDB connection error:", error));
