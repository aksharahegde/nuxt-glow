[![Peerlist Launch Badge](/images/peerlist_launch_badge.svg)](https://peerlist.io/scroll/post/ACTHP69GO9R69MPO7H6BPR69KJDKRG)

# Nuxt Glow

Add a mouse-tracing glow effect to Nuxt components.

[Demo](https://nuxt-glow.pages.dev/)

>Plugin for Vue 3 also available: [Vue Glow](https://github.com/aksharahegde/vue-glow)

Checkout downloads on [NPM Chart](https://npm.chart.dev/@aksharahegde/nuxt-glow?primary=green&gray=cool&theme=dark).

## Installation

Install the package using your favorite package manager:

```shell
pnpm i @aksharahegde/nuxt-glow
```

## Usage

1. Add the `@aksharahegde/nuxt-glow` plugin to your `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["@aksharahegde/nuxt-glow"],
});
```

2. Wrap any number of `<GlowElement>` components in a `<GlowCapture>` which will be used to track the mouse location.

```html
<template>
  <GlowCapture>
    <span>This won't glow</span>
    <GlowElement color="purple">
      <p class="text-black glow:text-glow/50 glow:bg-red-100">
        This will glow purple when the mouse is passed over
      </p>
    </GlowElement>
  </GlowCapture>
</template>
```

Children of `<GlowElement>` can style themselves how to look when glowing. You might choose to leave some children unchanged, or highlight them with the `glow:` variant style.

The value of `color` will be available as a CSS variable `--glow-color`, as well as the Tailwind `glow` color. 
You can pass any valid CSS color, including `hsl()` values etc.
Of course, you might choose to use any other color; you can leave out the `color` prop entirely.

## Tailwind

The module registers the `glow:` variant and `glow` color automatically when you use Nuxt Glow with Tailwind CSS v4.

For manual setup, import the CSS extension in your main stylesheet:

```css
@import "@aksharahegde/nuxt-glow/tailwind.css";
```

For Tailwind CSS v3, use the legacy JS plugin:

`tailwind.config.js`
```js
module.exports = {
  ...
  plugins: [
    require('@aksharahegde/nuxt-glow/tailwind')
  ]
}
```

As with all colors in Tailwind, you may add opacity by appending a percentage after the color, such as `bg-glow/20` for 20% opacity.

## DevTools v4 (optional)

Nuxt ships with DevTools enabled, but this repo can opt into DevTools v4 (alpha) for development.

In your `pnpm-workspace.yaml`, add an override:

```yaml
overrides:
  '@nuxt/devtools': 'npm:@nuxt/devtools-nightly@latest'
```

DevTools v4 requires Vite 8. After changing overrides, reinstall dependencies (delete `pnpm-lock.yaml` if needed).

## Contributing 🙏

1. Clone this repository
2. Install dependencies using `pnpm install`
3. Run `npm run dev:prepare` to generate type stubs.
4. Use `npm run dev` to start [playground](https://github.com/nuxt-modules/icon/tree/main/playground) in development mode.
5. Once development is complete, create PR to this repository.

## Attribution
- Module is inspired by [React Glow](https://github.com/codaworks/react-glow) by [Codaworks](https://github.com/codaworks)
- Playground card is version of https://codepen.io/_rahul/pen/MWrozMX by [rahul](https://codepen.io/_rahul)
