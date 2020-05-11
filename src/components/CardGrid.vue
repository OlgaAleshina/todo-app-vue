<template>
  <div class="app">
    <div class="note" v-bind:key="card.id" v-for="card in cards">
      <CardItem
        v-bind:card="card"
        v-on:delete-card="$emit('delete-card', card.id)"
        v-on:edit-card="$emit('edit-card')"
      />
    </div>
    <div class="note">
      <router-link to="/todo-card">
        <button class="button" type="transparent">+</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import CardItem from "./CardItem";
export default {
  name: "CardGrid",
  components: { CardItem },
  props: ["cards"]
};
</script>

<style scoped>
.note {
  height: 30%;
}
.button {
  font-size: 5rem;
}
</style>