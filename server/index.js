require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportSetup = require("./passport");
const authRoute = require("./Routes/auth");
const app = express();
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        credentials: true,
    })
)
app.use(cookieSession({
    name: "session",
    keys:["mayank"],
    maxAge: 24*60*60*100,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json());
app.use("/auth", authRoute);
//mongoose.set('strictQuery', true);
//mongoose.connect(process.env.DB_CONN).then(console.log('Database connected'));
//app.use(cookieParser);
app.listen(2000, () => {
    console.log('Server started on port 2000');
});
