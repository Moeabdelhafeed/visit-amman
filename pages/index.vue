<script setup>
import { IconsUpArrow, IconsDownArrow, IconsArrow45 } from "#components";
import "vue3-carousel/carousel.css";
import DestinationCard from "~/components/Home/DestinationCard.vue";

definePageMeta({
  name: "home",
});

const sliderRef = ref(null);

const locationsRef = ref(null);

const activeIndex = ref(0);

const heroRef = ref(null);

const { y } = useWindowScroll();

function scrollTo(view) {
  console.log("scrolling to", view);
  view.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}


onMounted(() => {
});

const onSlideChange = (swiperInstance) => {
  console.log("slide changed");
  console.log("Real Index:", swiperInstance?.realIndex);

  onLeave(heroRef.value)
  setTimeout(() => {
    activeIndex.value = swiperInstance?.realIndex || 0;
    onEnter(heroRef.value)
  }, 500);
};




// Vue transition hooks with GSAP
const onEnter = (el) => {
  useGSAP().set(el, { opacity: 0, y: 30 });
  useGSAP().to(el, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "out-in",
  });
};

const onEnterWatermark = (el, { direction = "bottomRight" } = {}) => {
  // direction: 'topLeft' or 'bottomRight'
  let from = { opacity: 0, y: 50, x: 50 };
  if (direction === "topLeft") {
    from = { opacity: 0, y: -50, x: -50 };
  }
  useGSAP().set(el, from);
  useGSAP().to(el, {
    opacity: 1,
    x: 0,
    y: 0,
    duration: 0.7,
    ease: "out-in",
  });
};

const onLeave = (el, done) => {
  useGSAP().to(el, {
    opacity: 0,
    y: -30,
    duration: 0.3,
    ease: "out-in",
    onComplete: done,
  });
};

