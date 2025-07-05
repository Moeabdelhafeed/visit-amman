<template>
  <NuxtLink :to="{name: 'event', params:{ id: event.id}}">

    <div class="flex group transition-all max-w-[600px]  transform duration-150 hover:scale-102 shadow-web flex-col h-[600px]   w-full  overflow-hidden bg-white  rounded-sm relative"
    
    >
    <div class="bg-cover w-full  h-[30svh] max-h-[350px] z-20 flex flex-col justify-between  bg-center bg-no-repeat" 
      :style="{ backgroundImage: `url('${event?.url}')` }" 
    >
    <div class="w-full group-hover:scale-100 flex justify-end">

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
    <div class="flex-1 z-20 p-5 pt-3 flex flex-col justify-between  ">
        <div class="flex flex-col gap-3">
            <div class="flex justify-between w-full items-center">

        <div class="flex items-center gap-2">
            <IconsLocation class="text-web-primary text-xl" />
            <p class="text-web-brown/70">{{ event?.location }}</p>
        </div>
        <div>
            <div class="py-2.5">
            <div class="bg-web-primary/15   text-web-primary px-4 py-2 rounded-full  w-max">
                <p class="text-sm">{{ event?.category }}</p>
            </div>
        </div>
            </div>
        </div>
        <h3 class="text-lg  text-web-brown line-clamp-2 ">{{ event?.title }}</h3>
        <p class="text-web-brown/70 text-base line-clamp-2 " v-html="event?.description.replace(/\n/g,'<br>')"></p>

        <!-- Enhanced Countdown Design -->
        <div class="relative">
  
          
          <!-- Countdown Cards -->
          <div class="grid grid-cols-4 gap-2 sm:gap-3 py-4">
            <!-- Days -->
            <div class="flex flex-col items-center space-y-2 transition-transform duration-200  countdown-card group">
              <div class="relative w-13 h-13 ">
                <div class="absolute inset-0 rounded-full countdown-progress" :style="`--progress: ${Math.min(timeLeft?.days / 30 * 100, 100)}`"></div>
                <div class="absolute inset-0 flex items-center justify-center bg-white rounded-full shadow-sm border-2 border-gray-100 m-1">
                  <span class=" font-bold text-lg sm:text-xl text-web-brown">{{ String(timeLeft?.days).padStart(2, '0') }}</span>
                </div>
              </div>
              <span class="text-xs sm:text-sm font-medium text-web-brown/70 uppercase tracking-wide">Days</span>
            </div>
            
            <!-- Hours -->
            <div class="flex flex-col items-center space-y-2 transition-transform duration-200  countdown-card group">
              <div class="relative w-13 h-13 ">
                <div class="absolute inset-0 rounded-full countdown-progress" :style="`--progress: ${timeLeft?.hours / 24 * 100}`"></div>
                <div class="absolute inset-0 flex items-center justify-center bg-white rounded-full shadow-sm border-2 border-gray-100 m-1">
                  <span class=" font-bold text-lg sm:text-xl text-web-brown">{{ String(timeLeft?.hours).padStart(2, '0') }}</span>
                </div>
              </div>
              <span class="text-xs sm:text-sm font-medium text-web-brown/70 ">Hours</span>
            </div>
            
            <!-- Minutes -->
            <div class="flex flex-col items-center space-y-2 transition-transform duration-200  countdown-card group">
              <div class="relative w-13 h-13 ">
                <div class="absolute inset-0 rounded-full countdown-progress" :style="`--progress: ${timeLeft?.minutes / 60 * 100}`"></div>
                <div class="absolute inset-0 flex items-center justify-center bg-white rounded-full shadow-sm border-2 border-gray-100 m-1">
                  <span class=" font-bold text-lg sm:text-xl text-web-brown">{{ String(timeLeft?.minutes).padStart(2, '0') }}</span>
                </div>
              </div>
              <span class="text-xs sm:text-sm font-medium text-web-brown/70 uppercase tracking-wide">Min</span>
            </div>
            
            <!-- Seconds -->
            <div class="flex flex-col items-center space-y-2 transition-transform duration-200  countdown-card group">
              <div class="relative w-13 h-13 ">
                <div class="absolute inset-0 rounded-full countdown-progress " :style="`--progress: ${timeLeft?.seconds / 60 * 100}`"></div>
                <div class="absolute inset-0 flex items-center justify-center bg-white rounded-full shadow-sm border-2 border-gray-100 m-1">
                  <span class=" font-bold text-lg sm:text-xl text-web-brown">{{ String(timeLeft?.seconds).padStart(2, '0') }}</span>
                </div>
              </div>
              <span class="text-xs sm:text-sm font-medium text-web-brown/70 uppercase tracking-wide">Sec</span>
            </div>
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
cursor-pointer
"
>
            Explore Event
        </button>
    </div>

    <img
    src="/watermarks/event.png"
    alt="Watermark Left"
    class="absolute w-[200px] z-0 bottom-0 opacity-20 end-0 rotate-180 "
  />


    </div>
  </NuxtLink>
</template>

<script setup>

const props = defineProps({
  event: {
    type: Object,
    required: true,
  }

})

const targetDate = new Date(props.event.countdownDate).getTime();

const timeLeft = ref({
  total: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

let timerInterval = null;

function calculateTimeLeft() {
  const now = new Date();
  const total = targetDate - now;

  if (total > 0) {
    timeLeft.value = {
      total,
      days: Math.floor(total / (1000 * 60 * 60 * 24)),
      hours: Math.floor((total / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((total / (1000 * 60)) % 60),
      seconds: Math.floor((total / 1000) % 60),
    };
  } else {
    clearInterval(timerInterval);
    timeLeft.value.total = 0;
  }
}

onMounted(() => {
  calculateTimeLeft();
  timerInterval = setInterval(calculateTimeLeft, 1000);
});

onBeforeUnmount(() => {
  clearInterval(timerInterval);
});


</script>


<style scoped>
.countdown-progress {
  background: conic-gradient(
    from 0deg,
    var(--color-web-primary) calc(var(--progress) * 1%),
    color-mix(in srgb, var(--color-web-primary) 10%, transparent) 0%
  );
  transition: all 0.3s ease;
}



</style>