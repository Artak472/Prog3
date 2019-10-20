var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Predator extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.life = 14;
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
    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            huntHashiv++
            var x = newCell[0];
            var y = newCell[1];
            matrix[y][x] = 3;
            var pred = new Predator(x, y);
            predArr.push(pred);
            this.life = 7;
        }
    }
    eat() {
        var emptyCells = this.chooseCell(2);
        var newCell = random(emptyCells);

        if (newCell) {

            this.life++;
            var x = newCell[0];
            var y = newCell[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            for (var i in eatArr) {
                if (eatArr[i].x == x && eatArr[i].y == y) {
                    eatArr.splice(i, 1)
                }
            }
            this.x = x;
            this.y = y;

            if (this.life >= 17) {
                this.mul();
            }
        }
        else {
            this.move()
        }
    }
    move() {
        this.life--;
        var emptyCells1 = this.chooseCell(0);
        var emptyCells2 = this.chooseCell(1);
        var emptyCells = emptyCells1.concat(emptyCells2)
        var newCell = random(emptyCells);

        if (newCell) {
            var x = newCell[0];
            var y = newCell[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            this.y = y;
            this.x = x;
        }
        if (this.life < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (var i in predArr) {
            if (predArr[i].x == this.x && predArr[i].y == this.y) {
                predArr.splice(i, 1)
            }
        }
    }
}