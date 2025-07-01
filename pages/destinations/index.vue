<template>
    <div class="pt-20 " >
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
                <NuxtLink :to="{name:'destinations'}">
                    Where to go
                </NuxtLink> 
            </li>
        </ul>
    </div>
</section>

<!-- category section -->

<section v-motion-slide-visible-once-bottom class=" container mx-auto px-4  ">
  <div class="section-header text-web-brown pt-3">

<p   v-motion-slide-visible-once-bottom  class="font-bold text-3xl mb-2">
    {{ content?.title }}
</p>
<p  v-motion-slide-visible-once-bottom class="text-lg text-web-brown/70">
    {{ content?.subtitle }}
</p>
    </div>

    <div v-motion-slide-visible-once-bottom class="flex w-full overflow-x-auto py-6 pt-10 scrollbar-thin 
  scrollbar-thumb-web-brown 
  scrollbar-track-web-brown/20 
  scrollbar-thumb-rounded-full 
  scrollbar-track-rounded-full    gap-4">
  <NuxtLink :to="{name: 'destinations'}">

  <button   :class=" !activeCat ? 'bg-web-primary/100 text-white hover:bg-web-primary-dark active:bg-web-primary-dark ' : 'active:bg-web-primary/20 hover:bg-web-primary/20'"  class=" whitespace-nowrap cursor-pointer transform md:mt-0 text-web-primary bg-web-primary/15 rounded-sm h-14  px-7  transition duration-300 animated-button">
    
    All Categories
    

</button>
  </NuxtLink>


      <NuxtLink v-for="category in content?.categories" :key="category" :to="{name: 'destinations', query:{category: category.id}}" >
      <button  :class=" activeCat == category.id ? 'bg-web-primary/100 text-white hover:bg-web-primary-dark active:bg-web-primary-dark ' : 'active:bg-web-primary/20 hover:bg-web-primary/20'"  class=" whitespace-nowrap cursor-pointer transform md:mt-0 text-web-primary bg-web-primary/15 rounded-sm h-14  px-7  transition duration-300 animated-button">

        {{ category.name }}
      </button>
        
  
</NuxtLink>

    </div>
</section>

<!-- MAP SECTION -->
<section v-motion-slide-visible-once-bottom class="container w-full mx-auto px-4">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.4314771218446!2d35.92488971147532!3d31.94918922572201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f9b6d0df885%3A0x5ba66d57515d5d4!2sRainbow%20St.%2C%20Amman!5e0!3m2!1sen!2sjo!4v1751274572384!5m2!1sen!2sjo" class="w-full h-[350px]" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</section>

<!-- destinations grid -->
<section   class="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 w-max gap-6 container px-4 mx-auto my-5">
  <DestinationCard v-motion-slide-visible-once-bottom :destination="destination" v-for="destination in content?.distenations" :key="destination" />
</section>

<!-- Divider -->
<hr class="container mx-auto mt-8  border-gray-200">

<!-- pagination -->

<div class="container flex w-100 items-center justify-center px-4 mx-auto">
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

const route = useRoute()

watch(() => route.query.category , (newCat) => {
  activeCat.value = newCat
})

const activeCat = ref(route.query.category)



const {data:user, pending} = useFetch('https://randomuser.me/api/' , {
  watch: [activeCat]
})


const content = ref({
  title: 'Discover Amman\'s Best Spots',
  subtitle: 'From historic landmarks to modern hotspots, find the perfect destination for your next adventure.',
  categories:[
    {name: 'Entertaiments' , id: 1},
    {name: 'Resturants' , id: 2},
    {name: 'Historical' , id: 3},
    {name: 'Sports' , id: 4},
    {name: 'Entertaiments' , id: 5},
    {name: 'Resturants' , id: 6},
    {name: 'Historical' , id: 7},
  ],
  distenations:[
    {name: 'Astrolabe' , category: 'Cafe' , location: 'Downtown', image: '/astrolabe.png' , id: 0},
    {name: 'Astrolabe' , category: 'Cafe' , location: 'Downtown', image: '/astrolabe.png' , id: 1},
    {name: 'Astrolabe' , category: 'Cafe' , location: 'Downtown', image: '/astrolabe.png' , id: 2},
    {name: 'Astrolabe' , category: 'Cafe' , location: 'Downtown', image: '/astrolabe.png' , id: 3},
    {name: 'Astrolabe' , category: 'Cafe' , location: 'Downtown', image: '/astrolabe.png' , id: 4},
    {name: 'Astrolabe' , category: 'Cafe' , location: 'Downtown', image: '/astrolabe.png' , id: 5},
  ]
})

definePageMeta({
  name: 'destinations'
})

useHead({
  title: 'Destinations - Visit Amman'
})


</script>

<style lang="scss" scoped>

</style>