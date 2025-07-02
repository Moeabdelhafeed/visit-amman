<template>
  <div
    class="
      text-white 
      flex 
      transition-all duration-300 transform
      overflow-hidden
      flex-col
      justify-between 
      group 
      relative
      rounded-sm
      h-full
      w-full
      inner-shadow
      p-6
      bg-center
      bg-no-repeat
    "
  >

  <div class="z-10 relative flex flex-col h-full justify-between">
      <div>
        <p class="text-2xl font-semibold">{{ destination?.title }}</p>
        <p class=" text-slate-200 mt-2 text-base" v-html="destination?.subtitle.replace(/\n/g,'<br>')"></p>
      </div>
      <div class="mt-6">
        
      </div>
    </div>
    <!-- Image as a separate element, not as background -->
    <div class="absolute inset-0 z-0 group-hover:scale-105 duration-300  transition-all ">
      <img
        :src="destination?.url"
        alt=""
        class="w-full h-full object-cover"
      />

      
      <div
        class="
          absolute inset-0
          transition-all duration-300
         bg-black/30 
          
        "
      ></div>
    </div>
    <div class=" cursor-pointer">

      <img src="/herowatermarkfull.png" class="absolute bottom-0 cursor-pointer end-0 h-[190px] trnasfor translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0m transition-all translate-x-10  duration-300  rotate-180" alt="">
      <button class=" absolute bottom-3 cursor-pointer end-3   lg:translate-y-10 translate-x-10 group-hover:translate-x-0 group-hover:translate-y-0 trnasform transition-all  duration-300 text-2xl   rotate-90 z-20" >
        <IconsArrow45  />
      </button>
    </div>
    
  </div>
</template>

<script setup>
const props = defineProps({
    destination:{
        type: Object,
        required: true,
    }
})
</script>

<style scoped>

</style>