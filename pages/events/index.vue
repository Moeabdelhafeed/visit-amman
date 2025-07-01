<template>
    <div class="pt-20 ">
        <section class="container  mx-auto px-4">
    <div class="breadcrumbs text-web-brown/70 text-sm pt-4">
        <ul>
            <li> 
                <NuxtLink :to="{name:'home'}">
                    Home
                </NuxtLink> 
            </li>
            <li> 
                <NuxtLink :to="{name:'events'}">
                    Happening in Amman
                </NuxtLink> 
            </li>
        </ul>
    </div>
</section>

<!-- category section -->

<section class=" container mx-auto px-4  ">
  <div class="section-header text-web-brown pt-3">

<p   v-motion-slide-visible-once-bottom  class="font-bold text-3xl mb-2">
    {{ content?.title }}
</p>
<p  v-motion-slide-visible-once-bottom class="text-lg text-web-brown/70">
    {{ content?.subtitle }}
</p>
    </div>
</section>

<section class="container mx-auto px-4 grid mt-6     grid-cols-2">
    <div class="bg-web-primary h-[50svh] ">
    </div>
    <img :src="content?.banner?.image" class="h-[50svh]" alt="">

</section>
<div class="mt-30">

</div>

    </div>
</template>

<script setup>

definePageMeta({
  name: 'events'
})

const content = ref({
    title: "What's Happening in Amman",
    subtitle: "Discover the latest events, festivals, and activities taking place across the city.",
    banner:{
        image: '/eventbanner.png'
    }
})


useHead({
  title: 'Events - Visit Amman'
})


</script>

<style lang="scss" scoped>

</style>