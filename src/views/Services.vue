<template>
  <div class="flex flex-col justify-center items-center">
    <div
      id="services"
      class="w-full h-auto pt-28 md:pt-36 px-0 md:px-0 lg:px-[10%] flex flex-col justify-start items-center"
    >
      <div class="title font-bold text-3xl lg:text-4xl">
        <h1>Nos <span class="text-light-blue">Services</span></h1>
      </div>
      <div
        class="fiability w-full py-6 px-12 lg:px-0 pl-0 flex flex-col justify-center items-start"
      >
        <p class="w-[95%] md:w-full ml-8 md:ml-16">
          BUILD WID, c’est une expertise dédiée à la vectorisation et digitalisation de plans
          architecturaux, pour accompagner les architectes, géomètres, bureaux d’études et
          professionnels du BTP dans leurs projets.
        </p>
        <p class="w-[95%] md:w-full ml-8 md:ml-16">Nos principaux activités sont:</p>
      </div>
      <div
        class="all-services pb-10 w-full lg:w-[80%] grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-5"
      >
        <div
          v-for="service in services"
          :key="service.ref"
          class="w-[350px] lg:w-[400px] p-10 rounded-lg shadow-lg hover:shadow-2xl border border-slate-200"
          @mouseover="hoveredRef = service.ref"
          @mouseleave="hoveredRef = null"
        >
          <div class="card-header mb-3 font-bold">
            <p
              :class="[
                'text-8xl transition-colors duration-300',
                hoveredRef === service.ref ? 'text-light-blue' : 'text-slate-400',
              ]"
            >
              <i :class="service.icon"></i>
            </p>
            <p>{{ service.title }}</p>
          </div>
          <div
            :class="[
              'separotor w-40 h-0 border-4 transition-colors duration-300',
              hoveredRef === service.ref ? 'border-light-blue' : 'border-slate-400',
            ]"
          >
            &nbsp;
          </div>
          <div class="card-body">
            <p class="mt-3">
              {{ service.content }}
            </p>
          </div>
          <div class="more mt-3 text-sm">
            <a
              href="#"
              :class="[
                'transition-colors duration-300',
                hoveredRef === service.ref ? 'text-light-blue' : 'text-slate-400',
              ]"
            >
              En savoir plus&nbsp; <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const hoveredRef = ref<string | null>(null)

const services = [
  {
    title: 'Véctorisation des plans architecturaux',
    ref: 'vectorisation',
    icon: 'bi bi-bezier',
    content:
      'A partir des plans au format PDF, JPG ou PNG, nuages de points, plans d’études (Esquisse), et autres données numériques.',
  },
  {
    title: 'Mise en copropriété',
    ref: 'copropriete',
    icon: 'bx bx-buildings',
    content:
      'Dessin des contours, mesure des surfaces et tableau récapitulatif. (SU, SDP, Carrez, SHOB, SHON, etc…).',
  },
  {
    title: 'Plans topographique',
    ref: 'topographique',
    icon: 'bi bi-map-fill',
    content:
      'A partir des plans au format PDF, JPG ou PNG, nuages de points, plans d’études (Esquisse), et autres données numériques',
  },
  {
    title: 'Plans Corps de Rue Simpliﬁé et Complexe (PCRS et PCRC)',
    ref: 'vectorisation',
    icon: 'bi bi-cone-striped',
    content:
      'A partir des plans au format PDF, JPG ou PNG, nuages de points, plans d’études (Esquisse), et autres données numériques.',
  },
]

onMounted(() => {
  document.title = 'Build-wid | Nos Services'
})
</script>
