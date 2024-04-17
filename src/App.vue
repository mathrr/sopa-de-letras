<script setup>
import GameView from './components/GameView.vue'
</script>

<template>
  <main>
    <div class="wrapper">
      <GameView/>
    </div>
    <Popup v-if="popupTriggers.buttonTrigger" :TogglePopup="() => TogglePopup('buttonTrigger')">
			<h2>My Button Popup</h2>
		</Popup>
  </main>
</template>

<script>
import { ref } from 'vue';
import Popup from './components/Popup';

export default {
	setup () {
		const popupTriggers = ref({
			buttonTrigger: false,
			timedTrigger: false
		});

		const TogglePopup = (trigger) => {
			popupTriggers.value[trigger] = !popupTriggers.value[trigger]
		}

		return {
			Popup,
			popupTriggers,
			TogglePopup
		}
	}
}
</script>


<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
