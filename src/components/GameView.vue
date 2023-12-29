<template>
  <div class="gennedLetters">
    <h3>{{ letters }}</h3>
    <input type="text" v-model="inputWord" id="inputWord" placeholder="write">
    <button type="submit" @click="validateWord">Check</button>
    <ul id="guessedWords">
      <li v-for="word in shownWords" :key="word">
        {{ word }}
      </li>
    </ul>
  </div>
</template>

<script>
import { validateWord } from '/src/scripts/wordsValidation.js';
import { pickLetters } from '/src/scripts/lettersManager.js';

export default {
  data() {
    return {
      filePath: "/src/assets/filtered_words_100.txt",
      letters: null,
      shownWords: []
    };
  },
  mounted() {
    this.randomLetters();
  },
  computed: {
  },
  methods: {
    async randomLetters() {
      this.letters = await pickLetters(this.filePath);
    },
    async validateWord() {
      const shouldWordBeShown = await validateWord(this.inputWord, this.letters);
      if (shouldWordBeShown){
        this.shownWords.push(this.inputWord);
      } else{
        console.log("Palavra não tá na lista");
      }
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