const swiper = useSwiper(sliderRef, {
  loop: true,
  autoplay: {
    delay: 7000,
  },
  allowTouchMove: true,
  simulateTouch: true,
  pagination: {
    el: ".swiper-pagination",
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
  touchEventsTarget: "container",
  on: {
    activeIndexChange: onSlideChange,
    slideChange: onSlideChange,
  },
});

const content = ref({
  sponsors: {
    title: "Our partners",
    sponsors: [
      { url: "/sponsors/acc.png", id: 0 },
      { url: "/sponsors/amaneh.png", id: 1 },
      { url: "/sponsors/acc.png", id: 2 },
      { url: "/sponsors/amaneh.png", id: 3 },
      { url: "/sponsors/acc.png", id: 4 },
      { url: "/sponsors/amaneh.png", id: 5 },
      { url: "/sponsors/acc.png", id: 6 },
      { url: "/sponsors/amaneh.png", id: 7 },
      { url: "/sponsors/acc.png", id: 8 },
      { url: "/sponsors/amaneh.png", id: 9},
    ],
  },
  mediahub: {
    title: "Amman's Media Mosaic",
    subtitle:
      "See, feel, and relive the city's vibrant pulse through images, videos, and live moments.",
    video: {
      title: "Videos of Amman",
      subtitle: "Videos",
      url: "/mediahub/video.jpeg",
    },
    Image: {
      title: "Images of Amman",
      subtitle: "Images",
      url: "/mediahub/image.jpg",
    },
    Moment: {
      title: "Live Moments in Amman",
      subtitle: "Moments",
      url: "/mediahub/moment.jpeg",
    },
  },
  ammanFestival: {
    title: "Amman Festival: Where Culture Comes Alive",
    body:
      "Step into a world of color, music, and tradition. The Amman Festival is a celebration of our city's spirit—where ancient rhythms meet modern beats, and every moment is a memory in the making. Join us for unforgettable experiences, dazzling performances, and the true taste of Amman's hospitality.",
  },
  events: {
    title: "Unmissable Events in Amman",
    subtitle:
      "From music under the stars to cultural feasts—discover what's happening now in the heart of Jordan.",
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
        countdownDate: "2025-07-31T21:27:00+03:00",
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
        countdownDate: "2025-07-31T21:27:00+03:00",
      },
    ],
  },
  about: {
    title: "Get to Know Amman",
    image: "/Amman.png",
    subtitle: "A city of contrasts, where every corner tells a story.",
    body:
      "Amman is a city that bridges the past and the present. Wander through ancient ruins, savor world-class cuisine, and experience the warmth of a community that welcomes you like family. Whether you're here for history, adventure, or a taste of local life, Amman invites you to explore, connect, and create your own story.\n\nFrom bustling souks to tranquil hillsides, every moment in Amman is a new discovery. Come and see why our city is the beating heart of Jordan!",
  },
  destinations: {
    title: "Your Amman Adventure Awaits",
    subtitle:
      "Handpicked experiences for every explorer—dine, play, and discover the best of the city.",
    destinations: [
      { title: "Restaurants", subtitle: "Best places to eat in Amman", url: "/destinations/resturants.jpg" },
      {
        title: "Cafes",
        subtitle: "Cozy spots for coffee and tea",
        url: "/destinations/cafe.jpeg",
      },
      {
        title: "Entertainments",
        subtitle: "Fun activities and nightlife",
        url: "/destinations/entertaiment.jpeg",
      },
      { title: "Parks", subtitle: "Relax in Amman's green spaces", url: "/destinations/parks.jpeg" },
      { title: "Museums", subtitle: "Discover history and culture", url: "/destinations/mu.jpg" },
      {
        title: "Shopping",
        subtitle: "Explore malls and local markets",
        url: "/destinations/shopping.jpg",
      },
    ],
  },
  locations: {
    title: "Hidden Corners & Iconic Streets",
    subtitle:
      "Journey through Amman's eclectic neighborhoods—where history, culture, and modern life intertwine.",
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
  },
  hero: {
    images: [
      {
        url: "/home/hero1.jpg",
        id: 0,
        title: "Discover Ancient Roman Theater",
        subtitle: "Step into history at the magnificent Roman amphitheater",
      },
      {
        url: "/home/hero2.jpg",
        id: 1,
        title: "Experience Jordanian Culture",
        subtitle: "Immerse yourself in authentic local traditions and heritage",
      },
      {
        url: "/home/hero3.jpg",
        id: 2,
        title: "Warm Jordanian Hospitality",
        subtitle: "Experience the legendary warmth and generosity of our people",
      },
      {
        url: "/home/hero4.jpg",
        id: 3,
        title: "Vibrant Night Entertainment",
        subtitle: "Discover Amman's exciting nightlife and entertainment scene",
      },
      {
        url: "/home/hero5.jpg",
        id: 4,
        title: "",
        subtitle: "",
      },
    ],
  },
  statistics: {
    title: "Amman in Numbers",
    stats: [
      { number: "4M+", label: "Population" },
      { number: "7,000+", label: "Years of History" },
      { number: "100+", label: "Nationalities" },
      { number: "50+", label: "Museums & Galleries " },
      { number: "300+", label: "Restaurants & Cafes" },
      { number: "20+", label: "Annual Festivals" },
    ],
  },
});

const scrollLocations = (direction) => {
  if (!locationsScroll.value) return;
  const scrollAmount = 300;
  locationsScroll.value.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });
};

useHead({
  title: "Home - Visit Amman",
});

const locationsScroll = ref(null);
</script>

<template>
  <!-- hero section -->
  <section
    v-if="content?.hero"
    class="relative z-0 h-svh w-full overflow-hidden inner-shadow"
  >
    <!-- <GSAPTransition
      @enter="(el) => onEnterWatermark(el, { direction: 'topLeft' })"
      @appear="(el) => onEnterWatermark(el, { direction: 'topLeft' })"
    >
      <img
        v-if="showanimations"
        src="/herowatermark.png"
        class="absolute pointer-events-none z-50 lg:h-60 h-30"
        alt=""
      />
    </GSAPTransition> -->
    <!-- <GSAPTransition
      @enter="(el) => onEnterWatermark(el, 'bottomRight')"
      @appear="(el) => onEnterWatermark(el, 'bottomRight')"
    >
      <img
        v-if="showanimations"
        src="/herowatermark.png"
        class="absolute pointer-events-none z-50 end-0 lg:h-60 h-30 bottom-0 rotate-180"
        alt=""
      />
    </GSAPTransition> -->

    <div
      class="absolute pointer-events-none inset-0 z-30 flex flex-col justify-center items-center text-center text-white px-4"
    >
      
        <div ref="heroRef" :key="activeIndex" class="text-content text-center">
          <h1 class="mb-3 text-4xl md:text-5xl font-bold">
            {{ content.hero.images[activeIndex].title }}
          </h1>
          <p class="text-md md:text-lg text-white/90 leading-relaxed">
            {{ content.hero.images[activeIndex].subtitle }}
          </p>
          <!-- <button   class="mt-5 cursor-pointer pointer-events-auto  active:rotate-2 hover:rotate-2 text-white bg-web-primary rounded-sm h-12  px-6 active:bg-web-primary-dark hover:bg-web-primary-dark transition duration-300 animated-button">
        Explore Now
        
