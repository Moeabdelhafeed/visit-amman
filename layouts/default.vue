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

    <Body  class="bg-cream selection:bg-web-primary/30 overflow-x-hidden">
    <GSAPTransition @leave="onLeave">

        <Loading v-if="showLoading"  />
    </GSAPTransition>
        
        <NavBarComponent v-if="!showLoading" :ScrollNum="route.name == 'events' || route.name == 'destination' || route.name == 'event'  || route.name == 'destinations' ?  0 :  route.name == 'about' || route.name == 'history' || route.name == 'mediahub' ? 100 :  150"  />
    
        <NuxtPage  />
        <FooterComponent />
    </Body>
    </Html>
</template>

<script setup>

const showLoading = ref(true)

const onLeave = (el) => {
    useGSAP().to(el , {
        y: 400,
        opacity:1,
        duration:0.7,
    })
}
onMounted(async () => {
    await nextTick()
        showLoading.value = false
})

const route = useRoute()

</script>

<style scoped>

</style>