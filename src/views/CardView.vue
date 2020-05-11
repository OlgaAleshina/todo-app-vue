<template>
  <div>
    <Cards
      v-bind:cards="cards"
      v-on:delete-card="$emit('delete-card', card.id)"
      v-on:edit-card="$emit('edit-card')"
    />
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

<style>
</style>
