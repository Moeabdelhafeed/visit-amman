<template>
  <NuxtLink :to="{name: 'mediahub'}"
    class="text-white flex shadow-web transition-all duration-300 transform overflow-hidden flex-col justify-between group relative rounded-sm h-full w-full inner-shadow p-6 bg-center bg-no-repeat"
    
  >
    <div class="z-10 relative flex flex-col h-full justify-between">
      <div>
        <p class="text-2xl font-semibold">{{ media?.title }}</p>
        <p class="text-white/70 mt-2">{{ media?.subtitle }}</p>
      </div>
    </div>

    <!-- Image as a separate element, not as background -->
    <div
      class="absolute inset-0 z-0 group-hover:scale-105 group-active:scale-105 duration-300 transition-all"
    >
      <img :src="media?.url" alt="" class="w-full h-full object-cover" />

      <!-- Updated overlay styling to match destination card -->
      <div class="absolute inset-0 transition-all duration-300 bg-black/30"></div>
    </div>

    <div class="cursor-pointer">
      <img
        src="/watermarks/mediahub.png"
        class="absolute bottom-0 cursor-pointer end-0 h-[190px] transform translate-y-10 xl:group-hover:translate-x-0 transition-all xl:translate-x-10 duration-300 rotate-180"
        alt=""
      />
      <button
        class="absolute bottom-3 cursor-pointer end-3 xl:translate-y-10 xl:translate-x-10 xl:group-hover:translate-x-0 xl:group-hover:translate-y-0 transform transition-all duration-300 text-2xl rotate-90 z-20"
      >
        <IconsArrow45 />
      </button>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  media: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
