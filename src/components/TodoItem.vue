<template>
  <div v-bind:class="{'is-complete':todo.completed}">
    <ul class="todo-item">
      <input type="checkbox" v-on:change="markComplete" />

      {{todo.text}}
      <button @click="$emit('edit-todo', todo.id)" class="button">edit</button>
      <button @click="$emit('delete-todo', todo.id)" class="button" type="danger">x</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style scoped>
.todo-item {
  padding: 10px;
  align-items: space-around;
}
.is-complete {
  text-decoration: line-through;
}
.button[type="danger"] {
  border-radius: 50%;
  cursor: pointer;
}
</style>