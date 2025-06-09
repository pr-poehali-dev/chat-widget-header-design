
<template>
  <section class="bg-white rounded-xl p-6 mb-6">
    <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">
      Преимущества ChatHub
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="text-center p-4"
      >
        <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon :name="feature.icon" size="32" class="text-purple-600" />
        </div>
        <h4 class="text-lg font-semibold text-gray-900 mb-2">
          {{ feature.title }}
        </h4>
        <p class="text-gray-600 text-sm">{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: "MessageSquare",
    title: "Быстрые сообщения",
    description: "Мгновенная доставка сообщений и уведомления в реальном времени",
  },
  {
    icon: "Shield",
    title: "Безопасность",
    description: "Сквозное шифрование и защита ваших личных данных",
  },
  {
    icon: "Users",
    title: "Групповые чаты",
    description: "Создавайте команды и общайтесь с коллегами эффективно",
  },
  {
    icon: "Smartphone",
    title: "Мобильная версия",
    description: "Доступ к чатам с любого устройства в любое время",
  },
  {
    icon: "FileText",
    title: "Обмен файлами",
    description: "Легкий обмен документами, изображениями и видео",
  },
  {
    icon: "Search",
    title: "Умный поиск",
    description: "Быстрый поиск по всей истории переписки и файлам",
  },
]
</script>
