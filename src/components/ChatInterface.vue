<template>
  <form
    class="chat__interface"
    autocomplete="off"
    action="#"
    @submit.prevent="sendMessage"
  >
    <ChatInput v-model:value="value" @keydown.enter.prevent="handleEnterKey" />
    <ChatSendButton />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChatInput from "./ChatInput.vue";
import ChatSendButton from "./ChatSendButton.vue";
import { Message } from "@/types/ChatTypes";

export default defineComponent({
  name: "ChatInterface",
  emits: {
    submit(payload: Message) {
      return payload;
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    handleEnterKey(event: KeyboardEvent) {
      if (event.shiftKey) {
        this.value = this.value + "\n";
      } else if (this.value.replace(/\n/g, "")) {
        this.sendMessage();
      }
    },
    sendMessage() {
      if (this.value.replace(/\n/g, "")) {
        this.$emit("submit", {
          value: this.value,
          author: true,
          button: false,
          delayCount: 0,
        });
        this.value = "";
      }
    },
  },
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
  align-items: end;
  justify-content: space-between;
  gap: 10px;

  width: 100%;
  padding: 13px;
}
</style>
