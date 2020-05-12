<template>
  <div>
    <TodoForm />
    <TodoList />
  </div>
</template>

<script>
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
export default {
  name: "EditCard",
  components: { TodoForm, TodoList }
};
</script>

