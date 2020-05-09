<template>
  <div class="app">
    <Cards v-bind:todos="todos" />
  </div>
</template>

<script>
import Cards from "../components/CardGrid";
import axios from "axios";

export default {
  name: "home",
  components: {
    Cards
  },
  data() {
    return { todos: [] };
  },
  methods: {},
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=20")
      .then(response => (this.todos = response.data))
      .catch(error => console.log(error));
  }
};
</script>

<style>
</style>
