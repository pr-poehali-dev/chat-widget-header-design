
<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Логотип и описание -->
        <div class="md:col-span-1">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Icon name="MessageCircle" size="20" class="text-white" />
            </div>
            <h3 class="text-xl font-bold">ChatHub</h3>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            Современная платформа для командного общения и совместной работы. 
            Общайтесь без границ и работайте эффективнее.
          </p>
        </div>

        <!-- Быстрые ссылки -->
        <div>
          <h4 class="font-semibold mb-4 text-purple-400">Платформа</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><a href="#" class="hover:text-white transition-colors">Возможности</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Безопасность</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Интеграции</a></li>
            <li><a href="#" class="hover:text-white transition-colors">API</a></li>
          </ul>
        </div>

        <!-- Поддержка -->
        <div>
          <h4 class="font-semibold mb-4 text-purple-400">Поддержка</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><a href="#" class="hover:text-white transition-colors">Центр помощи</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Документация</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Обратная связь</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Статус системы</a></li>
          </ul>
        </div>

        <!-- Контакты -->
        <div>
          <h4 class="font-semibold mb-4 text-purple-400">Связаться с нами</h4>
          <div class="space-y-3 text-sm text-gray-400">
            <div class="flex items-center space-x-2">
              <Icon name="Mail" size="16" />
              <span>support@chathub.ru</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="Phone" size="16" />
              <span>+7 (495) 123-45-67</span>
            </div>
            <div class="flex space-x-4 mt-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <Icon name="Twitter" size="20" />
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <Icon name="Github" size="20" />
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <Icon name="Linkedin" size="20" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Нижняя часть -->
      <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm">
          © 2025 ChatHub. Все права защищены.
        </p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">
            Политика конфиденциальности
          </a>
          <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">
            Условия использования
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Футер готов к использованию
</script>
