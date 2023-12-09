<template>
  <textarea
    ref="inputRef"
    class="chat__input"
    type="text"
    name="message"
    placeholder="Введите сообщение..."
    rows="1"
    :value="value"
    :style="{ height: inputHeight }"
    @input="handleInput"
    @keydown="handleKeyDown"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChatInput",
  props: {
    value: String,
  },
  emits: {
    "update:value"(payload: string) {
      return payload;
    },
  },
  data: function () {
    return {
      inputHeight: "auto",
      initialHeight: 0,
    };
  },
  methods: {
    handleInput(event: Event) {
      const target = event.target as HTMLInputElement;
      this.inputHeight = "auto";
      this.inputHeight = target.scrollHeight + "px";
      this.$emit("update:value", target.value);
    },
    handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Backspace") {
        const target = event.target as HTMLInputElement;
        this.inputHeight = "auto";
        this.inputHeight =
          Math.min(target.scrollHeight, this.initialHeight) + "px";
        this.$emit("update:value", target.value);
      }
    },
  },
  watch: {
    value() {
      const target = this.$refs.inputRef as HTMLInputElement;
      this.inputHeight = "auto";
      this.inputHeight = target.scrollHeight + "px";
    },
  },
  mounted() {
    const target = this.$refs.inputRef as HTMLInputElement;
    this.initialHeight = target.scrollHeight;
  },
});
</script>

<style lang="scss">
.chat__input {
  resize: none;

  width: 100%;
  padding: 15px;

  font-size: 16px;

  border-radius: 25px;
  background: rgba(239, 246, 252, 0.87);
  overflow-y: hidden;
}
</style>
