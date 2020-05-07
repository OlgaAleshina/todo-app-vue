<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <ul>
      <input type="checkbox" v-on:change="markComplete" />
      {{todo.title}}
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
  background: grey;
}
.is-complete {
  text-decoration: line-through;
}
</style>