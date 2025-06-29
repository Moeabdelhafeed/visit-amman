<template>
<!-- hero section -->
<section v-if="content?.hero" class="relative h-[60vh] min-h-[500px] max-h-[700px] w-full overflow-hidden inner-shadow">
    <div class="absolute inset-0 bg-black/40 z-0"></div>
    
    <Transition 
    @enter="onEnter"
    @appear="onEnter"
    @leave="onLeave"
    >
    <div v-if="isMounted" class="z-10 absolute p-4 left-1/2 w-full top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <!-- Decorative Line -->
        <div class="w-24 h-1 bg-white mx-auto mb-8 rounded-full opacity-80"></div>
        
        <!-- Title -->
        <h1 class="text-white w-full text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
       History of Amman
        </h1>
        
        <!-- Subtitle -->
        <p class="text-white px-5 text-lg  opacity-90 max-w-2xl mx-auto">
        Journey through millennia of civilization, where every stone tells a story of conquest, culture, and continuity
        </p>
    </div>
    </Transition>
    <img loading="lazy" :src="content?.hero?.url" alt="Hero Image" class="h-full bg-fixed w-full object-cover" />
</section>

<!-- bread crumbs -->
<section class="container mx-auto px-4">
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

<!-- intro -->
<section class="container mx-auto text-web-brown text-center lg:px-50 px-4 pt-16" v-if="content?.intro">
    <div class="mx-auto">
        <!-- Decorative Line -->
        <h2 v-motion-slide-visible-once-bottom class="font-bold order-1 text-3xl mb-6">
            {{content?.intro?.title}}
        </h2>
        <div v-motion-slide-visible-once-bottom class="w-24 h-1 bg-web-primary mx-auto mb-8 rounded-full opacity-80"></div>
        
        <div v-motion-slide-visible-once-bottom class="flex flex-col">
            <p v-html="content?.intro?.body.replace(/\n/g,'<br>')" class="text-web-brown/70 order-2 text-lg leading-relaxed w-full">
            </p>
        </div>
    </div>
</section>

<!-- Divider -->
<hr class="container mx-auto my-12 xl:my-20 border-gray-200">

<!-- Timeline Section -->
<section class="container mx-auto text-web-brown px-4">
    <div class="mx-auto">

        
        <!-- Timeline Items -->
        <div class="lg:px-30" >
            <div v-for="(period, index) in historicalPeriods" :key="index" 
                 class="timeline-item"
                 v-motion-slide-visible-once-bottom>
                
                <!-- Content Container -->
                <div class="w-full " >
                    <!-- Title -->

                    <div class="flex w-full gap-5 ">
                        <div>

                    <h3 class="text-4xl font-bold text-web-brown mb-6">
                        {{ period.title }}
                    </h3>
                    
                    <!-- Decorative Line -->
                    <div class="w-24 h-1 bg-web-primary mb-6 rounded-full opacity-80"></div>
                    
                    <!-- Description -->
                    <p class="text-web-brown/70 leading-relaxed  text-lg mb-8 ">
                        {{ period.description }}
                    </p>
                        </div>
                    </div>
                    
                    <!-- Image if available -->
                    <div v-if="period.image" class="mb-8">
                        <img :src="period.image" :alt="period.title" 
                             class="w-full h-[450px] object-cover rounded-sm shadow-lg" />
                    </div>
                    
                   
                </div>

<hr class="container mx-auto my-12 xl:my-20 border-gray-200">
            </div>
        </div>
    </div>
</section>


</template>

<script setup>
import gsap from 'gsap'

const Refs = ref(null)


const swiper = useSwiper(Refs , {
loop: true,
autoplay: {
delay: 5000,
},
allowTouchMove: true,
simulateTouch: true,
pagination: {
el: '.swiper-pagination',
clickable: true,
},
touchRatio: 1,
touchAngle: 45,
touchMoveStopPropagation: false,
touchStartPreventDefault: false,
touchStartForcePreventDefault: false,
shortSwipes: true,
longSwipes: true,
longSwipesRatio: 0.5,
longSwipesMs: 300,
followFinger: true,
threshold: 0,
touchEventsTarget: 'container',

})



// Add reactive state to trigger transition
const isMounted = ref(false)

