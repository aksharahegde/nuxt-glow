<template>
  <div
    ref="elementParent"
    class="glow-capture"
    :class="className"
    :style="{ position: 'relative', '--glow-size': size + 'px' }"
    v-bind="rest"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  className: {
    type: String,
    default: "",
  },
  size: {
    type: Number,
    default: 400,
  },
  rest: {
    type: Object,
    default: () => ({}),
  },
});

const elementParent = ref<HTMLElement | null>(null);

const move = (e: PointerEvent) => {
  if (e.pointerType === "mouse") {
    requestAnimationFrame(() => {
      elementParent.value?.style.setProperty("--glow-x", `${e.layerX}px`);
      elementParent.value?.style.setProperty("--glow-y", `${e.layerY}px`);
    });
  }
};

const leave = () => {
  if (!elementParent.value) return;
  elementParent.value.style.removeProperty("--glow-x");
  elementParent.value.style.removeProperty("--glow-y");
};

onMounted(() => {
  if (!elementParent.value) return;
  elementParent.value.addEventListener("pointermove", move, { passive: true });
  elementParent.value.addEventListener("pointerleave", leave, { passive: true });
});

onUnmounted(() => {
  if (!elementParent.value) return;
  elementParent.value.removeEventListener("pointermove", move);
  elementParent.value.removeEventListener("pointerleave", leave);
});
</script>