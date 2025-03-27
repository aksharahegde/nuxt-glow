<template>
  <div
    class="flex flex-col space-y-16 max-w-7xl items-center mx-auto px-4 py-10"
  >
    <Hero />

    <div class="w-full space-y-16">
      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-white text-center">Product Card</h2>
        <ExampleSimpleCard />
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-white text-center">Profile Card</h2>
        <ExampleProfileCard />
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-white text-center">Feature Grid</h2>
        <ExampleFeatureGrid />
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-white text-center">Pricing Card</h2>
        <ExamplePricingCard />
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-white text-center">
          Testimonial Card
        </h2>
        <ExampleTestimonialCard />
      </div>
    </div>
    <Footer />
  </div>
</template>
