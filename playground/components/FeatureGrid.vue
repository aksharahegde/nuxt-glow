<template>
  <section class="flex justify-center items-center w-full">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
      <GlowCapture :size="300">
        <GlowElement color="#3B82F6">
          <div class="glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15] border-2 border-gray-700 rounded-xl p-6">
            <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-200 glow:text-glow mb-2">Lightning Fast</h3>
            <p class="text-gray-400 glow:text-glow/80">Optimized performance for the best user experience</p>
          </div>
        </GlowElement>
      </GlowCapture>

      <GlowCapture :size="300">
        <GlowElement color="#10B981">
          <div class="glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15] border-2 border-gray-700 rounded-xl p-6">
            <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-200 glow:text-glow mb-2">Secure</h3>
            <p class="text-gray-400 glow:text-glow/80">Enterprise-grade security for your peace of mind</p>
          </div>
        </GlowElement>
      </GlowCapture>

      <GlowCapture :size="300">
        <GlowElement color="#F59E0B">
          <div class="glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15] border-2 border-gray-700 rounded-xl p-6">
            <div class="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-200 glow:text-glow mb-2">Reliable</h3>
            <p class="text-gray-400 glow:text-glow/80">99.9% uptime guarantee for your business</p>
          </div>
        </GlowElement>
      </GlowCapture>
    </div>
  </section>
</template> 