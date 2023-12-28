import { readWordListFromFileSync } from '/src/scripts/fileManager.js';

export async function pickLetters(filePath) {
    try {
      const wordList = await readWordListFromFileSync(filePath);
      const randomNumber = Math.floor(Math.random() * (wordList.length - 1));
      const randomLetters = wordList[randomNumber];
      return randomLetters;
    } catch (error) {
      console.error('Erro ao escolher letras:', error);
    }
  }