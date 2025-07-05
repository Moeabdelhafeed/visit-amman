<template>
  <div
    ref="cardRef"
    class="flex bg-white text-web-primary shadow-web rounded-sm p-1  flex-col bg items-center relative justify-center  gap-2 transition-all duration-300 stat-card"
  >
    <img src="/watermarks/stat.png" class="absolute opacity-20 top-0 start-0 w-[100px]" />
    <!-- <img src="/herowatermark.png" class="absolute opacity-20 rotate-180 bottom-0 end-0 w-[100px]" /> -->

    <div class="z-10 flex flex-col items-center justify-center h-full">
      <div class="flex flex-col items-center">
        <span
          ref="numberRef"
          class="md:text-4xl text-3xl font-extrabold mb-3"
          :data-target="stat.number"
        >
          0
        </span>
        <p class="text-base font-medium text-center text-web-brown">{{ stat.label }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  stat: {
    type: Object,
    required: true,
  },
});

// Template refs
const cardRef = ref(null);
const numberRef = ref(null);

// Counter animation function
const animateCounter = (element, targetValue) => {
  const suffix = element.dataset.target.replace(/[\d.-]/g, "");
  const counter = { value: 0 };

  // Set initial value
  element.textContent = "0" + suffix;

  // Animate counter
  useGSAP().to(counter, {
    value: targetValue,
    duration: 2,
    ease: "power2.out",
    onUpdate: () => {
      const currentValue = Math.round(counter.value);
      element.textContent = currentValue.toLocaleString() + suffix;
    },
  });
};

// Animation setup
onMounted(async () => {
  await nextTick();

  // Animate number with scroll trigger
  if (numberRef.value) {
    const targetValue = parseFloat(
      numberRef.value.dataset.target.replace(/[^\d.-]/g, "")
    );

    useGSAP().timeline({
      scrollTrigger: {
        trigger: numberRef.value,
        start: "top 100%",
        toggleActions: "play none none none",
        onEnter: () => animateCounter(numberRef.value, targetValue),
        once: true,
      },
    });
  }
});
</script>

<style scoped>
.blob {
  border-radius: 68% 37% 34% 70% / 60% 40% 60% 40%;
}
</style>
