<template>
  <div class="note">
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:delete-todo="deleteTodo" />

    <div class="button-row">
      <button class="button">Save</button>
      <button class="button">Cancel</button>
      <button class="button">Repeat</button>
      <button class="button">Delete</button>
    </div>
  </div>
</template>

<script>
import AddTodo from "../components/AddTodo";
import Todos from "../components/Todos";

export default {
  name: "note",
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    deleteTodo() {},
    addTodo() {}
  }
};
</script>

<style scoped>
.note {
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fcf4a3;
  width: 50%;
  height: 50%;
  box-shadow: 0 0 20px 3px;
}
.button-row {
  display: flex;
  flex-direction: row;
  padding: 20px;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
  border: none;
  border-bottom: 2px solid;
  background-color: transparent;
  padding: 10px;
}
</style>