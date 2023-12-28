<template>
  <div class="gennedLetters">
    <h3>{{ letters }}</h3>
    <input type="text" v-model="inputWord" id="inputWord" placeholder="write">
    <button type="submit" @click="validateWord">Check</button>
  </div>
</template>

<script>
import { validateWord } from '/src/scripts/wordsValidation.js';
import { pickLetters } from '/src/scripts/lettersManager.js';

export default {
  data() {
    return {
      filePath: "/src/assets/filtered_words_100.txt",
      letters: null
    };
  },
  created() {
    this.randomLetters();
  },
  methods: {
    async randomLetters() {
      this.letters = await pickLetters(this.filePath);
    },
    validateWord() {
      console.log(this.inputWord);
      if (validateWord(this.inputWord, this.randomLetters)){
        console.log("Palavra na lista");
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
