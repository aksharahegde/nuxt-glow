import { readFileSync } from "node:fs";
import { defineNuxtModule, addComponent, createResolver, installModule, addVitePlugin } from "@nuxt/kit";

export type ModuleOptions = object;

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-glow",
    configKey: "nuxtGlow",
    compatibility: {
      nuxt: ">=3.10.0",
    },
  },
  defaults: {},
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url);
    const glowCssPath = resolver.resolve("./runtime/tailwind.css");
    const glowCss = readFileSync(glowCssPath, "utf-8");

    addVitePlugin(
      {
        name: "nuxt-glow:tailwind",
        enforce: "pre",
        transform(code, _id) {
          if (!code.includes('@import "tailwindcss"') || code.includes("nuxt-glow/tailwind")) {
            return;
          }

          return `${code}\n/* nuxt-glow/tailwind */\n${glowCss}`;
        },
      },
      { client: true, server: true },
    );

    await installModule("@nuxtjs/tailwindcss");

    addComponent({
      name: "GlowCapture",
      filePath: resolver.resolve("runtime/components/GlowCapture.vue"),
      global: true,
    });
    addComponent({
      name: "GlowElement",
      filePath: resolver.resolve("runtime/components/GlowElement.vue"),
      global: true,
    });
  },
});
