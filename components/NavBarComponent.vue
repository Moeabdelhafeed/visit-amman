<template>
  <div class="drawerflex flex-col z-50 fixed top-0 start-0 w-full">
    <!-- <img src="/charbutton.png"   class="absolute hidden md:block  xl:-end-6 w-35-0 -end-10 2xl:top-5 top-10 z-0 hover:scale-105  active:scale-105  transition duration-300 hover:rotate-2 active:rotate-2" alt=""> -->
    <!-- scroll to top button -->
    <a href="#">
      <button
        v-if="scrollY > ScrollNum"
        class="fixed cursor-pointer text-lg transform translation bottom-5 right-5 z-50 bg-web-primary text-white rounded-full p-3 shadow-lg hover:bg-web-primary-dark transition duration-300"
      >
        <IconsUpArrow />
      </button>
    </a>

    <!-- Drawer toggle -->
    <input id="nav-drawer" type="checkbox" class="drawer-toggle" />

    <!-- Main content -->
    <div
      :class="scrollY < ScrollNum ? '   text-white' : ' bg-white text-web-brown'"
      class="drawer-content z-50 transition-all duration-300"
    >
      <div
        class="navbar mx-auto container max-w-[1280px] md:px-20 lg:px-10 px-2 py-2.5 flex items-center justify-between"
      >
        <div class="flex gap-5">
          <NuxtLink :to="{ name: 'home' }" class="w-25 hidden xl:block">
            <img
              loading="lazy"
              src="/colourfullogo.png"
              alt="Logo"
              class="object-contain"
              :class="scrollY < ScrollNum ? 'invert  brightness-0' : ''"
            />
          </NuxtLink>

          <!-- Horizontal menu (hidden on small screens) -->
          <ul class="hidden xl:flex gap-10 ms-3 items-center">
            <li>
              <NuxtLink
                :to="{ name: 'home' }"
                active-class="border-b-2 opacity-100 "
                class="py-3"
                ><button
                  class="text-xs font-bold hover:opacity-100 cursor-pointer"
                  :class="$route.name === 'home' ? 'opacity-100' : 'opacity-85'"
                >
                  Home
                </button></NuxtLink
              >
            </li>

            <!-- About Dropdown -->
            <li class="h-full flex group relative">
              <button
                class="text-xs font-bold flex justify-between items-center gap-1.5 cursor-pointer opacity-85 hover:opacity-100 focus:outline-none"
                tabindex="0"
                type="button"
              >
                Explore Amman
                <span class="text-lg">
                  <IconsDownArrowDropDown />
                </span>
              </button>
              <ul
                class="dropdown text-web-brown [&_li>*:not(ul):not(.menu-title):not(details):active]:text-web-brown [&_li>*:not(ul):not(.menu-title):not(details):active]:bg-web-brown/10 dropdown-start menu w-52 rounded-box top-9 bg-base-100 shadow-sm absolute left-0 mt-2 z-50 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200"
              >
                <li
                  :class="$route.name == 'about' ? 'bg-web-brown/10 opacity-100' : ''"
                  class="text-web-brown opacity-85 active:opacity-100 hover:opacity-100 text-xs font-bold active:bg-web-brown/10 hover:bg-web-brown/10 rounded-sm"
                >
                
                  <NuxtLink :to="{ name: 'about' }">About Amman</NuxtLink>
                </li>
                <li
                  :class="$route.name == 'history' ? 'bg-web-brown/10 opacity-100' : ''"
                  class="text-web-brown opacity-85  text-xs font-bold hover:opacity-100 active:bg-web-brown/10 hover:bg-web-brown/10 rounded-sm"
                >
                  <NuxtLink :to="{ name: 'history' }">History of Amman</NuxtLink>
                </li>
              </ul>
            </li>

            <li>
              <NuxtLink
                :to="{ name: 'events' }"
                active-class="border-b-2 opacity-100"
                class="py-3"
                ><button
                  class="text-xs font-bold hover:opacity-100 cursor-pointer"
                  :class="$route.name === 'events' ? 'opacity-100' : 'opacity-85'"
                >
                  Happening in Amman
                </button></NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :to="{ name: 'destinations' }"
                active-class="border-b-2 opacity-100"
                class="py-3"
                ><button
                  class="text-xs font-bold hover:opacity-100 cursor-pointer"
                  :class="$route.name === 'destinations' ? 'opacity-100' : 'opacity-85'"
                >
                  Where to Go
                </button></NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :to="{ name: 'mediahub' }"
                active-class="border-b-2 opacity-100"
                class="py-3"
                ><button
                  class="text-xs font-bold hover:opacity-100 cursor-pointer"
                  :class="$route.name === 'mediahub' ? 'opacity-100' : 'opacity-85'"
                >
                  Media Hub
                </button></NuxtLink
              >
            </li>
          </ul>
        </div>
        <!-- Logo -->

        <div class="hidden xl:flex z-50 items-center justify-end">
          <!-- change popover-1 and --anchor-1 names. Use unique names for each dropdown -->
          <button>
            <span
              class="text-2xl font-bold opacity-85 hover:opacity-100 cursor-pointer flex border-e-1 mx-4 px-3"
            >
              <IconsLanGlobe />
            </span>
          </button>

          <button
            :class="
              scrollY < ScrollNum
                ? 'bg-white active:bg-slate-200 z-50 hover:bg-slate-200'
                : 'bg-web-purple active:bg-web-purple-dark hover:bg-web-purple-dark'
            "
            class="cursor-pointer rounded-[5px] h-13 px-4 transition duration-300"
          >
            <span class="flex items-center gap-4 justify-center">
              <img
                loading="lazy"
                class="object-contain w-4"
                src="/festivalIcon.png"
                alt=""
              />
            </span>
          </button>
        </div>

        <!-- Drawer toggle button (visible only on small screens) -->
        <div class="xl:hidden relative flex items-center w-full justify-between">
          <!-- Left: Drawer toggle -->
          <label for="nav-drawer" class="p-2 cursor-pointer z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 opacity-85 hover:opacity-100 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <!-- Center: Logo (absolute center) -->
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <NuxtLink :to="{ name: 'home' }">
              <img
                loading="lazy"
                src="/colourfullogo.png"
                :class="scrollY < ScrollNum ? 'invert  brightness-0' : ''"
                alt="Logo"
                class="object-contain h-12"
              />
            </NuxtLink>
          </div>

          <!-- Right: Language + Festival -->
          <div class="flex items-center gap-2 z-50">
            <button>
              <span
                class="text-2xl font-bold opacity-85 hover:opacity-100 cursor-pointer flex md:border-e-1 mx-2 md:px-3"
              >
                <IconsLanGlobe />
              </span>
            </button>

            <button
              :class="
                scrollY < ScrollNum
                  ? 'bg-white active:bg-slate-200 hover:bg-slate-200'
                  : 'bg-web-purple active:bg-web-purple-dark hover:bg-web-purple-dark'
              "
              class="md:block hidden cursor-pointer rounded-[5px] h-13 px-4 transition duration-300"
            >
              <span class="flex items-center gap-4 justify-center">
                <img
                  loading="lazy"
                  class="object-contain w-4"
                  src="/festivalIcon.png"
                  alt=""
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Drawer side menu -->
    <div class="drawer-side z-50">
      <label for="nav-drawer" class="drawer-overlay"></label>
      <ul class="flex-col flex gap-2 p-3 w-64 min-h-full bg-cream text-web-brown">
        <li>
          <NuxtLink
            :to="{ name: 'home' }"
            active-class="bg-web-brown/10 opacity-100"
            class="py-3 text-md font-bold p-2 hover:bg-web-brown/10 active:bg-web-brown/10 rounded-sm opacity-85 w-full flex transition duration-300 cursor-pointer"
            >Home</NuxtLink
          >
        </li>

        <!-- About Dropdown -->
        <li>
          <button
            popovertarget="popover-4"
            style="anchor-name: --anchor-4"
            class="py-3 text-md font-bold p-2 hover:bg-web-brown/10 active:bg-web-brown/10 rounded-sm opacity-85 w-full flex transition duration-300 cursor-pointer justify-between items-center"
          >
            Explore Amman
            <span class="text-lg">
              <IconsDownArrowDropDown />
            </span>
          </button>

          <ul
            class="dropdown text-web-brown bg-cream [&_li>*:not(ul):not(.menu-title):not(details):active]:bg-web-brown/10 [&_li>*:not(ul):not(.menu-title):not(details):active]:text-web-brown dropdown-end menu w-52 rounded-box bg-base-100 shadow-sm"
            popover
            id="popover-4"
            style="position-anchor: --anchor-4"
          >
            <li
              :class="$route.name == 'about' ? 'bg-web-brown/10 opacity-100' : ''"
              class="text-web-brown text-md opacity-85 hover:opacity-100 active:opacity-100  active:bg-web-brown/10 text-md font-bold hover:bg-web-brown/10 rounded-sm"
            >
              <NuxtLink :to="{ name: 'about' }">About Amman</NuxtLink>
            </li>
            <li
              :class="$route.name == 'history' ? 'bg-web-brown/10 opacity-100' : ''"
              class="text-web-brown text-md active:bg-web-brown/10 opacity-85 hover:opacity-100 active:opacity-100 text-md font-bold hover:bg-web-brown/10 rounded-sm"
            >
              <NuxtLink :to="{ name: 'history' }">History of Amman</NuxtLink>
            </li>
          </ul>
        </li>

        <li>
          <NuxtLink
            :to="{ name: 'events' }"
            active-class="bg-web-brown/10 opacity-100"
            class="py-3 text-md font-bold p-2 hover:bg-web-brown/10 rounded-sm opacity-85 active:bg-web-brown/10 w-full flex transition duration-300 cursor-pointer"
            >Happening in Amman</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            :to="{ name: 'destinations' }"
            active-class="bg-web-brown/10 opacity-100"
            class="py-3 text-md font-bold p-2 hover:bg-web-brown/10 rounded-sm opacity-85 active:bg-web-brown/10 w-full flex transition duration-300 cursor-pointer"
            >Where to Go</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            :to="{ name: 'mediahub' }"
            active-class="bg-web-brown/10 opacity-100"
            class="py-3 text-md font-bold p-2 hover:bg-web-brown/10 rounded-sm opacity-85 active:bg-web-brown/10 w-full flex transition duration-300 cursor-pointer"
            >Media Hub</NuxtLink
          >
        </li>
        <li>
          <button
            class="text-white cursor-pointer bg-web-purple rounded-[5px] h-13 px-6 hover:bg-web-purple-dark active:bg-web-purple-dark transition duration-300"
          >
            <span class="flex items-center gap-4 justify-center">
              <img
                loading="lazy"
                class="object-contain w-4"
                src="/festivalIcon.png"
                alt=""
              />
              <span> Amman Festival </span>
            </span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const langs = ref([
  { name: "English", sympol: "en", direction: "ltr" },
  { name: "Arabic", sympol: "ar", direction: "rtl" },
]);

const { y: scrollY } = useWindowScroll();

const props = defineProps({
  ScrollNum: {
    type: Number,
    required: true,
  },
});
</script>

<style></style>
