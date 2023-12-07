<template>
  <form class="chat__interface" autocomplete="off">
    <ChatInput />
    <ChatSendButton />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChatInput from "./ChatInput.vue";
import ChatSendButton from "./ChatSendButton.vue";

export default defineComponent({
  name: "ChatInterface",
  components: {
    ChatInput,
    ChatSendButton,
  },
});
</script>

<style lang="scss">
.chat__interface {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  align-items: center;
  gap: 5px;

  height: 60px;
  padding: 0 15px 0 30px;
  border-top: 1px solid rgba($color: #000000, $alpha: 0.3);
}
</style>
