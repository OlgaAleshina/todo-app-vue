<template>
  <div v-bind:class="{'is-complete':todo.completed}">
    <ul class="todo-item">
      <!--checkbox, adds line-through property to text when checked-->
      <input type="checkbox" v-on:change="markComplete" />
      <span class="span" v-show="!showEditTodo">{{todo.text}}</span>
      <!--shows input when edit button is clicked-->
      <input type="text" v-model="todo.text" v-if="showEditTodo" name="title" />
      <button v-on:click="showEditTodo=true" class="button">
        <i class="fas fa-pencil-alt"></i>
      </button>
      <!--shows confirmation modal when delete clicked -->
      <button
        v-if="!showDeleteModal"
        v-on:click="showDeleteModal=true"
        class="button"
        type="danger"
      >x</button>
    </ul>
    <ConfirmModal
      v-show="showDeleteModal"
      v-on:close="showDeleteModal=false"
      v-on:confirm="$emit('delete-todo', todo.id)"
    />
  </div>
</template>

<script>
import ConfirmModal from "./ConfirmModal";

export default {
  name: "TodoItem",
  components: { ConfirmModal },
  data() {
    return {
      showEditTodo: false,
      showDeleteModal: false
    };
  },
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
  padding: 0px;
  align-items: space-around;
}

input[type="text"] {
  padding: 5px;
  border: none;
  background-color: transparent;
}

.is-complete {
  text-decoration: line-through;
}
.button {
  background-color: transparent;
  color: red;
  padding: 1rem;
}
.span {
  margin: 10px;
}
</style>