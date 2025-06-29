<template>
    <div class="flex transition-all  active:scale-105 transform duration-150 hover:scale-105 hover:shadow-2xl flex-col h-[550px]  w-[calc(100vw-2rem)] max-w-[400px] overflow-hidden bg-white shadow-xl shadow-black/5 rounded-sm relative"
    
  
    >
    <div class="bg-cover w-full h-[200px] z-20 flex flex-col justify-between  bg-center bg-no-repeat" 
      :style="{ backgroundImage: `url('${event?.url}')` }" 
    >
    <div class="w-full flex justify-end">

        <div class="ps-6.5 pe-5 py-1.5 shadow  text-white bg-web-turq rounded-es-full w-max">
            {{ event?.price }}
        </div>
    </div>

    <div class="w-full flex justify-start">

        <div class="ps-5 pe-6.5 py-1.5 shadow  text-white bg-web-turq rounded-se-full w-max">
            {{ event?.date }}
        </div>
    </div>
    </div>
    <div class="flex-1 z-20 p-5 flex flex-col justify-between  ">
        <div class="flex flex-col gap-3">

        <div class="flex items-center gap-2">
            <IconsLocation class="text-web-primary text-xl" />
            <p class="text-web-brown/70">{{ event?.location }}</p>
        </div>
        <h3 class="text-xl  text-web-brown ">{{ event?.title }}</h3>
        <p class="text-web-brown/70 " v-html="event?.description.replace(/\n/g,'<br>')"></p>
        <div class="py-2.5">
            <div class="bg-web-primary/10  text-web-primary px-4 py-2 rounded-full  w-max">
                <p class="text-sm">{{ event?.category }}</p>
            </div>
        </div>
        </div>
        <button
class="
hover:rotate-2
active:rotate-2
transition-all duration-300 transform

text-white bg-web-primary text-whit rounded-sm h-12 w-full px-6
active:bg-web-primary-dark  hover:bg-web-primary-dark
"
>
            Explore Event
        </button>
    </div>

    <img
    src="/Watermark.png"
    alt="Watermark Left"
    class="absolute w-[200px] z-0 -right-15  -bottom-15 -rotate-30 "
  />


    </div>
</template>

<script setup>

defineProps({
    event: {
        type: Object,
        required: true,
    }
})

</script>

<style scoped>

</style>