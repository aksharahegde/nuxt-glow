<!-- components/Glow.vue -->
<template>
  <div
    ref="element"
    class="glow"
    :class="className"
    :style="{ display: 'grid' }"
  >
    <div
      :style="{ gridArea: '1/1/1/1', ...style }"
      v-bind="rest"
    >
      <slot />
    </div>
    <div
      glow
      class="glow-mask glow:bg-glow/[.15]"
      :style="{
        '--glow-color': color,
        gridArea: '1/1/1/1',
        pointerEvents: 'none',
      }"
      v-bind="rest"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

defineProps({
  className: { type: String, default: '' },
  style: { type: Object, default: () => ({}) },
  color: { type: String, default: '#f50057' },
  rest: { type: Object, default: () => ({}) },
});

const element = ref<HTMLElement | null>(null);

onMounted(() => {
  const updatePosition = () => {
    if (element.value) {
      element.value.style.setProperty('--glow-top', `${element.value.offsetTop}px`);
      element.value.style.setProperty('--glow-left', `${element.value.offsetLeft}px`);
    }
  };

  updatePosition(); // Initial position

  const resizeObserver = new ResizeObserver(() => {
    requestAnimationFrame(updatePosition);
  });

  if (element.value?.parentElement) {
    resizeObserver.observe(element.value.parentElement);
  }

  onUnmounted(() => resizeObserver.disconnect());
});
</script>

<style scoped>
.glow {
  position: relative;
  overflow: hidden;
}

.glow-mask {
  mask: radial-gradient(
    var(--glow-size) var(--glow-size) at 
    calc(var(--glow-x, -99999px) - var(--glow-left, 0px)) 
    calc(var(--glow-y, -99999px) - var(--glow-top, 0px)), 
    #000000 1%, transparent 50%
  );
  -webkit-mask: radial-gradient(
    var(--glow-size) var(--glow-size) at 
    calc(var(--glow-x, -99999px) - var(--glow-left, 0px)) 
    calc(var(--glow-y, -99999px) - var(--glow-top, 0px)), 
    #000000 1%, transparent 50%
  );
}
</style>