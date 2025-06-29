<template>
<div class="drawer  flex flex-col z-50 fixed top-0 left-0 w-full">
    
        
        <div class=" bg-white hidden xl:flex justify-center border-b-1 py-1 border-web-brown/20">

    <NuxtLink to="/" class="w-40">
        <img src="/colourfullogo.png" alt="Logo" class="object-contain" />
    </NuxtLink>
    </div>

    <!-- Drawer toggle -->
    <input id="nav-drawer" type="checkbox" class="drawer-toggle" />

    <!-- Main content -->
    <div class="drawer-content bg-white text-web-brown transition-all duration-300">
    <div class="navbar mx-auto container py-3.5 flex items-center justify-between">


 
        <div class="flex  items-center ">

        <!-- Horizontal menu (hidden on small screens) -->
        <ul class="hidden xl:flex gap-10 items-center">
         <!-- About Dropdown -->
         <li >
                <button class="text-sm flex justify-between items-center gap-1.5 cursor-pointer opacity-85 hover:opacity-100 "   popovertarget="popover-3" style="anchor-name:--anchor-3">
                About 
                <span class="text-lg">

<IconsDownArrowDropDown />
</span>
            </button>
            <ul  class="dropdown text-web-brown  [&_li>*:not(ul):not(.menu-title):not(details):active]:bg-web-primary dropdown-start menu w-52 rounded-box bg-base-100 shadow-sm"
            popover id="popover-3" style="position-anchor:--anchor-3">
            <li :class="$route.name == 'about'? 'bg-web-brown/10' : ''"  class=" text-web-brown active:bg-web-brown/10  hover:bg-web-brown/10 rounded-sm"><NuxtLink :to="{name: 'about'}">Explore Amman</NuxtLink></li>
            <li :class="$route.name == 'history'? 'bg-web-brown/10' : ''" class=" text-web-brown active:bg-web-brown/10  hover:bg-web-brown/10 rounded-sm"><NuxtLink :to="{name: 'history'}">History of Amman</NuxtLink></li>
            
            </ul>

            </li>
            
            <li><NuxtLink :to="{name: 'events'}" active-class="border-b-2 opacity-100" class="py-3"><button class="text-sm hover:opacity-100 cursor-pointer" :class="$route.name === 'events' ? 'opacity-100' : 'opacity-85'">Events</button></NuxtLink></li>
            <li><NuxtLink :to="{name: 'destinations'}" active-class="border-b-2 opacity-100" class="py-3"><button class="text-sm hover:opacity-100 cursor-pointer" :class="$route.name === 'destinations' ? 'opacity-100' : 'opacity-85'">Where to go</button></NuxtLink></li>
            <li><NuxtLink :to="{name: 'mediahub'}" active-class="border-b-2 opacity-100" class="py-3"><button class="text-sm hover:opacity-100 cursor-pointer" :class="$route.name === 'mediahub' ? 'opacity-100' : 'opacity-85'">Media hub</button></NuxtLink></li>
        </ul>
        </div>
        <!-- Logo -->

        

        <div class="hidden xl:flex  items-center justify-end text-web-brown">
            
            
                <!-- change popover-1 and --anchor-1 names. Use unique names for each dropdown -->
                <button  popovertarget="popover-2" style="anchor-name:--anchor-2">
                <span class="text-2xl opacity-85 hover:opacity-100 cursor-pointer flex font-semibold border-e-1 mx-4 px-3">
                   <IconsLanGlobe />
                </span>
            </button>
            <ul v-if="langs" class="dropdown  [&_li>*:not(ul):not(.menu-title):not(details):active]:bg-web-primary dropdown-end menu w-52 rounded-box bg-base-100 shadow-sm"
            popover id="popover-2" style="position-anchor:--anchor-2">
            <li v-for="lang in langs" :key="lang" class="active:bg-web-brown/10  hover:bg-web-brown/10 rounded-sm"><a>{{lang.name}}</a></li>
            
            </ul>
            
            
        <button class="text-white cursor-pointer bg-web-purple rounded-[5px] h-12   px-6 active:bg-web-purple-dark hover:bg-web-purple-dark transition duration-300">
            <span class="flex items-center gap-4 justify-center">
                <img class="object-contain w-4" src="/festivalIcon.png" alt=""> Amman Festival
            </span>
        </button>
        </div>

        <!-- Drawer toggle button (visible only on small screens) -->
        <div class="xl:hidden relative flex items-center w-full justify-between">
  
  <!-- Left: Drawer toggle -->
  <label for="nav-drawer" class="p-2 cursor-pointer z-10">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 opacity-85 hover:opacity-100 stroke-current">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </label>

  <!-- Center: Logo (absolute center) -->
  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white ">
    <NuxtLink to="/" >
      <img src="/colourfullogo.png" alt="Logo" class="object-contain h-12" />
    </NuxtLink>
  </div>

  <!-- Right: Language + Festival -->
  <div class="flex items-center gap-2">
    <button popovertarget="popover-1" style="anchor-name:--anchor-1">
      <span class="text-2xl opacity-85 hover:opacity-100 cursor-pointer flex  md:border-e-1 mx-2 md:px-3">
        <IconsLanGlobe />
      </span>
    </button>

    <ul v-if="langs" class="dropdown [&_li>*:not(ul):not(.menu-title):not(details):active]:bg-web-primary dropdown-end menu w-52 rounded-box bg-base-100 shadow-sm" popover id="popover-1" style="position-anchor:--anchor-1">
      <li v-for="lang in langs" :key="lang" class="active:bg-web-brown/10 hover:bg-web-brown/10 rounded-sm">
        <a>{{lang.name}}</a>
      </li>
    </ul>

    <button class="text-white cursor-pointer bg-web-purple rounded-[5px] hidden md:block h-12 px-6 hover:bg-web-purple-dark active:bg-web-purple-dark transition duration-300">
      <span class="flex items-center gap-4 justify-center">
        <img class="object-contain w-4" src="/festivalIcon.png" alt=""> <span class="hidden xl:block"> Amman Festival </span> 
      </span>
    </button>
  </div>
