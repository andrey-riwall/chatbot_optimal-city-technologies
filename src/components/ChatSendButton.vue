<template>
  <button class="chat__button-send" type="submit">
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 12L4 4L6 12M20 12L4 20L6 12M20 12H6"
        stroke="#222222"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChatSendButton",
});
</script>

<style lang="scss">
.chat__button-send {
  padding: 10px;
}
</style>
