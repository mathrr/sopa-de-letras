import { readWordListFromFileSync } from '/src/scripts/fileManager.js';

export async function validateWord(inputWord, todaysWord) {
  try {
    const isInList = await isWordInList(inputWord);

    if (isWordFormedByRandomLetters(inputWord, todaysWord) && isInList) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Erro ao validar palavra:", error);
    throw error; // Repropague o erro para que o código chamador possa lidar com ele
  }
}

async function isWordInList(word) {
  const filePath = "/src/assets/list-palavras.txt";
  const wordList = await readWordListFromFileSync(filePath);
  
  if (wordList.includes(word)) {
    return true;
  } else {
    return false;
  }
}
  

function isWordFormedByRandomLetters(word, randomLetters) {
  const lettersFromWord = toUniqueCharArray(word);
  const uniqueRandomLetters = toUniqueCharArray(randomLetters);

  for (const letter of lettersFromWord) {
    if (!uniqueRandomLetters.includes(letter)) {
      return false;
    }
  }

  return true;
}


function toUniqueCharArray(word) {
  const letters = word.toString().split("");

  return letters.filter((letter, index, array) => {
    return array.indexOf(letter) === index;
  });
}