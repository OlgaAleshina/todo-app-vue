<template>
  <div>
    <input type="text" v-model="title" id="title" name="title" placeholder="Title" />

    <form @submit.prevent="addTodo">
      <input type="text" v-model="text" name="text" placeholder="Add Todo" />
      <input type="submit" value="+" class="button" />
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
      text: "",
      id: ""
    };
  },
  methods: {
    addTodo() {
      const newTodo = {
        text: this.text,
        completed: false,
        id: uuidv4()
      };
      //send up to parent
      this.$emit("add-todo", newTodo);
      this.text = "";
    }
  },
  watch: {
    title: function() {
      this.$emit("card-title", this.title);
    }
  }
};
</script>

<style scoped>
input[type="text"] {
  flex: 10;
  padding: 5px;
  border: none;
  border-bottom: 2px solid;
  background-color: transparent;
  padding: 10px;
}
input[type="submit"] {
  color: black;
  background-color: transparent;
  padding: 0%;
}
</style>