
<template>
  <div class="relative h-96 overflow-hidden rounded-xl mb-8">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      :class="[
        'absolute inset-0 transition-opacity duration-500',
        index === currentSlide ? 'opacity-100' : 'opacity-0'
      ]"
    >
      <img
        :src="slide.image"
        :alt="slide.title"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div class="text-center text-white">
          <h2 class="text-4xl font-bold mb-4">{{ slide.title }}</h2>
          <p class="text-xl">{{ slide.subtitle }}</p>
        </div>
      </div>
    </div>

    <button
      @click="prevSlide"
      class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
    >
      <Icon name="ChevronLeft" size="24" />
    </button>

    <button
      @click="nextSlide"
      class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
    >
      <Icon name="ChevronRight" size="24" />
    </button>

    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <button
        v-for="(_, index) in slides"
        :key="index"
        @click="setCurrentSlide(index)"
        :class="[
          'w-3 h-3 rounded-full transition-colors',
          index === currentSlide ? 'bg-white' : 'bg-white/50'
        ]"
      />
    </div>
  </div>
</template>

<script setup>
const slides = [
  {
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop",
    title: "Общайтесь без границ",
    subtitle: "Современная платформа для командного общения",
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop",
    title: "Работайте эффективнее",
    subtitle: "Все инструменты для продуктивной работы в команде",
  },
  {
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=1200&h=600&fit=crop",
    title: "Создавайте связи",
    subtitle: "Объединяйте людей и идеи в одном месте",
  },
]

const currentSlide = ref(0)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const setCurrentSlide = (index) => {
  currentSlide.value = index
}

// Автопрокрутка слайдов
onMounted(() => {
  const timer = setInterval(() => {
    nextSlide()
  }, 5000)
  
  onUnmounted(() => {
    clearInterval(timer)
  })
})
</script>
