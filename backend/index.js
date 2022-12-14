const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();
const port = process.env.PORT;
const app = express();
const passport = require("passport");
const session = require('express-session');
const passportSetup = require('./lib/passport');

var corsOptions = {
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json({ limit: "50mb" }));
app.use(
    express.urlencoded({
        limit: "50mb",
        extended: true,
        parameterLimit: 1000000,
    })
);

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (re1, res) => {
    res.send('Running on port ' + port)
})

mongoose.connect(process.env.DB);

mongoose.connection.on("connected", () => {
    console.log("Connected to production database:", process.env.DB);
}).on("error", (err) => {
    console.log("Error in database connection" + err);
});

fs.readdirSync("./model").forEach(function (file) {
    require("./model/" + file);
});

fs.readdirSync("./controller").forEach(function (file) {
    if (file.indexOf(".js") !== -1) {
        var route = require("./controller/" + file);
        route.controllerFunction(app);
    }
});

app.listen(port, () => {
    console.log("Server started at port: " + port);
});  