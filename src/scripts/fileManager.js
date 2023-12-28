export async function readWordListFromFileSync(filePath) {
    try {
      const response = await fetch(filePath);
      const data = await response.text();
      const wordList = data.split('\r\n');
      return wordList;
    } catch (error) {
      console.error('Erro ao ler o arquivo:', error);
      return [];
    }
  }
  