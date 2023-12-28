import { readWordListFromFileSync } from '/src/scripts/fileManager.js';

export function validateWord(inputWord, todaysWord) {
  console.log(inputWord);
   if(isWordFormedByRandomLetters(inputWord, todaysWord) && isWordInList(inputWord)){
    return true;
  } else return false; 
}

async function isWordInList(word) {
  const filePath = "/src/assets/list-palavras.txt";
  const wordList = await readWordListFromFileSync(filePath);

  if (inputWord in wordList) {
    return true;
  } else return false;
}

function isWordFormedByRandomLetters(word, randomLetters){
  const lettersFromWord = toUniqueCharArray(word);
  const uniqueRandomLetters = toUniqueCharArray(randomLetters);

  lettersFromWord.forEach(letter => {
    if(!(letter in uniqueRandomLetters)){ return false; }
  });

  return true;
}

function toUniqueCharArray(word) {
  const letters = word.toString().split("");

  return letters.filter((letter, index, array) => {
    return array.indexOf(letter) === index;
  });
}