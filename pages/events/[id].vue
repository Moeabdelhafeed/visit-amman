<template>
  <section v-if="showOverlay" class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/80" @click.self="closeOverlay">
    <div class="relative w-max mx-4">
      <img :src="overlayImage" class="w-full max-h-[80vh] object-contain shadow-lg" alt="Preview" />
      <button
        @click="closeOverlay"
        class="absolute top-3  end-3 z-10 text-white text-2xl bg-white/30 backdrop-blur-sm rounded-full w-8 h-8 lg:w-9 lg:h-9 text-md flex items-center justify-center hover:bg-white/50 transition"
        style="pointer-events: auto;"
      >
        &times;
      </button>
    </div>
  </section>
    <div class="pt-20 ">

        <!-- bread crumbs -->
    <section class="container max-w-[1280px]  md:px-20  lg:px-10   mx-auto px-4">
    <div class="breadcrumbs truncate  text-web-brown/70 text-sm pt-4">
        <ul>
            <li> 
                <NuxtLink :to="{name:'home'}">
                    Home
                </NuxtLink> 
            </li>
            <li> 
                <NuxtLink :to="{name: 'events'}">
                    Happening in Amman
                </NuxtLink> 
            </li>
            <li> 
                <NuxtLink >
                    {{event.title }}
                </NuxtLink> 
            </li>
        </ul>
    </div>
</section>



<section
  v-if="event"
  class="container mx-auto px-4  max-w-[1280px] lg:px-10 md:px-20 mt-7"
