function setup() {
    createCanvas(500, 500);
    background('#acacac');
    noStroke();
}

function randomMatrix(n,m){
    var matrix = [];
    for(var y=0; y<m; y++){
        matrix[y]=[];
        for(var x=0; x<n; x++){
            matrix[y][x]=Math.round(Math.random());
        } 
    }
    return matrix;
}


function ankyunagicMatrix(n,m){
    var matrix = [];
    for(var y=0; y<m; y++){
        matrix[y]=[];
        for(var x=0; x<n; x++){
            if(x==y){
                matrix[y][x] = 1;
            }
            else{
                matrix[y][x] = 0;
            }
        } 
    }
    return matrix;
}

function hakAnkyunagicMatrix(n,m){
    var matrix = [];
    for(var y=0; y<m; y++){
        matrix[y]=[];
        for(var x=0; x<n; x++){
            if(x+y+1==n){
                matrix[y][x] = 1;
            }
            else{
                matrix[y][x] = 0;
            }
        } 
    }
    return matrix;
}

function ankyunagicLiMatrix(n,m){
    var matrix = [];
    for(var y=0; y<m; y++){
        matrix[y]=[];
        for(var x=0; x<n; x++){
            if(x+y<n){
                matrix[y][x] = 1;
            }
            else{
                matrix[y][x] = 0;
            }
        } 
    }
    return matrix;
}

function shaxmatMatrix(n,m){
    var matrix = [];
    for(var y=0; y<m; y++){
        matrix[y]=[];
        for(var x=0; x<n; x++){
            if(){
                matrix[y][x] = 1;
            }
            else{
                matrix[y][x] = 0;
            }
        } 
    }
    return matrix;
}


var matrix = shaxmatMatrix(10,10);
console.log(matrix)
var side = 25;      








function draw() {
    for(var y = 0; y < matrix.length; y++){
        for(var x = 0; x < matrix[y].length; x++){
            if(matrix[y][x] == 1){
                    fill(255,0,0);
                    rect(x*side,y*side, side, side);
            }
        }
    }
}