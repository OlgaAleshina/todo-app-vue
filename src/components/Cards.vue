<template>
  <div>
    <div class="card">
      <div v-bind:key="todo.id" v-for="todo in todos">
        <TodoItem v-bind:todo="todo" v-on:delete-todo="$emit('delete-todo', todo.id)" />
        <div class="button-row">
          <button class="button">Edit</button>
          <button class="button">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "Todos",
  components: { TodoItem },
  props: ["todos"]
};
</script>

<style scoped>
</style>