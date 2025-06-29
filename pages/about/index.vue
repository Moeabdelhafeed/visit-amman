<template>
<!-- hero section -->
<section v-if="content?.hero" class="relative h-[60vh] min-h-[500px] max-h-[700px] w-full overflow-hidden inner-shadow">
  <div class="absolute inset-0 bg-black/40 z-0"></div>
  
  <Transition 
    @enter="onEnter"
    @appear="onEnter"
    @leave="onLeave"
  >
    <div v-if="isMounted" class="z-10 absolute p-4 left-1/2 w-full top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      <!-- Decorative Line -->
      <div class="w-24 h-1 bg-white mx-auto mb-8 rounded-full opacity-80"></div>
      
      <!-- Title -->
      <h1 class="text-white w-full text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        Explore Amman
      </h1>
      
      <!-- Subtitle -->
      <p class="text-white px-5 text-lg  opacity-90 max-w-2xl mx-auto">
        Discover the heart of Jordan through ancient history, vibrant culture, and modern experiences
      </p>
    </div>
  </Transition>
  <img loading="lazy" :src="content?.hero?.url" alt="Hero Image" class="h-full w-full object-cover" />
</section>

<!-- bread crumbs -->
<section class="container mx-auto px-4">

    <div class="breadcrumbs text-web-brown/70 text-sm pt-4">
  <ul>
    <li> 
      <NuxtLink :to="{name:'home'}">
      Home
      </NuxtLink> 
    </li>
    <li> 
      <NuxtLink :to="{name:'about'}">
      Explore Amman
      </NuxtLink> 
    </li>
  </ul>
</div>
</section>

<!-- intro -->
<section class="container mx-auto text-web-brown text-center lg:px-50 px-4 pt-16" v-if="content?.intro">
  <div class=" mx-auto">
    <!-- Decorative Line -->
    <h2 v-motion-slide-visible-once-bottom class="font-bold order-1 text-3xl mb-6">
        {{content?.intro?.title}}
      </h2>
    <div v-motion-slide-visible-once-bottom class="w-24 h-1 bg-web-primary mx-auto mb-8 rounded-full opacity-80"></div>
      
    
    <div class="w-full flex justify-center mb-8">
      <img class="xl:h-[300px] " v-motion-slide-visible-once-bottom :src="content?.intro.image" />
    </div>
    
    <div v-motion-slide-visible-once-bottom class="flex  flex-col">
      
      <p v-html="content?.intro?.body.replace(/\n/g,'<br>')" class="mt-6 text-web-brown/70 order-2 text-lg leading-relaxed w-full">
      </p>
    </div>
  </div>
</section>

<!-- Divider -->
<hr class="container mx-auto my-12 xl:my-20 border-gray-200">

<!-- cards section -->
<section v-motion-slide-visible-once-bottom class="container mx-auto text-web-brown px-4 " v-if="content?.intro">
  <div class="mx-auto">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-web-brown mb-6">
        Why Visit Amman?
      </h2>
      <!-- Decorative Line -->
      <div class="w-24 h-1 bg-web-primary mx-auto rounded-full opacity-80"></div>
    </div>
    
    <!-- Cards Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-15">
      <!-- Card 1 -->
      <div class="group active:scale-105 transform hover:scale-105 bg-transparent flex flex-col items-center text-center text-web-brown transition-all duration-300">
        <div class="text-web-primary mb-8">
          <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <h3 class="text-2xl font-bold mb-4">
          Rich History
        </h3>
        <p class="leading-relaxed text-web-brown/70 text-lg">
          Explore ancient ruins, historic sites, and archaeological wonders that tell the story of civilizations past.
        </p>
      </div>
      <div class="group active:scale-105 transform hover:scale-105 bg-transparent flex flex-col items-center text-center text-web-brown transition-all duration-300">
        <div class="text-web-primary mb-8">
          <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <h3 class="text-2xl font-bold mb-4">
          Rich History
        </h3>
        <p class="leading-relaxed text-web-brown/70 text-lg">
          Explore ancient ruins, historic sites, and archaeological wonders that tell the story of civilizations past.
        </p>
      </div>

      <!-- Card 2 -->
      <div class="group active:scale-105 transform hover:scale-105 bg-transparent flex flex-col items-center text-center text-web-brown transition-all duration-300">
        <div class="text-web-primary mb-8">
          <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <h3 class="text-2xl font-bold mb-4">
          Vibrant Culture
        </h3>
        <p class="leading-relaxed text-web-brown/70 text-lg">
          Experience contemporary art, music, cuisine, and traditions in a modern urban setting with authentic local charm.
        </p>
      </div>

      <!-- Card 3 -->
      <div class="group active:scale-105 transform hover:scale-105 bg-transparent flex flex-col items-center text-center text-web-brown transition-all duration-300">
        <div class="text-web-primary mb-8">
          <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        </div>
        <h3 class="text-2xl font-bold mb-4">
          Local Experiences
        </h3>
        <p class="leading-relaxed text-web-brown/70 text-lg">
          Immerse yourself in authentic local culture through food, markets, and genuine hospitality of the Jordanian people.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Divider -->
