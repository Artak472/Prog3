var LiveForm = require("./LiveForm");
var random = require("./random.js");
module.exports = class People extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.life = 13;
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
            [this.x + 1, this.y + 1],
            [this.x    , this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y    ],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x    , this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y    ],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y - 2]
        ];
    }
    
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    } 
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {
            peopleHashiv++
            var x = newCell[0];
            var y = newCell[1];
            matrix[y][x] = 4;
            var people = new People(x, y);
            peopleArr.push(people);
            this.life = 8;
        }
    }
    eat() {
        var emptyCells = this.chooseCell(3);
        var newCell = random(emptyCells);

        if (newCell) {

            this.life++;
            var x = newCell[0];
            var y = newCell[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            for (var i in predArr) {
                if (predArr[i].x == x && predArr[i].y == y) {
                    predArr.splice(i, 1)
                }
            }
            this.x = x;
            this.y = y;

            if (this.life >= 16) {
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
            matrix[y][x] = 4;
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

        for (var i in peopleArr) {
            if (peopleArr[i].x == this.x && peopleArr[i].y == this.y) {
                peopleArr.splice(i, 1)
            }
        }
    }
}