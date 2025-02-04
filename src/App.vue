<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
</script>

<template>
  <main>
    <router-view />
  </main>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

main {
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
}
</style>
