<template>
  <div>
    <Cards v-bind:cards="cards" />
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
