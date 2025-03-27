<template>
  <div class="flex flex-col space-y-16 max-w-7xl items-center mx-auto px-4 py-10">
    <div class="flex flex-col gap-2 items-center">
      <h1 class="text-4xl font-bold text-white">Nuxt Glow</h1>
      <p class="text-gray-400">
        Add a mouse-tracing glow effect to Nuxt components using the nuxt-glow
        module.
      </p>
      <p class="text-gray-400">
        Module by
        <a href="https://aksharahegde.xyz" class="text-blue-500"
          >Akshara Hegde</a
        >
      </p>
    </div>

    <div class="w-full space-y-16">
      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-white text-center">Product Card</h2>
        <SimpleCard />
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-white text-center">Profile Card</h2>
        <ProfileCard />
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-white text-center">Feature Grid</h2>
        <FeatureGrid />
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-white text-center">Pricing Card</h2>
        <PricingCard />
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-white text-center">Testimonial Card</h2>
        <TestimonialCard />
      </div>
    </div>
  </div>
</template>

<style>
body {
  @apply bg-gray-900;
}
</style>
