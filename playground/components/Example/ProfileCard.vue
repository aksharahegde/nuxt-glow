<template>
  <section class="flex justify-center items-center w-full">
    <GlowCapture :size="400">
      <GlowElement color="#8B5CF6">
        <div class="glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15] border-2 border-gray-700 rounded-lg p-8">
          <div class="flex flex-col items-center space-y-4">
            <div class="relative">
              <img
                class="w-32 h-32 rounded-lg object-cover border-4 border-gray-700 glow:border-glow"
                src="https://i.pravatar.cc/300"
                alt="Profile"
              >
              <div class="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-lg border-2 border-gray-900" />
            </div>
            <div class="text-center">
              <h2 class="text-2xl font-bold text-gray-200 glow:text-glow">
                Sarah Johnson
              </h2>
              <p class="text-gray-400 glow:text-glow/80">
                Senior Developer
              </p>
            </div>
            <div class="flex gap-4">
              <button class="px-6 py-2 bg-gray-800 rounded-lg text-gray-200 hover:bg-gray-700 glow:bg-glow glow:text-white transition-colors">
                Follow
              </button>
              <button class="px-6 py-2 border border-gray-700 rounded-lg text-gray-200 hover:bg-gray-800 glow:border-glow glow:text-glow transition-colors">
                Message
              </button>
            </div>
          </div>
        </div>
      </GlowElement>
    </GlowCapture>
  </section>
</template> 