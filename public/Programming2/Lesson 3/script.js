var matrix = [
    [0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0]
];


var side = 120;


function setup(){
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    var gr = new Grass(1,2,1);
    var emptyCells = gr.chooseCell(0);
    console.log(emptyCells);
}


function draw(){
    for(var y = 0; y < matrix.length; y++){
        for (var x = 0; x < matrix.length; x++){
            if (matrix[y][x] == 1){
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if(matrix[y][x] == 0){
                fill('#acacac');
                rect(x * side, y * side, side, side);
            }
        }
    }
}