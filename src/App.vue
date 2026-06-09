<template>
<ScrollToTopButton></ScrollToTopButton>
<router-view />
</template>

<script setup>
import LandingIrisAndLightComponent from './components/LandingIrisAndLightComponent.vue';
import ScrollToTopButton from './components/ScrollToTopButton.vue';
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Helvetica;
  background: #f7f7f7;
  color: #222;
}
</style>
