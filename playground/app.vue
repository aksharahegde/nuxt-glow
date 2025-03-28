<template>
  <div class="min-h-screen bg-gray-900">
    <Navbar />
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style>
body {
  @apply bg-gray-900;
}
.router-link-exact-active:not(.logo) {
  @apply text-white border-b-2 border-white;
}
</style>
