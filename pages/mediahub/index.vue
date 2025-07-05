<template>
  <div >
      <!-- hero section -->
<section
  class="relative h-[60svh] max-h-[350px] w-full overflow-hidden inner-shadow"
>
  <div class="absolute inset-0 bg-black/50 z-0"></div>


    <div
      ref="heroRef"
      class="z-10 absolute p-4 left-1/2 w-full top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
    >
      <!-- Title -->
      <h1 class="text-white w-full text-4xl font-bold mb-4 mt-10">{{ content.hero.title }}</h1>

      <div class="text-white flex justify-center breadcrumbs text-sm pt-4">
        <ul>
          <li>
            <NuxtLink :to="{ name: 'home' }"> Home </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{ name: 'mediahub' }"> Media Hub </NuxtLink>
          </li>
          
        </ul>
      </div>
    </div>
  <img
    loading="lazy"
    :src="content.hero.image"
    alt="Hero Image"
    class="h-full w-full object-cover object-center"
  />
</section>

<!-- Overlay for Images and Videos -->
<section v-if="showOverlay" class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/80" @click.self="closeOverlay">
  <div class="relative w-max mx-4">
    <img v-if="overlayType === 'image'" :src="overlayContent" class="w-full max-h-[80vh] object-contain shadow-lg" alt="Preview" />
    <video v-if="overlayType === 'video'" :src="overlayContent" controls class="w-full max-h-[80vh] object-contain shadow-lg" />
    <button
      @click="closeOverlay"
      class="absolute top-3 end-3 z-10 text-white text-2xl bg-white/30 backdrop-blur-sm rounded-full w-8 h-8 lg:w-9 lg:h-9 text-md flex items-center justify-center hover:bg-white/50 transition"
      style="pointer-events: auto;"
    >
      &times;
    </button>
  </div>
</section>

<!-- Images Section -->
<section class="text-web-brown relative z-30 pt-10">
  <div class="container max-w-[1280px] md:px-20 lg:px-10 px-4 mx-auto">
    <div class="section-header">
      <p v-motion-slide-visible-once-bottom class="font-bold text-2xl mb-2">
        Explore Images
      </p>
      <p v-motion-slide-visible-once-bottom class="text-md text-web-brown/70">
        Discover stunning photos of Amman
      </p>
    </div>

    <div class="p-3 w-full overflow-x-auto scrollbar-thumb-web-brown scrollbar-track-web-brown/20 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin">
      <div class="flex gap-2.5 whitespace-nowrap items-center">
        <div
          v-for="(image, idx) in content.images"
          :key="idx"
          class="group rounded-sm h-[250px] cursor-pointer transition-all min-w-[300px] relative inline-block overflow-hidden"
          @click="openImageOverlay(image.url)"
          style="user-select: none;"
        >
          <img
            :src="image.url"
            alt=""
            class="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-300 group-hover:scale-105"
          />
          <div class="bg-black/30 absolute w-full inset-0 h-full z-10"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Videos Section -->
<section class="text-web-brown relative z-30 pt-10">
  <div class="container max-w-[1280px] md:px-20 lg:px-10 px-4 mx-auto">
    <div class="section-header">
      <p v-motion-slide-visible-once-bottom class="font-bold text-2xl mb-2">
        Explore Videos
      </p>
      <p v-motion-slide-visible-once-bottom class="text-md text-web-brown/70">
        Watch amazing videos of Amman
      </p>
    </div>

    <div class="p-3 w-full overflow-x-auto scrollbar-thumb-web-brown scrollbar-track-web-brown/20 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin">
      <div class="flex gap-2.5 whitespace-nowrap items-center">
        <div
          v-for="(video, idx) in content.videos"
          :key="idx"
          class="group rounded-sm h-[250px] cursor-pointer transition-all min-w-[300px] relative inline-block overflow-hidden"
          @click="openVideoOverlay(video.url)"
          style="user-select: none;"
        >
          <img
            :src="video.thumbnail"
            alt=""
            class="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-300 group-hover:scale-105"
          />
          <div class="bg-black/30 absolute w-full inset-0 h-full z-10"></div>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div class="text-white text-5xl bg-white/30 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-white/50 transition">
              <IconsPlay />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Moments Section -->
