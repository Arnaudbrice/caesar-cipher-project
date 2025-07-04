/* Description: Implement a basic Caesar Cipher encryption.
Requirements:
The program should take a phrase and a shift number as inputs from process.argv.
Encrypt the phrase by shifting each letter, based on its position in the english alphabet, by the specified number.
Case insensitive
A negative shift means shift to the left
A positive shift means shift to the right
Output the encrypted phrase to the console. */

// With a shift of 3, "HELLO" would become "KHOOR".
// efghijklmnopqrstuvwxyz
//H->K, E->H, L->O ,L->O,O->R --> KHOOR
const alphabet = "abcdefghijklmnopqrstuvwxyz";

const shift = process.argv[2];
console.log(shift);
const caesarCipher = (text, shift) => {
  const alphabetArray = alphabet.split("");
  console.log("alphabetArray", alphabetArray);

  //   turn the text to lowercase then into an array of letters
  const letters = text.toLowerCase().split("");
  console.log(letters);
  const ShiftedString = [];

  for (let letter of letters) {
    const indexOfLetter = alphabetArray.indexOf(letter);

    if (indexOfLetter !== -1) {
      console.log("indexOfLetter", indexOfLetter);
      //   alphabet consist of 26 letters so we need to take the modulo of the indexOfLetter + shift to be able to shift the letter in the alphabet even if the shift is bigger than 26
      //   (indexOfLetter + Number(shift)+alphabetArray.length) % alphabetArray.length handles positive and negative shift values
      letter =
        alphabetArray[
          (indexOfLetter + Number(shift) + alphabetArray.length) %
            alphabetArray.length
        ];

      console.log("letter", letter);
      ShiftedString.push(letter);
    } else if (letter === " ") {
      //handle empty space between words
      ShiftedString.push(letter);
    } else {
      //handle non alphabet letters and spaces
      console.log(
        `The letter ${letter} in your text is not in the alphabet,\n your text should only consists of letters from the alphabet ${alphabet} and spaces.`
      );
      break;
    }
  }
  return ShiftedString.join("");
};

console.log(caesarCipher("hello", shift));
console.log(caesarCipher("hello world", shift));
console.log(caesarCipher("h", shift));
