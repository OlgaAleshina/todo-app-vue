<template>
  <div class="app">
    <div class="note">
      <div class="todos">
        <TodoForm v-on:add-todo="addTodo" v-model="title" />
        <TodoList v-bind:todo="todos" v-on:delete-todo="deleteTodo" />
      </div>
      <div class="button-row">
        <button class="button" type="success" v-on:click="addCard">save</button>
        <button class="button" v-if="!showCancelModal" v-on:click="showCancelModal=true">cancel</button>
        <button class="button" v-on:click="repeatChange">repeat</button>
        <button
          class="button"
          type="danger"
          v-if="!showClearModal"
          v-on:click="showClearModal=true"
        >clear</button>
        <ConfirmModal
          v-show="showCancelModal"
          v-on:close="showCancelModal=false"
          v-on:confirm="cancelChange"
        />
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
      showClearModal: false,
      showCancelModal: false,
      //id passed with router when pressed edit card
      routeId: this.$route.params.id
    };
  },

  methods: {
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },

    repeatChange() {
      //assign to other object to avoid mutation of this.todos. this variant is shorter than map method
      const lastTodo = {
        text: this.todos[this.todos.length - 1].text,
        id: uuidv4(),
        completed: false
      };
      this.todos = [...this.todos, lastTodo];
    },

    cancelChange() {
      const lastId = this.todos[this.todos.length - 1].id;
      this.todos = this.todos.filter(todo => todo.id !== lastId);
      this.showCancelModal = false;
    },

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
  },

  mounted() {
    if (this.routeId !== 0) {
      //get all cards from local storage
      const cards = JSON.parse(localStorage.getItem("cards"));
      //get card to edit by id taken from router parameters
      const cardToEdit = cards.filter(card => card.id === this.routeId);
      this.todos = cardToEdit[0].todos;
      this.title = cardToEdit[0].title;
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
 
