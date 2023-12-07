<template>
  <div class="chat">
    <ChatInterface />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChatInterface from "./ChatInterface.vue";

export default defineComponent({
  name: "ChatContainer",
  components: {
    ChatInterface,
  },
});
</script>

<style lang="scss">
.chat {
  position: relative;

  width: 500px;
  min-height: 700px;
  border-radius: 30px;
  background: white;
  padding-bottom: 60px;
}
</style>
