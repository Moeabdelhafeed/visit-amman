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
        <h1 class="text-white w-full text-4xl font-bold mb-4 mt-10">About Amman</h1>

        <div class="text-white flex justify-center breadcrumbs text-sm pt-4">
          <ul>
            <li>
              <NuxtLink :to="{ name: 'home' }"> Home </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{ name: 'about' }"> Explore Amman </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{ name: 'about' }"> About Amman </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    <img
      loading="lazy"
      :src="content?.hero?.url"
      alt="Hero Image"
      class="h-full w-full object-cover object-center"
    />
  </section>

  <!-- bread crumbs -->

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

      <div class="w-full flex justify-center mb-8">
        <img
          class="xl:h-[300px]"
          v-motion-slide-visible-once-bottom
          :src="content?.intro.image"
        />
      </div>

      <div v-motion-slide-visible-once-bottom class="flex flex-col">
        <p
          v-html="content?.intro?.body.replace(/\n/g, '<br>')"
          class="mt-6 text-web-brown/70 order-2 text-base leading-relaxed w-full"
        ></p>
      </div>
    </div>
  </section>

  <!-- Divider -->
  <hr
    class="container max-w-[1280px] md:px-20 lg:px-10 mx-auto my-12 xl:my-20 border-gray-200"
  />

  <!-- cards section -->
  <section
    v-motion-slide-visible-once-bottom
    class="container max-w-[1280px] md:px-20 lg:px-10 mx-auto text-web-brown px-4"
    v-if="content?.intro"
  >
    <div class="mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-2xl font-bold text-web-brown mb-6">Why Visit Amman?</h2>
        <!-- Decorative Line -->
        <div class="w-24 h-1 bg-web-primary mx-auto rounded-full opacity-80"></div>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-15">
        <!-- Card 1: Heritage -->
        <div
          class="group active:scale-105 transform hover:scale-105 bg-transparent flex flex-col items-center text-center text-web-brown transition-all duration-300"
        >
          <div class="text-web-primary mb-8">
            <!-- Heritage Icon: Column/Monument -->
            <svg xmlns="http://www.w3.org/2000/svg" width="50" viewBox="0 0 16 16">
              <!-- Icon from Fluent UI System Icons by Microsoft Corporation - https://github.com/microsoft/fluentui-system-icons/blob/main/LICENSE -->
              <path
                fill="currentColor"
                d="M7.292 1.712c.418-.32.999-.32 1.417 0l4.962 3.793c.632.483.293 1.491-.501 1.495H2.83c-.793-.004-1.133-1.012-.5-1.495zM8 5.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M3.5 8v3H5V8zM6 8v3h1.5V8zm2.5 0v3H10V8zM11 8v3h1.5V8zm-9 5.25c0-.69.56-1.25 1.25-1.25h9.5c.69 0 1.25.56 1.25 1.25v.25a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-4">Heritage</h3>
          <p class="leading-relaxed text-web-brown/70 text-base">
            Discover Amman's ancient ruins, archaeological wonders, and rich historical
            legacy that shaped civilizations.
          </p>
        </div>
        <!-- Card 2: Culture -->
        <div
          class="group active:scale-105 transform hover:scale-105 bg-transparent flex flex-col items-center text-center text-web-brown transition-all duration-300"
        >
          <div class="text-web-primary mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" viewBox="0 0 24 24">
              <!-- Icon from MingCute Icon by MingCute Design - https://github.com/Richard9394/MingCute/blob/main/LICENSE -->
              <g fill="none">
                <path
                  d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                />
                <path
                  fill="currentColor"
                  d="M8.828 3a3 3 0 0 0-2.12.879l-3.001 3a3 3 0 0 0 0 4.242l1.465 1.465a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414L8.478 5.064A1 1 0 0 1 8.828 5h6.344a1 1 0 0 1 .35.064l-7.23 7.229a3.82 3.82 0 0 0-1.12 2.73a3.8 3.8 0 0 0 1.121 2.685a3.82 3.82 0 0 0 3.101 1.1l1.399 1.4a1 1 0 0 0 1.414-1.415l-.809-.809q.16-.129.31-.277l.292-.293l1.293 1.293a1 1 0 0 0 1.414-1.414L15.414 16l.586-.586l1.793 1.793a1 1 0 0 0 1.414-1.414L17.414 14l2.879-2.879a3 3 0 0 0 0-4.242l-3-3A3 3 0 0 0 15.172 3z"
                />
              </g>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-4">Culture</h3>
          <p class="leading-relaxed text-web-brown/70 text-base">
            Experience vibrant art, music, cuisine, and traditions in a city where old and
            new cultures blend seamlessly.
          </p>
        </div>
        <!-- Card 3: Entertainment -->
        <div
          class="group active:scale-105 transform hover:scale-105 bg-transparent flex flex-col items-center text-center text-web-brown transition-all duration-300"
        >
          <div class="text-web-primary mb-8">
            <!-- Entertainment Icon: Ticket/Clapperboard -->
            <svg xmlns="http://www.w3.org/2000/svg" width="50" viewBox="0 0 24 24">
              <!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
              <path
                fill="currentColor"
                d="M10 21q-1.65 0-2.825-1.175T6 17t1.175-2.825T10 13q.575 0 1.063.138t.937.412V3h6v4h-4v10q0 1.65-1.175 2.825T10 21"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-4">Entertainment</h3>
          <p class="leading-relaxed text-web-brown/70 text-base">
            Enjoy lively festivals, events, theaters, and nightlife that make Amman a city
            full of excitement.
          </p>
        </div>
        <!-- Card 4: Hospitality -->
        <div
          class="group active:scale-105 transform hover:scale-105 bg-transparent flex flex-col items-center text-center text-web-brown transition-all duration-300"
        >
          <div class="text-web-primary mb-8">
            <!-- Hospitality Icon: Hand/Heart -->
            <svg xmlns="http://www.w3.org/2000/svg" width="50" viewBox="0 0 14 14">
              <!-- Icon from Streamline by Streamline - https://creativecommons.org/licenses/by/4.0/ -->
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M7 .103a.75.75 0 0 1 .75.75v1.04A7 7 0 0 1 14 8.854a1.5 1.5 0 0 1-1.5 1.5h-11a1.5 1.5 0 0 1-1.5-1.5a7 7 0 0 1 6.25-6.96V.854A.75.75 0 0 1 7 .103M.78 11.75a.75.75 0 0 0 0 1.5h12.44a.75.75 0 0 0 0-1.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-4">Hospitality</h3>
          <p class="leading-relaxed text-web-brown/70 text-base">
            Experience the warmth and generosity of Jordanian hospitality, where every
            visitor is treated like family.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Divider -->
  <hr
    class="container max-w-[1280px] md:px-20 lg:px-10 mx-auto my-12 xl:my-20 border-gray-200"
  />

  <!-- Section 1: Text Left, Image Right -->
  <section
    v-motion-slide-visible-once-bottom
    class="container max-w-[1280px] md:px-20 lg:px-10 mx-auto text-web-brown px-4"
    v-if="content?.first"
  >
    <div class="xl:grid flex flex-col xl:grid-cols-2 gap-10 items-center">
      <!-- Text Content -->
      <div class="flex flex-col order-2 xl:order-1">
        <h2 class="font-bold text-2xl order-1 mb-4">
          {{ content?.first?.title }}
        </h2>
        <div
          v-motion-slide-visible-once-bottom
          class="w-24 h-1 bg-web-primary order-2 mt-1 rounded-full opacity-80"
        ></div>
        <p
          v-html="content?.first?.body.replace(/\n/g, '<br>')"
          class="mt-6 text-web-brown/70 order-2 leading-relaxed text-base"
        ></p>
      </div>

      <!-- Image -->
      <div class="w-full h-[400px] flex justify-end order-1 xl:order-2">
        <img
          v-motion-slide-visible-once-bottom
          :src="content?.first?.image"
          class="w-full shadow-sm rounded-sm h-full object-cover"
          alt="Ancient Amman"
        />
      </div>
    </div>
  </section>

  <!-- Section 2: Image Left, Text Right -->
  <section
    v-motion-slide-visible-once-bottom
    class="container max-w-[1280px] md:px-20 lg:px-10 mx-auto text-web-brown px-4 mt-20"
    v-if="content?.second"
  >
    <div class="xl:grid flex flex-col xl:grid-cols-2 gap-8 items-center">
      <!-- Image -->
      <div class="w-full h-[400px] flex order-1 xl:order-1">
        <img
          v-motion-slide-visible-once-bottom
          class="w-full h-full shadow-sm rounded-sm object-cover"
          :src="content?.second?.image"
          alt="Modern Amman"
        />
      </div>

      <!-- Text Content -->
      <div class="flex flex-col order-2 xl:order-2">
        <h2 class="font-bold text-2xl order-1 mb-4">
          {{ content?.second?.title }}
        </h2>
        <div
          v-motion-slide-visible-once-bottom
          class="w-24 h-1 bg-web-primary order-2 mt-1 rounded-full opacity-80"
        ></div>
        <p
          v-html="content?.second?.body.replace(/\n/g, '<br>')"
          class="mt-6 order-2 text-web-brown/70 leading-relaxed text-base"
        ></p>
      </div>
    </div>
  </section>

  <!-- Divider -->
  <hr
    class="container max-w-[1280px] md:px-20 lg:px-10 mx-auto my-8 xl:my-16 border-gray-200"
  />

  <!-- 360 Virtual Tour Section -->
  <section
    v-motion-slide-visible-once-bottom
    class="container max-w-[1280px] md:px-20 lg:px-10 mx-auto text-web-brown px-4"
  >
    <div class="mx-auto my-8 xl:my-16">
      <!-- Section Header -->
      <div class="text-center mb-12 xl:mb-16">
        <h2 class="text-2xl font-bold text-web-brown mb-6">Experience Amman in 360°</h2>
        <!-- Decorative Line -->
        <div class="w-24 h-1 bg-web-primary mx-auto rounded-full opacity-80 mb-6"></div>
        <p class="text-base text-web-brown/70 max-w-2xl mx-auto leading-relaxed">
          Take an immersive virtual tour of Amman's most iconic locations. Explore the
          city from every angle and discover hidden gems from the comfort of your screen.
        </p>
      </div>

      <!-- 360 Viewer container max-w-[1280px]  md:px-20  lg:px-10  -->
      <div v-motion-slide-visible-once-bottom class="relative group">
        <!-- 360 iframe with enhanced styling -->
        <div
          class="relative overflow-hidden rounded-sm shadow-2xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-white"
        >
          <iframe
            class="w-full h-[70vh] xl:h-[80vh] transition-all duration-500 group-hover:scale-[1.02]"
            src="https://momento360.com/e/u/419f1369d4df47bba8401fded7390df9?utm_campaign=embed&utm_source=other&heading=375.76&pitch=9.69&field-of-view=75&size=medium"
            frameborder="0"
            allowfullscreen
          />

          <!-- Interactive Hints -->
          <div
            class="absolute bottom-4 start-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                />
              </svg>
              Click & drag to explore
            </span>
          </div>
        </div>
      </div>


    </div>
  </section>


