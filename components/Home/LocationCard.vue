<template>
  <NuxtLink :to="{name: 'destinations'}"
    class="
      relative
      transition-all duration-300 transform
      group
      rounded-t-full
      w-[calc(100vw-4rem)]
      max-w-[350px]
      mx-auto
      p-4
      h-[62svh]
      overflow-hidden
      shadow-web
      bg-cover
      bg-center
      bg-no-repeat
      flex
      flex-col
      text-center
      items-center
      
      justify-end
      opacity-0

    "
  >
    <!-- Location image -->
    <img
      v-if="location?.url"
      :src="location.url"
      alt="Location Image"
      class="absolute group-hover:scale-105 transition-all duration-300 group-active:scale-105 top-0 left-0 w-full h-full object-cover z-0"
    />
    <div class=" inset-0 absolute bg-black/10"> </div>

    <img
      src="/watermarks/location.png"
      class="absolute -rotate-5 scale-115 -bottom-0 xl:-bottom-15 group-hover:-bottom-0 w-full transition-all duration-300"
      alt=""
    />

    <!-- Content container -->
    <div class="relative z-10 w-full">
      <p
        class="
          text-2xl
          md:text-3xl mb-4 group-hover:mb-4 group-active:mb-4 transition-all duration-300 transform
          translate-y-0
          xl:translate-y-15
          xl:group-hover:translate-y-0
          xl:group-active:translate-y-0
          font-bold text-white
        "
      >
        {{ location?.title }}
      </p>

      <button
        class="
          active:rotate-2
          hover:rotate-2
          transition-all duration-300 transform
          translate-y-0
          xl:translate-y-25
          xl:group-hover:translate-y-0
          xl:group-active:translate-y-0
          text-black bg-white rounded-sm h-13 w-full px-6
          active:bg-slate-100 hover:bg-slate-200
          cursor-pointer
        "
      >
        Explore {{ location?.title }}
      </button>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  location: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
</style>
