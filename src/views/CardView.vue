<template>
  <div class="app">
    <div class="note" v-bind:key="card.id" v-for="card in cards">
      <CardItem v-bind:card="card" v-on:delete-card="$emit('delete-card', card.id)" />
    </div>
    <div class="note">
      <router-link :to="{name:'todo-card', params: {id: 0 }}">
        <button class="button" type="transparent">+</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import CardItem from "../components/CardItem";
export default {
  name: "home",
  components: { CardItem },
  props: ["cards"]
};
</script>

<style scoped>
.button {
  font-size: 5rem;
}

.note {
  height: 30%;
}
</style>