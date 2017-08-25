module.exports = function ClozeCard(text, cloze) {
    if (this instanceof ClozeCard) {
      this.fullText = text;
      this.partial = text.replace(cloze, '...'); // replace all cloze occurrence
      //Validation. However, this condition will be never met, because we validate input before creating cloze card.
      if(this.partial === text) throw new Error('This doesn\'t work, oops');
      this.cloze = cloze;
  
    } else return new ClozeCard(text, cloze);
  };

  var brokenCloze = new ClozeCard("This doesn't work", "oops");
  console.log(brokenCloze.cloze);
  console.log(brokenCloze.partial);
  console.log(brokenCloze.fullText);