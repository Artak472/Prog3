function setup() {
    var socket = io();
    var side = 30;
    var matrix = [];
    
    var weatherElement = document.getElementById('weather');
    var grassCountElement = document.getElementById('grassCount');
    var grassLiveCountElement = document.getElementById('grassLiveCount');
    var grassEaterCountElement = document.getElementById('grassEaterCount');
    var grassEaterLiveCountElement = document.getElementById('grassEaterLiveCount');
    var predCountElement = document.getElementById('predCount');
    var predLiveCountElement = document.getElementById('predLiveCount');
    var peopleCountElement = document.getElementById('peopleCount');
    var peopleLiveCountElement = document.getElementById('peopleLiveCount');
    var snakeCountElement = document.getElementById('snakeCount');
    var snakeLiveCountElement = document.getElementById('snakeLiveCount');
    var peacCountElement = document.getElementById('peacCount');
    var peacLiveCountElement = document.getElementById('peacLiveCount');
    var peacFCountElement = document.getElementById('peacFCount');
    var peacFLiveCountElement = document.getElementById('peacFLiveCount');

    socket.on("data", drawCreatures);

    function drawCreatures(data) {

        matrix = data.matrix;
        weatherElement.innerText = data.weather;
        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;
        grassEaterCountElement.innerText = data.eatCounter;
        grassEaterLiveCountElement.innerText = data.eatLiveCounter;
        predCountElement.innerText = data.predCounter;
        predLiveCountElement.innerText = data.predLiveCounter;
        peopleCountElement.innerText = data.peopleCounter;
        peopleLiveCountElement.innerText = data.peopleLiveCounter;
        snakeCountElement.innerText = data.snakeCounter;
        snakeLiveCountElement.innerText = data.snakeLiveCounter;
        peacCountElement.innerText = data.peacCounter;
        peacLiveCountElement.innerText = data.peacLiveCounter;
        peacFCountElement.innerText = data.peacFCounter;
        peacFLiveCountElement.innerText = data.peacFLiveCounter;

        createCanvas(matrix[0].length * side, matrix.length * side)

        background('#acacac');

        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if(data.weather == "summer"){
                        fill("green");
                    }else if (data.weather == "autumn"){
                        fill("orange");
                    }else if (data.weather == "winter"){
                        fill("white");
                    }else if(data.weather == "spring"){
                        fill("#2fff02");
                    }
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("yellow");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill('red');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill('purple');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) {
                    fill('pink');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 6) {
                    fill('#5c2506');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 7) {
                    fill('#89380a');
                    rect(j * side, i * side, side, side);
                }                
            }
        }
    }
}