const content = ref({
    hero: {
        url: 'history.png'
    },
    intro: {
        title: 'A Journey Through Time',
        body: 'Amman, the capital of Jordan, is one of the oldest continuously inhabited cities in the world. From its humble beginnings as a small settlement to its current status as a modern metropolis, Amman has witnessed the rise and fall of empires, the passage of countless civilizations, and the evolution of human society. This ancient city, built on seven hills, has been a crossroads of trade, culture, and ideas for millennia.\n\nToday, Amman stands as a testament to the resilience and adaptability of human civilization, where ancient ruins coexist with modern architecture, and where the traditions of the past blend seamlessly with the innovations of the present.'
    }
})

// Historical periods with images and descriptions
const historicalPeriods = ref([
    {
        year: '7000 BCE',
        title: 'Ancient Beginnings',
        description: 'The earliest evidence of human settlement in the Amman area dates back to the Neolithic period. Archaeological findings suggest that the region was inhabited by early agricultural communities who built simple dwellings and practiced farming. These early settlers were among the first to transition from nomadic hunter-gatherer lifestyles to settled agricultural communities, marking a crucial turning point in human civilization. The fertile valleys and abundant water sources in the Amman region provided ideal conditions for these pioneering farmers to establish permanent settlements and develop sophisticated farming techniques that would sustain their communities for generations.',
        image: '/exploreFirst.png',
        highlights: [
            'Neolithic settlements',
            'Early farming communities',
            'Stone age dwellings',
            'Agricultural beginnings'
        ]
    },
    {
        year: '1200 BCE',
        title: 'Ammonite Kingdom',
        description: 'The Ammonites established their capital at Rabbath Ammon, which would later become Amman. This Iron Age kingdom was a significant regional power, known for its distinctive culture and religious practices. The Ammonites were a Semitic people who developed a sophisticated urban culture with advanced metallurgy, trade networks, and religious institutions. Their kingdom flourished for several centuries, establishing trade routes that connected the region with neighboring civilizations. The Ammonites built impressive fortifications and temples, leaving behind archaeological evidence of their advanced architectural and engineering skills. Their cultural influence extended beyond their political boundaries, contributing to the rich tapestry of ancient Near Eastern civilization.',
        image: '/exploreFirst.png',
        highlights: [
            'Rabbath Ammon capital',
            'Iron Age civilization',
            'Regional power center',
            'Distinctive culture'
        ]
    },
    {
        year: '332 BCE',
        title: 'Hellenistic Era',
        description: 'Alexander the Great conquered the region, bringing Hellenistic culture and influence to Amman. The city became part of the vast Macedonian Empire, introducing Greek architectural and cultural elements. This period marked a profound transformation in the city\'s cultural landscape, as Greek language, philosophy, art, and governance systems were integrated into local traditions. The Hellenistic influence brought new urban planning concepts, architectural styles, and cultural practices that would leave lasting impressions on the city\'s development. Greek theaters, temples, and public spaces were constructed, creating a fusion of Eastern and Western cultural elements that would characterize the region for centuries to come.',
        image: '/exploreFirst.png',
        highlights: [
            'Macedonian conquest',
            'Greek cultural influence',
            'Hellenistic architecture',
            'Cultural transformation'
        ]
    },
    {
        year: '63 BCE',
        title: 'Roman Philadelphia',
        description: 'The Romans conquered the region and renamed the city Philadelphia. Under Roman rule, the city flourished with impressive architectural projects including the Roman Theater, which still stands today. This period represents one of the most significant phases of urban development in Amman\'s history, as the Romans implemented their sophisticated engineering and architectural techniques. The city became a major administrative and cultural center within the Roman Empire, featuring grand public buildings, sophisticated water systems, paved roads, and impressive monuments. The Roman Theater, with its capacity for thousands of spectators, stands as a testament to the city\'s importance and the Romans\' commitment to creating lasting architectural legacies.',
        image: '/exploreSecond.png',
        highlights: [
            'Roman conquest',
            'City renamed Philadelphia',
            'Roman Theater construction',
            'Major urban development'
        ]
    },
    {
        year: '636 CE',
        title: 'Islamic Period',
        description: 'Muslim armies conquered the region, bringing Islamic culture and governance. The city became part of the Umayyad Caliphate and later the Abbasid Empire, experiencing significant cultural and religious transformation. This period introduced new architectural styles, religious practices, and cultural traditions that would become integral to the city\'s identity. Islamic rulers constructed mosques, palaces, and public buildings that reflected both local traditions and broader Islamic architectural principles. The city became an important center for Islamic learning, trade, and administration, contributing to the spread of Islamic culture and knowledge throughout the region.',
        image: '/exploreFirst.png',
        highlights: [
            'Islamic conquest',
            'Umayyad Caliphate',
            'Religious transformation',
            'Cultural integration'
        ]
    },
    {
        year: '1516',
        title: 'Ottoman Empire',
        description: 'Amman came under Ottoman rule, which lasted for four centuries. During this period, the city experienced relative stability and became an important administrative center in the region. The Ottomans brought their distinctive architectural style, administrative systems, and cultural practices to the city, leaving behind a rich legacy of Ottoman-era buildings and infrastructure. This period saw the construction of mosques, schools, markets, and public buildings that reflected Ottoman architectural traditions while incorporating local materials and building techniques. The city served as an important link in the Ottoman Empire\'s extensive trade and communication networks.',
        image: '/exploreSecond.png',
        highlights: [
            'Ottoman conquest',
            'Four-century rule',
            'Administrative center',
            'Regional stability'
        ]
    },
    {
        year: '1921',
        title: 'Modern Jordan',
        description: 'Emir Abdullah I established the Emirate of Transjordan with Amman as its capital. This marked the beginning of modern Jordan and Amman\'s transformation into a contemporary city. The establishment of modern governance structures, educational institutions, and infrastructure projects began to transform Amman into a modern urban center. This period saw the introduction of modern transportation systems, communication networks, and public services that would support the city\'s rapid growth and development throughout the twentieth century.',
        image: '/exploreFirst.png',
        highlights: [
            'Establishment of Transjordan',
            'Amman as capital',
            'Modern governance',
            'Urban development'
        ]
    },
    {
        year: 'Present',
        title: 'Modern Metropolis',
        description: 'Today, Amman is a thriving modern metropolis with over 4 million residents. The city successfully balances its rich historical heritage with contemporary development, making it a unique destination for visitors and a vibrant home for its citizens. Modern Amman features state-of-the-art infrastructure, world-class educational and healthcare facilities, and a diverse economy that includes technology, finance, tourism, and manufacturing sectors. The city\'s unique character comes from its ability to preserve historical sites while embracing modern urban planning and development, creating a dynamic environment where ancient ruins coexist with contemporary architecture.',
        image: '/exploreSecond.png',
        highlights: [
            'Population over 4 million',
            'Modern infrastructure',
            'Cultural diversity',
            'Tourism destination'
        ]
    }
])

