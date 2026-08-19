import { createConfigForNuxt } from "@nuxt/eslint-config";

export default createConfigForNuxt({
  features: {
    typescript: true,
  },
  dirs: {
    src: ["src", "playground"],
    modules: ["src"],
    pages: ["playground/pages"],
    components: ["src/runtime/components", "playground/components"],
    root: ["."],
  },
})
  .prepend({
    ignores: ["**/temp.js", "config/*", "dist/*", "node_modules/*"],
  })
  .override("nuxt/vue/rules", {
    rules: {
      "vue/multi-word-component-names": "off",
    },
  });
