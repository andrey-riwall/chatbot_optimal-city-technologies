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
import type { Messages } from "../types/ChatTypes";
import { Message } from "../types/ChatTypes";
import answers from "../chatbot/answers.json";
import { chatbotLogics } from "../chatbot/chatbotLogics";

export default defineComponent({
  name: "ChatContainer",
  data() {
    return {
      messages: [] as Messages,
      answers: answers,
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
        setTimeout(() => {
          chatbotLogics(lastMessage.value).forEach((el: Message) => {
            this.submit(el);
          });
        }, 1000);
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

  max-width: 400px;
  width: 400px;
  height: 700px;
  background: white;
  padding-bottom: 72px;

  background-image: url("../assets/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
