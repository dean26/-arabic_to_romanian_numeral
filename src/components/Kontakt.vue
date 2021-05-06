<template>
  <div
    class="relative bg-white py-6 px-6 rounded-3xl w-full my-4 shadow-xl text-purple-700"
  >
    <div>
      <p class="text-xl font-semibold my-2">Author: {{ author }}</p>
      <div class="flex space-x-2 text-gray-400 text-sm">
        <!-- svg  -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p>
          <a href="https://{{ website }}" class="hover:text-black">{{
            website
          }}</a>
        </p>
      </div>
      <div class="flex space-x-2 text-gray-400 text-sm my-3">
        <!-- svg  -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <p>
          <a href="mailto: {{ email }}" class="hover:text-black">{{ email }}</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data: function () {
    return {
      author: "Łukasz Przeździęk",
      email: "l.przezdziek@gmail.com",
      website: "dean26.pl",
    };
  },
};
</script>



