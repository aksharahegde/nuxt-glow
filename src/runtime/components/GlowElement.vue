<template>
  <div ref="element" class="grid glow">
    <div
      :class="className"
      :style="{ ...style, gridArea: '1/1/1/1' }"
      v-bind="rest"
    >
      <slot />
    </div>
    <div
      class="glow-mask"
      :class="className"
      :glow="true"
      :style="{
        ...style,
        '--glow-color': color,
        gridArea: '1/1/1/1',
        pointerEvents: 'none',
        mask: debug ? undefined : mask,
        WebkitMask: debug ? undefined : mask,
      }"
      v-bind="rest"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

export default {
  props: {
    className: {
      type: String,
      default: "",
    },
    style: {
      type: Object,
      default: () => ({}),
    },
    color: {
      type: String,
      default: "#f50057",
    },
    debug: {
      type: Boolean,
      default: false,
    },
    rest: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const element = ref(null);

    const mask = computed(() => {
      return `
        radial-gradient(var(--glow-size) var(--glow-size) at calc(var(--glow-x, -99999px) - var(--glow-left, 0px))
        calc(var(--glow-y, -99999px) - var(--glow-top, 0px)), ${props.color} 1%, transparent 50%)
      `;
    });

    onMounted(() => {
      const elem: any = element.value;
      elem.style.setProperty("--glow-top", `${elem.offsetTop}px`);
      elem.style.setProperty("--glow-left", `${elem.offsetLeft}px`);
      const observer = new ResizeObserver(() => {
        requestAnimationFrame(() => {
          elem.style.setProperty(
            "--glow-top",
            `${elem.offsetTop}px`
          );
          elem.style.setProperty(
            "--glow-left",
            `${elem.offsetLeft}px`
          );
        });
      });

      const capture = elem.closest(".glow-capture");
      if (capture) observer.observe(capture);

      onUnmounted(() => observer.disconnect());
    });

    return {
      element,
      mask,
    };
  },
};
</script>
