<template>
    <div class="pt-20 ">
        <section class="container max-w-[1280px] lg:px-10 md:px-20   mx-auto  px-4">
    <div class="breadcrumbs text-web-brown/70 text-sm pt-4">
        <ul>
            <li> 
                <NuxtLink :to="{name:'home'}">
                    Home
                </NuxtLink> 
            </li>
            <li> 
                <NuxtLink :to="{name:'events'}">
                    Happening in Amman
                </NuxtLink> 
            </li>
        </ul>
    </div>
</section>

<!-- title -->

<section class=" container max-w-[1280px] lg:px-10 md:px-20   mx-auto  px-4">
      <div class="section-header text-web-brown pt-5">
        <p v-motion-slide-visible-once-bottom class="font-bold text-2xl mb-2">
          {{ content?.title }}
        </p>
        <p v-motion-slide-visible-once-bottom class="text-base text-web-brown/70">
          {{ content?.subtitle }}
        </p>
      </div>
</section>


<section
  v-if="content?.banner"
  class="container mx-auto px-4 cursor-pointer max-w-[1280px] lg:px-10 md:px-20 mt-7"
>
<NuxtLink :to="{name: 'event' , params: {id: content.banner.id}}" >
  <div
    class="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch min-h-[340px]  md:min-h-[380px] rounded-sm overflow-hidden  shadow-web"
  >
    <!-- Left: Banner Info -->
    <div
      class="bg-web-primary flex flex-col justify-center gap-6 p-6 lg:p-8 h-full"
      >
      <div class="flex items-start justify-between">

      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2 text-sm text-white">
          <span class="text-lg">
            <IconsLocation />
          </span>
          <span class="text-white/90">
            {{ content.banner.location }}
          </span>
        </div>
        <div class="flex items-center gap-2 text-sm text-white">
          <span class="text-lg">
            <IconsCalendar />
          </span>
          <span class="text-white/90">
            {{ content.banner.date }}
          </span>
        </div>
      </div>
        <div
            class="flex text-sm bg-white/10 items-center gap-3 cursor-pointer text-white/90 px-4 py-2 rounded-full w-max"
          >
            {{ content.banner.category }}
          </div>
      </div>
      <div class="flex flex-col gap-4">
        <h1 class="text-white font-bold text-xl lg:text-3xl">
          {{ content?.banner?.title }}
        </h1>
        <div class="flex flex-col gap-3">
          <p class="text-white/90 leading-relaxed text-base">
            {{ content?.banner?.description }}
          </p>
          
        </div>
        <div class="relative">
  
          
          <!-- Countdown Cards -->
          <div class="grid grid-cols-4 gap-2 sm:gap-3 py-4 ">
            <!-- Days -->
            <div class="flex flex-col items-center space-y-2 transition-transform duration-200 countdown-card group">
              <div class="relative w-13 h-13">
                <div class="absolute inset-0 rounded-full countdown-progress" :style="`--progress: ${Math.min(timeLeft?.days / 30 * 100, 100)}`"></div>
                <div class="absolute inset-0 flex items-center justify-center  bg-[#e59e8d] rounded-full   m-1">
                  <span class="font-bold text-lg sm:text-xl text-white">{{ String(timeLeft?.days).padStart(2, '0') }}</span>
                </div>
              </div>
              <span class="text-xs sm:text-sm font-medium text-white/90 uppercase tracking-wide">Days</span>
            </div>
            
            <!-- Hours -->
            <div class="flex flex-col items-center space-y-2 transition-transform duration-200 countdown-card group">
              <div class="relative w-13 h-13">
                <div class="absolute inset-0 rounded-full countdown-progress" :style="`--progress: ${timeLeft?.hours / 24 * 100}`"></div>
                <div class="absolute inset-0 flex items-center justify-center bg-[#e59e8d] rounded-full  m-1">
                  <span class="font-bold text-lg sm:text-xl text-white">{{ String(timeLeft?.hours).padStart(2, '0') }}</span>
                </div>
              </div>
              <span class="text-xs sm:text-sm font-medium text-white/90">Hours</span>
            </div>
            
            <!-- Minutes -->
            <div class="flex flex-col items-center space-y-2 transition-transform duration-200 countdown-card group">
              <div class="relative w-13 h-13">
                <div class="absolute inset-0 rounded-full countdown-progress" :style="`--progress: ${timeLeft?.minutes / 60 * 100}`"></div>
                <div class="absolute inset-0 flex items-center justify-center bg-[#e59e8d] rounded-full m-1">
                  <span class="font-bold text-lg sm:text-xl text-white">{{ String(timeLeft?.minutes).padStart(2, '0') }}</span>
                </div>
              </div>
              <span class="text-xs sm:text-sm font-medium text-white/90 uppercase tracking-wide">Min</span>
            </div>
            
            <!-- Seconds -->
            <div class="flex flex-col items-center space-y-2 transition-transform duration-200 countdown-card group">
              <div class="relative w-13 h-13">
                <div class="absolute inset-0 rounded-full countdown-progress" :style="`--progress: ${timeLeft?.seconds / 60 * 100}`"></div>
                <div class="absolute inset-0 flex items-center justify-center bg-[#e59e8d] rounded-full m-1">
                  <span class="font-bold text-lg sm:text-xl text-white">{{ String(timeLeft?.seconds).padStart(2, '0') }}</span>
                </div>
              </div>
              <span class="text-xs sm:text-sm font-medium text-white/90 uppercase tracking-wide">Sec</span>
            </div>
          </div>
        </div>
        <button
          class="mt-2 md:mt-4  active:rotate-2 hover:rotate-2 transition-all duration-300 transform text-black bg-white rounded-sm h-12   px-6 active:bg-slate-100 hover:bg-slate-200 cursor-pointer w-full"
        >
          Explore Now
        </button>
      </div>
    </div>
    <!-- Right: Banner Image -->
    <div class="relative md:h-auto w-full">
      <img
        :src="content?.banner?.image"
        class="object-cover w- w-full h-full "
        alt=""
      />
    </div>
  </div>
