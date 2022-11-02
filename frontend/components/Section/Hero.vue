<script setup>
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
  Button1Text: {
    type: String,
  },
  Button1Link: {
    type: String,
  },
  Button2Text: {
    type: String,
  },
  Button2Link: {
    type: String,
  },
});
const ImageAlt = props.Title + " " + props.SubTitle;
const showButton1 = props.Button1Text && props.Button1Link;
const showButton2 = props.Button2Text && props.Button2Link;
const showButtons = showButton1 || showButton2;
</script>

<template>
  <div class="relative bg-gray-50">
    <main class="lg:relative">
      <div
        class="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left"
      >
        <div class="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
          >
            <span class="block xl:inline">{{ Title }}</span>
            <span v-if="SubTitle">
              {{ " " }}
              <span class="block text-indigo-600 xl:inline">{{
                SubTitle
              }}</span>
            </span>
          </h1>
          <p
            v-if="Content"
            class="mx-auto mt-3 max-w-xl text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"
          >
            {{ Content }}
          </p>
          <div
            v-if="showButtons"
            class="mt-10 sm:flex sm:justify-center lg:justify-start"
          >
            <div class="rounded-md shadow">
              <a
                v-if="showButton1"
                :href="Button1Link"
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                >{{ Button1Text }}</a
              >
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                v-if="showButton2"
                :href="Button2Link"
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >{{ Button2Text }}</a
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
      >
        <img
          class="absolute inset-0 h-full w-full object-cover"
          :src="ImageSrc"
          :alt="ImageAlt"
        />
      </div>
    </main>
  </div>
</template>
