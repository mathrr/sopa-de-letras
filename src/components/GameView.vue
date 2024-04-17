<template>
  <body> 
    <div class="gennedLetters">
      <h3>{{ letters }}</h3>
    </div>
    <div class="userInput">
      <input type="text" v-model="inputWord" id="inputWord" placeholder="write" @keyup.enter="validateWord">
      <button type="button" @click="validateWord">Check</button>
    </div>
    <div class="guessedWordsBox">
      <ul id="guessedWords">
        <li v-for="word in shownWords" :key="word">
          {{ word }}
        </li>
      </ul>
    </div>
  </body>
</template>

<script>
import { validateWord } from '/src/scripts/wordsValidation.js';
import { pickLetters } from '/src/scripts/lettersManager.js';

export default {
  props: [shownWords],
  data() {
    return {
      filePath: "/src/assets/filtered_words_100.txt",
      letters: null,
      shownWords: [],
      isModalVisible: false,
    };
  },
  mounted() {
    this.randomLetters();
  },
  computed: {
    shownWordsLength() {
      return this.shownWords.length
    }
  },
  methods: {
    async randomLetters() {
      this.letters = await pickLetters(this.filePath);
    },
    async validateWord() {
      if (this.inputWord !== null && !this.shownWords.includes(this.inputWord)){
        const shouldWordBeShown = await validateWord(this.inputWord, this.letters);
        if (shouldWordBeShown){
          this.shownWords.push(this.inputWord);
        } else{
          console.log("Palavra não tá na lista");
        }
      }
      this.inputWord = null;
    },
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
body {
  text-align: center;
}
</style>
