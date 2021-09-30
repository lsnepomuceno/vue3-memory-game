<template>
  <h1 v-if="countFounded === itens.length">
    Congratulations!
    <small @click="generateRandomItems">Restart</small>
  </h1>
  <h1 v-else>Lucas Nepomuceno - Vue 3 Memory Game</h1>
  <CardItem @selected="process" />
</template>

<script setup>
import CardItem from '@/components/CardItems.vue'
import useCardItems from '@/composables/useCardItems'

const { itens, countFounded, generateRandomItems, process } = useCardItems

</script>

<style>
body {
  font-family: Verdana, sans-serif;
}
h1 {
  position: relative;
  top: 7vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  font-size: 2.5em;
  background: -webkit-linear-gradient(#35495e, #41b883);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  transition: 0.3s;
}
h1 small {
  font-size: 0.4em;
  display: block;
  cursor: pointer;
}
@media (max-width: 320px) {
  h1,
  h1 small {
    font-size: 1em;
  }
}
@media (max-width: 761px) {
  h1,
  h1 small {
    font-size: 1.5em;
  }
}
</style>
