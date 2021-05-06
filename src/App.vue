<template>
  <div class="flex items-center justify-center h-screen">
    <div
      class="bg-indigo-800 font-mono text-white font-bold rounded-lg border shadow-lg p-10"
    >
      <h1
        class="border-b-2 border-purple-500 mb-3 text-center text-4xl tracking-wide"
      >
        {{ title }}
      </h1>
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <router-view></router-view>
      <p class="border-t-2 border-purple-700 mt-4 p-2 text-center">
        <!-- specify the link by passing the `to` prop. -->
        <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
        <router-link to="/" class="font-light hover:text-purple-700"
          >Home</router-link
        >
        &nbsp;
        <router-link to="/kontakt" class="font-light hover:text-purple-700"
          >Contact</router-link
        >
      </p>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data: function () {
    return {
      title: "Arabic numerals to romanian numerals converter",
    };
  },
};
</script>