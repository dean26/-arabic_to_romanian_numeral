<template>
  <div class="flex flex-wrap -mx-2 overflow-hidden md:-mx-2">
    <div class="my-2 px-2 w-1/2 overflow-hidden md:my-2 md:px-2">
      <div
        class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1"
      >
        <p>
          <input
            id="name"
            autocomplete="false"
            placeholder="Arabic"
            tabindex="0"
            type="text"
            v-model="arabic"
            class="py-1 px-1 text-gray-900 outline-none block h-full w-full text-4xl"
          />
        </p>
      </div>
    </div>
    <div class="my-2 px-2 w-1/2 overflow-hidden md:my-2 md:px-2">
      <div
        class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1"
      >
        <p>
          <input
            id="name"
            autocomplete="false"
            placeholder="Romanian"
            disabled
            tabindex="0"
            type="text"
            v-model="romanian"
            class="py-1 px-1 text-gray-900 outline-none block h-full w-full text-4xl"
          />
        </p>
      </div>
    </div>

    <Button
      v-for="n in 9"
      :key="n"
      :digit="n"
      :clickButton="clickDigit"
    ></Button>

    <div class="my-2 px-2 w-1/3 overflow-hidden md:my-2 md:px-2">
      <button
        @click="backSpace"
        class="w-full flex items-center justify-center cursor-pointer rounded bg-gradient-to-r from-purple-400 to-indigo-800 text-white text-2xl hover:text-black font-extrabold p-2"
      >
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
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
      </button>
    </div>

    <div class="my-2 px-2 w-1/3 overflow-hidden md:my-2 md:px-2"></div>

    <div class="my-2 px-2 w-1/3 overflow-hidden md:my-2 md:px-2">
      <button
        @click="reset"
        class="w-full flex items-center justify-center cursor-pointer rounded bg-gradient-to-r to-purple-400 from-indigo-800 text-white text-2xl hover:text-black font-extrabold p-2"
      >
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import Button from "./ui/Button.vue";
import arabic_to_romanian  from "../functions/arabic_to_romanian.js"

export default {
  data: function () {
    return {
      arabic : '',
      romanian : '',
      message: "Tesst",
    };
  },
  methods: {
    ...arabic_to_romanian,
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
    clickDigit: function (a) {
      this.arabic += a.toString();
    },
    reset: function () {
      this.arabic = "";
    },
    backSpace: function () {
      if (this.arabic.length > 0)
        this.arabic = this.arabic.substr(0, this.arabic.length - 1);
    },
  },
  components: {
    Button,
  },
  watch: {
    arabic: function() {
      this.romanian = arabic_to_romanian.convert(Number(this.arabic));
    }
  }
};
</script>