</template>

<script setup>
useHead({
  title: "About - Visit Amman",
});

// Add reactive state to trigger transition
const heroRef = ref(null);

const content = ref({
  hero: {
    url: "/about/hero.jpg",
  },
  intro: {
    title: "Discover Amman",
    image: "/about/intro.png",
    body:
      "Amman, the capital and largest city of Jordan, is a fascinating blend of ancient history and modern vitality. Built on seven hills, this city of over 4 million people has been continuously inhabited for thousands of years, serving as a crossroads for civilizations from the ancient Ammonites to the modern era.\n\nToday, Amman stands as a testament to Jordan's rich heritage and bright future. From the ancient ruins of the Citadel and Roman Theater to the bustling streets of downtown and the modern districts of Abdoun and Sweifieh, the city offers visitors an unparalleled experience where every corner tells a story of conquest, culture, and continuity.",
  },
  first: {
    title: "A City of Seven Hills",
    body:
      "Amman's unique topography, built across seven hills (jabals), has shaped its development and character throughout history. Each hill has its own story: Jabal al-Qal'a (Citadel Hill) houses ancient ruins dating back to the Bronze Age, while Jabal Amman is home to the historic downtown area with its traditional souks and Ottoman-era architecture.\n\nThe city's elevation and strategic location made it a natural fortress and trading hub. From the ancient Ammonites who first settled these hills to the Romans who built their grand theater, from the Umayyads who constructed their desert palaces to the modern Jordanians who have made this city their capital, each era has left its indelible mark on the landscape and culture.",
    image: "/about/first.jpg",
  },
  second: {
    title: "Where Past Meets Present",
    body:
      "Modern Amman is a vibrant metropolis where centuries-old traditions blend seamlessly with contemporary innovation. The city's bustling souks offer everything from handcrafted Bedouin jewelry to the latest technology, while its cafes serve both traditional Arabic coffee and artisanal lattes.\n\nYoung entrepreneurs work alongside traditional craftsmen, creating a dynamic cultural landscape that honors the past while embracing the future. From the trendy districts of Abdoun and Sweifieh to the historic neighborhoods of Downtown, Amman offers visitors a unique experience where they can witness the evolution of a city that respects its heritage while confidently moving forward into the modern world.",
    image: "/about/second.jpg",
  },
});

definePageMeta({
  name: "about",
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

<style scoped></style>
