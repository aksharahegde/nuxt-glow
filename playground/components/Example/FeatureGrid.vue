<template>
  <section class="flex justify-center items-center w-full p-10">
    <GlowCapture :size="400">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <GlowElement
          v-for="feature in features"
          :key="feature.title"
          :color="feature.color"
        >
          <div
            class="h-full glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15] border-2 border-gray-700 rounded-xl p-6"
          >
            <div
              :class="`w-12 h-12 bg-${feature.colorClass}/20 rounded-lg flex items-center justify-center mb-4`"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                :class="`h-6 w-6 text-${feature.colorClass}`"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="feature.icon"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-200 glow:text-glow mb-2">
              {{ feature.title }}
            </h3>
            <p class="text-gray-400 glow:text-glow/80">
              {{ feature.description }}
            </p>
          </div>
        </GlowElement>
      </div>
    </GlowCapture>
  </section>
</template>

<script setup>
const features = [
  {
    title: 'Lightning Fast',
    description: 'Optimized performance for the best user experience',
    color: '#3B82F6',
    colorClass: 'blue-500',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Secure',
    description: 'Enterprise-grade security for your peace of mind',
    color: '#10B981',
    colorClass: 'green-500',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    title: 'Reliable',
    description: '99.9% uptime guarantee for your business',
    color: '#F59E0B',
    colorClass: 'yellow-500',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
  }
]
</script>
