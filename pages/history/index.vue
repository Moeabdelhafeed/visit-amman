<template>
  <!-- hero section -->
  <section
    v-if="content?.hero"
    class="relative h-[60svh] max-h-[350px] w-full overflow-hidden inner-shadow"
  >
    <div class="absolute inset-0 bg-black/50 z-0"></div>


      <div
      ref="heroRef"
        class="z-10 absolute p-4 left-1/2 w-full top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <!-- Title -->
        <h1 class="text-white w-full text-4xl mt-10 font-bold mb-4">History of Amman</h1>
        <div class="breadcrumbs flex justify-center text-white text-sm pt-4">
          <ul>
            <li>
              <NuxtLink :to="{ name: 'home' }"> Home </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{ name: 'about' }"> Explore Amman </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{ name: 'history' }"> History of Amman </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    <!-- bread crumbs -->

    <img
      loading="lazy"
      :src="content?.hero?.url"
      alt="Hero Image"
      class="h-full bg-fixed w-full object-cover"
    />
  </section>

  <!-- intro -->
  <section
    class="container max-w-[1280px] md:px-20 mx-auto text-web-brown text-center lg:px-50 px-4 pt-16"
    v-if="content?.intro"
  >
    <div class="mx-auto">
      <!-- Decorative Line -->
      <h2 v-motion-slide-visible-once-bottom class="font-bold order-1 text-2xl mb-6">
        {{ content?.intro?.title }}
      </h2>
      <div
        v-motion-slide-visible-once-bottom
        class="w-24 h-1 bg-web-primary mx-auto mb-8 rounded-full opacity-80"
      ></div>

      <div v-motion-slide-visible-once-bottom class="flex flex-col">
        <p
          v-html="content?.intro?.body.replace(/\n/g, '<br>')"
          class="text-web-brown/70 order-2 text-base leading-relaxed w-full"
        ></p>
      </div>
    </div>
  </section>

  <!-- Divider -->
  <hr class="max-w-[1280px] mx-auto my-12 xl:my-20 border-gray-200" />

  <!-- Timeline Section -->
  <section class="container max-w-[1280px] md:px-20 lg:px-10 mx-auto text-web-brown px-4">
    <div class="mx-auto">
      <!-- Timeline Container with vertical line -->
      <div class="relative">
        <!-- Vertical line aligned with the center of the first dot -->
        <div
          class="absolute start-4 top-[1.375rem] h-[calc(100%-1.375rem)] w-1 bg-web-primary/20 rounded-full"
        ></div>
        <div>
          <div
            v-for="(period, index) in historicalPeriods"
            :key="index"
            class="timeline-item flex items-start lg:gap-3 mb-16"
            v-motion-slide-visible-once-bottom
          >
            <!-- Dot -->
            <div class="flex flex-col relative items-center min-w-[2.5rem]">
              <div
                class="w-4 h-4 start-2.5 top-1.5 absolute bg-web-primary rounded-full border-4 border-white shadow"
              ></div>
            </div>
            <!-- Content -->
            <div class="w-full">
              <div class="flex w-full gap-5">
                <div>
                  <h3 class="text-2xl font-bold text-web-brown mb-6">
                    {{ period.title }}
                  </h3>
                  <!-- Decorative Line -->
                  <div class="w-24 h-1 bg-web-primary mb-6 rounded-full opacity-80"></div>
                  <!-- Description -->
                  <p class="text-web-brown/70 leading-relaxed text-base mb-8">
                    {{ period.description }}
                  </p>
                </div>
              </div>
              <!-- Image if available -->
              <div v-if="period.image">
                <img
                  :src="period.image"
                  :alt="period.title"
                  class="w-full h-[450px] object-cover rounded-sm shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const Refs = ref(null);

const heroRef = ref(null)

