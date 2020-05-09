<template>
  <div class="app">
    <div class="note" v-bind:key="todo.id" v-for="todo in todos">
      <CardItem v-bind:todo="todo" />
    </div>
    <div class="note">
      <button class="button">+</button>
    </div>
  </div>
</template>

<script>
import CardItem from "./CardItem";
export default {
  name: "CardGrid",
  components: { CardItem },
  props: ["todos"]
};
</script>

<style scoped>
</style>