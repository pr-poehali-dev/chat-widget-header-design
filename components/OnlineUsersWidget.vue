
<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 h-full">
    <div class="p-4 border-b border-gray-200">
      <h3 class="flex items-center justify-between text-lg font-semibold">
        <span class="flex items-center space-x-2">
          <Icon name="Users" size="20" class="text-green-500" />
          <span>Онлайн пользователи</span>
        </span>
        <span class="bg-green-100 text-green-700 text-sm px-2 py-1 rounded">
          {{ activeUsers }} активных
        </span>
      </h3>
    </div>
    <div class="p-4 space-y-3">
      <div
        v-for="user in users"
        :key="user.id"
        class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
      >
        <div class="relative">
          <img
            :src="user.avatar"
            :alt="user.name"
            class="w-10 h-10 rounded-full object-cover"
          />
          <div
            :class="[
              'absolute -bottom-1 -right-1 w-3 h-3 border-2 border-white rounded-full',
              getStatusColor(user.status)
            ]"
          />
        </div>
        <div class="flex-1 min-w-0">
          <h4 class="font-medium text-gray-900 truncate">
            {{ user.name }}
          </h4>
          <div class="flex items-center space-x-2">
            <p class="text-sm text-gray-600">{{ user.role }}</p>
            <span class="text-xs text-gray-500">
              • {{ getStatusText(user.status) }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const users = [
  {
    id: 1,
    name: "Анна Петрова",
    role: "Дизайнер",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c31d?w=40&h=40&fit=crop&crop=face",
    status: "active",
  },
  {
    id: 2,
    name: "Михаил Сидоров",
    role: "Разработчик",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    status: "busy",
  },
  {
    id: 3,
    name: "Елена Козлова",
    role: "Менеджер",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    status: "active",
  },
  {
    id: 4,
    name: "Дмитрий Волков",
    role: "Аналитик",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    status: "away",
  },
]

const activeUsers = computed(() => {
  return users.filter(u => u.status === "active").length
})

const getStatusColor = (status) => {
  const colors = {
    active: "bg-green-500",
    busy: "bg-red-500",
    away: "bg-yellow-500"
  }
  return colors[status] || "bg-gray-500"
}

const getStatusText = (status) => {
  const texts = {
    active: "Активен",
    busy: "Занят",
    away: "Отошел"
  }
  return texts[status] || "Оффлайн"
}
</script>
