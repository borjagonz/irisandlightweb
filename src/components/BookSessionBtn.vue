<template>
<transition name="fade">
  <router-link
    v-if="isVisible"
    to="#booking"
    class="whatsapp-button"
    href="https://app.acuityscheduling.com/schedule/8b7f3d65" target="_blank" rel="noopener"

  >
    Book your session now
  </router-link>
</transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 200
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.whatsapp-button {
  
  position: fixed;
  bottom: 25px;
  right: 85px;
  z-index: 1000;
  display: inline-block;
  background-color: white;
  color: black;
  padding: 0px 20px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 100px;
  height: 50px;
  align-items: center;
  align-content: center;
  transition: 0.3s;
  text-decoration: none;
 box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
}

.whatsapp-button:hover {
  scale: 105%;
    box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.5);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>