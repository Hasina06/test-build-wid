<template>
  <div class="fixed top-0 full-header w-full p-0 shadow-md md:shadow-none">
    <div class="px-[10%] w-full py-2 hidden lg:block bg-light-blue text-sm text-white">
      <ContactBar :contacts="contacts" />
    </div>
    <header
      class="lg:py-3 lg:px-[10%] w-full lg:flex lg:justify-between lg:items-center bg-transparent lg:bg-dark-blue text-white shadow-md lg:shadow-none"
    >
      <div
        class="mobile-menu relative px-5 md:px-[6%] py-3 md:py-5 lg:pb-0 flex justify-between items-center z-50 bg-dark-blue"
      >
        <RouterLink to="/">
          <div class="logo-container flex justify-center items-center">
            <img class="block md:hidden w-auto h-[75px]" :src="Logo" alt="Logo Build Wid" />
            <img
              class="hidden md:block w-auto h-[60px]"
              :src="LogoSecondary"
              alt="Logo Build Wid"
            />
          </div>
        </RouterLink>
        <button
          class="lg:hidden text-light-blue focus:outline-none"
          @click="toggleMenu"
          :aria-expanded="!isMenu"
          aria-label="Ouvrir/fermer le menu"
        >
          <transition name="fade" mode="out-in">
            <span v-if="isMenu">
              <i class="bx bx-menu bx-lg"></i>
            </span>
            <span v-else>
              <i class="bx bx-x bx-lg"></i>
            </span>
          </transition>
        </button>
      </div>
      <Navbar :isMenu="isMenu" :links="links" :contacts="contacts" @closeMenu="toggleMenu" />
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ContactBar from '@/components/header/ContactBar.vue'
import Navbar from '@/components/header/Navbar.vue'
import Logo from '@/assets/images/logo.jpg'
import LogoSecondary from '@/assets/images/logo-2.png'

const isMenu = ref<boolean>(true)

const links = [
  { id: 1, name: 'Accueil', path: '/', key: 'home' },
  // { id: 2, name: 'A Propos', path: '/about', key: 'about' },
  { id: 3, name: 'Services', path: '/services', key: 'services' },
  { id: 4, name: 'Contact', path: '/contact', key: 'contact' },
  { id: 5, name: "Blog's", path: '/blogs', key: 'blog' },
]

const contacts = ref([
  { id: 1, name: '+261XXXXXXXXX', icon: 'bx bxs-phone bx-sm', href: 'tel:+261XXXXXXXXX' },
  {
    id: 2,
    name: 'buildwid@gmail.com',
    icon: 'bx bxs-envelope bx-sm',
    href: 'mailto:buildwid@gmail.com',
  },
  {
    id: 3,
    name: 'LinkedIn',
    icon: 'bx bxl-linkedin-square bx-sm',
    href: 'https://linkedin.com/in/buildwid',
  },
  {
    id: 4,
    name: 'Facebook',
    icon: 'bx bxl-facebook-square bx-sm',
    href: 'https://facebook.com/buildwid',
  },
])

const toggleMenu = () => {
  isMenu.value = !isMenu.value
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
