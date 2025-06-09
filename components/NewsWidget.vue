
<template>
  <div class="bg-white rounded-xl p-6">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-xl font-bold text-gray-900">Новости</h3>
      <Icon name="Newspaper" size="20" class="text-purple-600" />
    </div>

    <div class="space-y-4">
      <div
        v-for="item in news"
        :key="item.id"
        class="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
      >
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded">
            {{ item.category }}
          </span>
          <span class="text-xs text-gray-500">{{ item.date }}</span>
        </div>
        <h4 class="font-semibold text-gray-900 mb-1">{{ item.title }}</h4>
        <p class="text-sm text-gray-600">{{ item.summary }}</p>
      </div>
    </div>

    <button class="w-full mt-4 text-purple-600 hover:text-purple-700 text-sm font-medium">
      Показать все новости →
    </button>
  </div>
</template>

<script setup>
const news = [
  {
    id: 1,
    title: "Новая функция видеозвонков",
    summary: "Теперь вы можете совершать видеозвонки прямо в чате",
    date: "5 июня 2025",
    category: "Обновления",
  },
  {
    id: 2,
    title: "Улучшения безопасности",
    summary: "Добавлено двухфакторная аутентификация для всех аккаунтов",
    date: "3 июня 2025",
    category: "Безопасность",
  },
  {
    id: 3,
    title: "Мобильное приложение v2.0",
    summary: "Обновленный дизайн и новые возможности в мобильной версии",
    date: "1 июня 2025",
    category: "Мобильные",
  },
  {
    id: 4,
    title: "Интеграция с календарем",
    summary: "Планируйте встречи и события прямо из чата",
    date: "28 мая 2025",
    category: "Функции",
  },
]
</script>
