
<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 h-full">
    <div class="p-4 border-b border-gray-200">
      <h3 class="flex items-center justify-between text-lg font-semibold">
        <span class="flex items-center space-x-2">
          <Icon name="MessageSquare" size="20" class="text-purple-500" />
          <span>Активные чаты</span>
        </span>
        <span class="bg-purple-100 text-purple-700 text-sm px-2 py-1 rounded">
          {{ chats.length }}
        </span>
      </h3>
    </div>
    <div class="p-4 space-y-3">
      <div
        v-for="chat in chats"
        :key="chat.id"
        class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
      >
        <div class="relative">
          <img
            :src="chat.avatar"
            :alt="chat.name"
            class="w-10 h-10 rounded-full object-cover"
          />
          <div
            v-if="chat.online"
            class="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"
          />
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between">
            <h4 class="font-medium text-gray-900 truncate">
              {{ chat.name }}
            </h4>
            <span class="text-xs text-gray-500">{{ chat.time }}</span>
          </div>
          <p class="text-sm text-gray-600 truncate">
            {{ chat.lastMessage }}
          </p>
        </div>
        <span
          v-if="chat.unread > 0"
          class="bg-purple-500 text-white text-xs px-2 py-1 rounded-full"
        >
          {{ chat.unread }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const chats = [
  {
    id: 1,
    name: "Команда разработки",
    lastMessage: "Когда будет готов релиз?",
    time: "2 мин",
    unread: 3,
    avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=40&h=40&fit=crop&crop=face",
    online: true,
  },
  {
    id: 2,
    name: "Дизайн-студия",
    lastMessage: "Новые макеты готовы для ревью",
    time: "15 мин",
    unread: 0,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face",
    online: true,
  },
  {
    id: 3,
    name: "Маркетинг",
    lastMessage: "Планы на следующую неделю",
    time: "1 ч",
    unread: 1,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    online: false,
  },
]
</script>
