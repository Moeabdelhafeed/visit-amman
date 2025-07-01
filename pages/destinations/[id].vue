<template>
    <!-- overlay of the image -->
    <section v-if="showOverlay" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80" @click.self="closeOverlay">
      <div class="relative max-w-3xl w-full mx-4">
        <button @click="closeOverlay" class="absolute top-3 right-3 z-10 text-white text-2xl bg-white/30 backdrop-blur-sm rounded-full  w-8 h-8 lg:w-9 lg:h-9 text-md flex items-center justify-center hover:bg-white/50 transition">&times;</button>
        <img :src="overlayImage" class="w-full max-h-[80vh] object-contain shadow-lg" alt="Preview" />
      </div>
    </section>
    <div class="pt-20">

        
                      <!-- bread crumbs -->
<section class="container  mx-auto px-4">
    <div class="breadcrumbs text-web-brown/70 text-sm pt-4">
        <ul>
            <li> 
                <NuxtLink :to="{name:'home'}">
                    Home
                </NuxtLink> 
            </li>
            <li> 
                <NuxtLink :to="{name: 'destinations'}">
                    Destinations
                </NuxtLink> 
            </li>
            <li> 
                <NuxtLink :to="{name: 'destinations'}">
                    {{ destination.name }}
                </NuxtLink> 
            </li>
        </ul>
    </div>
</section>

<!-- cover image -->
<section class="mt-2 container relative mx-auto hover:scale-102 curose active:scale-102 px-4 transform transition lg:h-[50svh] h-[40svh]">
  <div class="relative h-full w-full p-4 " 
    @click="openOverlay(destination?.coverimage)"
  >
    <div :style="{ backgroundImage: `url('${destination?.coverimage}')` }" class="h-full w-full absolute top-0 left-0 bg-cover bg-center cursor-pointer" @click="openOverlay(destination.coverimage)"></div>
    <div class="absolute top-0 left-0 w-full h-full  bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
    <div class="relative z-20 h-full flex flex-col justify-end  text-white">
      <p v-motion-slide-visible-once-bottom class="font-bold text-3xl">
        {{ destination.name }}
      </p>
      <p v-motion-slide-visible-once-bottom class="text-lg text-white/70">
        {{ destination?.category }}
      </p>
    </div>
  </div>
</section>

<section class=" lg:mt-4 mt-1.5 container px-4 mx-auto grid grid-cols-4 lg:gap-4 gap-1.5">
    <img 
      :src="image" 
      class="w-full object-cover transition transform hover:scale-102 active:scale-102 lg:h-[20svh] h-[10svh] cursor-pointer" 
      :key="index" 
      v-for="(image, index) in destination.images"  
      alt=""
      @click="openOverlay(image)"
    >
</section>

<section class="container px-4 mx-auto mt-10 flex flex-col lg:flex-row gap-5">
  <!-- Features column -->
  <div class="flex-1 flex flex-col justify-between">
    <div>
      <p class="text-3xl font-semibold text-web-brown mb-2">{{ destination.features.title }}</p>
      <p class="text-lg text-web-brown/70">{{ destination.features.subtitle }}</p>
    </div>
    <div class="grid grid-cols-3 mt-5 lg:gap-5 gap-2 h-fit">
      <div v-for="i in 6" :key="i" class="bg-web-primary/10 flex-col gap-3 text-web-primary hover:scale-105 h-[170px] active:scale-105 w-full flex justify-center items-center">
        <IconsPeople class="text-4xl" />
        <p class="text-xl">Feature</p>
      </div>
    </div>
  </div>
  <!-- Map column -->
  <div class="flex-1 flex flex-col   mt-5 lg:mt-0">
    <div>
      <p class="text-3xl font-semibold text-web-brown mb-2">{{ destination.location.title }}</p>
      <p class="text-lg text-web-brown/70">{{ destination.location.subtitle }}</p>
    </div>

    <section v-motion-slide-visible-once-bottom class="w-full mt-5  h-full flex flex-col">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.4314771218446!2d35.92488971147532!3d31.94918922572201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f9b6d0df885%3A0x5ba66d57515d5d4!2sRainbow%20St.%2C%20Amman!5e0!3m2!1sen!2sjo!4v1751274572384!5m2!1sen!2sjo"
        class="w-full h-[300px] lg:h-full" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  </div>
</section>

<section class="container mx-auto px-4 mt-10">
    <div>
      <p class="text-3xl font-semibold text-web-brown mb-2">{{ destination.name }}</p>
      <p class="text-lg  text-web-brown/70" v-html="destination.description.replace(/\n/g,'<br>')"></p>
    </div>
    
</section>

<section class="container mx-auto px-4 my-10">
    <div>
      <p class="text-3xl font-semibold  text-web-brown mb-2">Related Destinations</p>
      <div class="grid lg:grid-cols-3 grid-cols-1 w-max gap-8"> 
        <DestinationCard :destination="{name: 'Astrolabe' , category: 'Cafe' , location: 'Downtown', image: '/astrolabe.png' , id: 8}"/>
        <DestinationCard :destination="{name: 'Astrolabe' , category: 'Cafe' , location: 'Downtown', image: '/astrolabe.png' , id: 8}"/>
        <DestinationCard :destination="{name: 'Astrolabe' , category: 'Cafe' , location: 'Downtown', image: '/astrolabe.png' , id: 8}"/>
      </div>
    </div>
    
</section>









    </div>
</template>

<script setup>
import { ref } from 'vue'

const showOverlay = ref(false)
const overlayImage = ref(null)

function openOverlay(imageUrl) {
  overlayImage.value = imageUrl
  showOverlay.value = true
}

function closeOverlay() {
  showOverlay.value = false
  overlayImage.value = null
}

const destination = ref({
    name:'Astrolabe',
    category: 'Cafe',
    coverimage:'/astrolabe.png',
    images:[
        '/astrolabe.png',
        '/astrolabe.png',
        '/astrolabe.png',
        '/astrolabe.png',
    ],
    features:{
        title: 'What will you find',
        subtitle: 'Explore special features in Astrolabe'
    },
    location:{
        title: 'Find the location',
        subtitle: 'Explore special features in Astrolabe',

    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
})

definePageMeta({
    name: 'destination'
})

useHead({
    title: () => `${destination.value.name} - Visit Amman`
})
</script>

<style  scoped>

</style>