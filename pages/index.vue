
<template>
  <div class="min-h-screen bg-gray-50">
    <Header />

    <main class="container mx-auto px-6 py-8">
      <HeroSlider />

      <FeaturesSection />

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div class="lg:col-span-1">
          <ChatListWidget />
        </div>

        <div class="lg:col-span-1">
          <OnlineUsersWidget />
        </div>

        <div class="lg:col-span-1">
          <StatsWidget />
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <NewsWidget />
        <QuotesWidget />
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
// Мета-теги для SEO
useHead({
  title: 'ChatHub - Современная платформа для командного общения',
  meta: [
    { name: 'description', content: 'Общайтесь без границ с ChatHub - современной платформой для эффективного командного общения и совместной работы.' }
  ]
})
</script>
