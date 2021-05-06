<template>
    <div class="my-2 px-2 w-1/3 overflow-hidden md:my-2 md:px-2">
      <button @click="clickButton(digit)"
        class="w-full cursor-pointer rounded bg-red-600 text-white text-2xl hover:text-black hover:bg-red-400 font-extrabold p-2"
      >
        {{ digit }}
      </button>
    </div>
</template>

<script lang="ts">
export default {
  props : {
      'digit' : Number,
      'clickButton': { type: Function },
  }
};
</script>



