<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <ul>
      <input type="checkbox" v-on:change="markComplete" />
      {{todo.title}}
      <button @click="$emit('delete-todo', todo.id)" class="delete">x</button>
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
}
.is-complete {
  text-decoration: line-through;
}
.delete {
  background: #ff0000;
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  float: right;
  padding: 5px 9px;
}
</style>