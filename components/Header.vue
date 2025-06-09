
<template>
  <header class="bg-white border-b border-gray-200 px-6 py-3">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Icon name="MessageCircle" size="20" class="text-white" />
          </div>
          <h1 class="text-xl font-bold text-gray-900 font-montserrat">
            ChatHub
          </h1>
        </div>
      </div>

      <nav class="flex items-center space-x-6">
        <button class="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-purple-600 rounded-md transition-colors">
          <Icon name="Home" size="16" />
          <span>Главная</span>
        </button>
        <button class="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-purple-600 rounded-md transition-colors">
          <Icon name="Users" size="16" />
          <span>Команды</span>
        </button>
        <button class="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-purple-600 rounded-md transition-colors">
          <Icon name="Settings" size="16" />
          <span>Настройки</span>
        </button>
        <button class="flex items-center space-x-2 px-3 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md transition-colors">
          <Icon name="Plus" size="16" />
          <span>Новый чат</span>
        </button>
        <div class="flex items-center space-x-2 ml-4">
          <button class="flex items-center space-x-2 px-3 py-2 border border-purple-200 text-purple-600 hover:bg-purple-50 rounded-md transition-colors">
            <Icon name="LogIn" size="16" />
            <span>Войти</span>
          </button>
          <button class="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-md transition-colors">
            <Icon name="UserPlus" size="16" />
            <span>Регистрация</span>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
// Здесь можно добавить логику для навигации
</script>
