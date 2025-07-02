<template>
    
    <div  
    :style="{ backgroundImage: `url('${media?.url}')` }" class="
    text-white 
    flex 
     hover:scale-105
     active:scale-105
    transition-all duration-300 transform
    overflow-hidden
    flex-col
    justify-between 
    group 
    relative
    rounded-sm
    h-full
    w-full
    bg-cover
    inner-shadow
    p-6
    bg-center
    bg-no-repeat">

<div class="z-10 ">
    <p class="text-2xlxl font-semibold">{{ media?.title }}</p>
    <p class="text-white/70 mt-2">{{ media?.subtitle }}</p>
</div>
<div class="z-10 relative">
    <button
class="
active:rotate-2
hover:rotate-2
transition-all duration-300 transform
text-black bg-white rounded-sm h-12  px-6
active:bg-slate-100 hover:bg-slate-200
"
>
Explore {{ media.subtitle }}
</button>
</div>



           <div class="
absolute inset-0
bg-black/40                   
xl:bg-black/30                
xl:group-hover:bg-black/40    
transform duration-300
z-0
"></div>

    </div>
</template>

<script setup>

const props = defineProps({
    media:{
        type: Object,
        required: true,
    }
})
</script>

<style scoped>

</style>