var fs = require("fs");

module.exports = ClozeCard;

function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.partial = this.text.replace(this.cloze, "...");

    this.createCard = function() {
        var data = {
            text: this.text,
            cloze: this.cloze,
            partial: this.partial
        };
    }
}

var firstPresCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
console.log(firstPresCloze.cloze);
console.log(firstPresCloze.partial);
console.log(firstPresCloze.text);

var brokenCloze = new ClozeCard("This doesn't work", "oops");
console.log(brokenCloze.cloze);
console.log(brokenCloze.partial);
console.log(brokenCloze.text);