<script setup>
import { CameraIcon } from "@heroicons/vue/20/solid";

const props = defineProps({
  Title: {
    type: String,
    default: "Dreamer, Author, and Mother.",
  },
  SubTitle: {
    type: String,
    default: "Areli Wray",
  },
  Content: {
    type: String,
    default:
      "I am a dreamer, author, and mother. I am a lover of all things creative and I am passionate about helping others find their voice and share their stories.",
  },
  ImageSrc: {
    type: String,
    default: "/images/areli-profile-picture.jpg",
  },
  ImageCaption: {
    type: String,
    default: "Areli Wray",
  },
});

const ImageAlt = props.Title + " " + props.SubTitle;
</script>

<template>
  <div class="overflow-hidden bg-white">
    <div class="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
      <div
        class="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block"
      />

      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        <div class="relative lg:col-start-2 lg:row-start-1">
          <svg
            class="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
            />
          </svg>
          <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
            <figure>
              <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                <img
                  class="rounded-lg object-cover object-center shadow-lg"
                  :src="ImageSrc"
                  :alt="ImageAlt"
                  width="1184"
                  height="1376"
                />
              </div>
              <figcaption class="mt-3 flex text-sm text-gray-500">
                <CameraIcon
                  class="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
                <span class="ml-2">{{ ImageCaption }}</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div
            class="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8"
          >
            <div>
              <h2 class="text-lg font-semibold text-indigo-600">
                {{ SubTitle }}
              </h2>
              <h3
                class="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl"
              >
                {{ Title }}
              </h3>
            </div>
          </div>
          <div class="mt-8 mx-auto max-w-prose text-base lg:max-w-none">
            <p class="text-lg text-gray-500">
              {{ Content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
