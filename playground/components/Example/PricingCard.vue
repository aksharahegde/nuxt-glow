<template>
  <section class="flex justify-center items-center w-full">
    <GlowCapture :size="400">
      <GlowElement color="#EC4899">
        <div class="glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15] border-2 border-gray-700 rounded-2xl p-8 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl" />
          <div class="relative">
            <div class="flex justify-between items-start mb-6">
              <div>
                <h3 class="text-2xl font-bold text-gray-200 glow:text-glow">
                  Pro Plan
                </h3>
                <p class="text-gray-400 glow:text-glow/80">
                  Perfect for growing teams
                </p>
              </div>
              <div class="text-right">
                <span class="text-4xl font-bold text-gray-200 glow:text-glow">$49</span>
                <span class="text-gray-400 glow:text-glow/80">/month</span>
              </div>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center gap-3 text-gray-300 glow:text-glow/90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Unlimited projects
              </li>
              <li class="flex items-center gap-3 text-gray-300 glow:text-glow/90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Advanced analytics
              </li>
              <li class="flex items-center gap-3 text-gray-300 glow:text-glow/90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Priority support
              </li>
            </ul>
            <button class="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl hover:opacity-90 transition-opacity glow:shadow-lg glow:shadow-glow/20">
              Get Started
            </button>
          </div>
        </div>
      </GlowElement>
    </GlowCapture>
  </section>
</template> 