</button> -->
        </div>
      
    </div>

    <swiper-container ref="sliderRef" :init="false" class="absolute inset-0 z-0">
      <swiper-slide v-for="image in content?.hero?.images" :key="image.id">
        <img
          loading="lazy"
          :src="image.url"
          alt="Hero Image"
          class="h-svh w-full object-cover"
        />
        <div class="absolute inset-0 bg-black/40 z-10"></div>
      </swiper-slide>
    </swiper-container>

    <!-- Navigation Buttons - Hidden on lg screens and under -->
    <!-- <div class="absolute inset-0 z-40 hidden xl:flex items-center justify-between px-4 pointer-events-none">
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
</div> -->

    <!-- Pagination -->
    <div class="absolute bottom-25 left-1/2 transform -translate-x-1/2 z-50">
      <div
        class="swiper-pagination backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:bg-white/50 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet-active]:bg-white [&_.swiper-pagination-bullet-active]:scale-125 [&_.swiper-pagination-bullet:hover]:bg-white/70 [&_.swiper-pagination-bullet:hover]:scale-110 [&_.swiper-pagination]:!static [&_.swiper-pagination]:!flex [&_.swiper-pagination]:items-center [&_.swiper-pagination]:gap-2"
      ></div>
    </div>

    <div
      class="absolute mt-20 inset-0 flex flex-col justify-center items-center text-center text-white px-4 pointer-events-none"
    >
      <button
        @click="scrollTo(locationsRef)"
        class="whitespace-nowrap cursor-pointer absolute bottom-5 gap-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50 pointer-events-auto"
      >
        Explore now
        <span class="text-xl animate-bounce">
          <IconsDownArrow />
        </span>
      </button>
    </div>
  </section>

  <section
    ref="locationsRef"
    v-if="content?.locations"
    class="] text-web-brown relative z-30 pt-20 xl:pt-30"
  >
    <div>
      <div
        class="md:flex container max-w-[1280px] md:px-20 lg:px-10 overflow-visible px-4 mx-auto justify-between"
      >
        <div class="section-header">
          <p v-motion-slide-visible-once-bottom class="font-bold text-2xl mb-2">
            {{ content?.locations?.title }}
          </p>
          <p v-motion-slide-visible-once-bottom class="text-md text-web-brown/70">
            {{ content?.locations?.subtitle }}
          </p>
        </div>

        <!-- <button  v-motion-slide-visible-once-bottom class="mt-7 cursor-pointer hover:rotate-2 active:rotate-2 transform md:mt-0 text-web-primary bg-web-primary/15 rounded-sm h-12  px-6 active:bg-web-primary/20 hover:bg-web-primary/20 transition duration-300 animated-button">
    <span class="flex whitespace-nowrap   items-center gap-4 justify-center">
        More Locations
        <span class="text-2xl">
            <IconsArrow45 />
            </span> 
    </span>
