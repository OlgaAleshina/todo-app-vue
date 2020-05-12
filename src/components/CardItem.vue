<template>
  <div>
    <h2>{{card.title}}</h2>
    <!-- shows only two items of card.todos array-->
    <div v-bind:key="card.id" class="todo-list">
      <li>{{card.todos[0].text}}</li>
      <li>{{card.todos[1].text}}</li>
    </div>
    <div class="button-row">
      <!-- route to edit card selected-->
      <router-link to="/edit-card">
        <button v-on:click="$emit('edit-card', card.id)" class="button">Edit</button>
      </router-link>
      <button v-on:click="$emit('delete-card', card.id)" class="button" type="danger">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: ["card"]
};
</script>

<style scoped>
.todo-list {
  padding: 10px;
  text-align: left;
}
</style>