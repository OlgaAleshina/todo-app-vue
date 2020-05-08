<template>
  <div>
    <div class="todo-note">
      <div v-bind:key="todo.id" v-for="todo in todos">
        <TodoItem v-bind:todo="todo" v-on:delete-todo="$emit('delete-todo', todo.id)" />
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
.todo-note {
  display: flex;
  flex-direction: column;
  background-color: #ffb52c;
  width: 50%;
  height: 50%;
  box-shadow: 0 0 20px 3px;
}
</style>