>

  <div
    class="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch min-h-[340px] md:min-h-[380px] rounded-sm overflow-hidden  "
  >
   
    <!-- Right: Banner Image -->
    <div class="relative group  md:h-auto w-full">
      <img
      @click="openOverlay(event.image)"
        :src="event.image"
        class="object-cover w-full rounded-sm h-full "
        alt=""
      />
      <div>
            <button  class="absolute top-3 end-3 z-10 text-white text-xl bg-white/30 backdrop-blur-sm rounded-full  w-9 h-9  lg:w-9 lg:h-9 text-md flex items-center justify-center group-hover:bg-white/50 transition "><IconsMax /></button>
    
  </div>
      
      <!-- Countdown Overlay -->
      <div class="absolute left-1/2 w-max  -translate-x-1/2 bottom-4 z-20">
        <div class="backdrop-blur-3xl bg-white/30 border border-white/40 shadow-lg rounded-xl px-4 py-3">
          <!-- Countdown Cards -->
          <div class="grid grid-cols-4 gap-2 sm:gap-3">
            <!-- Days -->
            <div class="flex flex-col items-center space-y-2 transition-transform duration-200 countdown-card group">
              <div class="relative w-12 h-12 sm:w-14 sm:h-14">
                <div class="absolute inset-0 rounded-full countdown-progress" :style="`--progress: ${Math.min(timeLeft?.days / 30 * 100, 100)}`"></div>
                <div class="absolute inset-0 flex items-center justify-center bg-white rounded-full shadow-sm border-2 border-gray-100 m-1">
                  <span class="font-bold text-sm sm:text-lg text-web-brown">{{ String(timeLeft?.days).padStart(2, '0') }}</span>
                </div>
              </div>
              <span class="text-xs sm:text-sm font-medium text-web-brown/70 uppercase tracking-wide">Days</span>
            </div>
            
            <!-- Hours -->
            <div class="flex flex-col items-center space-y-2 transition-transform duration-200 countdown-card group">
              <div class="relative w-12 h-12 sm:w-14 sm:h-14">
                <div class="absolute inset-0 rounded-full countdown-progress" :style="`--progress: ${timeLeft?.hours / 24 * 100}`"></div>
                <div class="absolute inset-0 flex items-center justify-center bg-white rounded-full shadow-sm border-2 border-gray-100 m-1">
                  <span class="font-bold text-sm sm:text-lg text-web-brown">{{ String(timeLeft?.hours).padStart(2, '0') }}</span>
                </div>
              </div>
              <span class="text-xs sm:text-sm font-medium text-web-brown/70">HOURS</span>
            </div>
            
            <!-- Minutes -->
            <div class="flex flex-col items-center space-y-2 transition-transform duration-200 countdown-card group">
              <div class="relative w-12 h-12 sm:w-14 sm:h-14">
                <div class="absolute inset-0 rounded-full countdown-progress" :style="`--progress: ${timeLeft?.minutes / 60 * 100}`"></div>
                <div class="absolute inset-0 flex items-center justify-center bg-white rounded-full shadow-sm border-2 border-gray-100 m-1">
                  <span class="font-bold text-sm sm:text-lg text-web-brown">{{ String(timeLeft?.minutes).padStart(2, '0') }}</span>
                </div>
              </div>
              <span class="text-xs sm:text-sm font-medium text-web-brown/70 uppercase tracking-wide">Min</span>
            </div>
            
            <!-- Seconds -->
            <div class="flex flex-col items-center space-y-2 transition-transform duration-200 countdown-card group">
              <div class="relative w-12 h-12 sm:w-14 sm:h-14">
                <div class="absolute inset-0 rounded-full countdown-progress" :style="`--progress: ${timeLeft?.seconds / 60 * 100}`"></div>
                <div class="absolute inset-0 flex items-center justify-center bg-white rounded-full shadow-sm border-2 border-gray-100 m-1">
                  <span class="font-bold text-sm sm:text-lg text-web-brown">{{ String(timeLeft?.seconds).padStart(2, '0') }}</span>
                </div>
              </div>
              <span class="text-xs sm:text-sm font-medium text-web-brown/70 uppercase tracking-wide">Sec</span>
            </div>
          </div>
        </div>
      </div>
  
    </div>

     <!-- Left: Banner Info -->
     <div
      class="  flex flex-col  justify-start gap-6 py-6 px-2 md:py-0  md:px-6 h-full"
      >
      <div class="flex items-center justify-between">
        <div
            class="flex text-sm   text-web-brown/70 "
          >
            {{ event.category }}
          </div>
          <div class="flex gap-3">

          <div class="cursor-pointer flex items-center justify-center rounded-full w-[35px]  hover:bg-web-primary/25 active:bg-web-primary/25 transition-all bg-web-primary/15 h-[35px] text-web-primary">
          <IconsPhone class="text-lg" />
          </div>
          <div class="flex cursor-pointer items-center justify-center rounded-full w-[35px] hover:bg-web-primary/25 active:bg-web-primary/25 transition-all bg-web-primary/15 h-[35px] text-web-primary">
          <IconsWebGlobe class="text-lg" />
          </div>
          <div class="flex cursor-pointer items-center justify-center rounded-full w-[35px] hover:bg-web-primary/25 active:bg-web-primary/25 transition-all bg-web-primary/15 h-[35px] text-web-primary">
          <IconsInstgram class="text-lg" />
          </div>
          </div>
      </div>

      
      <div class="flex flex-col gap-4">
        <h1 class="text-web-brown font-bold text-2xl lg:text-3xl">
          {{ event.title }}
        </h1>
        <div class="flex flex-col gap-3">
          <p class="text-web-brown/90 line-clamp-3  leading-relaxed text-base">
            {{ event.description }}
          </p>
          
        </div>

        <div class="flex mt-3 justify-start">
          <div class="rounded-sm py-2 px-6 flex gap-4 bg-web-primary/15">
          <div class="flex flex-col gap-0.5">
            <p class="text-sm text-web-brown/90">Start</p>
            <p class="text-base font-bold text-web-primary">{{(event.date.split('-'))[0]}} </p>
          </div>
          <div class="w-[1px] self-center h-[30px] bg-web-brown/70"></div>
          <div class="flex flex-col gap-0.5">
            <p class="text-sm text-web-brown/90">End</p>
            <p class="text-base font-bold text-web-primary">{{(event.date.split('-'))[1]}} </p>
          </div>

          </div>
        </div>
      </div>


      <div class="flex flex-col gap-2 mt-3">
        <div class="flex text-web-brown/90 items-center gap-2">
          <IconsLocation class="text-lg text-web-primary" />
        {{event.location}}
        </div>
        <div class="flex text-web-brown/90 items-center gap-2">
          <IconsTicket class="text-lg -rotate-30 text-web-primary" />
        {{event.price}}
        </div>
        
      </div>

      <div class="flex mt-3">
        <button
                  
                  class="w-max cursor-pointer  active:rotate-2 hover:rotate-2 text-white bg-web-primary rounded-sm h-12 px-6 active:bg-web-primary-dark hover:bg-web-primary-dark transition duration-300 animated-button"
                >
                  <span class="flex whitespace-nowrap items-center gap-4 justify-center">
                    Buy Tickets
                    <span class="text-2xl">
                      <IconsArrow45 />
                    </span>
                  </span>
                </button>
      </div>
    </div>
  </div>
