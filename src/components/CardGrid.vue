<template>
  <div>
    <div class="note" v-bind:key="card.id" v-for="card in cards">
      <CardItem
        v-bind:card="card"
        v-on:delete-card="$emit('delete-card', card.id)"
        v-on:edit-card="$emit('edit-card', card.id)"
      />
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
</style>