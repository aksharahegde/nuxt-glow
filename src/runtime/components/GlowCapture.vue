<template>
  <div
    ref="elementParent"
    class="glow-capture"
    :class="className"
    :style="{ position: 'relative', '--glow-size': size + 'px' }"
    v-bind="rest"
  >
    <slot></slot>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  props: {
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
  },
  setup(props, { emit }) {
    const elementParent = ref(null);

    const move = (e) => {
      if (e.pointerType === "mouse") {
        requestAnimationFrame(() => {
          elementParent.value.style.setProperty("--glow-x", `${e.layerX}px`);
          elementParent.value.style.setProperty("--glow-y", `${e.layerY}px`);
        });
      }
    };

    const leave = () => {
      elementParent.value.style.removeProperty("--glow-x");
      elementParent.value.style.removeProperty("--glow-y");
    };

    onMounted(() => {
      elementParent.value.addEventListener("pointermove", move, { passive: true });
      elementParent.value.addEventListener("pointerleave", leave, { passive: true });
    });

    onUnmounted(() => {
      elementParent.value.removeEventListener("pointermove", move);
      elementParent.value.removeEventListener("pointerleave", leave);
    });

    return {
      elementParent,
    };
  },
};
</script>
