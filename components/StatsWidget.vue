
<template>
  <div class="space-y-6">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
      <div class="p-4 border-b border-gray-200">
        <h3 class="flex items-center space-x-2 text-lg font-semibold">
          <Icon name="BarChart3" size="20" class="text-purple-500" />
          <span>Статистика</span>
        </h3>
      </div>
      <div class="p-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="text-center p-4 bg-gray-50 rounded-lg"
          >
            <Icon
              :name="stat.icon"
              size="24"
              :class="`mx-auto mb-2 ${stat.color}`"
            />
            <div class="text-2xl font-bold text-gray-900 mb-1">
              {{ stat.value }}
            </div>
            <div class="text-sm text-gray-600 mb-1">{{ stat.label }}</div>
            <span class="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
              {{ stat.change }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
      <div class="p-4 border-b border-gray-200">
        <h3 class="flex items-center space-x-2 text-lg font-semibold">
          <Icon name="Activity" size="20" class="text-orange-500" />
          <span>Последняя активность</span>
        </h3>
      </div>
      <div class="p-4">
        <div class="space-y-3">
          <div
            v-for="(activity, index) in recentActivity"
            :key="index"
            class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50"
          >
            <div class="w-2 h-2 bg-purple-500 rounded-full" />
            <span class="text-sm text-gray-500 font-mono">
              {{ activity.time }}
            </span>
            <span class="text-sm text-gray-700 flex-1">
              {{ activity.event }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  {
    label: "Сообщений сегодня",
    value: "2,847",
    change: "+12%",
    icon: "MessageCircle",
    color: "text-blue-500",
  },
  {
    label: "Активных пользователей",
    value: "156",
    change: "+8%",
    icon: "Users",
    color: "text-green-500",
  },
  {
    label: "Новых чатов",
    value: "23",
    change: "+15%",
    icon: "Plus",
    color: "text-purple-500",
  },
]

const recentActivity = [
  { time: "14:32", event: "Новый пользователь присоединился", type: "join" },
  { time: "14:28", event: "Создан чат 'Проект Alpha'", type: "chat" },
  { time: "14:15", event: "Обновлены настройки безопасности", type: "security" },
  { time: "14:02", event: "Загружено 5 новых файлов", type: "file" },
]
</script>
