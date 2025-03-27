---
title: 'Documentation - Nuxt Glow'
description: 'Documentation for the Nuxt Glow module'
---


# Nuxt Glow Documentation

A powerful Nuxt module that adds beautiful mouse-tracking glow effects to your components.

## Features

- 🎯 Mouse-tracking glow effects
- 🎨 Customizable glow colors and sizes
- 🎭 Multiple glow elements support
- 🔧 Debug mode for development
- ⚡️ Performance optimized with requestAnimationFrame
- 🎨 Tailwind CSS integration

## Installation

```bash
# Using pnpm
pnpm i @aksharahegde/nuxt-glow

# Using npm
npm install @aksharahegde/nuxt-glow

# Using yarn
yarn add @aksharahegde/nuxt-glow
```

## Setup

Add the module to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ["@aksharahegde/nuxt-glow"]
})
```

## Components

### GlowCapture

The parent component that tracks mouse movement and manages the glow effect area.

```vue
<template>
  <GlowCapture>
    <!-- Your content here -->
  </GlowCapture>
</template>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | string | "" | Additional CSS classes |
| `size` | number | 400 | Size of the glow effect in pixels |
| `rest` | object | {} | Additional HTML attributes |

### GlowElement

The component that creates the actual glow effect on its children.

```vue
<template>
  <GlowElement color="purple">
    <div class="p-4">
      Content with glow effect
    </div>
  </GlowElement>
</template>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | string | "" | Additional CSS classes |
| `style` | object | {} | Additional CSS styles |
| `color` | string | "#f50057" | Color of the glow effect |
| `debug` | boolean | false | Enable debug mode to show glow mask |
| `rest` | object | {} | Additional HTML attributes |

## Usage Examples

### Basic Usage

```vue
<template>
  <GlowCapture>
    <GlowElement>
      <div class="p-4 bg-white rounded-lg">
        Hover me to see the glow effect!
      </div>
    </GlowElement>
  </GlowCapture>
</template>
```

### Custom Glow Color

```vue
<template>
  <GlowCapture>
    <GlowElement color="hsl(120, 100%, 50%)">
      <div class="p-4">
        Green glow effect
      </div>
    </GlowElement>
  </GlowCapture>
</template>
```

### Multiple Glow Elements

```vue
<template>
  <GlowCapture>
    <div class="grid gap-4">
      <GlowElement color="red">
        <div class="p-4">
          Red glow
        </div>
      </GlowElement>
      <GlowElement color="blue">
        <div class="p-4">
          Blue glow
        </div>
      </GlowElement>
    </div>
  </GlowCapture>
</template>
```

### With Tailwind Classes

```vue
<template>
  <GlowCapture>
    <GlowElement>
      <p class="text-black glow:text-glow/50 glow:bg-red-100">
        Text changes color and background on glow
      </p>
    </GlowElement>
  </GlowCapture>
</template>
```

## Tailwind Integration

Add the Tailwind plugin to your `tailwind.config.js`:

```js
module.exports = {
  plugins: [
    require('@aksharahegde/nuxt-glow/tailwind')
  ]
}
```

This enables:
- `glow:` variant for styling elements when they're glowing
- `glow` color with opacity support (e.g., `bg-glow/20`)

## CSS Variables

The module uses the following CSS variables that you can customize:

```css
.glow-capture {
  --glow-size: 400px;  /* Default size */
}

.glow-element {
  --glow-color: #f50057;  /* Default color */
}
```

## Debug Mode

Enable debug mode to visualize the glow mask:

```vue
<template>
  <GlowCapture>
    <GlowElement :debug="true">
      <div class="p-4">
        Debug mode shows the glow mask
      </div>
    </GlowElement>
  </GlowCapture>
</template>
```

## Best Practices

1. Always wrap `GlowElement` components inside a `GlowCapture`
2. Use the `glow:` variant for styling elements during the glow effect
3. Consider using CSS variables for consistent theming
4. Use debug mode during development to fine-tune the glow effect

## Browser Support

The module uses modern CSS features and is compatible with all modern browsers that support:
- CSS Grid
- CSS Variables
- CSS Masks
- Pointer Events API

## Performance

The module is optimized for performance using:
- `requestAnimationFrame` for smooth animations
- Passive event listeners
- Efficient CSS masking
- Minimal DOM updates