</div>

    </div>
    </div>

    <!-- Drawer side menu -->
   <!-- Drawer side menu -->
   <div class="drawer-side z-50">
    <label for="nav-drawer" class="drawer-overlay"></label>
    <ul class="flex-col flex gap-2 p-3 w-64 min-h-full bg-cream text-web-brown">
        
        <li><NuxtLink :to="{name: 'home'}" active-class="bg-web-brown/10 opacity-100" class="py-3 text-sm p-2 hover:bg-web-brown/10 active:bg-web-brown/10 rounded-sm opacity-85 w-full flex transition duration-300 cursor-pointer">Home</NuxtLink></li>
        
        <!-- About Dropdown -->
        <li >
            <button popovertarget="popover-4" style="anchor-name:--anchor-4" class="py-3  text-sm p-2 hover:bg-web-brown/10 active:bg-web-brown/10 rounded-sm opacity-85 w-full flex transition duration-300 cursor-pointer justify-between items-center">
                About
                <span class="text-lg">
                    <IconsDownArrowDropDown />
                </span>
            </button>
            
            <ul  class="dropdown text-web-brown  [&_li>*:not(ul):not(.menu-title):not(details):active]:bg-web-primary dropdown-end menu w-52 rounded-box bg-base-100 shadow-sm"
            popover id="popover-4" style="position-anchor:--anchor-4">
            <li :class="$route.name == 'about'? 'bg-web-brown/10' : ''"  class=" text-web-brown active:bg-web-brown/10  hover:bg-web-brown/10 rounded-sm"><NuxtLink :to="{name: 'about'}">Explore Amman</NuxtLink></li>
            <li :class="$route.name == 'history'? 'bg-web-brown/10' : ''" class=" text-web-brown active:bg-web-brown/10  hover:bg-web-brown/10 rounded-sm"><NuxtLink :to="{name: 'history'}">History of Amman</NuxtLink></li>
            
            </ul>
        </li>
       
        
        <li><NuxtLink :to="{name: 'events'}" active-class="bg-web-brown/10 opacity-100" class="py-3 text-sm p-2 hover:bg-web-brown/10 rounded-sm opacity-85 active:bg-web-brown/10 w-full flex transition duration-300 cursor-pointer">Events</NuxtLink></li>
        <li><NuxtLink :to="{name: 'destinations'}" active-class="bg-web-brown/10 opacity-100" class="py-3 text-sm p-2 hover:bg-web-brown/10 rounded-sm opacity-85 active:bg-web-brown/10 w-full flex transition duration-300 cursor-pointer">Where to go</NuxtLink></li>
        <li><NuxtLink :to="{name: 'mediahub'}" active-class="bg-web-brown/10 opacity-100" class="py-3 text-sm p-2 hover:bg-web-brown/10 rounded-sm opacity-85 active:bg-web-brown/10 w-full flex transition duration-300 cursor-pointer">Media hub</NuxtLink></li>
        <li>

        <button class="text-white cursor-pointer bg-web-purple rounded-[5px]  h-13 px-6 hover:bg-web-purple-dark active:bg-web-purple-dark transition duration-300">
        <span class="flex items-center gap-4 justify-center">
        <img loading="lazy" class="object-contain w-4" src="/festivalIcon.png" alt=""> <span > Amman Festival </span> 
        </span>
    </button>
        </li>
    </ul>
    </div>
</div>
</template>

<script setup>

const langs = ref([
    {name: 'English' , sympol:'en', direction:'ltr'},
    {name: 'Arabic' , sympol:'ar', direction:'rtl'},
])
</script>

<style>
</style>