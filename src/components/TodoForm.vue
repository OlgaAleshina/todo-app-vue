<template>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="title" name="title" placeholder="Title" />
    <br />
    <input type="text" v-model="text" name="text" placeholder="Add Todo" />
    <br />
    <input type="submit" value="+" />
  </form>
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
        title: this.title,
        text: this.text,
        completed: false,
        id: uuidv4()
      };
      //send up to parent
      this.$emit("add-todo", newTodo);
      this.text = "";
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
  color: red;
}
</style>