<template>
  <div class="chat">
    <ChatHeading />
    <ChatMessages @submit="submit" :messages="messages" />
    <ChatInterface @submit="submit" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChatHeading from "./ChatHeading.vue";
import ChatInterface from "./ChatInterface.vue";
import ChatMessages from "./ChatMessages.vue";
import { chatbotLogics } from "../chatbot/chatbotLogics";
import type { Messages, Message } from "../types/ChatTypes";

export default defineComponent({
  name: "ChatContainer",
  data() {
    return {
      messages: [] as Messages,
    };
  },
  methods: {
    submit(message: Message) {
      this.messages.push({
        value: message.value,
        author: message.author,
        button: message.button,
        delayCount: message.delayCount,
      });
    },
    ...chatbotLogics,
  },
  components: {
    ChatHeading,
    ChatMessages,
    ChatInterface,
  },
  watch: {
    "messages.length"() {
      const lastMessage = this.messages[this.messages.length - 1];
      if (lastMessage.author) {
        chatbotLogics(lastMessage.value).forEach((el: Message) => {
          this.submit(el);
        });
      }
    },
  },
  mounted() {
    chatbotLogics("").forEach((el: Message) => {
      this.submit(el);
    });
  },
});
</script>

<style lang="scss">
.chat {
  position: relative;

  width: 400px;
  height: 700px;
  background: white;
  padding-bottom: 72px;

  background-image: url("../assets/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
}

@media screen and (max-width: 500px), screen and (max-height: 700px) {
  .chat {
    position: fixed;
    left: 50%;
    top: 0;
    right: 0;
    bottom: 0;
    transform: translateX(-50%);
    height: auto;
  }
}

@media screen and (max-width: 500px), screen and (max-height: 400px) {
  .chat {
    width: auto;
  }
}
</style>
