<template>
  <button
    :class="[
      'px-5 py-2 rounded-full text-[14px]',
      background ? background : 'bg-white',
      color ? color : 'text-white',
    ]"
  >
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
const props = defineProps({
  background: String,
  color: String,
})
</script>
<style scoped></style>
