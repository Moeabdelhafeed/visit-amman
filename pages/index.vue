<script setup>
import { IconsUpArrow, IconsDownArrow, IconsArrow45 } from '#components'
import 'vue3-carousel/carousel.css'
import DestinationCard from '~/components/Home/DestinationCard.vue'
import gsap from 'gsap'

definePageMeta({
  name: 'home'
})

const sliderRef = ref(null)

const locationsRef = ref(null)


const activeIndex = ref(0)

const {y} = useWindowScroll()

function scrollTo(view) {
console.log('scrolling to', view)
view.scrollIntoView({ 
behavior: 'smooth',
block: 'center',

}) 
}


const onSlideChange = (swiperInstance) => {
  console.log('slide changed')
  console.log('Real Index:', swiperInstance?.realIndex)
  
  // Turn off text for half a second, then turn it back on
  showText.value = false
  
  setTimeout(() => {
    activeIndex.value = swiperInstance?.realIndex || 0
    showText.value = true
  }, 500)
}

// Text visibility control for transition
const showText = ref(true)

// Vue transition hooks with GSAP
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


const swiper = useSwiper(sliderRef, {
loop: true,
autoplay: {
delay: 5000,
},
allowTouchMove: true,
simulateTouch: true,
pagination: {
el: '.swiper-pagination',
clickable: true,
},
touchRatio: 1,
touchAngle: 45,
touchMoveStopPropagation: false,
touchStartPreventDefault: false,
touchStartForcePreventDefault: false,
shortSwipes: true,
longSwipes: true,
longSwipesRatio: 0.5,
longSwipesMs: 300,
followFinger: true,
threshold: 0,
touchEventsTarget: 'container',
on:{
activeIndexChange: onSlideChange,
slideChange: onSlideChange
},
})



