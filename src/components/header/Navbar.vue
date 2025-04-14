<template>
  <nav
    role="navigation"
    aria-label="Menu de navigation"
    :class="[
      isMenu ? 'translate-y-[-120%]' : 'translate-y-0',
      'relative transition-transform duration-300 lg:transform-none px-6 md:px-[6%] pt-8 lg:pt-0 w-full lg:w-3/4 lg:flex flex-col lg:flex-row lg:justify-end text-[14px] z-0 bg-dark-blue',
    ]"
  >
    <ul class="lg:w-full lg:flex lg:justify-end lg:gap-7 lg:items-center">
      <li
        v-for="link in links"
        :key="link.id"
        class="group relative pb-5 lg:pb-0 hover:text-light-blue-hovered active:text-light-blue-hovered"
      >
        <div class="flex justify-start items-center">
          <RouterLink
            :to="link.path"
            class="pb-6 lg:py-3 uppercase flex items-center"
            @click="handleLinkClick"
            :class="{ 'text-light-blue': isActive(link.path) }"
          >
            {{ link.name }}
            <div class="hidden lg:block">
              <i v-if="link.subMenu.length" class="bx bx-chevron-down bx-sm"></i>
            </div>
          </RouterLink>
          <ul
            v-if="link.subMenu.length"
            class="absolute left-0 top-10 w-[240px] bg-dark-blue border border-gray-700 rounded shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-300 z-10"
          >
            <li v-for="child in link.subMenu" :key="child.id" class="px-4 py-2 hover:bg-gray-900">
              <RouterLink
                :to="child.path"
                class="block text-white"
                @click="handleLinkClick"
                :class="{ 'text-white': isActive(child.path) }"
              >
                {{ child.name }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </li>
      <!-- <li class="pb-5 w-full lg:pb-0 lg:w-auto">
        <Button background="bg-light-blue" color="text-white" class="w-full lg:w-auto">
          Se connecter
        </Button>
      </li> -->
    </ul>
    <hr class="pb-5 lg:hidden border-t border-white" />
    <div class="lg:hidden">
      <div
        v-for="contact in contacts"
        :key="contact.id"
        class="pb-5 flex justify-start items-center"
      >
        <a
          class="flex justify-center items-center"
          :href="contact.href"
          target="_blank"
          :aria-label="`Contact: ${contact.name}`"
        >
          <span class="ml-1">{{ contact.name }}</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import Button from '@/components/Button.vue'

const props = defineProps<{
  isMenu: boolean
  links: {
    id: number
    name: string
    path: string
    key: string
    subMenu: { id: number; name: string; path: string }[]
  }[]
  contacts: { id: number; name: string; icon: any; href: string }[]
}>()

const emit = defineEmits(['closeMenu'])

const route = useRoute()

const isActive = (path: string) => {
  return route.path === path
}

const handleLinkClick = () => {
  if (window.innerWidth < 1024) {
    emit('closeMenu')
  }
}
</script>

<style scoped>
ul.absolute {
  opacity: 0;
  visibility: hidden;
}

.group:hover ul.absolute {
  opacity: 1;
  visibility: visible;
}

.hidden-animation {
  animation: hideMenu 0.4s forwards;
}

.visible-animation {
  animation: showMenu 0.4s forwards;
}

@keyframes hideMenu {
  from {
    transform: translateY(-120%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes showMenu {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-120);
  }
}
</style>
