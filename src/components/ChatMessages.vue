<template>
  <ul class="chat__messages" ref="messagesBlock">
    <ChatMessage
      @submit="handleSubmit"
      @show="scrollPage"
      v-for="message in messages"
      :key="messages.indexOf(message)"
      :message="message"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ChatMessage from "./ChatMessage.vue";
import type { Messages, Message } from "../types/ChatTypes";

export default defineComponent({
  name: "ChatMessages",
  props: {
    messages: {
      type: Array as PropType<Messages>,
      required: true,
    },
  },
  emits: {
    submit(payload: Message) {
      return payload;
    },
  },
  methods: {
    handleSubmit(message: Message) {
      this.$emit("submit", message);
    },
    scrollPage() {
      const messagesBlock = this.$refs.messagesBlock as HTMLUListElement;
      setTimeout(() => {
        messagesBlock.scrollTop = messagesBlock.scrollHeight;
      });
    },
  },
  components: { ChatMessage },
});
</script>

<style lang="scss">
.chat__messages {
  display: flex;
  flex-direction: column;
  gap: 14px;

  width: 100%;
  height: 581px;
  padding: 20px;

  overflow-y: auto;
}

.chat__messages {
  scrollbar-width: thin;
  scrollbar-color: rgba(black, 0.3) transparent;
}

.chat__messages::-webkit-scrollbar {
  width: 10px;
}
.chat__messages::-webkit-scrollbar-track {
  background: transparent;
}
.chat__messages::-webkit-scrollbar-thumb {
  background-color: rgba(black, 0.3);
  border-radius: 5px;
  border: 3px solid white;
}

@media screen and (max-width: 500px), screen and (max-height: 400px) {
  .chat__messages {
    height: calc(100vh - 72px - 60px + 13px);
  }
}
</style>
