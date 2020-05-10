<template>
  <div class="app">
    <div class="note">
      <div class="todos">
        <TodoForm v-on:add-todo="addTodo" />
        <TodoList v-bind:todo="todos" v-on:delete-todo="deleteTodo" />
      </div>
      <div class="button-row">
        <button class="button" type="success">save</button>
        <button class="button">cancel</button>
        <button class="button">repeat</button>
        <button class="button" type="danger">delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default {
  name: "card",
  components: {
    TodoForm,
    TodoList
  },
  data() {
    return {
      todos: []
    };
  },

  methods: {
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
};
</script>

<style scoped>
.note {
  width: 50%;
}
.todos {
  padding: 20px;
}
</style>
 
