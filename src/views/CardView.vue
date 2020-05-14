<template>
  <!--problem with passing params here. cards.id return undefined-->

  <div>
    {{cards[0].id}}
    <Cards
      v-bind:cards="cards"
      v-on:delete-card="$emit('delete-card',card.id)"
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

<style scoped>
</style>