</section>


<!-- the desc -->
<section class="container max-w-[1280px] mx-auto lg:mt-7 mt-4 px-4 md:px-20 lg:px-10">

      <p class="text-2xl font-medium text-web-brown mb-2">About the event</p>
  <p v-html="event.long_description.replace(/\n/g, '<br />')" class="text-base text-web-brown/70 mt-3 leading-relaxed">
   
  </p>
</section>

<!-- Event Details Stat Cards -->
<section class="container max-w-[1280px] mx-auto mt-7 px-4 md:px-20 lg:px-10">
  <p class="text-2xl font-medium text-web-brown mb-2">Event Details</p>
  <div class="flex flex-wrap gap-4 mt-4">
    <div v-if="event.parking" class="flex bg-white text-web-primary shadow-web rounded-sm p-6 flex-col items-center relative justify-center gap-2 transition-all duration-300 w-[180px] h-[180px]">
      <img src="/herowatermark.png" class="absolute opacity-20 top-0 start-0 w-[100px]" />
      
      <div class="z-10 flex flex-col items-center justify-center h-full">
        <div class="flex flex-col items-center">
          <IconsParking class="text-6xl text-web-primary mb-3" />
          <p class="text-base font-medium text-center text-web-brown">Parking Available</p>
        </div>
      </div>
    </div>
    
    <div v-if="event.playArea" class="flex bg-white text-web-primary shadow-web rounded-sm p-6 flex-col items-center relative justify-center gap-2 transition-all duration-300 w-[180px] h-[180px]">
      <img src="/herowatermark.png" class="absolute opacity-20 top-0 start-0 w-[100px]" />
      
      <div class="z-10 flex flex-col items-center justify-center h-full">
        <div class="flex flex-col items-center">
          <IconsToy class="text-6xl text-web-primary mb-3" />
          <p class="text-base font-medium text-center text-web-brown">Play Area</p>
        </div>
      </div>
    </div>
    
    <div v-if="event.forAllAges" class="flex bg-white text-web-primary shadow-web rounded-sm p-6 flex-col items-center relative justify-center gap-2 transition-all duration-300 w-[180px] h-[180px]">
      <img src="/herowatermark.png" class="absolute opacity-20 top-0 start-0 w-[100px]" />
      
      <div class="z-10 flex flex-col items-center justify-center h-full">
        <div class="flex flex-col items-center">
          <IconsPeople class="text-6xl text-web-primary mb-3" />
          <p class="text-base font-medium text-center text-web-brown">For All Ages</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- features -->
<section class="container max-w-[1280px] mx-auto mt-7 px-4 md:px-20 lg:px-10">
  <div>
      <p class="text-2xl font-medium text-web-brown mb-2">This event features</p>
    </div>
    <div class="flex flex-wrap gap-4 mt-4">
      <div v-for="speaker in event.speakers" :key="speaker.name" class="flex flex-col items-center bg-white rounded-sm shadow-web p-4 min-w-[220px] max-w-[260px] w-full gap-3 relative">
        <img src="/herowatermark.png" class="absolute opacity-20 top-0 start-0 w-[100px]" />
        <img :src="speaker.image" alt="" class="w-20 h-20 rounded-full object-cover border-2 border-web-primary mb-2 z-10" />
        <p class="text-web-brown/70 text-sm text-center z-10">{{ speaker.role }}</p>
        <p class="font-medium text-web-brown text-lg text-center z-10">{{ speaker.name }}</p>
        <div class="flex gap-2 justify-center mt-2 z-10">
          <a v-if="speaker.phone" :href="`tel:${speaker.phone}`" target="_blank" class="cursor-pointer flex items-center justify-center rounded-full w-9 h-9 bg-web-primary/15 text-web-primary hover:bg-web-primary/25 transition">
            <IconsPhone class="text-lg" />
          </a>
          <a v-if="speaker.website" :href="speaker.website" target="_blank" class="flex items-center justify-center rounded-full w-9 h-9 bg-web-primary/15 text-web-primary hover:bg-web-primary/25 transition">
            <IconsWebGlobe class="text-lg" />
          </a>
          <a v-if="speaker.instagram" :href="speaker.instagram" target="_blank" class="flex items-center justify-center rounded-full w-9 h-9 bg-web-primary/15 text-web-primary hover:bg-web-primary/25 transition">
            <IconsInstgram class="text-lg" />
          </a>
        </div>
      </div>
    </div>