const content = ref({
sponsors:{
title: "Our sponsors",
sponsors:[
{url: 'https://placehold.co/600x400?text=Hello+World1', id: 0},
{url: 'https://placehold.co/600x400?text=Hello+World2', id: 1},
{url: 'https://placehold.co/600x400?text=Hello+World3', id: 2},
{url: 'https://placehold.co/600x400?text=Hello+World4', id: 3},
{url: 'https://placehold.co/600x400?text=Hello+World5', id: 4},
{url: 'https://placehold.co/600x400?text=Hello+World6', id: 5},
{url: 'https://placehold.co/600x400?text=Hello+World7', id: 6},
{url: 'https://placehold.co/600x400?text=Hello+World8', id: 7},
],
},
mediahub:{
title: "Media Hub",
subtitle: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
video:{
title:'Videos of Amman',
subtitle: 'Videos',
url: 'mediaVideo.png'
},
Image:{
title:'Images of Amman',
subtitle: 'Images',
url: 'mediaImage.png'
},
Moment:{
title:'Live Moments in Amman',
subtitle: 'Moments',
url: 'mediaMoment.png'
}  

},
ammanFestival:{
title: "Amman Festival",
body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsum. Quaerat, ad necessitatibus sapiente incidunt similique amet consectetur voluptate molestiae ab. Eveniet veniam sed illo ratione necessitatibus dicta animi culpa. Dignissimos repellendus autem, voluptates magni, \n\n ipsam ex voluptatem adipisci, eaque provident deleniti similique eos dolores. Tempore amet explicabo voluptatibus quia exercitationem molestias, soluta perspiciatis asper",
},
events:{
title: "Events in Amman",
subtitle: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
events: [

{
title: "Desert Echoes: Sunset Music & Culture Festival",
date: "18 Feb - 20 Feb",
location: "Wadi Rum",
url: "/event1.png",
description: "Join us for a magical weekend in the heart of Wadi Rum, where music meets the desert.",
price: "50 JOD",
category: "Music & Culture",
},
{
title: "Desert Echoes: Sunset Music & Culture Festival",
date: "18 Feb - 20 Feb",
location: "Wadi Rum",
url: "/event1.png",
description: "Join us for a magical weekend in the heart of Wadi Rum, where music meets the desert.",
price: "50 JOD",
category: "Music & Culture",
},
{
title: "Desert Echoes: Sunset Music & Culture Festival",
date: "18 Feb - 20 Feb",
location: "Wadi Rum",
url: "/event1.png",
description: "Join us for a magical weekend in the heart of Wadi Rum, where music meets the desert.",
price: "50 JOD",
category: "Music & Culture",
},

]
},
about:{
title:"About Amman",      
image:"/Amman.png",
subtitle:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsum. Quaerat, ad necessitatibus sapiente incidunt similique amet consectetur voluptate molestiae ab. Eveniet veniam sed illo ratione necessitatibus dicta animi culpa.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsum. Quaerat, ad necessitatibus sapiente incidunt similique amet consectetur voluptate molestiae ab. Eveniet veniam sed illo ratione necessitatibus dicta animi culpa.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsum. Quaerat, ad necessitatibus sapiente incidunt similique amet consectetur voluptate molestiae ab. Eveniet veniam sed illo ratione necessitatibus dicta animi culpa."
},
destinations:{
title:"Find things to do",
subtitle:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
destinations:[
{title:'View Restaurants', subtitle: 'Restaurants', url: '/Restaurants.png'},
{title:'Get Entertained', subtitle: 'Entertaiment', url: '/Entertaiments.png'},
]
},
locations:{
title:"Explore popular areas",
subtitle:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
locations:[
{url: '/explore.png' , title: 'jabal alqalaa' , subtitle: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda'},
{url: '/explore.png' , title: 'jabal alqalaa' , subtitle: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda'},
{url: '/explore.png' , title: 'jabal alqalaa' , subtitle: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda'},
{url: '/explore.png' , title: 'jabal alqalaa' , subtitle: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda'},
{url: '/explore.png' , title: 'jabal alqalaa' , subtitle: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda'},
{url: '/explore.png' , title: 'jabal alqalaa' , subtitle: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda'},
{url: '/explore.png' , title: 'jabal alqalaa' , subtitle: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda'},
{url: '/explore.png' , title: 'jabal alqalaa' , subtitle: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda'},
{url: '/explore.png' , title: 'jabal alqalaa' , subtitle: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda'},
],
},
hero:{
images: [
{ url: '/hero1.png', id: 0, title:'Visit Adasdsmman', subtitle: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.' },
{ url: '/hero2.png', id: 1 , title:'Visit Ammaasdasdn', subtitle: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'},
{ url: '/hero1.png', id: 2 , title:'Visit Amadasdman', subtitle: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'},
{ url: '/hero2.png', id: 3 , title:'Visit Ammasssssn', subtitle: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'},
],
}
})


useHead({
  title:'Home - Visit Amman'
})

</script>

<template>

<!-- hero section -->
<section  v-if="content?.hero" class="relative z-0   h-svh w-full overflow-hidden inner-shadow">



  <div class="absolute pointer-events-none inset-0 z-30 flex flex-col justify-center items-center text-center text-white px-4">
    <Transition
      @enter="onEnter"
      @leave="onLeave"
      @appear="onEnter"
    >
      <div v-if="showText" :key="activeIndex" class="text-content">
        <h1 class="mb-5 text-4xl md:text-5xl lg:text-6x font-bold ">{{ content.hero.images[activeIndex].title }}</h1>
        <p class="mb-8 text-lg text-white/90 leading-relaxed max-w-xl">
          {{ content.hero.images[activeIndex].subtitle }}
        </p>
      </div>
    </Transition>
  </div>

<swiper-container   ref="sliderRef" :init="false" class="absolute inset-0 z-0">
<swiper-slide  v-for="image in content?.hero?.images" :key="image.id">
  <img loading="lazy" :src="image.url" alt="Hero Image" class="h-svh w-full object-cover" />
<div class="absolute inset-0 bg-black/40 z-10"></div>
</swiper-slide>
</swiper-container>

<!-- Navigation Buttons - Hidden on lg screens and under -->
<div class="absolute inset-0 z-40 hidden xl:flex items-center justify-between px-4 pointer-events-none">
<button 
  @click="swiper.prev()" 
  class="pointer-events-auto cursor-pointer w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
>
  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
  </svg>
</button>
<button 
  @click="swiper.next()" 
  class="pointer-events-auto cursor-pointer w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
>
  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
  </svg>
</button>
</div>

<!-- Pagination -->
<div class="absolute bottom-25 left-1/2 transform -translate-x-1/2 z-50">
<div class="swiper-pagination bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:bg-white/50 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet-active]:bg-white [&_.swiper-pagination-bullet-active]:scale-125 [&_.swiper-pagination-bullet:hover]:bg-white/70 [&_.swiper-pagination-bullet:hover]:scale-110 [&_.swiper-pagination]:!static [&_.swiper-pagination]:!flex [&_.swiper-pagination]:items-center [&_.swiper-pagination]:gap-2"></div>
</div>

<div  class="absolute  mt-20 inset-0  flex flex-col justify-center items-center text-center text-white px-4 pointer-events-none">

<button @click="scrollTo(locationsRef)" class=" cursor-pointer absolute bottom-5 gap-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50 pointer-events-auto">
  Explore now
  <span class="text-xl animate-bounce">
    <IconsDownArrow />
  </span>
</button>
</div>
</section>

<section ref="locationsRef" v-if="content?.locations" class=" text-web-brown relative z-30  pt-20 xl:pt-30 ">
<div>
    <div class="md:flex  container overflow-visible px-4 mx-auto justify-between">

        <div class="section-header">

    <p   v-motion-slide-visible-once-bottom  class="font-bold text-3xl mb-2">
        {{ content?.locations?.title }}
    </p>
    <p  v-motion-slide-visible-once-bottom class="text-lg text-web-brown/70">
        {{ content?.locations?.subtitle }}
    </p>
        </div>

        <button  v-motion-slide-visible-once-bottom class="mt-7 cursor-pointer hover:rotate-2 active:rotate-2 transform md:mt-0 text-web-primary bg-web-primary/15 rounded-sm h-12  px-6 active:bg-web-primary/20 hover:bg-web-primary/20 transition duration-300 animated-button">
    <span class="flex   items-center gap-4 justify-center">
        Explore more
        <span class="text-2xl">
            <IconsArrow45 />
            </span> 
    </span>
</button>

    </div>


    <div
class="scrollbar-thin 
  scrollbar-thumb-web-brown 
  scrollbar-track-web-brown/20 
  scrollbar-thumb-rounded-full 
  scrollbar-track-rounded-full 
  overflow-x-auto
  mx-auto flex flex-row py-10
  snap-x snap-mandatory
  "
  
>
<div>

</div>
<div class="flex"   >

<div
v-for="(location, index) in content?.locations?.locations"
:key="index"
class="snap-start w-max px-4 "
ref="locationCards"
>

<HomeLocationCard v-motion-slide-visible-once-right :location="location" />
</div>
</div>

</div>

</div>
</section>


<section v-if="content?.destinations" class=" text-web-brown relative z-30 pt-13 xl:pt-25 ">
<div >
    <div class="md:flex container overflow-visible px-4 mx-auto justify-between">

        <div class="section-header">

    <p v-motion-slide-visible-once-bottom    class="font-bold text-3xl mb-2">
        {{ content?.destinations?.title }}
    </p>
    <p v-motion-slide-visible-once-bottom  class="text-lg text-web-brown/70">
        {{ content?.destinations?.subtitle }}
    </p>
        </div>

        <button v-motion-slide-visible-once-bottom class="mt-7 cursor-pointer active:rotate-2 md:mt-0 hover:rotate-2 text-web-primary bg-web-primary/15 rounded-sm h-12  px-6 active:bg-web-primary/20 hover:bg-web-primary/20 transition duration-300 animated-button">
    <span class="flex  items-center gap-4 justify-center">
        Explore more
        <span class="text-2xl">
            <IconsArrow45 />
            </span> 
    </span>
</button>

    </div>
  <div class="container mx-auto px-4">
<div class="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
<div

class="w-full lg:h-[450px] h-[350px] destination-card"
v-for="(destination, index) in content.destinations.destinations"
:key="index"
>
<HomeDestinationCard v-motion-slide-visible-once-bottom  :destination="destination" />
</div>
</div>
</div>




</div>
</section>    


<section v-if="content?.about" class="relative text-web-brown pt-20 xl:pt-30 z-20">
<div>
  <div class="container relative overflow-visible px-4 mx-auto justify-between">
    <div class=" xl:grid grid-cols-2 justify-between gap-8">
      
      <!-- Amman Image (Mobile First, Desktop Second) -->
      <div class="flex flex-col  order-1 xl:order-2 items-center justify-center">
        <img
        v-motion-slide-visible-once-bottom 
          loading="lazy"
          class="hover:scale-105 active:scale-105 transition duration-300 w-[500px] xl:w-full object-center mask-[url('/ammanMask.png')] mask-no-repeat mask-[size:contain] mask-top"
          src="/Amman.png"
          alt="Amman Desktop"
        />
      </div>

      <!-- Left Content -->
      <div class="flex   rounded-sm  flex-col mt-15 xl:mt-0 gap-8 order-2 xl:order-1 about-content">
        <div class="w-full flex flex-col">
          <p v-motion-slide-visible-once-bottom  class="font-bold  text-3xl mb-2">
            {{ content?.about?.title }}
          </p>
          <p v-motion-slide-visible-once-bottom  class="text-lg text-web-brown/70">
            <img  src="/sloganEnglish.png" class="h-8" alt="">
          </p>
        </div>

        <p  v-motion-slide-visible-once-bottom v-html="content?.about?.body.replace(/\n/g,'<br>')"
            class="text-start xl:mt-0 mt-3 text-lg text-web-brown/70 leading-relaxed">
        </p>

        <div>
          <NuxtLink :to="{name: 'about'}">

          <button v-motion-slide-visible-once-bottom   class="w-max cursor-pointer  xl:mt-8 active:rotate-2 hover:rotate-2 text-white bg-web-primary rounded-sm h-12 px-6 active:bg-web-primary-dark hover:bg-web-primary-dark transition duration-300 animated-button">
            <span class="flex items-center gap-4 justify-center">
              Explore more
              <span class="text-2xl">
                <IconsArrow45 />
              </span>
            </span>
          </button>
          </NuxtLink>
        </div>
      </div>

    </div>
  </div>
</div>
</section>



<section v-if="content?.sponsors?.sponsors" class="relative bg-gradient-to-r from-web-primary via-web-primary/95 to-web-primary text-white mt-20 xl:mt-30 py-10 lg:py-15 z-20 overflow-hidden">
  <!-- Background pattern for visual interest -->
  <div class="absolute inset-0 bg-black/5"></div>
  
    <!-- Enhanced header -->
    <div v-motion-slide-visible-once-bottom class="text-center mb-5 section-header">
      <h3 class="text-3xl font-bold mb-5 tracking-tight">
        {{content?.sponsors?.title}}
      </h3>
      <div class="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
    </div>
  <div class="relative z-10 sponsor-container h-max py-5">
    
    <!-- Sponsor carousel -->
    <div class="sponsor-track">
      <!-- Multiple sets of sponsors for seamless loop -->
      <div  v-motion-slide-visible-once-bottom class="sponsor-group" v-for="set in 3" :key="`set-${set}`">
        <div 
          class="lg:h-32 h-24 lg:mx-8 mx-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 sponsor-item" 
          v-for="sponsor in content?.sponsors?.sponsors" 
          :key="`sponsor-${set}-${sponsor.id || Math.random()}`"
        >
          <img 
            class="w-full h-full object-contain filter brightness-0 invert" 
            :src="sponsor.url" 
          />
        </div>
      </div>
    </div>
  </div>
</section>



<section v-if="content?.events" class=" text-web-brown relative z-30 pt-20 xl:pt-30 ">
<div >
    <div class="md:flex container overflow-visible px-4 mx-auto justify-between">

        <div class="section-header">

    <p v-motion-slide-visible-once-bottom class="font-bold text-3xl mb-2">
        {{ content?.events?.title }}
    </p>
    <p v-motion-slide-visible-once-bottom class="text-lg text-web-brown/70">
        {{ content?.events?.subtitle }}
    </p>
        </div>

        <button v-motion-slide-visible-once-bottom  class="mt-7 cursor-pointer md:mt-0 active:rotate-2 hover:rotate-2 text-web-primary bg-web-primary/15 rounded-sm h-12  px-6 active:bg-web-primary/20 hover:bg-web-primary/20 transition duration-300 animated-button">
    <span class="flex  items-center gap-4 justify-center">
        Explore more
        <span class="text-2xl">
            <IconsArrow45 />
            </span> 
    </span>
</button>

    </div>
    <div class="container flex justify-center mx-auto px-4">

<div class="mt-10 grid grid-cols-1 w-max  lg:grid-cols-2 xl:grid-cols-3 gap-8">
<div 
v-for="(event, index) in content.events.events"
:key="index"
class="event-card"
>
<HomeEventCard  v-motion-slide-visible-once-bottom :event="event" />
</div>
</div>
    </div>

</div>
</section>


<section v-if="content?.ammanFestival" class="relative overflow-hidden z-30 text-white bg-web-purple mt-20 xl:mt-30 festival-section">

<!-- Watermark Background Image -->
<img 

loading="lazy"
src="/bagWatermark.png" 
class="absolute z-0 w-[600px] opacity-5 md:-bottom-30 -bottom-0 md:-left-30 -left-60 pointer-events-none select-none"
/>

<div class="container relative z-10 px-4 mx-auto  xl:mt-0">

<div class="xl:grid flex flex-col xl:grid-cols-2 py-10 ">

<!-- Text Side -->
<div v-motion-slide-visible-once-bottom   class="flex flex-col xl:order-1 order-2  justify-center items-start gap-4 festival-content">
<h2  class="text-3xl   font-bold mb-4">{{ content?.ammanFestival?.title }}</h2>
<p  class="text-lg text-white/70 mb-6 text-start leading-relaxed" v-html="content?.ammanFestival?.body.replace(/\n/g,'<br>')"></p>
<div   class="flex flex-col xl:flex-row gap-4   justify-start">

<button   class="text-web-purple cursor-pointer  hover:bg-slate-100 hover:rotate-2 active:rotate-2 active:bg-slate-100 bg-white rounded-[5px] h-13 px-6 transition duration-300 animated-button festival-btn">
  <span class="flex items-center gap-4 justify-center">
    <img loading="lazy" class="object-contain w-4" src="/festivalicon.png" alt=""> 
    <span>Amman Festival</span>
  </span>
</button>
</div>
</div>

<!-- Image Side -->
<div v-motion-slide-visible-once-bottom   class="flex order-1  xl:justify-end justify-center xl:py-20 pb-10  items-center">
<div class="flex flex-col justify-between xl:w-[400px] w-[250px] h-[350px] xl:h-[570px] relative">
  <img loading="lazy" class="w-full h-auto object-cover" src="/PortalStart.png">
  <img v-gsap.magnetic.strong v-motion-slide-visible-once-bottom loading="lazy" class="w-full bottom-20 -right-10 absolute h-auto object-cover festival-character" src="/char.png">
  <img loading="lazy" class="w-full h-auto object-cover" src="/PortalEnd.png">
</div>
</div>

</div>
</div>

</section>



<section v-if="content?.mediahub" class=" text-web-brown relative z-30 py-20 xl:py-30 ">
<div >
    <div class="md:flex container overflow-visible px-4 mx-auto justify-between">

        <div class="section-header">

    <p v-motion-slide-visible-once-bottom class="font-bold text-3xl mb-2">
        {{ content?.mediahub?.title }}
    </p>
    <p v-motion-slide-visible-once-bottom class="text-lg text-web-brown/70">
        {{ content?.mediahub?.subtitle }}
    </p>
        </div>

        

    </div>
  <div class="container mx-auto px-4">
<div class="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
<div

class="w-full lg:h-[320px] h-[350px] media-card"
>
<HomeMediaCard v-motion-slide-visible-once-bottom :media="content?.mediahub?.Image"  />

</div>
<div

class="w-full lg:row-span-2 lg:h-auto h-[350px] media-card"
>
<HomeMediaCard v-motion-slide-visible-once-bottom :media="content?.mediahub?.video"  />

</div>
<div

class="w-full lg:h-[320px] h-[350px] media-card"
>
<HomeMediaCard v-motion-slide-visible-once-bottom :media="content?.mediahub?.Moment"  />

</div>
</div>
</div>




</div>
</section>    



</template>



<style scoped>
.sponsor-container {
width: 100%;
overflow: hidden;
}

.sponsor-track {
display: flex;
animation: scroll 25s linear infinite;
width: max-content;
}

.sponsor-group {
display: flex;
align-items: center;
}

@keyframes scroll {
0% {
transform: translateX(0);
}
100% {
transform: translateX(-33.333%);
}
}

/* Pause animation on hover */
.sponsor-container:hover .sponsor-track {
animation-play-state: paused;
}

/* Responsive animation duration */
@media (max-width: 640px) {
.sponsor-track {
animation-duration: 15s;
}
}

@media (min-width: 641px) and (max-width: 768px) {
.sponsor-track {
animation-duration: 20s;
}
}

@media (min-width: 769px) and (max-width: 1024px) {
.sponsor-track {
animation-duration: 25s;
}
}

@media (min-width: 1025px) {
.sponsor-track {
animation-duration: 30s;
}
}
</style>
