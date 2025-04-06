<template>
  <div
    id="footer"
    class="footer py-10 px-[9%] w-full h-auto flex flex-col lg:flex-row justify-between items-start text-white"
  >
    <div class="w-full lg:w-[32%] mb-5 lg:mb-0">
      <div class="footer-contact">
        <h2 class="pb-3 text-3xl lg:text-xl">Contacts</h2>
        <p class="pb-1 flex items-center text-lg lg:text-sm text-white">
          <i class="bx bxs-map bx-sm"></i>
          <span class="ml-1 hover:underline underline-offset-4 cursor-pointer">
            123 Street, New York, USA
          </span>
        </p>
        <p class="pb-1 flex items-center text-lg lg:text-sm text-white">
          <i class="bx bxs-phone bx-sm"></i>
          <span class="ml-1 hover:underline underline-offset-4 cursor-pointer">
            +012 345 67890
          </span>
        </p>
        <p class="pb-1 flex items-center text-lg lg:text-sm text-white">
          <i class="bx bxs-envelope bx-sm"></i>
          <span class="ml-1 hover:underline underline-offset-4 cursor-pointer">
            info@example.com
          </span>
        </p>
      </div>
    </div>
    <div class="w-full lg:w-[32%] mb-5 lg:mb-0">
      <div class="footer-link flex flex-col justify-center items-start">
        <h2 class="pb-2 lg:pb-3 text-3xl lg:text-xl">Services</h2>
        <ul class="list-disc">
          <li class="hover:underline underline-offset-4 cursor-pointer">
            <a class="text-lg lg:text-sm" href="">Vectorisation des plans architecturaux</a>
          </li>
          <li class="hover:underline underline-offset-4 cursor-pointer">
            <a class="text-lg lg:text-sm" href="">Mise en copropriété</a>
          </li>
          <li class="hover:underline underline-offset-4 cursor-pointer">
            <a class="text-lg lg:text-sm" href="">
              Plans topographique - Plans Corps de Rue Simpliﬁé et Complexe (PCRS et PCRC)
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full lg:w-[32%] mb-5 lg:mb-0">
      <div class="newsletter">
        <h2 class="pb-3 text-3xl lg:text-xl">Des questions?</h2>
        <p class="pb-3 text-lg lg:text-sm">
          Si vous avez des questions, n'hésitez pas à nous les posé
        </p>
        <div class="form">
          <input
            type="text"
            class="w-full p-2 mb-3 rounded-md text-dark"
            placeholder="Objet"
            v-model="question.object"
          />
          <textarea
            name="question"
            id="question"
            class="w-full h-auto p-2 mb-2 rounded-md text-dark"
            placeholder="Votre question"
            v-model="question.body"
          ></textarea>
          <button
            class="w-full py-2 bg-light-blue hover:bg-light-blue-hovered rounded-md"
            @click="handleSendMessage(question)"
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="copyright p-5 text-center text-white">
    <div class="row">
      <div class="col-md-6">
        <p>&copy; <a href="#">Build WID</a>, All Right Reserved.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Question {
  object: string
  body: string
}

// Avec une valeur initiale
const question = ref<Question>({ object: '', body: '' })

const handleSendMessage = (questionContent) => {
  console.log(questionContent)
  question.value.object = ''
  question.value.body = ''
}
</script>

<style scoped>
#footer {
  background:
    linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('../assets/images/footer-bg.jpg') no-repeat center;
  background-size: cover;
}

.copyright {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
