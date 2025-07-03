<template>
  <NuxtLink :to="{name: 'destination', params:{id : destination.id }}">
  <div
  
    class="flex flex-col group   bg-white rounded-sm transition-all  transform duration-200   relative overflow-hidden shadow-web group"
  >
  

    <!-- Image with overlay and subtle zoom on hover -->
    <div class="relative   h-[200px] overflow-hidden">
      <img
        :src="destination?.image"
        class="object-cover group-hover:scale-105 group-active:scale-105  w-full  h-full transition-transform duration-300 "
        alt=""
      />

      
    </div>
      <img class="absolute bottom-0 indent-0 opacity-20 -start-6 w-[200px] -rotate-90" src="/herowatermarkfull.png" alt="">

    <!-- Card Content -->
    <div class="flex-1 relative flex flex-col justify-between p-6  ">
      <!-- Location -->
      <div class="flex justify-between">

      <div class="flex flex-col justify-center gap-2.5">
      <h3 class="text-xl  font-bold text-web-brown leading-tight truncate">{{ destination?.name }}</h3>
        <div class="flex gap-1.5 items-center">
          <div class="text-xl text-web-primary">
            <IconsLocation />
          </div>
        <span class="text-web-brown/70 text-sm   truncate">{{ destination?.location }}</span>
        </div>
      </div>

      <div>
        <button
             
              class="flex items-center text-sm bg-web-primary/15 gap-3 cursor-pointer text-web-primary px-4 py-2 rounded-full w-max"
          
            >
            {{ destination?.category }}
          
            </button>
      </div>
      

      </div>
      <!-- Name -->
      <!-- Explore Button -->

      <button
class="
hover:rotate-2
active:rotate-2
transition-all duration-300 transform
mt-5

text-white bg-web-primary text-whit rounded-sm h-12 w-full px-6
active:bg-web-primary-dark  hover:bg-web-primary-dark
truncate
"
>
            Explore {{ destination.name }}
        </button>
      
    </div>
  </div>
</NuxtLink>
</template>

<script setup>
defineProps({
  destination: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
</style>