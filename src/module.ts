import { defineNuxtModule, addComponent, createResolver, installModule } from "@nuxt/kit";

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-glow",
    configKey: "nuxtGlow",
    compatibility: {
      nuxt: ">=3.0.0",
    },
  },
  defaults: {},
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    await installModule('@nuxtjs/tailwindcss', {
      exposeConfig: true,
      config: {
        darkMode: 'class',
        content: {
          files: [
            resolver.resolve('./runtime/components/**/*.{vue,mjs,ts}'),
            resolver.resolve('./runtime/*.{mjs,js,ts}')
          ]
        }
      }
    })

    addComponent({
      name: "GlowCapture",
      filePath: resolver.resolve("runtime/components/GlowCapture.vue"),
      global: true
    });
    addComponent({
      name: "Glow",
      filePath: resolver.resolve("runtime/components/Glow.vue"),
      global: true
    });
  },
});
