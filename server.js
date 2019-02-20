const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const flash = require("connect-flash");

const server = express();
require('dotenv').config();

server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));
server.use(cookieParser());
server.use(
    session({
        key: process.env.SECRET_KEY,
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: true,
    })
);
server.use(passport.initialize());
server.use(passport.session());
server.use(flash());

server.use(express.static('public'));

const PORT = process.env.PORT||3001;
server.listen(PORT, () => {
    console.log(`Connected to ${PORT}! StoneWall Curriculum backend standing by.`);
});

server.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const resourceRoutes = require('./routes/resource-routes');
server.use('/resource', resourceRoutes);

server.use('*',(req,res) => {
    res.status(400).json({
        message:'Not found!',
    });
})