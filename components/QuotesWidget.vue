
<template>
  <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-xl font-bold text-gray-900">
        Отзывы пользователей
      </h3>
      <Icon name="Quote" size="20" class="text-purple-600" />
    </div>

    <div class="relative min-h-[120px]">
      <div
        v-for="(quote, index) in quotes"
        :key="index"
        :class="[
          'absolute inset-0 transition-opacity duration-500',
          index === currentQuote ? 'opacity-100' : 'opacity-0'
        ]"
      >
        <blockquote class="text-gray-700 mb-4 italic">
          "{{ quote.text }}"
        </blockquote>
        <div class="flex items-center">
          <div class="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center mr-3">
            <Icon name="User" size="20" class="text-purple-600" />
          </div>
          <div>
            <div class="font-semibold text-gray-900">
              {{ quote.author }}
            </div>
            <div class="text-sm text-gray-600">{{ quote.role }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center space-x-2 mt-4">
      <button
        v-for="(_, index) in quotes"
        :key="index"
        @click="setCurrentQuote(index)"
        :class="[
          'w-2 h-2 rounded-full transition-colors',
          index === currentQuote ? 'bg-purple-600' : 'bg-purple-300'
        ]"
      />
    </div>
  </div>
</template>

<script setup>
const quotes = [
  {
    text: "ChatHub изменил наш способ работы в команде. Теперь мы всегда на связи!",
    author: "Анна Петрова",
    role: "Менеджер проектов",
  },
  {
    text: "Простота использования и надежность - именно то, что нам было нужно.",
    author: "Михаил Иванов",
    role: "Разработчик",
  },
  {
    text: "Лучшая платформа для общения, которую я когда-либо использовал.",
    author: "Елена Сидорова",
    role: "Дизайнер",
  },
  {
    text: "Безопасность и скорость работы на высшем уровне.",
    author: "Дмитрий Козлов",
    role: "IT-директор",
  },
]

const currentQuote = ref(0)

const setCurrentQuote = (index) => {
  currentQuote.value = index
}

// Автопрокрутка отзывов
onMounted(() => {
  const timer = setInterval(() => {
    currentQuote.value = (currentQuote.value + 1) % quotes.length
  }, 4000)
  
  onUnmounted(() => {
    clearInterval(timer)
  })
})
</script>
