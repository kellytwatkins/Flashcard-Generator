var fs = require("fs");

module.exports = BasicCard;

function BasicCard(front, back) {
    this.front = front;
    this.back = back;

    this.createCard = function() {
        var data = {
            front: this.front,
            back: this.back,
            type: "basic"
        };
    }
}

var firstPres = new BasicCard("Who was the first president of the United States?", "George Washington")

console.log(firstPres.front);
console.log(firstPres.back);