</button> -->
      </div>

      <div class="relative w-full">
        <!-- Left Arrow -->
        <button
          @click="scrollLocations('left')"
          class="items-center hover:scale-110 hidden md:flex text-white bg-web-primary hover:bg-web-primary-dark active:bg-web-primary-dark justify-center absolute start-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full shadow transition"
          aria-label="Scroll left"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <!-- Right Arrow -->
        <button
          @click="scrollLocations('right')"
          class="items-center text-white hidden md:flex hover:scale-110 bg-web-primary hover:bg-web-primary-dark active:bg-web-primary-dark justify-center absolute right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full shadow transition"
          aria-label="Scroll right"
        >
          <svg
            class="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <!-- Scrollable Area -->
        <div
          class="scrollbar-thin xl:[scrollbar-width:none] xl:[&::-webkit-scrollbar]:hidden scrollbar-thumb-web-brown scrollbar-track-web-brown/20 scrollbar-thumb-rounded-full scrollbar-track-rounded-full overflow-x-auto mx-auto flex flex-row py-10 snap-x snap-mandatory w-full"
          ref="locationsScroll"
        >
          <div class="flex">
            <div
              class="lg:w-[calc((100vw-1280px)/2+40px)] lg:min-w-[40px] md:min-w-[80px] md:w-[80px] w-[16px] snap-start"
            ></div>
            <div class="flex gap-4">
              <div
                v-for="(location, index) in content?.locations?.locations"
                :key="index"
                class="snap-start w-max"
                ref="locationCards"
              >
                <HomeLocationCard
                  v-motion-slide-visible-once-right
                  :location="location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section v-if="content?.events" class="text-web-brown relative z-30 pt-10 xl:pt-20">
    <div>
      <div
        class="md:flex container max-w-[1280px] md:px-20 lg:px-10 overflow-visible px-4 mx-auto justify-between"
      >
        <div class="section-header">
          <p v-motion-slide-visible-once-bottom class="font-bold text-2xl mb-2">
            {{ content?.events?.title }}
          </p>
          <p v-motion-slide-visible-once-bottom class="text-md text-web-brown/70">
            {{ content?.events?.subtitle }}
          </p>
        </div>

        <button
          v-motion-slide-visible-once-bottom
          class="mt-7 cursor-pointer md:mt-0 active:rotate-2 hover:rotate-2 text-web-primary bg-web-primary/15 rounded-sm h-12 px-6 active:bg-web-primary/20 hover:bg-web-primary/20 transition duration-300 animated-button"
        >
          <NuxtLink
            :to="{ name: 'events' }"
            class="flex whitespace-nowrap items-center gap-4 justify-center"
          >
            Explore events
            <span class="text-2xl">
              <IconsArrow45 />
            </span>
          </NuxtLink>
        </button>
      </div>
      <div
        class="container max-w-[1280px] md:px-20 lg:px-10 flex justify-center mx-auto px-4"
      >
        <div class="mt-10 grid grid-cols-1 w-max lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <div
            v-for="(event, index) in content.events.events"
            :key="index"
            class="event-card"
          >
            <HomeEventCard v-motion-slide-visible-once-bottom :event="event" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    v-if="content?.destinations"
    class="text-web-brown relative z-30 pt-20 xl:pt-30"
  >
    <div>
      <div
        class="md:flex container max-w-[1280px] md:px-20 lg:px-10 overflow-visible px-4 mx-auto justify-between"
      >
        <div class="section-header">
          <p v-motion-slide-visible-once-bottom class="font-bold text-2xl mb-2">
            {{ content?.destinations?.title }}
          </p>
          <p v-motion-slide-visible-once-bottom class="text-md text-web-brown/70">
            {{ content?.destinations?.subtitle }}
          </p>
        </div>

        <button
          v-motion-slide-visible-once-bottom
          class="mt-7 cursor-pointer active:rotate-2 md:mt-0 hover:rotate-2 text-web-primary bg-web-primary/15 rounded-sm h-12 px-6 active:bg-web-primary/20 hover:bg-web-primary/20 transition duration-300 animated-button"
        >
          <NuxtLink
            :to="{ name: 'destinations' }"
            class="flex whitespace-nowrap items-center gap-4 justify-center"
          >
            Explore destinations
            <span class="text-2xl">
              <IconsArrow45 />
            </span>
          </NuxtLink>
        </button>
      </div>
      <div class="container max-w-[1280px] md:px-20 lg:px-10 mx-auto px-4">
        <div class="mt-10 grid lg:grid-cols-2 gap-4">
          <div
            class="w-full h-[250px] destination-card"
            v-for="(destination, index) in content.destinations.destinations"
            :key="index"
          >
            <HomeDestinationCard
              v-motion-slide-visible-once-bottom
              :destination="destination"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Statistics Section -->
  <section
    v-motion-slide-visible-once-bottom
    v-if="content?.statistics"
    class="relative text-web-brown z-30 pt-20 xl:pt-25"
  >
    <div class="container max-w-[1280px] md:px-20 lg:px-10 mx-auto px-4">
      <div class="text-center mb-10 section-header">
        <h2 class="font-bold text-3xl   mb-4">{{ content?.statistics?.title }}</h2>
        <div class="w-24 h-1 bg-web-primary mx-auto rounded-full"></div>
      </div>

      <!-- Grid container with responsive columns and staggered effect on small screens -->
      <div
        class="grid grid-cols-2 lg:px-40 md:px-0 gap-4 lg:grid-cols-3 w-full place-items-center mx-auto"
      >
        <HomeStaticCard
          v-for="(stat, index) in content?.statistics?.stats"
          :key="index"
          class="transition-all duration-300 w-full lg:h-[200px] h-[150px]"
          v-motion-slide-visible-once-bottom
          :stat="stat"
        />
      </div>
    </div>
  </section>

  <section
    v-if="content?.ammanFestival"
    class="relative overflow-hidden z-30  text-white bg-web-purple mt-20 xl:mt-30 festival-section"
  >
    <!-- Watermark Background Image -->
    <img
      loading="lazy"
      src="/watermarks/bag.png"
      class="absolute z-0 w-[600px] opacity-5 md:-bottom-30 -bottom-0 md:-start-30 -start-60 pointer-events-none select-none"
    />

    <div
      class="container max-w-[1280px] md:px-20 lg:px-10 relative z-10 px-4 mx-auto xl:mt-0"
    >
      <div class="xl:grid flex flex-col xl:grid-cols-2 py-10">
        <!-- Text Side -->
        <div
          v-motion-slide-visible-once-bottom
          class="flex flex-col xl:order-1 order-2 justify-center items-start gap-4 festival-content"
        >
          <h2 class="text-2xl font-bold mb-4">{{ content?.ammanFestival?.title }}</h2>
          <p
            class="text-md text-white/70 mb-6 text-start leading-relaxed"
            v-html="content?.ammanFestival?.body.replace(/\n/g, '<br>')"
          ></p>
          <div class="flex flex-col xl:flex-row gap-4 justify-start">
            <button
              class="text-web-purple cursor-pointer hover:bg-slate-100 hover:rotate-2 active:rotate-2 active:bg-slate-100 bg-white rounded-[5px] h-13 px-6 transition duration-300 animated-button festival-btn"
            >
              <span class="flex items-center gap-4 justify-center">
                <img
                  loading="lazy"
                  class="object-contain w-4"
                  src="/festivalIcon.png"
                  alt=""
                />
                <span>Amman Festival</span>
              </span>
            </button>
          </div>
        </div>

        <!-- Image Side -->
        <div
          v-motion-slide-visible-once-bottom
          class="flex order-1 xl:justify-end justify-center xl:py-5 pb-10 items-center"
        >
          <div
            class="flex flex-col justify-between xl:w-[350px] w-[250px] h-[350px] xl:h-[500px] relative"
          >
            <img
              loading="lazy"
              class="w-full h-auto object-cover"
              src="/char/portalstart.png"
            />
            <img
              v-gsap.magnetic.strong
              v-motion-slide-visible-once-bottom
              loading="lazy"
              class="w-full bottom-20 -end-10 absolute h-auto object-cover festival-character"
              src="/char/char.png"
            />
            <img loading="lazy" class="w-full h-auto object-cover" src="/char/portalend.png" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section v-if="content?.about" class="relative text-web-brown pt-20 xl:pt-30 z-20">
    <div>
      <div
        class="container max-w-[1280px] md:px-20 lg:px-10 relative overflow-visible px-4 mx-auto justify-between"
      >
        <div class="xl:grid grid-cols-2 justify-between gap-8">
          <!-- Amman Image (Mobile First, Desktop Second) -->
          <div class="flex flex-col order-1 xl:order-2 items-center justify-center">
            <img
              v-motion-slide-visible-once-bottom
              loading="lazy"
              class="hover:scale-105 active:scale-105 transition duration-300 w-[500px] xl:w-full object-center mask-[url('/masks/amman.png')] mask-no-repeat mask-[size:contain] mask-top"
              src="/about/amman.jpeg"
              alt="Amman Desktop"
            />
          </div>

          <!-- Left Content -->
          <div
            class="flex rounded-sm flex-col mt-15 xl:mt-0 gap-8 order-2 xl:order-1 about-content"
          >
            <div class="w-full flex flex-col">
              <p v-motion-slide-visible-once-bottom class="font-bold text-2xl mb-2">
                {{ content?.about?.title }}
              </p>
              <p v-motion-slide-visible-once-bottom class="text-md text-web-brown/70">
                <img src="/brand/sloganenglish.png" class="h-8" alt="" />
              </p>
            </div>

            <p
              v-motion-slide-visible-once-bottom
              v-html="content?.about?.body.replace(/\n/g, '<br>')"
              class="text-start xl:mt-0 mt-3 text-md text-web-brown/70 leading-relaxed"
            ></p>

            <div>
              <NuxtLink :to="{ name: 'about' }">
                <button
                  v-motion-slide-visible-once-bottom
                  class="w-max cursor-pointer xl:mt-8 active:rotate-2 hover:rotate-2 text-white bg-web-primary rounded-sm h-12 px-6 active:bg-web-primary-dark hover:bg-web-primary-dark transition duration-300 animated-button"
                >
                  <span class="flex whitespace-nowrap items-center gap-4 justify-center">
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

  <section v-if="content?.mediahub" class="text-web-brown relative z-30 pt-20 xl:pt-30">
    <div>
      <div
        class="md:flex container max-w-[1280px] md:px-20 lg:px-10 overflow-visible px-4 mx-auto justify-between"
      >
        <div class="section-header">
          <p v-motion-slide-visible-once-bottom class="font-bold text-2xl mb-2">
            {{ content?.mediahub?.title }}
          </p>
          <p v-motion-slide-visible-once-bottom class="text-md text-web-brown/70">
            {{ content?.mediahub?.subtitle }}
          </p>
        </div>
      </div>
      <div class="container max-w-[1280px] md:px-20 lg:px-10 mx-auto px-4">
        <div class="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="w-full lg:h-[320px] h-[350px] media-card">
            <HomeMediaCard
              v-motion-slide-visible-once-bottom
              :media="content?.mediahub?.Image"
            />
          </div>
          <div class="w-full lg:row-span-2 lg:h-auto h-[350px] media-card">
            <HomeMediaCard
              v-motion-slide-visible-once-bottom
              :media="content?.mediahub?.video"
            />
          </div>
          <div class="w-full lg:h-[320px] h-[350px] media-card">
            <HomeMediaCard
              v-motion-slide-visible-once-bottom
              :media="content?.mediahub?.Moment"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
  
  v-if="content?.sponsors"
  class="relative z-30 py-20 xl:py-25"
