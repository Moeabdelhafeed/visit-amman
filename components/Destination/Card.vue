<template>
  <NuxtLink :to="{name: 'destination', params:{id : destination.id }}">
  <div
  
    class="flex flex-col w-[calc(100vw-2rem)] max-w-[400px] bg-white rounded-sm transition-all active:scale-105 transform duration-200 hover:scale-105  relative overflow-hidden shadow-xl shadow-black/5 group"
  >
    <!-- Category Badge -->
    <div class="bg-web-turq absolute top-4 start-4 text-white px-4 py-1.5 rounded-full text-sm  shadow-sm z-20">
      {{ destination?.category }}
    </div>

    <!-- Image with overlay and subtle zoom on hover -->
    <div class="relative p-2  h-[230px] overflow-hidden">
      <img
        :src="destination?.image"
        class="object-cover  w-full rounded-sm h-full transition-transform duration-300 "
        alt=""
      />

      
    </div>

    <!-- Card Content -->
    <div class="flex-1 flex flex-col justify-between p-5 pt-1 ">
      <!-- Location -->
      <div class="flex justify-between">

      <div class="flex items-center gap-1">
        <span class="text-web-brown/70  truncate">{{ destination?.location }}</span>
      </div>
      <div class="w-[40px] h-[40px] bg-web-primary/10 rounded-full flex text-web-primary text-lg hover:bg-web-primary/20 duration-150 transition transform  items-center justify-center">

      <IconsPhone />
      </div>

      </div>
      <!-- Name -->
      <h3 class="text-xl  font-bold text-web-brown leading-tight truncate">{{ destination?.name }}</h3>
      <!-- Explore Button -->

      <button
class="
hover:rotate-2
active:rotate-2
transition-all duration-300 transform
mt-3

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