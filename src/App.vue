<template>
  <ChatContainer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChatContainer from "./components/ChatContainer.vue";

export default defineComponent({
  name: "App",
  components: {
    ChatContainer,
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;

  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  line-height: 100%;
  color: #222;

  -webkit-tap-highlight-color: transparent;
}

body {
  min-height: 100vh;
  background: #222;
}

button,
input,
textarea {
  background: none;
  border: none;
  outline: none;
}

button {
  cursor: pointer;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 100px 0;
}
</style>