<hr class="container mx-auto my-12 xl:my-20 border-gray-200">

<!-- Section 1: Text Left, Image Right -->
<section v-motion-slide-visible-once-bottom class="container mx-auto text-web-brown px-4" v-if="content?.first">
  <div class="xl:grid flex flex-col xl:grid-cols-2 gap-10 items-center">
    <!-- Text Content -->
    <div class="flex flex-col order-2 xl:order-1">
      <h2 class="font-bold order-1 text-3xl mb-4">
        {{ content?.first?.title }}
      </h2>
      <p v-html="content?.first?.body.replace(/\n/g,'<br>')" class="mt-6 text-web-brown/70 order-2 leading-relaxed text-lg">
      </p>
    </div>
    
    <!-- Image -->
    <div class="w-full  h-[400px] flex justify-end order-1 xl:order-2">
      <img v-motion-slide-visible-once-bottom :src="content?.first?.image" class="w-full shadow-sm rounded-sm h-full object-cover" alt="Ancient Amman" />
    </div>
  </div>
</section>

<!-- Section 2: Image Left, Text Right -->
<section v-motion-slide-visible-once-bottom class="container mx-auto text-web-brown px-4 mt-20" v-if="content?.second">
  <div class="xl:grid flex flex-col xl:grid-cols-2 gap-8 items-center">
    <!-- Image -->
    <div class="w-full  h-[400px] flex order-1 xl:order-1">
      <img v-motion-slide-visible-once-bottom class="w-full h-full shadow-sm rounded-sm object-cover" :src="content?.second?.image" alt="Modern Amman" />
    </div>
    
    <!-- Text Content -->
    <div class="flex flex-col order-2 xl:order-2">
      <h2 class="font-bold order-1 text-3xl mb-4">
        {{ content?.second?.title }}
      </h2>
      <p v-html="content?.second?.body.replace(/\n/g,'<br>')" class="mt-6 order-2 text-web-brown/70 leading-relaxed text-lg">
      </p>
    </div>
  </div>
</section>

<!-- Divider -->
<hr class="container mx-auto my-8 xl:my-16 border-gray-200">