// Historical significance cards
const historicalSignificance = ref([
    {
        title: 'Crossroads of Civilizations',
        description: 'Amman has served as a crucial crossroads for trade routes connecting Asia, Africa, and Europe, making it a melting pot of cultures and ideas throughout history.',
        icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
    },
    {
        title: 'Architectural Heritage',
        description: 'The city boasts an impressive collection of historical architecture, from ancient Roman ruins to Ottoman-era buildings and modern structures, creating a unique urban landscape.',
        icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
    },
    {
        title: 'Cultural Continuity',
        description: 'Despite numerous conquests and changes in governance, Amman has maintained a continuous cultural identity, preserving traditions while adapting to new influences.',
        icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'
    }
])

// Modern features
const modernFeatures = ref([
    'Population over 4 million',
    'Modern infrastructure',
    'International business hub',
    'Cultural diversity',
    'Educational institutions',
    'Healthcare facilities',
    'Tourism destination',
    'Transportation network'
])

// Cultural traditions
const culturalTraditions = ref([
    'Traditional Jordanian cuisine',
    'Amman Citadel',
    'Jordanian Bedouin culture',
    'The Great Mosque of Amman',
    'The Roman Amphitheater',
    'The Umayyad Mosque',
    'The Citadel of Amman',
    'The Jordanian National Museum'
])

definePageMeta({
    name: 'history'
})

// Set mounted state after component is mounted
onMounted(() => {
    isMounted.value = true
})

const onEnter = (el) => {
    gsap.set(el, { opacity: 0, y: 30 })
    gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    })
}

const onLeave = (el, done) => {
    gsap.to(el, {
        opacity: 0,
        y: -30,
        duration: 0.3,
        ease: "power2.in",
        onComplete: done
    })
}
</script>

<style scoped>
/* Timeline styling */
.timeline-item {
    position: relative;
}

@media (max-width: 767px) {
    .timeline-item {
        margin-left: 0;
    }
}
</style>