var Grass = require("./modules/Grass.js");
var GrassEater = require("./modules/GrassEater.js");
var Predator = require("./modules/Predator.js");
var People = require("./modules/People.js");
var Snake = require("./modules/Snake.js");
var Peaceful = require("./modules/Peaceful.js");
var PeacefulF = require("./modules/PeacefulF.js");
var random = require('./modules/random');

grassArr = [];
eatArr = [];
predArr = [];
peopleArr = [];
snakeArr = [];
peacArr = [];
peacFArr = [];
matrix = [];

grassHashiv = 0;
eatHashiv = 0;
predHashiv = 0;
peopleHashiv = 0;
snakeHashiv = 0;
peacHashiv = 0;
peacFHashiv = 0;

function matrixGenerator(matrixSize, grass, eat, pred, people, snake, peac, peacF) {
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
    for (var i = 0; i < snake; i++) {
        var customX = Math.floor(random(matrixSize));
        var customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
    for (var i = 0; i < peac; i++) {
        var customX = Math.floor(random(matrixSize));
        var customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 6;
    }
    for (var i = 0; i < peacF; i++) {
        var customX = Math.floor(random(matrixSize));
        var customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 7;
    }
}
matrixGenerator(40, 25, 25, 15, 2, 2, 15, 15);

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
            else if (matrix[y][x] == 5) {
                var snake = new Snake(x, y);
                snakeArr.push(snake);
                snakeHashiv++
            }
            else if (matrix[y][x] == 6) {
                var peac = new Peaceful(x, y);
                peacArr.push(peac);
                peacHashiv++
            }
            else if (matrix[y][x] == 7) {
                var peacF = new PeacefulF(x, y);
                peacFArr.push(peacF);
                peacFHashiv++
            }
        }
    }
}

creatingObjects();

var exanak = 0;
var weather = "winter";
module.exports = weather;

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
    if (snakeArr[0] !== undefined) {
        for (var i in snakeArr) {
            snakeArr[i].eat();
        }
    }
    if (peacArr[0] !== undefined) {
        for (var i in peacArr) {
            peacArr[i].mull();
        }
    }
    if (peacFArr[0] !== undefined) {
        for (var i in peacFArr) {
            peacFArr[i].move();
        }
    }

    var sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        grassLiveCounter: grassArr.length,
        eatCounter: eatHashiv,
        eatLiveCounter: eatArr.length,
        predCounter: predHashiv,
        predLiveCounter: predArr.length,
        peopleCounter: peopleHashiv,
        peopleLiveCounter: peopleArr.length,
        snakeCounter: snakeHashiv,
        snakeLiveCounter: snakeArr.length,
        peacCounter: peacHashiv,
        peacLiveCounter: peacArr.length,
        peacFCounter: peacFHashiv,
        peacFLiveCounter: peacFArr.length,
        weather: weather
    }

    io.sockets.emit("data", sendData);
}



setInterval(game, 1000)