<section class="text-web-brown relative z-30 pt-10 mb-8">
  <div class="container max-w-[1280px] md:px-20 lg:px-10 px-4 mx-auto">
    <div class="section-header">
      <p v-motion-slide-visible-once-bottom class="font-bold text-2xl mb-2">
        Special Moments
      </p>
      <p v-motion-slide-visible-once-bottom class="text-md text-web-brown/70">
        Capture the essence of Amman
      </p>
    </div>

    <div class="p-3 w-full overflow-x-auto scrollbar-thumb-web-brown scrollbar-track-web-brown/20 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin">
      <!-- REMOVED whitespace-nowrap from here -->
      <div class="flex gap-2.5 items-center">
        <div
          v-for="(moment, idx) in content.moments"
          :key="idx"
          class="group rounded-sm h-[350px] cursor-pointer transition-all min-w-[300px] relative inline-block overflow-hidden flex-shrink-0"
          @click="openMomentGallery(moment)"
          style="user-select: none;"
        >
          <div class="text-white flex shadow-web transition-all duration-300 transform  flex-col justify-between group relative rounded-sm h-full w-full inner-shadow p-6 bg-center bg-no-repeat">
            <div class="z-10 relative flex flex-col h-full justify-between">
              <div>
                <!-- Enhanced text wrapping -->
                <p class="text-2xl font-semibold break-words overflow-wrap-anywhere hyphens-auto">{{ moment.title }}</p>
                <p class="text-white/70 mt-2 break-words overflow-wrap-anywhere hyphens-auto">{{ moment.subtitle }}</p>
              </div>
            </div>

            <!-- Image as a separate element, not as background -->
            <div class="absolute inset-0 z-0 group-hover:scale-105 group-active:scale-105 duration-300 transition-all">
              <img :src="moment.image" alt="" class="w-full h-full object-cover" />
              <!-- Updated overlay styling to match destination card -->
              <div class="absolute inset-0 transition-all duration-300 bg-black/30"></div>
            </div>

            <div class="cursor-pointer">
              <img
                src="/watermarks/mediahub.png"
                class="absolute bottom-0 cursor-pointer end-0 h-[190px] transform translate-y-10 xl:group-hover:translate-x-0 transition-all xl:translate-x-10 duration-300 rotate-180"
                alt=""
              />
              <button class="absolute bottom-3 cursor-pointer end-3 xl:translate-y-10 xl:translate-x-10 xl:group-hover:translate-x-0 xl:group-hover:translate-y-0 transform transition-all duration-300 text-2xl rotate-90 z-20">
                <IconsArrow45 />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Moment Gallery Overlay -->
<section v-if="showMomentGallery" class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/80" @click.self="closeMomentGallery">
  <div class="relative w-full max-w-6xl mx-4 max-h-[90vh] overflow-hidden bg-white rounded-sm">
    <!-- Header -->
    <div class="flex justify-between items-center p-6 border-b border-gray-200">
      <div class="flex-1 pr-4">
        <h2 class="text-2xl font-bold text-web-brown break-words">{{ selectedMoment?.title }}</h2>
        <p class="text-web-brown/70 mt-1 break-words">{{ selectedMoment?.subtitle }}</p>
      </div>
      <!-- Fixed close button - now absolute positioned -->
      <button
        @click="closeMomentGallery"
        class="absolute top-4 right-4 text-web-brown text-2xl bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition z-10 flex-shrink-0"
      >
        &times;
      </button>
    </div>

    <!-- Gallery Content -->
    <div class="p-6 max-h-[70vh] overflow-y-auto">
      <!-- Images Section -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold text-web-brown mb-4">Images</h3>
        <div class="p-3 w-full overflow-x-auto scrollbar-thumb-web-brown scrollbar-track-web-brown/20 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin">
          <div class="flex gap-2.5 whitespace-nowrap items-center">
            <div
              v-for="(image, idx) in selectedMoment?.gallery?.images"
              :key="idx"
              class="group rounded-sm h-[200px] cursor-pointer transition-all min-w-[250px] relative inline-block overflow-hidden"
              @click="openImageOverlayFromGallery(image.url)"
              style="user-select: none;"
            >
              <img
                :src="image.url"
                alt=""
                class="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-300 group-hover:scale-105"
              />
              <div class="bg-black/30 absolute w-full inset-0 h-full z-10"></div>
              <div class="absolute top-3 end-3 z-20">
                <button class="text-white text-xl bg-white/30 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-white/50 transition">
                  <IconsMax />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Videos Section -->
      <div>
        <h3 class="text-lg font-semibold text-web-brown mb-4">Videos</h3>
        <div class="p-3 w-full overflow-x-auto scrollbar-thumb-web-brown scrollbar-track-web-brown/20 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin">
          <div class="flex gap-2.5 whitespace-nowrap items-center">
            <div
              v-for="(video, idx) in selectedMoment?.gallery?.videos"
              :key="idx"
              class="group rounded-sm h-[200px] cursor-pointer transition-all min-w-[250px] relative inline-block overflow-hidden"
              @click="openVideoOverlayFromGallery(video.url)"
              style="user-select: none;"
            >
              <img
                :src="video.thumbnail"
                alt=""
                class="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-300 group-hover:scale-105"
              />
              <div class="bg-black/30 absolute w-full inset-0 h-full z-10"></div>
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div class="text-white text-5xl bg-white/30 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-white/50 transition">
                  <IconsPlay />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Gallery Media Overlay (appears above moment gallery) -->
