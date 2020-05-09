<template>
  <div>
    <input type="text" name="todo" placeholder="Title" />
    <form @submit.prevent="addTodo">
      <div></div>
      <br />
      <div>
        <input type="text" v-model="title" name="title" placeholder="Add Todo" />
        <input type="submit" value="+" class="button" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo() {
      const newTodo = {
        title: this.title,
        completed: false
      };
      //send up
      this.$emit("add-todo", newTodo);
      this.title = "";
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
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