<template>
  <input
    class="chat__input"
    type="text"
    name="message"
    placeholder="Введите сообщение..."
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChatInput",
});
</script>

<style lang="scss">
.chat__input {
  width: 100%;
  height: 100%;

  font-size: 20px;
}
</style>