<section v-if="showGalleryOverlay" class="fixed inset-0 z-[60] flex items-center justify-center backdrop-blur-sm bg-black/80" @click.self="closeGalleryOverlay">
  <div class="relative w-max mx-4">
    <img v-if="galleryOverlayType === 'image'" :src="galleryOverlayContent" class="w-full max-h-[80vh] object-contain shadow-lg" alt="Preview" />
    <video v-if="galleryOverlayType === 'video'" :src="galleryOverlayContent" controls class="w-full max-h-[80vh] object-contain shadow-lg" />
    <button
      @click="closeGalleryOverlay"
      class="absolute top-3 end-3 z-10 text-white text-2xl bg-white/30 backdrop-blur-sm rounded-full w-8 h-8 lg:w-9 lg:h-9 text-md flex items-center justify-center hover:bg-white/50 transition"
      style="pointer-events: auto;"
    >
      &times;
    </button>
  </div>
</section>

  </div>
</template>

<script setup>

definePageMeta({
name: 'mediahub'
})

useHead({
title: 'Media Hub - Visit Amman'
})

const showOverlay = ref(false)
const overlayContent = ref('')
const overlayType = ref('')

const openImageOverlay = (imageUrl) => {
overlayContent.value = imageUrl
overlayType.value = 'image'
showOverlay.value = true
}

const openVideoOverlay = (videoUrl) => {
overlayContent.value = videoUrl
overlayType.value = 'video'
showOverlay.value = true
}

const showMomentGallery = ref(false)
const selectedMoment = ref(null)

const openMomentGallery = (moment) => {
selectedMoment.value = moment
showMomentGallery.value = true
}

const closeOverlay = () => {
showOverlay.value = false
overlayContent.value = ''
overlayType.value = ''
}

const closeMomentGallery = () => {
showMomentGallery.value = false
selectedMoment.value = null
}

const showGalleryOverlay = ref(false)
const galleryOverlayContent = ref('')
const galleryOverlayType = ref('')

const openImageOverlayFromGallery = (imageUrl) => {
galleryOverlayContent.value = imageUrl
galleryOverlayType.value = 'image'
showGalleryOverlay.value = true
}

const openVideoOverlayFromGallery = (videoUrl) => {
galleryOverlayContent.value = videoUrl
galleryOverlayType.value = 'video'
showGalleryOverlay.value = true
}

const closeGalleryOverlay = () => {
showGalleryOverlay.value = false
galleryOverlayContent.value = ''
galleryOverlayType.value = ''
}

