var Grass = require("./modules/Grass.js");
var GrassEater = require("./modules/GrassEater.js");
var Predator = require("./modules/Predator.js");
var People = require("./modules/People.js");
var random = require('./modules/random');

grassArr = [];
eatArr = [];
predArr = [];
peopleArr = [];
matrix = [];

grassHashiv = 0;
eatHashiv = 0;
predHashiv = 0;
peopleHashiv = 0;

function matrixGenerator(matrixSize, grass, eat, pred, people) {
    for (var i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (var o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (var i = 0; i < grass; i++) {
        var customX = Math.floor(random(matrixSize));
        var customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 1;
    }
    for (var i = 0; i < eat; i++) {
        var customX = Math.floor(random(matrixSize));
        var customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (var i = 0; i < pred; i++) {
        var customX = Math.floor(random(matrixSize));
        var customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (var i = 0; i < people; i++) {
        var customX = Math.floor(random(matrixSize));
        var customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
}
matrixGenerator(20, 25, 22, 20, 10);

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y);
                eatArr.push(grassEater);
                eatHashiv++;
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++;
            }
            else if (matrix[y][x] == 3) {
                var pred = new Predator(x, y);
                predArr.push(pred);
                predHashiv++
            }
            else if (matrix[y][x] == 4) {
                var people = new People(x, y);
                peopleArr.push(people);
                peopleHashiv++
            }
        }
    }
}

creatingObjects();

var exanak = 0;
var weather = "winter"

function game() {

    exanak++;
    if (exanak <= 10){
        weather = "summer"
    }else if (exanak <= 20){
        weather = "autumn"
    }else if (exanak <= 30){
        weather = "winter"
    }else if (exanak <= 40){
        weather = "spring"
    }else if (exanak > 40){
        exanak = 0
    }


    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (eatArr[0] !== undefined) {
        for (var i in eatArr) {
            eatArr[i].eat();
        }
    }
    if (predArr[0] !== undefined) {
        for (var i in predArr) {
            predArr[i].eat();
        }
    }
    if (peopleArr[0] !== undefined) {
        for (var i in peopleArr) {
            peopleArr[i].eat();
        }
    }

    //! Object to send
    var sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        grassLiveCounter: grassArr.length,
        eatCounter: eatHashiv,
        predCounter: predHashiv,
        peopleCounter: peopleHashiv,
        weather: weather
    }

    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);
}



setInterval(game, 1000)