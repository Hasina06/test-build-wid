<template>
  <div class="relative w-full max-w-full h-auto flex flex-col justify-center items-center">
    <Carousel
      class="slide-container w-full h-full"
      :items-to-show="1"
      :wrap-around="true"
      :transition="500"
      :autoplay="8000"
      slideEffect="slide"
    >
      <Slide v-for="slide in slides" :key="slide.id">
        <div class="carousel__item w-full h-full flex justify-center items-center">
          <div
            class="w-full h-screen md:h-[60vh] lg:h-screen flex flex-col justify-evenly text-center"
          >
            <component :is="slide.component" />
          </div>
        </div>
      </Slide>

      <template #addons>
        <div class="hidden md:block">
          <CarouselNavigation>
            <template #prev>
              <span class="carousel__next">
                <i class="bx bx-chevron-left bx-lg"></i>
              </span>
            </template>
            <template #next>
              <span class="carousel__prev">
                <i class="bx bx-chevron-right bx-lg"></i>
              </span>
            </template>
          </CarouselNavigation>
        </div>
        <CarouselPagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import {
  Carousel,
  Slide,
  Navigation as CarouselNavigation,
  Pagination as CarouselPagination,
} from 'vue3-carousel'
import { onMounted } from 'vue'
import CondominiumSlide from '@/components/slides/CondominiumSlide.vue'
import PresentationSlide from '@/components/slides/PresentationSlide.vue'
import TopographicMapSlide from '@/components/slides/TopographicMapSlide.vue'
import VectorizationSlide from '@/components/slides/VectorizationSlide.vue'
const slides = [
  {
    id: 1,
    component: PresentationSlide,
  },
  {
    id: 2,
    component: VectorizationSlide,
  },
  {
    id: 2,
    component: CondominiumSlide,
  },
  {
    id: 4,
    component: TopographicMapSlide,
  },
]

onMounted(() => {
  document.title = 'Build-wid | Accueil'
})
</script>

<style scoped>
.carousel__next,
.carousel__prev {
  background: rgba(16, 43, 62, 0.3);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: rgb(36, 150, 157);
}

.carousel__next:hover,
.carousel__prev:hover {
  color: rgba(36, 150, 157, 0.5);
}

.carousel__next--disabled,
.carousel__prev--disabled {
  opacity: 0.3;
}

.carousel {
  --vc-pgn-background-color: #fff;
  --vc-pgn-active-color: rgb(36, 150, 157);
  --vc-pgn-border-radius: 5px;
  --vc-pgn-height: 7px;
  --vc-pgn-width: 50px;
}

.slide-container {
  background:
    linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('../assets/images/bg-1.jpg') no-repeat center;
  background-size: cover;
  background-attachment: fixed;
}

@media (min-width: 640px) {
}

@media (min-width: 768px) {
  .carousel__next,
  .carousel__prev {
    margin: 0 -30px;
  }
}

@media (min-width: 1024px) {
  .carousel__next,
  .carousel__prev {
    margin: 0 -70px;
  }
}

@media (min-width: 1280px) {
}

@media (min-width: 1536px) {
}
</style>