</section>

<!-- Event Days -->
<section class="container max-w-[1280px] mx-auto mt-7 px-4 md:px-20 lg:px-10">
  <p class="text-2xl font-medium text-web-brown mb-4">Event Days</p>
  <div class="space-y-3">
    <div v-for="(day, dayIndex) in event.eventDays" :key="dayIndex" class="collapse collapse-arrow bg-white shadow-web">
      <input type="checkbox" :name="`event-accordion-${dayIndex}`" />
      <div class="collapse-title font-medium text-web-brown">{{ day.title }}</div>
      <div class="collapse-content">
        <div class="space-y-4 pt-2">
          <div v-for="(slot, slotIndex) in day.slots" :key="slotIndex" class="border-l-4 border-web-primary pl-4">
            <h4 class="font-medium text-web-brown mb-2">{{ slot.title }}</h4>
            <p class="text-web-brown/70 text-sm">{{ slot.description }}</p>
            <div v-if="slot.time" class="mt-2 text-sm text-web-primary font-medium">
              {{ slot.time }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Organisers -->
<section class="container max-w-[1280px] mx-auto mt-7 px-4 md:px-20 lg:px-10">
  <div>
    <p class="text-2xl font-medium text-web-brown mb-2">Event Organisers</p>
  </div>
  <div class="flex flex-wrap gap-4 mt-4">
    <div v-for="organiser in event.organisers" :key="organiser.name" class="flex bg-white rounded-sm shadow-web p-4 min-w-[300px] max-w-[400px] w-full gap-4 relative">
      <img src="/herowatermark.png" class="absolute opacity-20 top-0 start-0 w-[100px]" />
      <img :src="organiser.image" alt="" class="w-16 h-16 rounded-full object-cover border-2 border-web-primary z-10" />
      <div class="flex flex-col gap-2 z-10">
        <p class="font-medium text-web-brown text-lg">{{ organiser.name }}</p>
        <p class="text-web-brown/70 text-sm line-clamp-2">{{ organiser.description }}</p>
        <div class="flex gap-2 mt-2">
          <a v-if="organiser.phone" :href="`tel:${organiser.phone}`" target="_blank" class="cursor-pointer flex items-center justify-center rounded-full w-8 h-8 bg-web-primary/15 text-web-primary hover:bg-web-primary/25 transition">
            <IconsPhone class="text-sm" />
          </a>
          <a v-if="organiser.website" :href="organiser.website" target="_blank" class="flex items-center justify-center rounded-full w-8 h-8 bg-web-primary/15 text-web-primary hover:bg-web-primary/25 transition">
            <IconsWebGlobe class="text-sm" />
          </a>
          <a v-if="organiser.instagram" :href="organiser.instagram" target="_blank" class="flex items-center justify-center rounded-full w-8 h-8 bg-web-primary/15 text-web-primary hover:bg-web-primary/25 transition">
            <IconsInstgram class="text-sm" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Event Location Map -->
<section class=" container max-w-[1280px] mx-auto px-4 md:px-20 lg:px-10  mt-7 mb-8">
  <div class=" mb-4">
    <p class="text-2xl font-medium text-web-brown mb-2">Event Location</p>
  </div>
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.4314771218446!2d35.92488971147532!3d31.94918922572201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f9b6d0df885%3A0x5ba66d57515d5d4!2sRainbow%20St.%2C%20Amman!5e0!3m2!1sen!2sjo!4v1751274572384!5m2!1sen!2sjo" 
    class="w-full h-[400px]" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</section>

    </div>
</template>

<script setup>

definePageMeta({
    name: 'event'
})

const event = ref({
    id: 1,
    speakers: [
      {
        name: "Layla Al-Fayez",
        role: "Lead Vocalist",
        image: "/someone.png",
        phone: "+962790000000",
        website: "https://layla-artist.com",
        instagram: "https://instagram.com/laylaalfayez"
      },
      {
        name: "Omar Haddad",
        role: "Oud Player",
        image: "/someone.png",
        phone: "+962791111111",
        website: "https://omarhaddadmusic.com",
        instagram: "https://instagram.com/omarhaddad"
      },
      {
        name: "Sara Nasser",
        role: "Poet & Storyteller",
        image: "/someone.png",
        phone: "+962792222222",
        website: "https://saranasserpoetry.com",
        instagram: "https://instagram.com/saranasser"
      }
    ],
    organisers: [
      {
        name: "Amman Cultural Foundation",
        description: "A leading organization dedicated to promoting Jordanian arts and culture through innovative events and community engagement.",
        image: "/someone.png",
        phone: "+962793333333",
        website: "https://ammancultural.org",
        instagram: "https://instagram.com/ammancultural"
      },
      {
        name: "Desert Echoes Productions",
        description: "Specialized in creating immersive cultural experiences that bridge traditional and contemporary artistic expressions.",
        image: "/someone.png",
        phone: "+962794444444",
        website: "https://desertechoes.com",
        instagram: "https://instagram.com/desertechoes"
      }
    ],
    title: "Desert Echoes: Sunset Music & Culture Festival",
    date: "18 Feb - 20 Feb",
    location: "Abdali Boluevard",
    image: "/event2.png",
    long_description: 'Experience the magic of the desert as it comes alive with the rhythm of music and the vibrant energy of cultural celebration.\n\nThe Desert Echoes Festival transforms Abdali Boulevard into a mesmerizing oasis of sound, art, and community spirit. Over three unforgettable days, immerse yourself in a carefully curated lineup of local and international artists who will serenade you under the starlit desert sky.\n\nFrom traditional Jordanian melodies to contemporary beats, every performance tells a story of cultural fusion and artistic expression. ',
    description:
      "Join us for a magical weekend in the heart of Abdali Boluevard, where music meets the desert.",
    price: "50 JOD",
    category: "Music & Culture",
    countdownDate: "2025-07-07T21:27:00+03:00",
    parking: true,
    playArea: true,
    forAllAges: true,
    eventDays: [
      {
        title: "Day 1 - Friday, February 18",
        slots: [
          {
            title: "Morning Phase",
            description: "Opening ceremony and traditional Jordanian music performances. Experience the rich cultural heritage through authentic melodies and rhythms.",
            time: "10:00 AM - 12:00 PM"
          },
          {
            title: "Afternoon Phase",
            description: "Contemporary fusion performances featuring local artists blending traditional sounds with modern beats.",
            time: "2:00 PM - 5:00 PM"
          },
          {
            title: "Evening Phase",
            description: "Sunset concert featuring international guest artists and spectacular light shows.",
            time: "6:00 PM - 9:00 PM"
          }
        ]
      },
      {
        title: "Day 2 - Saturday, February 19",
        slots: [
          {
            title: "Cultural Workshops",
            description: "Interactive sessions on traditional Jordanian crafts, music, and storytelling techniques.",
            time: "11:00 AM - 1:00 PM"
          },
          {
            title: "Main Concert",
            description: "The highlight of the festival featuring all performers in a grand collaborative performance.",
            time: "4:00 PM - 8:00 PM"
          },
          {
            title: "Night Market",
            description: "Explore local vendors, food stalls, and artisanal crafts under the starlit sky.",
            time: "8:00 PM - 11:00 PM"
          }
        ]
      },
      {
        title: "Day 3 - Sunday, February 20",
        slots: [
          {
            title: "Community Jam Session",
            description: "Open mic and community participation where visitors can join in the musical celebration.",
            time: "10:00 AM - 12:00 PM"
          },
          {
            title: "Closing Ceremony",
            description: "Final performances and grand finale with fireworks and cultural celebrations.",
            time: "6:00 PM - 9:00 PM"
          }
        ]
      }
    ],
})
useHead({
    title: () =>  `${event.value.title} - Visit Amman`
})

const targetDate = new Date(event.value.countdownDate).getTime();

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



</script>

<style scoped>
.countdown-progress {
  background: conic-gradient(
    from 0deg,
    var(--color-web-primary) calc(var(--progress) * 1%),
    color-mix(in srgb, var(--color-white) 20%, transparent) 0%
  );
  transition: all 0.3s ease;
}
</style>