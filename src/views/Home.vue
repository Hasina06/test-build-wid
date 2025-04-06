<template>
  <div class="relative w-full max-w-full h-auto flex flex-col justify-center items-center">
    <Carousel
      class="slide-container w-full h-full"
      :items-to-show="1"
      :wrap-around="true"
      :transition="1500"
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
    <div
      id="about"
      class="w-full h-auto pt-8 md:pt-12 px-6 md:px-0 lg:px-[10%] flex flex-col justify-start items-center"
    >
      <div class="title font-bold text-3xl lg:text-4xl">
        <h1>Qui somme-<span class="text-light-blue">nous?</span></h1>
      </div>
      <div class="history w-full py-6 pl-0 flex flex-col justify-center items-center">
        <div class="pb-5 flex items-center text-dark-blue">
          <div class="w-[70px] border-b-2 border-dark-blue"></div>
          <span class="px-5 text-xl font-semibold">Petite historique</span>
          <div class="w-[70px] border-b-2 border-dark-blue"></div>
        </div>
        <p class="w-full md:w-[90%] lg:w-[80%] text-left">
          <span class="ml-5 md:ml-16">
            Après plusieurs années d’expérience dans la manipulation de plans, de nuages de points
            et d’autre données géospatiales, on se lance dans une nouvelle aventure
            entrepreneuriale.
          </span>
          <br />
          <span class="ml-5 md:ml-16 italic">BUILD WID</span>, c’est une expertise dédiée à la
          vectorisation et digitalisation de plans architecturaux, pour accompagner les architectes,
          géomètres, bureaux d’études et professionnels du BTP dans leurs projets.
        </p>
      </div>
      <div class="objectifs w-full py-6 pl-0 flex flex-col justify-center items-center">
        <div class="pb-5 flex items-center text-dark-blue">
          <div class="w-[70px] border-b-2 border-dark-blue"></div>
          <span class="px-5 text-xl font-semibold">Notre objectif</span>
          <div class="w-[70px] border-b-2 border-dark-blue"></div>
        </div>
        <p class="w-full md:w-[90%] lg:w-[80%] text-left">
          <span class="ml-5 md:ml-16">
            Notre objectif est de collaborer avec les experts du domaine aﬁn de les accompagner et
            de faciliter leur travail. Géomètres, Architectes, Bureau d’Etude, Maitrises d’Oeuvres,
            Maitrises d’Ouvrages.
          </span>
        </p>
      </div>
      <div class="vision w-full py-6 pl-0 flex flex-col justify-center items-center">
        <div class="pb-5 flex items-center text-dark-blue">
          <div class="w-[70px] border-b-2 border-dark-blue"></div>
          <span class="px-5 text-xl font-semibold">Notre vision</span>
          <div class="w-[70px] border-b-2 border-dark-blue"></div>
        </div>
        <p class="w-full md:w-[90%] lg:w-[80%] text-left">
          <span class="ml-5 md:ml-16">
            Devenir un acteur incontournable de la digitalisation et de la vectorisation de plans
            pour les professionnels du BTP : Entreprise, Architecte, Géomètre,Topographe, etc…
          </span>
        </p>
      </div>
    </div>
    <div
      id="values"
      class="w-full h-auto pt-8 px-6 lg:px-[10%] flex flex-col justify-start items-center bg-yellow-200"
    >
      <div class="title font-bold text-3xl lg:text-4xl">
        <h1>Nos <span class="text-light-blue">valeurs</span></h1>
      </div>
      <div class="fiability w-full py-6 pl-0 flex flex-col justify-center items-start">
        <span class="flex items-center text-light-blue">
          <i class="bx bxs-label bx-sm"></i>
          <span class="ml-1 underline underline-offset-4">FIABILITE</span>
        </span>
        <p class="w-[95%] md:w-[70%] ml-8 md:ml-16">
          <span class="">
            Garantir des prestations précises, conformes à la demande, réalisées avec rigueur et
            efficacité. La confiance ne se gagne pas facilement, elle se construit par des actions
            concrètes.
          </span>
        </p>
      </div>
      <div class="engagement w-full py-6 pl-0 md:pl-16 flex flex-col justify-center items-start">
        <span class="flex items-center text-light-blue">
          <i class="bx bxs-label bx-sm"></i>
          <span class="ml-1 underline underline-offset-4">ENGAGEMENT</span>
        </span>
        <p class="w-[95%] md:w-[80%] ml-8 md:ml-16">
          <span class="">
            S’investir pleinement pour fournir des solutions performantes et innovantes, adaptées
            aux besoins des clients. Il ne suffit pas d’avoir les compétences techniques, il faut
            aussi s’engager auprès des clients en apportant des solutions performantes et en restant
            à la pointe de l’innovation.
          </span>
        </p>
      </div>
      <div class="proximity w-full py-6 pl-0 md:pl-32 flex flex-col justify-center items-start">
        <span class="flex items-center text-light-blue">
          <i class="bx bxs-label bx-sm"></i>
          <span class="ml-1 underline underline-offset-4">PROXIMITE</span>
        </span>
        <p class="w-[95%] md:w-[90%] ml-8 md:ml-16">
          <span class="">
            Créer une relation de confiance avec les clients en étant disponible, réactif et à
            l’écoute de leurs besoins. Chaque projet est unique, il est essentiel d’être proche des
            clients, de comprendre leurs exigences et de leur proposer des solutions adaptées.
          </span>
        </p>
      </div>
    </div>
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