<!-- 360 Virtual Tour Section -->
<section v-motion-slide-visible-once-bottom class="container mx-auto text-web-brown px-4 ">
  <div class="mx-auto">
    <!-- Section Header -->
    <div class="text-center mb-12 xl:mb-16">
      <h2 class="text-3xl  font-bold text-web-brown mb-6">
        Experience Amman in 360°
      </h2>
      <!-- Decorative Line -->
      <div class="w-24 h-1 bg-web-primary mx-auto rounded-full opacity-80 mb-6"></div>
      <p class="text-lg text-web-brown/70 max-w-2xl mx-auto leading-relaxed">
        Take an immersive virtual tour of Amman's most iconic locations. Explore the city from every angle and discover hidden gems from the comfort of your screen.
      </p>
    </div>
    
    <!-- 360 Viewer Container -->
    <div v-motion-slide-visible-once-bottom class="relative group">
      <!-- 360 iframe with enhanced styling -->
      <div class="relative overflow-hidden rounded-sm shadow-2xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-white">
        <iframe 
          class="w-full h-[70vh] xl:h-[80vh] transition-all duration-500 group-hover:scale-[1.02]" 
          src="https://momento360.com/e/u/419f1369d4df47bba8401fded7390df9?utm_campaign=embed&utm_source=other&heading=375.76&pitch=9.69&field-of-view=75&size=medium"
          frameborder="0"
          allowfullscreen
        />
        
        <!-- Interactive Hints -->
        <div class="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Click & drag to explore
          </span>
        </div>
      </div>
    </div>
    
    <!-- Additional Info -->
    <div class="mt-8 xl:mt-12 text-center">
      <div class="inline-flex items-center gap-6 text-sm text-web-brown/70">
        <span class="flex items-center gap-2">
          <svg class="w-4 h-4 text-web-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          Interactive 360° View
        </span>
        <span class="flex items-center gap-2">
          <svg class="w-4 h-4 text-web-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          High Resolution
        </span>
        <span class="flex items-center gap-2">
          <svg class="w-4 h-4 text-web-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          Mobile Friendly
        </span>
      </div>
    </div>
  </div>
</section>

<!-- Divider -->
<hr class="container mx-auto my-8 xl:my-16 border-gray-200">
</template>

<script setup>
import gsap from 'gsap'

// Add reactive state to trigger transition
const isMounted = ref(false)

const content = ref({
    hero:{
        url: 'exploreAmman.png'
    },
    intro:{
      title:'Discover Amman',
      image: '/exploreIntro.png',
      body: 'Amman, the capital and largest city of Jordan, is a fascinating blend of ancient history and modern vitality. Built on seven hills, this city of over 4 million people has been continuously inhabited for thousands of years, serving as a crossroads for civilizations from the ancient Ammonites to the modern era.\n\nToday, Amman stands as a testament to Jordan\'s rich heritage and bright future. From the ancient ruins of the Citadel and Roman Theater to the bustling streets of downtown and the modern districts of Abdoun and Sweifieh, the city offers visitors an unparalleled experience where every corner tells a story of conquest, culture, and continuity.'
    },
    first:{
      title: 'A City of Seven Hills',
      body: 'Amman\'s unique topography, built across seven hills (jabals), has shaped its development and character throughout history. Each hill has its own story: Jabal al-Qal\'a (Citadel Hill) houses ancient ruins dating back to the Bronze Age, while Jabal Amman is home to the historic downtown area with its traditional souks and Ottoman-era architecture.\n\nThe city\'s elevation and strategic location made it a natural fortress and trading hub. From the ancient Ammonites who first settled these hills to the Romans who built their grand theater, from the Umayyads who constructed their desert palaces to the modern Jordanians who have made this city their capital, each era has left its indelible mark on the landscape and culture.',
      image: '/exploreFirst.png'
    },
    second:{
      title: 'Where Past Meets Present',
      body: 'Modern Amman is a vibrant metropolis where centuries-old traditions blend seamlessly with contemporary innovation. The city\'s bustling souks offer everything from handcrafted Bedouin jewelry to the latest technology, while its cafes serve both traditional Arabic coffee and artisanal lattes.\n\nYoung entrepreneurs work alongside traditional craftsmen, creating a dynamic cultural landscape that honors the past while embracing the future. From the trendy districts of Abdoun and Sweifieh to the historic neighborhoods of Downtown, Amman offers visitors a unique experience where they can witness the evolution of a city that respects its heritage while confidently moving forward into the modern world.',
      image: '/exploreSecond.png'
    },
})

definePageMeta({
  name: 'about'
})

// Set mounted state after component is mounted
onMounted(() => {
  isMounted.value = true
})

const onEnter = (el) => {
  gsap.set(el, { opacity: 0, y: 30 })
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out"
  })
}

const onLeave = (el, done) => {
  gsap.to(el, {
    opacity: 0,
    y: -30,
    duration: 0.3,
    ease: "power2.in",
    onComplete: done
  })
}
</script>

<style  scoped>

</style>