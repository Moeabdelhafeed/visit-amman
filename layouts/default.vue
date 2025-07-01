<template>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </Head>
    <Html class="scrollbar-thin 
    scroll-smooth
         scrollbar-thumb-web-brown 
         scrollbar-track-web-brown/20 
         scrollbar-thumb-rounded-full 
         scrollbar-track-rounded-full ">

    <Body  class="bg-cream">
        <Loading v-if="showLoading"  />
        
        <NavBarComponent v-if="!showLoading" :ScrollNum="route.name == 'events' || route.name == 'destination' || route.name == 'event'  || route.name == 'destinations' ?  0 :  route.name == 'about' || route.name == 'history' ? 100 :  150"  />
    
        <NuxtPage  />
        <FooterComponent />
    </Body>
    </Html>
</template>

<script setup>

const showLoading = ref(true)

onMounted(async () => {
    await nextTick()
        showLoading.value = false
})

const route = useRoute()

</script>

<style scoped>

</style>