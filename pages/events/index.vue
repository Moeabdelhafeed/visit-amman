<template>
    <div class="pt-20 ">
        <!-- bread crumbs -->
<section class="container  mx-auto px-4">
    <div class="breadcrumbs text-web-brown/70 text-sm pt-4">
        <ul>
            <li> 
                <NuxtLink :to="{name:'home'}">
                    Home
                </NuxtLink> 
            </li>
            <li> 
                <NuxtLink :to="{name:'history'}">
                    History of Amman
                </NuxtLink> 
            </li>
        </ul>
    </div>
</section>

    </div>
</template>

<script setup>

definePageMeta({
  name: 'events'
})

</script>

<style lang="scss" scoped>

</style>