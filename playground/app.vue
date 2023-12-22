<template>
  <section class="h-screen w-full bg-gray-900 flex justify-center items-center">
    <GlowCapture :size="500">
      <GlowElement color="#00DC82">
        <div
          class="glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15] border-4 border-gray-400 rounded-lg"
        >
          <div class="grid place-items-center grid-cols-6 gap-2">
            <div class="col-span-3 p-8">
              <h2
                class="font-bold text-2xl mb-4 text-gray-200 glow:text-glow/[.8]"
              >
                Chicken Shawarma &amp; Veggies
              </h2>
              <p class="text-sm text-gray-300 glow:text-glow">
                Vitae ducimus harum earum ratione autem esse ea!
              </p>
              <button
                class="border mt-10 whitespace-nowrap border-border px-10 py-3 bg-gray-800 items-center hover:text-text-primary transition-colors rounded-xl mb-5 flex gap-3 text-gray-200 glow:text-glow glow:border-glow glow:ring glow:ring-glow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <span>Add to cart</span>
              </button>
            </div>
            <div class="col-span-3 -mt-5 -mb-10">
              <img
                class="h-[350px] object-cover object-left"
                src="https://i.ibb.co/mBg1WBp/kindpng-6728540.png"
              >
            </div>
          </div>
        </div>
      </GlowElement>
    </GlowCapture>
  </section>
</template>
