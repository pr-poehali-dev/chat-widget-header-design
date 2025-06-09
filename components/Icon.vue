
<template>
  <component :is="iconComponent" :size="size" :class="className" />
</template>

<script setup>
// Простой компонент для иконок в Nuxt3
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number],
    default: 24
  },
  className: {
    type: String,
    default: ''
  }
})

// Маппинг иконок (упрощенная версия для примера)
const iconMap = {
  MessageCircle: '💬',
  Home: '🏠',
  Users: '👥',
  Settings: '⚙️',
  Plus: '➕',
  LogIn: '🔑',
  UserPlus: '👤',
  ChevronLeft: '‹',
  ChevronRight: '›',
  MessageSquare: '💬',
  Shield: '🛡️',
  Smartphone: '📱',
  FileText: '📄',
  Search: '🔍',
  BarChart3: '📊',
  Activity: '📈',
  Newspaper: '📰',
  Quote: '💭',
  User: '👤',
  Mail: '✉️',
  Phone: '📞',
  Twitter: '🐦',
  Github: '🐙',
  Linkedin: '💼'
}

const iconComponent = computed(() => {
  const icon = iconMap[props.name] || '❓'
  return {
    template: `<span style="font-size: ${props.size}px">${icon}</span>`
  }
})
</script>