>

  
  <div class="container max-w-[1280px] md:px-20 lg:px-10 mx-auto px-4 relative z-10">
    <div class="text-center mb-10 section-header">
      <h2 v-motion-slide-visible-once-bottom class="font-bold text-3xl  mb-6 text-web-brown">
        {{ content?.sponsors?.title }}
      </h2>
      <div class="w-24 h-1 bg-web-primary mx-auto rounded-full mb-4"></div>
     
    </div>

    <!-- Sponsors Grid -->
    <div class="lg:px-20 mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center justify-items-center">
        <div
          v-for="(sponsor, index) in content?.sponsors?.sponsors"
          :key="index"
          class="group w-full  relative shadow-web rounded-sm  h-[200px]  flex items-center justify-center  bg-white backdrop-blur-sm  transition-all duration-300 hover:scale-105 active:scale-105" 
        >
          <!-- Subtle gradient overlay -->
          <div v-motion-slide-visible-once-bottom class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent "></div>
          
          <div class="relative z-10 flex items-center justify-center ">
            <img
              loading="lazy"
              :src="`${sponsor.url}`"
              alt="Sponsor Logo"
              class="max-h-full max-w-full h-25 object-contain filter grayscale group-hover:grayscale-0 group-active:grayscale-0 transition-all duration-300"
            />
          </div>
          
          <!-- Hover effect ring -->
          <div class="absolute inset-0 rounded-sm ring-2 ring-web-primary/0 group-hover:ring-web-primary group-active:ring-web-primary transition-all duration-300"></div>
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
