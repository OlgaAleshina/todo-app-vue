<template>
  <div class="app">
    <div class="note">
      <div class="todos">
        <TodoForm v-on:add-todo="addTodo" @card-title="getTitle" />
        <TodoList v-bind:todo="todos" v-on:delete-todo="deleteTodo" />
      </div>
      <div class="button-row">
        <button class="button" type="success" v-on:click="addCard">save</button>
        <button class="button">cancel</button>
        <button class="button">repeat</button>
        <button
          class="button"
          type="danger"
          v-if="!showClearModal"
          v-on:click="showClearModal=true"
        >clear</button>
        <ConfirmModal
          v-show="showClearModal"
          v-on:close="showClearModal=false"
          v-on:confirm="clearCard"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import ConfirmModal from "../components/ConfirmModal";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "card",
  components: {
    TodoForm,
    TodoList,
    ConfirmModal
  },
  data() {
    return {
      id: "",
      title: "",
      todos: [],
      showClearModal: false
    };
  },

  methods: {
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    /*repeatTodo() {
      this.todos.map((item) => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        quantity: products[action.id - 1].quantity - 1,
                        inStock: products[action.id - 1].inStock + 1
                    }
                }
                return item
    },*/
    getTitle(params) {
      this.title = params;
    },
    clearCard() {
      this.id = "";
      this.title = "";
      this.todos = [];
      this.showClearModal = false;
    },
    addCard() {
      let newCard = {
        id: uuidv4(),
        title: this.title,
        todos: this.todos
      };
      this.$emit("add-card", newCard);
      this.title = "";
      this.todos = [];
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
 
