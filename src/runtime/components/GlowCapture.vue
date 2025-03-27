<!-- components/GlowCapture.vue -->
<template>
  <div
    ref="capture"
    class="glow-capture"
    :class="className"
    :style="{ '--glow-size': `${size}px` }"
    @pointermove="handleMove"
    @pointerleave="handleLeave"
    v-bind="rest"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  className: { type: String, default: '' },
  size: { type: Number, default: 400 },
  rest: { type: Object, default: () => ({}) },
});

const capture = ref<HTMLElement | null>(null);

const handleMove = (e: PointerEvent) => {
  if (e.pointerType === 'mouse' && capture.value) {
    requestAnimationFrame(() => {
      capture.value?.style.setProperty('--glow-x', `${e.layerX}px`);
      capture.value?.style.setProperty('--glow-y', `${e.layerY}px`);
    });
  }
};

const handleLeave = () => {
  if (capture.value) {
    requestAnimationFrame(() => {
      capture.value?.style.setProperty('--glow-x', '-99999px');
      capture.value?.style.setProperty('--glow-y', '-99999px');
    });
  }
};
</script>

<style scoped>
.glow-capture {
  position: relative;
}
</style>