</NuxtLink>
</section>

<section class="container max-w-[1280px] lg:px-10 md:px-20   mx-auto  px-4">
    
  <div class="flex gap-4 mt-7">
        <div class="text-web-brown w-full">
          <div class="flex justify-between">
            <div class="flex gap-2 items-center">

            <div class="flex items-center">
              <IconsCategories class="text-web-primary text-2xl" />
            </div>
            <p class="text-xl">
              Filter by categories
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
<section class="container max-w-[1280px] lg:px-10 md:px-20 mx-auto px-4 mt-5">
  <div class="relative">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <svg class="h-5 w-5 text-web-brown/50" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    </div>
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search events by title, location, or category..."
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

<!-- 3 Tabs Design -->
<section class="container md:text-base text-sm max-w-[1280px] lg:px-10 mt-1 md:px-20 mx-auto px-4">
  <div class="grid grid-cols-3 gap-0 border-b border-gray-200">
    <button
      :class="['py-5 w-full text-center cursor-pointer  transition-all', activeTab === 'upcoming' ? 'border-b-4 border-web-primary text-web-primary ' : 'border-b-4 border-transparent text-web-brown/70  hover:text-web-primary']"
      @click="activeTab = 'upcoming'"
    >
      Upcoming Events
    </button>
    <button
      :class="['py-5 w-full text-center  transition-all cursor-pointer', activeTab === 'ongoing' ? 'border-b-4 border-web-primary text-web-primary ' : 'border-b-4 border-transparent text-web-brown/70  hover:text-web-primary']"
      @click="activeTab = 'ongoing'"
    >
      Ongoing Events
    </button>
    <button
      :class="['py-5 w-full text-center  transition-all cursor-pointer', activeTab === 'previous' ? 'border-b-4 border-web-primary text-web-primary ' : 'border-b-4 border-transparent text-web-brown/70  hover:text-web-primary']"
      @click="activeTab = 'previous'"
    >
      Previous Events
    </button>
  </div>
</section>

    <!-- events grid -->
    <section class="grid gird-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-4 container  max-w-[1280px]  md:px-20  lg:px-10  px-4 mx-auto items-center justify-center my-7">
      <EventCard v-motion-slide-visible-once-bottom :event="event" v-for="event in content?.events" :key="event" />
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
import EventCard from '~/components/Home/EventCard.vue'


const selectedCats = ref([])
const searchQuery = ref('')

const addCat = (id) =>{
  selectedCats.value.push(id)
}

const removeCat = (id) =>{
  selectedCats.value =  selectedCats.value.filter((c) => c != id)
} 

definePageMeta({
  name: 'events'
})

