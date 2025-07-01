<template>
<div 
    ref="cardRef"
    class="bg-web-primary/10 rounded-sm flex flex-col items-center justify-between p-10 hover:scale-105 gap-2 transition-all duration-300 stat-card"
>
    <span class="text-5xl mb-3">
    <component :is="icon" />
    </span>
    <div class="flex flex-col items-center whitespace-nowrap">
    <span 
        ref="numberRef"
        class="text-4xl md:text-5xl font-extrabold text-web-primary mb-3"
        :data-target="stat.number"
    >
        0
    </span>
    <span class="text-base md:text-lg text-web-brown/80 font-medium text-center">{{ stat.label }}</span>
    </div>
</div>
</template>

<script setup>
defineProps({
stat: {
    type: Object,
    required: true,
},
icon: {
    type: String,
    required: true,
}
})

// Template refs
const cardRef = ref(null)
const numberRef = ref(null)


// Counter animation function
const animateCounter = (element, targetValue) => {
const suffix = element.dataset.target.replace(/[\d.-]/g, '')
const counter = { value: 0 }

// Set initial value
element.textContent = '0' + suffix

// Animate counter
useGSAP().to(counter, {
    value: targetValue,
    duration: 2,
    ease: "power2.out",
    onUpdate: () => {
    const currentValue = Math.round(counter.value)
    element.textContent = currentValue.toLocaleString() + suffix
    }
})
}

// Animation setup
onMounted(async () => {
await nextTick()


// Animate number with scroll trigger
if (numberRef.value) {
    const targetValue = parseFloat(numberRef.value.dataset.target.replace(/[^\d.-]/g, ''))
    
    useGSAP().timeline({
    scrollTrigger: {
        trigger: numberRef.value,
        start: "top 100%",
        toggleActions: "play none none none",
        onEnter: () => animateCounter(numberRef.value, targetValue),
        once: true
    
    }
    })
}
})
</script>

<style lang="scss" scoped>
</style>