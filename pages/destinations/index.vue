<template>
  <div class="pt-20">
    <!-- bread crumbs -->
    <section class="container max-w-[1280px]  md:px-20  lg:px-10   mx-auto px-4">
      <div class="breadcrumbs text-web-brown/70 text-sm pt-4">
        <ul>
          <li>
            <NuxtLink :to="{ name: 'home' }">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{ name: 'destinations' }">
              Where to go
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <!-- category section -->
    

    <section v-motion-slide-visible-once-bottom class="container max-w-[1280px] md:px-20 lg:px-10 mx-auto px-4">
      <div class="section-header text-web-brown pt-5">
        <p v-motion-slide-visible-once-bottom class="font-bold text-2xl mb-2">
          {{ content?.title }}
        </p>
        <p v-motion-slide-visible-once-bottom class="text-base text-web-brown/70">
          {{ content?.subtitle }}
        </p>
      </div>

      <div class="flex gap-4 mt-7">
        <div class="text-web-brown w-full">
          <div class="flex justify-between items-center">
            <div class="flex gap-2">
              <div class="flex items-center">
                <IconsLocation class="text-web-primary text-2xl" />
              </div>
              <p class="text-xl">
                Filter by Locations
              </p>
            </div>

            <button
              @click="selectedLocation = null"
              class="flex items-center gap-1 px-3 cursor-pointer py-2 rounded-full text-web-primary text-sm font-medium transition-all"
              v-if="selectedLocation !== null && selectedLocation !== ''"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
              Clear filter
            </button>
          </div>
        

          <div class="p-3 w-full overflow-x-auto scrollbar-thumb-web-brown scrollbar-track-web-brown/20 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin">
            <div class="flex gap-2.5 whitespace-nowrap items-center">
              <div
                v-for="(location, idx) in content.locations"
                :key="location.id || idx"
                class="group rounded-sm h-[200px] cursor-pointer transition-all min-w-[300px] relative inline-block overflow-hidden"
                @click="selectedLocation = location.id || idx"
                :class="{
                  'ring-2 ring-web-primary ring-offset-2': selectedLocation == (location.id || idx)
                }"
                style="user-select: none;"
              >
                <!-- Custom radio visual (now just a checkmark if selected) -->
                <div
                  :class="[
                    'absolute top-3 end-3 rounded-full h-[25px] w-[25px] z-20 flex items-center justify-center border-2 transition-all',
                    (selectedLocation == (location.id || idx))
                      ? 'bg-web-primary border-web-primary'
                      : 'bg-white/40 backdrop-blur-sm border-white/90'
                  ]"
                >
                  <svg
                    v-if="selectedLocation == (location.id || idx)"
                    class="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <!-- Background image as img, scales on group hover -->
                <img
                  :src="location.url"
                  alt=""
                  class="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-300 group-hover:scale-105"
                />
                <!-- Overlay -->
                <div class="bg-black/30 absolute w-full inset-0 h-full z-10"></div>
                <!-- Watermark (does not scale) -->
                <img class="absolute w-full z-20 -bottom-15 -rotate-5 scale-125" src="/watermarks/location.png" />
                <!-- Title -->
                <div class="text-white flex items-end bottom-3 justify-center h-full font-bold text-2xl relative z-20">
                  {{ location.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex gap-4 mt-7">
        <div class="text-web-brown w-full">
          <div class="flex justify-between">
            <div class="flex gap-2 items-center">

            <div class="flex items-center">
              <IconsCategories class="text-web-primary text-2xl" />
            </div>
            <p class="text-xl">
              Filter by Categories
            </p>
            </div>
            <button
              @click="selectedCats = []"
              class="flex items-center gap-1 px-3 cursor-pointer py-2 rounded-full text-web-primary text-sm font-medium transition-all"
              v-if="selectedCats.length > 0"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
              Clear filter
            </button>
          </div>
          <div class="py-3 flex gap-2.5 flex-wrap">
            <button
              v-for="category in content.categories"
              :key="category.id"
              class="flex items-center gap-3 cursor-pointer text-web-primary px-4 py-2 rounded-full w-max"
              :class="selectedCats.includes(category.id) ? 'bg-web-primary text-white' : 'bg-web-primary/15'"
              @click="selectedCats.includes(category.id) ? removeCat(category.id) : addCat(category.id)"
            >
              {{ category.name }}
              <span v-if="selectedCats.includes(category.id)">
                <IconsPlus class="rotate-45 transition-transform" />
              </span>
              <span v-else>
                <IconsPlus />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Search Bar Section -->
    <section class="container max-w-[1280px] lg:px-10 md:px-20 mx-auto px-4 mt-6">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-web-brown/50" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search destinations by name, category, or location..."
          class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-web-primary focus:border-transparent text-web-brown placeholder-web-brown/50"
        />
        <button
          v-if="searchQuery"
          @click="searchQuery = ''"
          class="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <svg class="h-5 w-5 text-web-brown/50 hover:text-web-brown transition-colors" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </section>

    <!-- MAP SECTION -->
    <section v-motion-slide-visible-once-bottom class="container max-w-[1280px]  md:px-20 mt-6 lg:px-10  w-full mx-auto px-4">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.4314771218446!2d35.92488971147532!3d31.94918922572201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f9b6d0df885%3A0x5ba66d57515d5d4!2sRainbow%20St.%2C%20Amman!5e0!3m2!1sen!2sjo!4v1751274572384!5m2!1sen!2sjo" class="w-full h-[350px]" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>

    <!-- destinations grid -->
    <section class="grid items-center justify-center gird-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 container  max-w-[1280px]  md:px-20  lg:px-10  px-4 mx-auto my-10">
      <DestinationCard v-motion-slide-visible-once-bottom :destination="destination" v-for="destination in content?.distenations" :key="destination" />
    </section>

    <!-- Divider -->
    <hr class="container max-w-[1280px]  md:px-20  lg:px-10  mx-auto mt-8  border-gray-200">

    <!-- pagination -->

    <div class="container max-w-[1280px]  md:px-20  lg:px-10  flex w-100 items-center justify-center px-4 mx-auto">
      <div class="flex items-center gap-2 p-8">
        <button class="cursor-pointer hover:bg-web-primary/5 active:scale-95 transition-all duration-300 rounded-full h-[40px] w-[40px] text-web-brown flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
        <button class="cursor-pointer bg-web-primary hover:bg-web-primary-dark active:scale-95 transition-all duration-300 rounded-full h-[40px] w-[40px] text-white flex items-center justify-center shadow-sm">1</button>
        <button class="cursor-pointer  hover:bg-web-primary/5 active:scale-95 transition-all duration-300 text-web-brown rounded-full h-[40px] w-[40px] flex items-center justify-center">2</button>
        <button class="cursor-pointer hover:bg-web-primary/5 active:scale-95 transition-all duration-300 rounded-full h-[40px] w-[40px] text-web-brown flex items-center justify-center">3</button>
        <span class="mx-1 text-web-brown/50">...</span>
        <button class="cursor-pointer hover:bg-web-primary/5 active:scale-95 transition-all duration-300 rounded-full h-[40px] w-[40px] text-web-brown flex items-center justify-center">10</button>
        <button class="cursor-pointer hover:bg-web-primary/5 active:scale-95 transition-all duration-300 rounded-full h-[40px] w-[40px] text-web-brown flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

const selectedCats = ref([])
const searchQuery = ref('')

const addCat = (id) =>{
  selectedCats.value.push(id)
}

const removeCat = (id) =>{
  selectedCats.value =  selectedCats.value.filter((c) => c != id)
} 
// Give each location a unique id if not present
const content = ref({
  title: "Discover Amman's Best Spots",
  subtitle: "From historic landmarks to modern hotspots, find the perfect destination for your next adventure.",
  locations: [
      {
        url: "/locations/rainbow-street.jpeg",
        title: "Rainbow Street",
        subtitle: "A vibrant street known for cafes, shops, and nightlife.",
      },
      {
        url: "/locations/abdali.jpeg",
        title: "Abdali Boulevard",
        subtitle: "Modern shopping, dining, and entertainment destination.",
      },
      {
        url: "/locations/jabal-amman.jpeg",
        title: "Jabal Amman",
        subtitle: "Historic district with charming architecture and galleries.",
      },
      {
        url: "/locations/downtown.jpeg",
        title: "Downtown",
        subtitle: "The heart of old Amman, bustling markets and history.",
      },
      {
        url: "/locations/khalda.jpeg",
        title: "Khalda",
        subtitle: "Modern neighborhood with cafes, shops, and family attractions.",
      },
      {
        url: "/locations/abdoun.png",
        title: "Abdoun",
        subtitle: "Upscale district known for its vibrant nightlife and restaurants.",
      },
      {
        url: "/locations/swefieh.jpeg",
        title: "Swefieh",
        subtitle: "Popular area for shopping and nightlife.",
      },
    ],
  categories: [
    { name: "Entertaiments", id: 1 },
    { name: "Resturants", id: 2 },
    { name: "Historical", id: 3 },
    { name: "Sports", id: 4 },
    { name: "Entertaiments", id: 5 },
    { name: "Resturants", id: 6 },
    { name: "Historical", id: 7 },
    { name: "Entertaiments", id: 8 },
    { name: "Resturants", id: 9 },
    { name: "Historical", id: 10 },
    { name: "Sports", id: 11 },
    { name: "Entertaiments", id: 12 },
    { name: "Resturants", id: 13 },
    { name: "Historical", id: 14 },
  ],
  distenations: [
    { name: "Astrolabe", category: "Cafe", location: "Downtown", image: "/destinations/astrolabe.png", id: 0 },
    { name: "Astrolabe", category: "Cafe", location: "Downtown", image: "/destinations/astrolabe.png", id: 1 },
    { name: "Astrolabe", category: "Cafe", location: "Downtown", image: "/destinations/astrolabe.png", id: 2 },
    { name: "Astrolabe", category: "Cafe", location: "Downtown", image: "/destinations/astrolabe.png", id: 3 },
    { name: "Astrolabe", category: "Cafe", location: "Downtown", image: "/destinations/astrolabe.png", id: 4 },
    { name: "Astrolabe", category: "Cafe", location: "Downtown", image: "/destinations/astrolabe.png", id: 5 },
  ],
});

definePageMeta({
  name: "destinations",
});

useHead({
  title: "Destinations - Visit Amman",
});

// Default: nothing selected
const selectedLocation = ref('')

</script>

<style  scoped>
/* visually hide but keep accessible */
.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
</style>