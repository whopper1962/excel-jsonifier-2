function convertNumberToCharacter (number) {
  let baseCharacter = ('A').charCodeAt(0);
  let character = '';

  do {
    number--;
    character = String.fromCharCode(baseCharacter + (number % 26)) + character;
    number = (number / 26) >> 0;
  } while(number > 0);

  return character;
}

function convertCharacterToNumber (character) {
  if (!character) return;
  let currentCharacter = '';
  let number = 1;

  do {
    currentCharacter = convertNumberToCharacter(number);
    number++;
  } while (character !== currentCharacter);

  return number - 1;
}

module.exports = {
  convertNumberToCharacter,
  convertCharacterToNumber
};