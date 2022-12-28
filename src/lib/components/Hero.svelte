<script lang="ts">
  import HeroTitle from '$lib/components/HeroTitle.svelte';
</script>

<div class="dark:bg-gray-900">
  <div class="container mx-auto py-12">
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
            class="mt-4 text-center text-xs font-light italic leading-normal dark:text-gray-300 md:m-auto md:mt-4 md:w-7/12 lg:m-0 lg:mt-5 lg:w-11/12 lg:prose-xl lg:text-left xl:w-10/12"
          >
            Amy Stout & SV Eloxy (Oday 28)
          </p>

          <p
            class="mt-4 text-center text-base leading-normal dark:text-gray-300 md:m-auto md:mt-4 md:w-7/12 lg:m-0 lg:mt-5 lg:w-11/12 lg:prose-xl lg:text-left  xl:w-10/12"
          >
            A minimal journal of my 2022 sailing adventure competing in the <a
              class="underline decoration-1 hover:underline-offset-8"
              href="https://www.solosailors.org/erie-solo-challenge/"
              target="_blank"
              rel="noreferrer">Solo Sailors.org Lake Erie Solo Challenge.</a
            >
            Little SV Eloxy, just after the start pictured on far left of the fleet.
          </p>
          <p class="mt-4">
            <img
              class="m-auto lg:m-0"
              src="./sailboat-hr-test-op.svg"
              alt="little sailboat graphic"
            />
          </p>
        </div>
      </div>
      <div class="mt-6 md:mt-8 lg:mt-0 lg:w-8/12">
        <div class="relative h-full w-full">
          <picture class="rounded-box relative hidden h-full w-full lg:block">
            <img
              sizes="(max-width: 1080px) 100vw, 1080px"
              srcset="
            start-line-op_hpda3d_c_scale,w_320.webp 320w,
            start-line-op_hpda3d_c_scale,w_638.webp 638w,
            start-line-op_hpda3d_c_scale,w_834.webp 834w,
            start-line-op_hpda3d_c_scale,w_998.webp 998w,
            start-line-op_hpda3d_c_scale,w_1080.webp 1080w"
              src="start-line-op_hpda3d_c_scale,w_1080.webp"
              alt=""
            />
          </picture>
          <picture class="rounded-box h-full w-full lg:hidden">
            <img
              sizes="(max-width: 1080px) 100vw, 1080px"
              srcset="
            start-line-op_hpda3d_c_scale,w_320.webp 320w,
            start-line-op_hpda3d_c_scale,w_638.webp 638w,
            start-line-op_hpda3d_c_scale,w_834.webp 834w,
            start-line-op_hpda3d_c_scale,w_998.webp 998w,
            start-line-op_hpda3d_c_scale,w_1080.webp 1080w"
              src="start-line-op_hpda3d_c_scale,w_1080.webp"
              alt=""
            />
          </picture>
          <div class="absolute bottom-0 right-0 hidden w-1/2 lg:block">
            <!-- there was a button here -->
            <a
              href="/posts"
              class="flex w-full items-center justify-between rounded-lg bg-gray-800 p-5 text-xl font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50 xl:p-6 xl:text-2xl"
            >
              My days ~ a recap
              <div>
                <a href="/posts">
                  <img
                    class="arrow-bounce-right dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero-II-svg1.svg"
                    alt="arrow"
                  /></a
                >
                <a href="/posts">
                  <img
                    class="arrow-bounce-right hidden dark:block"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero-II-svg1dark.svg"
                    alt="arrow"
                  />
                </a>
              </div>
            </a>
          </div>
        </div>
        <div class="mt-6 md:mt-8 lg:hidden">
          <a
            href="/posts"
            class="flex w-full items-center justify-between rounded-lg bg-gray-800 px-5 py-4 text-base font-semibold leading-tight text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50 md:w-5/12 md:text-xl lg:py-7 lg:px-7"
          >
            My days ~ a recap
            <div>
              <img
                class="arrow-bounce-right dark:hidden"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero-II-svg1.svg"
                alt="arrow"
              />
              <img
                class="arrow-bounce-right  hidden dark:block"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero-II-svg1dark.svg"
                alt="arrow"
              />
            </div>
            <!-- button ended here -->
          </a>
        </div>
        <!-- last div above is for second button thing -->
      </div>
    </div>
  </div>
</div>

<style>
  /* right bounce */
  @-webkit-keyframes bounceRight {
    0%,
    20%,
    50%,
    80%,
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    40% {
      -webkit-transform: translateX(-30px);
      transform: translateX(-30px);
    }
    60% {
      -webkit-transform: translateX(-15px);
      transform: translateX(-15px);
    }
  }
  @-moz-keyframes bounceRight {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateX(0);
    }
    40% {
      transform: translateX(-30px);
    }
    60% {
      transform: translateX(-15px);
    }
  }
  @keyframes bounceRight {
    0%,
    20%,
    50%,
    80%,
    100% {
      -ms-transform: translateX(0);
      transform: translateX(0);
    }
    40% {
      -ms-transform: translateX(-30px);
      transform: translateX(-30px);
    }
    60% {
      -ms-transform: translateX(-15px);
      transform: translateX(-15px);
    }
  }
  /* /right bounce */

  /* assign bounce */
  .arrow-bounce-right {
    -webkit-animation: bounceRight 2s infinite;
    animation: bounceRight 2s infinite;
    float: right;
  }
</style>
