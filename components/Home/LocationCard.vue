<template>
<div
    v-if="location"
    
    class="
    relative
    hover:scale-105
    active:scale-105
    transition-all duration-300 transform
    group
    rounded-t-full
        w-[calc(100vw-4rem)]
        max-w-100
    mx-auto               
    p-4                 
    h-140
    overflow-hidden
    inner-shadow
    bg-cover
    bg-center
    bg-no-repeat
    flex
    flex-col
    text-center
    items-center
    justify-end
    "
    :style="{ backgroundImage: `url('${location?.url}')` }"
>
    <!-- Dark overlay -->
    <div class="
absolute inset-0
bg-black/40                   <!-- Default for small screens (always dark like hover) -->
xl:bg-black/30                <!-- Lighter on large screens (non-hover state on desktop) -->
xl:group-hover:bg-black/40    <!-- On hover (desktop), darken -->
transform duration-300
z-0
"></div>


    <!-- Content container -->
    <div class="relative z-10 w-full">
    <p
class="
text-white mb-4 transition-all duration-300 transform
translate-y-0                   <!-- Default (mobile) - always visible -->
xl:translate-y-60               <!-- Hidden on large screens -->
xl:group-hover:translate-y-0    <!-- Reveal on hover on large screens -->
"
>
{{ location?.subtitle }}
</p>

<p
class="
text-4xl mb-4 group-hover:mb-4 group-active:mb-4 transition-all duration-300 transform
translate-y-0
xl:translate-y-12
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
"
>
Explore Location
</button>

    </div>
</div>
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
