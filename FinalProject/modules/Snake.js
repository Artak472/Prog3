var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Snake extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.life = 0;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    } 
    
    eat() {
        var emptyCells = this.chooseCell(2);
        var newCell = random(emptyCells);

        if (newCell) {

            this.life++;
            var x = newCell[0];
            var y = newCell[1];

            matrix[y][x] = 5;

            for (var i in eatArr) {
                if (eatArr[i].x == x && eatArr[i].y == y) {
                    eatArr.splice(i, 1)
                }
            }
            this.x = x;
            this.y = y;

            if (this.life >= 50) {
                this.die();
            }
        }
        else {
            this.move()
        }
    }
    move() {
        this.life++;
        var emptyCells1 = this.chooseCell(0);
        var emptyCells2 = this.chooseCell(1);
        var emptyCells = emptyCells1.concat(emptyCells2)
        var newCell = random(emptyCells);

        if (newCell) {
            var x = newCell[0];
            var y = newCell[1];
            matrix[y][x] = 5;
            this.y = y;
            this.x = x;
        }
        if (this.life >= 50) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (var i in snakeArr) {
            if (snakeArr[i].x == this.x && snakeArr[i].y == this.y) {
                snakeArr.splice(i, 1)
            }
        }
    }
}