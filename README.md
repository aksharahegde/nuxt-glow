# Nuxt Glow

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Add a mouse-tracing glow effect to Nuxt components.

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

2. Wrap any number of `<Glow>` components in a `<GlowCapture>` which will be used to track the mouse location.

```html
<template>
  <GlowCapture>
    <span>This won't glow</span>
    <Glow color="purple">
      <p class="text-black glow:text-glow/50 glow:bg-red-100">
        This will glow purple when the mouse is passed over
      </p>
    </Glow>
  </GlowCapture>
</template>
```

Children of `<Glow>` can style themselves how to look when glowing. You might choose to leave some children unchanged, or highlight them with the `glow:` variant style.

The value of `color` will be available as a CSS variable `--glow-color`, as well as the Tailwind `glow` color. 
You can pass any valid CSS color, including `hsl()` values etc.
Of course, you might choose to use any other color; you can leave out the `color` prop entirely.

## Tailwind
Add the tailwind plugin to unlock the `glow:` variant and `glow` color

`tailwind.config.js`
```js
module.exports = {
  ...
  plugins: [
    require('@codaworks/react-glow/tailwind')
  ]
}
```

As with all colors in Tailwind, you may add opacity by appending a percentage after the color, such as `bg-glow/20` for 20% opacity.

## Contributing 🙏

1. Clone this repository
2. Install dependencies using `pnpm install`
3. Run `npm run dev:prepare` to generate type stubs.
4. Use `npm run dev` to start [playground](https://github.com/nuxt-modules/icon/tree/main/playground) in development mode.
5. Once development is complete, create PR to this repository.

## Attribution
- Module is inspired by [React Glow](https://github.com/codaworks/react-glow) by [Codaworks](https://github.com/codaworks)
- Playground card is version of https://codepen.io/_rahul/pen/MWrozMX by [rahul](https://codepen.io/_rahul)
