<template>
  <div>
    <div class="todo" v-bind:key="todo.id" v-for="todo in todo">
      <TodoItem v-bind:todo="todo" v-on:delete-todo="$emit('delete-todo', todo.id)" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "TodoList",
  components: { TodoItem },
  props: ["todo"]
};
</script>

<style scoped>
.todo {
  padding: 0;
}
</style>