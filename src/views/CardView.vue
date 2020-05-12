<template>
  <div>
    <!--problem with passing params here. cards.id return undefined-->

    <div v-bind:key="card.id" v-for="card in cards">
      <Cards
        v-bind:cards="cards"
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
import Cards from "../components/CardGrid";

export default {
  name: "home",
  components: {
    Cards
  },
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