const swiper = useSwiper(Refs, {
  loop: true,
  autoplay: {
    delay: 5000,
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
});

useHead({
  title: "History - Visit Amman",
});



const content = ref({
  hero: {
    url: "about/history/hero.png",
  },
  intro: {
    title: "A Journey Through Time",
    body:
      "Amman, the capital of Jordan, is one of the oldest continuously inhabited cities in the world. From its humble beginnings as a small settlement to its current status as a modern metropolis, Amman has witnessed the rise and fall of empires, the passage of countless civilizations, and the evolution of human society. This ancient city, built on seven hills, has been a crossroads of trade, culture, and ideas for millennia.\n\nToday, Amman stands as a testament to the resilience and adaptability of human civilization, where ancient ruins coexist with modern architecture, and where the traditions of the past blend seamlessly with the innovations of the present.",
  },
});

// Historical periods with images and descriptions
const historicalPeriods = ref([
  {
    title: "Ammonite Kingdom – Rabbath Ammon (circa 1200 BCE – 500 BCE)",
    description:
      "The earliest known roots of Amman trace back to the Ammonite civilization, which made the city their capital and named it Rabbath Ammon — meaning 'the royal citadel of the Ammonites.' Perched on the city's hills, the Ammonites built defensive fortifications and a thriving society. This ancient Semitic kingdom played a significant role in regional politics and trade across the Levant. The city is frequently mentioned in Biblical texts and was known for its advanced water systems and pottery. Remnants of the Ammonite walls still exist today, buried beneath layers of later civilizations.",
    image: "/about/history/first.jpg",
  },
  {
    title: "Greco-Roman Period – Philadelphia (circa 332 BCE – 400 CE)",
    description:
      "During the Hellenistic period, Amman was renamed Philadelphia in honor of Ptolemy II Philadelphus, one of Alexander the Great's successors. It became a part of the famed Decapolis, a group of ten prominent Greco-Roman cities in the eastern Roman Empire. This era saw major urban development, with Philadelphia gaining paved streets, temples, baths, and the magnificent Roman Theater which still hosts events today. The Odeon, Nymphaeum, and extensive Roman road networks demonstrate the city's prosperity and architectural excellence during this time. Greek and Roman cultural influences flourished, blending with local traditions.",
    image: "/about/history/second.jpg",
  },
  {
    title: "Early Islamic & Umayyad Era (circa 635 CE – 750 CE)",
    description:
      "With the arrival of Islam in the 7th century, Philadelphia returned to its Semitic roots and resumed the name Amman. Under the Umayyad Caliphate, the city saw renewed urban and administrative importance. One of the most notable structures from this period is the Umayyad Palace complex on the Citadel Hill, which includes a mosque, audience hall, and residential areas. Built using a fusion of Byzantine and Islamic styles, it reflects early Islamic architectural transitions. This era marked Amman as a regional administrative center and a waypoint along key trade and pilgrimage routes connecting Damascus, Jerusalem, and the Hijaz.",
    image: "/about/history/third.jpeg",
  },
]);

// Historical significance cards
const historicalSignificance = ref([
  {
    title: "Crossroads of Civilizations",
    description:
      "Amman has served as a crucial crossroads for trade routes connecting Asia, Africa, and Europe, making it a melting pot of cultures and ideas throughout history.",
    icon:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  },
  {
    title: "Architectural Heritage",
    description:
      "The city boasts an impressive collection of historical architecture, from ancient Roman ruins to Ottoman-era buildings and modern structures, creating a unique urban landscape.",
    icon:
      "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  },
  {
    title: "Cultural Continuity",
    description:
      "Despite numerous conquests and changes in governance, Amman has maintained a continuous cultural identity, preserving traditions while adapting to new influences.",
    icon:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
  },
]);

// Modern features
const modernFeatures = ref([
  "Population over 4 million",
  "Modern infrastructure",
  "International business hub",
  "Cultural diversity",
  "Educational institutions",
  "Healthcare facilities",
  "Tourism destination",
  "Transportation network",
]);

// Cultural traditions
const culturalTraditions = ref([
  "Traditional Jordanian cuisine",
  "Amman Citadel",
  "Jordanian Bedouin culture",
  "The Great Mosque of Amman",
  "The Roman Amphitheater",
  "The Umayyad Mosque",
  "The Citadel of Amman",
  "The Jordanian National Museum",
]);

definePageMeta({
  name: "history",
});

// Set mounted state after component is mounted
onMounted(() => {
  onEnter(heroRef.value)
});

const onEnter = (el) => {
  useGSAP().set(el, { opacity: 0, y: 30 });
  useGSAP().to(el, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
  });
};

</script>

<style scoped>
/* Timeline styling */
.timeline-item {
  position: relative;
}

@media (max-width: 767px) {
  .timeline-item {
    margin-left: 0;
  }
}
</style>
