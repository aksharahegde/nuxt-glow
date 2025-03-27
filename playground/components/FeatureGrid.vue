<template>
  <section class="flex justify-center items-center w-full">
    <GlowCapture :size="400">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <GlowElement
          v-for="(card, index) in cards"
          :key="index"
          :color="getColorByIndex(index)"
        >
          <div
            class="glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15] border-2 border-gray-700 rounded-xl p-6"
          >
            <div
              :class="`w-12 h-12 bg-${getColorClassByIndex(index)}-500/20 rounded-lg flex items-center justify-center mb-4`"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                :class="`h-6 w-6 text-${getColorClassByIndex(index)}-500`"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="getIconPath(card.icon)"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-200 glow:text-glow mb-2">
              {{ card.title }}
            </h3>
            <p class="text-gray-400 glow:text-glow/80">
              {{ card.description }}
            </p>
          </div>
        </GlowElement>
      </div>
    </GlowCapture>
  </section>
</template>

<script lang="ts" setup>
const cards = [
  {
    title: 'Lightning Fast',
    description: 'Optimized performance for the best user experience',
    icon: 'lightning',
  },
  {
    title: 'Secure',
    description: 'Enterprise-grade security for your peace of mind',
    icon: 'lock',
  },
  {
    title: 'Reliable',
    description: 'Enterprise-grade security for your peace of mind',
    icon: 'lock',
  },
];

const getColorByIndex = (index: number) => {
  const colors = ['#3B82F6', '#10B981', '#F59E0B'];
  return colors[index];
};

const getColorClassByIndex = (index: number) => {
  const colors = ['blue', 'green', 'yellow'];
  return colors[index];
};

const getIconPath = (icon: string) => {
  const paths = {
    lightning: 'M13 10V3L4 14h7v7l9-11h-7z',
    lock: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  };
  return paths[icon as keyof typeof paths] || '';
};
</script>