<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/header/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <teleport to="body">
    <Header />
  </teleport>
  <div class="w-full h-auto">
    <RouterView />
  </div>
  <Footer />
</template>

<style>
/* input[type='text'] {
  outline: none;
} */
</style>
