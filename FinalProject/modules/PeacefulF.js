var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class PeacefulF extends LiveForm {
    constructor(x, y) {
        super(x, y);
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

    move() {
        var emptyCells1 = this.chooseCell(0);
        var emptyCells2 = this.chooseCell(1);
        var emptyCells = emptyCells1.concat(emptyCells2)
        var newCell = random(emptyCells);

        if (newCell) {
            var x = newCell[0];
            var y = newCell[1];
            matrix[y][x] = 7;
            matrix[this.y][this.x] = 0;
            this.y = y;
            this.x = x;
        }
    }

}