<template>
  <nav class="quick-contact w-full flex justify-between items-center">
    <div v-for="contact in contacts" :key="contact.id">
      <a
        class="flex justify-center items-center"
        :href="contact.href"
        target="_blank"
        :aria-label="`Contact: ${contact.name}`"
      >
        <span class="flex items-center text-white italic">
          <i :class="contact.icon"></i>
          <span class="ml-1">{{ contact.name }}</span>
        </span>
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  contacts: { id: number; name: string; icon: any; href: string }[]
}>()
</script>
