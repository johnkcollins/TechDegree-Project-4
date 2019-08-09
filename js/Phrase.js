/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor (phrase){
    this.phrase = phrase.toLowerCase();
  }

  // Displays phrase on game board
  addPhraseToDisplay(){
    const position = document.getElementById('phrase-ul');
    const string = this.phrase;
    let letters = string.split('');
    let li = '';
    for(let i = 0; i < string.length; i++){
      if (letters[i] !== ' '){
        li += `<li class="hide letter ${letters[i]}">${letters[i]}</li>`;
      } else if (letters[i] === ' '){
        li += `<li class="space"> </li>`;
      }
    }
    position.innerHTML = li;
  }

  //Check to see if the letter selected by the player matches a letter in the phrase
  checkLetter(letter){
    // finds the location of the letter in the string and returns true if found or false if not found
    return (game.activePhrase.innerText.indexOf(letter)> -1)
  }

  //Reveal the letter(s) on the board that match the player's selection.
  showMatchedLetter(letter) {
    const keyboard = document.querySelectorAll('.key');
    const letters = document.querySelectorAll(".hide, .letter");
    for (let i = 0; i < keyboard.length; i++) {
      keyboard[i].addEventListener('click', (e) => {
        // finds the location of the letter in the string and returns the location
        for (let i = 0; i < this.phrase.innerText.length; i++) {
          if (this.phrase.innerText[i].indexOf(letter) > -1) {
            letters[i].className = "show";
          }
        }
      });
    }
  }
}