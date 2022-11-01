<script lang="ts">
  import HeroTitle from '$lib/components/HeroTitle.svelte';
</script>

<div class="dark:bg-gray-900">
  <div class="container mx-auto py-9 md:py-12 lg:py-24">
    <div class="items-strech mx-4 flex flex-col justify-center lg:flex-row">
      <div class="flex items-center justify-center lg:w-4/12">
        <div>
          <!-- <h1
            class="w-7/12 text-4xl font-semibold text-gray-900 dark:text-white md:text-5xl xl:text-6xl"
          >
            My Longest Sail <Title />
          </h1> -->
          <HeroTitle />
          <p
            class="mt-4 text-base leading-normal text-gray-600 dark:text-gray-300 md:w-7/12 lg:mt-5 lg:w-11/12 xl:w-10/12"
          >
            A minimal recap of my 2022 sailing adventure competing in the solo sailors.org Lake Erie
            Solo Challenge. Little sv Eloxy just after the start pictured on far left of the fleet. <span
              class="mp2 nj141"
              aria-label="Emoji: Dashing Away"
              title="Dashing Away"
              alt="💨"
            />
          </p>
          <p class="mt-4">
            <img src="./sailboat-hr.svg" alt="little sailboat graphic" />
          </p>
        </div>
      </div>
      <div class="mt-6 md:mt-8 lg:mt-0 lg:w-8/12">
        <div class="relative h-full w-full">
          <img
            src="./start-line-no-kite.jpeg"
            alt="A lounge sofa"
            role="img"
            class="rounded-box relative hidden h-full w-full lg:block"
          />
          <img
            src="./start-line-no-kite.jpeg"
            alt="A lounge sofa"
            role="img"
            class="rounded-box h-full w-full lg:hidden"
          />
          <div class="absolute bottom-0 right-0 hidden w-1/2 bg-red-200 lg:block">
            <button
              class="flex w-full items-center justify-between bg-gray-800 p-5 text-xl font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50 xl:p-6 xl:text-2xl"
            >
              My days ~ a recap
              <div>
                <a href="#">
                  <img
                    class="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero-II-svg1.svg"
                    alt="arrow"
                  /></a
                >
                <a href="#">
                  <img
                    class="hidden dark:block"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero-II-svg1dark.svg"
                    alt="arrow"
                  />
                </a>
              </div>
            </button>
          </div>
        </div>
        <div class="mt-6 md:mt-8 lg:hidden">
          <button
            class="flex w-full items-center justify-between bg-gray-800 px-5 py-4 text-base font-semibold leading-tight text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50 md:w-5/12 md:text-xl lg:py-7 lg:px-7"
          >
            My days ~ a recap
            <div>
              <img
                class="dark:hidden"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero-II-svg1.svg"
                alt="arrow"
              />
              <img
                class="hidden dark:block"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero-II-svg1dark.svg"
                alt="arrow"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