const content = ref({
hero:{
  title:'Media Hub',
  image: '/mediahub/hero.jpg'
},
images: [
  {
    url: '/mediahub/image1.jpg',
    title: 'Amman Citadel'
  },
  {
    url: '/mediahub/image2.jpg',
    title: 'Rainbow Street'
  },
  {
    url: '/mediahub/image3.jpeg',
    title: 'Abdali Boulevard'
  },
  {
    url: '/mediahub/image4.jpeg',
    title: 'Downtown Amman'
  },
  {
    url: '/mediahub/image5.jpeg',
    title: 'Jabal Amman'
  },
  {
    url: '/mediahub/image6.jpeg',
    title: 'Jabal Amman'
  },
  {
    url: '/mediahub/image7.jpeg',
    title: 'Jabal Amman'
  },
],
videos: [
  {
    url: '/mediahub/video1.mov',
    thumbnail: '/mediahub/video1thumb.png',
    title: 'Amman City Tour'
  },
  {
    url: '/mediahub/video2.mov',
    thumbnail: '/mediahub/video2thumb.png',
    title: 'Cultural Heritage'
  },
  {
    url: '/mediahub/video3.mov',
    thumbnail: '/mediahub/video3thumb.png',
    title: 'Modern Amman'
  },
  {
    url: '/mediahub/video4.mov',
    thumbnail: '/mediahub/video4thumb.png',
    title: 'Street Life'
  }
],
moments: [
  {
    image: '/mediahub/video1thumb.png',
    title: 'Amman City Tour',
    subtitle: 'Experience the vibrant streets and historic landmarks of Jordan\'s capital',
    gallery: {
      images: [
        { url: '/mediahub/image1.jpg' },
        { url: '/mediahub/image2.jpg' },
        { url: '/mediahub/image3.jpeg' }
      ],
      videos: [
        { url: '/mediahub/video1.mov', thumbnail: '/mediahub/video1thumb.png' }
      ]
    }
  },
  {
    image: '/mediahub/video2thumb.png',
    title: 'Cultural Heritage',
    subtitle: 'Discover the rich traditions and cultural treasures of Amman',
    gallery: {
      images: [
        { url: '/mediahub/image4.jpeg' },
        { url: '/mediahub/image5.jpeg' },
        { url: '/mediahub/image6.jpeg' }
      ],
      videos: [
        { url: '/mediahub/video2.mov', thumbnail: '/mediahub/video2thumb.png' }
      ]
    }
  },
  {
    image: '/mediahub/video3thumb.png',
    title: 'Modern Amman',
    subtitle: 'Explore the contemporary side of the city with its modern architecture',
    gallery: {
      images: [
        { url: '/mediahub/image7.jpeg' },
        { url: '/mediahub/image1.jpg' },
        { url: '/mediahub/image2.jpg' }
      ],
      videos: [
        { url: '/mediahub/video3.mov', thumbnail: '/mediahub/video3thumb.png' }
      ]
    }
  },
  {
    image: '/mediahub/video4thumb.png',
    title: 'Street Life',
    subtitle: 'Immerse yourself in the daily rhythm and energy of Amman\'s streets',
    gallery: {
      images: [
        { url: '/mediahub/image3.jpeg' },
        { url: '/mediahub/image4.jpeg' },
        { url: '/mediahub/image5.jpeg' }
      ],
      videos: [
        { url: '/mediahub/video4.mov', thumbnail: '/mediahub/video4thumb.png' }
      ]
    }
  },
  {
    image: '/mediahub/image1.jpg',
    title: 'Amman Citadel',
    subtitle: 'Ancient fortress overlooking the city with breathtaking panoramic views',
    gallery: {
      images: [
        { url: '/mediahub/image1.jpg' },
        { url: '/mediahub/image2.jpg' },
        { url: '/mediahub/image3.jpeg' }
      ],
      videos: [
        { url: '/mediahub/video1.mov', thumbnail: '/mediahub/video1thumb.png' }
      ]
    }
  },
  {
    image: '/mediahub/image2.jpg',
    title: 'Rainbow Street',
    subtitle: 'Colorful and vibrant street known for its cafes, shops, and cultural scene',
    gallery: {
      images: [
        { url: '/mediahub/image4.jpeg' },
        { url: '/mediahub/image5.jpeg' },
        { url: '/mediahub/image6.jpeg' }
      ],
      videos: [
        { url: '/mediahub/video2.mov', thumbnail: '/mediahub/video2thumb.png' }
      ]
    }
  }
]
})

</script>

<style lang="scss" scoped>

</style>