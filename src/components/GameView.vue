<template>
  <div class="gennedLetters">
    <h3>{{ letters }}</h3>
    <input type="text" name="inputWord" id="inputWord" placeholder="write">
    <button type="submit">Check</button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.pickLetters();
  },
  data(){
    return {
        letters: "",
        filePath: "/src/assets/filtered_words_100.txt"
    };
  },
  methods: {
    async readWordListFromFileSync(filePath) {
      try {
        const response = await fetch(filePath);
        const data = await response.text();
        const wordList = data.split('\r\n');
        return wordList;
      } catch (error) {
        console.error('Erro ao ler o arquivo:', error);
        return [];
      }
    },
    async pickLetters() {
      try {
        const wordList = await this.readWordListFromFileSync(this.filePath); // Aguarde a resolução da Promise
        console.log(wordList); // Agora wordList é a lista de palavras
        const randomNumber = Math.floor(Math.random() * (wordList.length - 1));
        const randomLetters = wordList[randomNumber];
        this.letters = randomLetters;
        console.log(this.letters);
      } catch (error) {
        console.error('Erro ao escolher letras:', error);
      }
    },
    validateWord() {
      const inputWord = document.getElementById("inputWord").value;
      
    }
  }
};
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
.gennedLetters {
  text-align: center;
}
</style>
