<template>
  <div class="chat__heading">
    <img class="chat__avatar" src="../assets/avatar.jpg" alt="avatar" />
    <h2 class="chat__name">Чат-бот Валера</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChatHeading",
});
</script>

<style lang="scss">
.chat__heading {
  position: sticky;

  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;
  padding: 10px 20px;
  background: white;
  box-shadow: 0px 0px 28px 0px rgba(0, 0, 0, 0.15);
}

.chat__avatar {
  width: 40px;
  height: 40px;
  border-radius: 100%;
}

.chat__name {
  font-weight: 600;
  font-size: 20px;
}
</style>