const content = ref({
    title: "What's Happening in Amman",
    subtitle: "Discover the latest events, festivals, and activities taking place across the city.",
    banner:{
      id: 1,
        title: "Desert Echoes: Sunset Music & Culture Festival",
        date: "18 Feb - 20 Feb",
        location: "Abdali Boluevard",
        image: "/events/event3.jpeg",
        description:
          "Join us for a magical weekend in the heart of Abdali Boluevard, where music meets the desert.",
        price: "50 JOD",
        category: "Music & Culture",
        countdownDate: "2025-07-07T21:27:00+03:00",
      },
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
  events: [
      {
        id:1,
        title: "Desert Echoes: Sunset Music & Culture Festival",
        date: "18 Feb - 20 Feb",
        location: "Abdali Boluevard",
        url: "/events/event2.jpg",
        description:
          "Join us for a magical weekend in the heart of Abdali Boluevard, where music meets the desert.",
        price: "50 JOD",
        category: "Music & Culture",
        countdownDate: "2025-07-31T21:27:00+03:00",
      },
      {
        id:1,
        title: "Desert Echoes: Sunset Music & Culture Festival",
        date: "18 Feb - 20 Feb",
        location: "Abdali Boluevard",
        url: "/events/event1.png",
        description:
          "Join us for a magical weekend in the heart of Abdali Boluevard, where music meets the desert.",
        price: "50 JOD",
        category: "Music & Culture",
        countdownDate: "2025-06-31T21:27:00+03:00",
      },
      {
        id:1,
        title: "Desert Echoes: Sunset Music & Culture Festival",
        date: "18 Feb - 20 Feb",
        location: "Abdali Boluevard",
        url: "/events/event3.jpeg",
        description:
          "Join us for a magical weekend in the heart of Abdali Boluevard, where music meets the desert.",
        price: "50 JOD",
        category: "Music & Culture",
        countdownDate: "2025-06-31T21:27:00+03:00",
      },
      {
        id:1,
        title: "Desert Echoes: Sunset Music & Culture Festival",
        date: "18 Feb - 20 Feb",
        location: "Abdali Boluevard",
        url: "/events/event2.jpg",
        description:
          "Join us for a magical weekend in the heart of Abdali Boluevard, where music meets the desert.",
        price: "50 JOD",
        category: "Music & Culture",
        countdownDate: "2025-07-31T21:27:00+03:00",
      },
      {
        id:1,
        title: "Desert Echoes: Sunset Music & Culture Festival",
        date: "18 Feb - 20 Feb",
        location: "Abdali Boluevard",
        url: "/events/event1.png",
        description:
          "Join us for a magical weekend in the heart of Abdali Boluevard, where music meets the desert.",
        price: "50 JOD",
        category: "Music & Culture",
        countdownDate: "2025-06-31T21:27:00+03:00",
      },
      {
        id:1,
        title: "Desert Echoes: Sunset Music & Culture Festival",
        date: "18 Feb - 20 Feb",
        location: "Abdali Boluevard",
        url: "/events/event3.jpeg",
        description:
          "Join us for a magical weekend in the heart of Abdali Boluevard, where music meets the desert.",
        price: "50 JOD",
        category: "Music & Culture",
        countdownDate: "2025-06-31T21:27:00+03:00",
      },
    ],
    
})


useHead({
  title: 'Events - Visit Amman'
})

const activeTab = ref('upcoming')

const targetDate = new Date(content.value.banner.countdownDate).getTime();

const timeLeft = ref({
  total: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

let timerInterval = null;

function calculateTimeLeft() {
  const now = new Date();
  const total = targetDate - now;

  if (total > 0) {
    timeLeft.value = {
      total,
      days: Math.floor(total / (1000 * 60 * 60 * 24)),
      hours: Math.floor((total / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((total / (1000 * 60)) % 60),
      seconds: Math.floor((total / 1000) % 60),
    };
  } else {
    clearInterval(timerInterval);
    timeLeft.value.total = 0;
  }
}

onMounted(() => {
  calculateTimeLeft();
  timerInterval = setInterval(calculateTimeLeft, 1000);
});

onBeforeUnmount(() => {
  clearInterval(timerInterval);
});


</script>

<style scoped>

.countdown-progress {
  background: conic-gradient(
    from 0deg,
    rgba(255, 255, 255, 0.8) calc(var(--progress) * 1%),
    rgba(255, 255, 255, 0.192) 0%
  );
  transition: all 0.3s ease;
}


</style>