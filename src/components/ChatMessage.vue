<template>
  <li
    v-show="messageShow"
    class="chat__message"
    :class="{ right: message.author, button: message.button }"
    @click="handleClick"
  >
    <span v-if="messageLoading" class="chat__loading">...</span>
    <span v-else>{{ message.value }}</span>
  </li>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { Message } from "@/types/ChatTypes";

export default defineComponent({
  name: "ChatMessage",
  props: {
    message: {
      type: Object as PropType<Message>,
      required: true,
    },
  },
  data() {
    return {
      messageLoading: true,
      messageShow: false,
    };
  },
  emits: {
    submit(payload: Message) {
      return payload;
    },
    show(payload: boolean) {
      return payload;
    },
  },
  methods: {
    handleClick() {
      if (this.message.button && !this.messageLoading) {
        this.$emit("submit", {
          value: this.message.value,
          author: true,
          button: false,
          delayCount: 0,
        });
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.messageShow = true;
      this.$emit("show", true);
    }, this.message.delayCount * 1000);
    if (this.message.author) {
      this.messageLoading = false;
    } else {
      setTimeout(() => {
        this.messageLoading = false;
      }, this.message.delayCount * 1000 + 1000);
    }
  },
});
</script>

<style lang="scss">
.chat__message {
  align-self: flex-start;

  padding: 10px 22px;
  border-radius: 25px;
  background: #d3d2d2;

  font-size: 18px;

  &.right {
    align-self: flex-end;
    background: #25d366;
    span {
      color: white;
    }
  }

  &.button {
    padding: 8px 19px;
    font-size: 16px;
    transform: translateX(20px);
    background: rgba(#d3d2d2, 0.5);
    cursor: pointer;

    &.chat__loading {
      font-size: 16px;
    }
  }
}

.chat__loading {
  font-weight: bold;
  display: inline-block;
  font-family: monospace;
  font-size: 18px;
  clip-path: inset(0 3ch 0 0);
  animation: loading 1s steps(4) infinite;
}

@keyframes loading {
  to {
    clip-path: inset(0 -1ch 0 0);
  }
}
</style>
