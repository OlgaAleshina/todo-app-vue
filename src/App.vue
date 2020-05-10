<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./views/HeaderView";

export default {
  name: "app",
  components: {
    Header
  },
  data() {}
};
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.app {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
}
.note {
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fcf4a3;
  width: 30%;

  box-shadow: 0 0 20px 3px;
}
.button {
  background-color: #a9a9a9;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px;
  cursor: pointer;
  border-radius: 1rem;
}

.button[type="danger"] {
  background-color: red;
}
.button[type="success"] {
  background-color: #4caf50;
}
.button:hover {
  background: #666;
}
.button-row {
  display: flex;
  flex-direction: row;
  padding: 20px;
}
</style>

/* cards: [
      {
        id: 1,
        title: "First Card",
        todos: [
          { id: 1, text: "delectus aut autem", completed: false },
          { id: 2, text: "fugiat veniam minus", completed: false },
          {
            id: 3,
            text:
              "laboriosam mollitia et enim quasi adipisci quia provident illum",
            completed: false
          }
        ]
      },
      {
        id: 2,
        title: "First Card",
        todos: [
          { id: 1, text: "delectus aut autem", completed: false },
          { id: 2, text: "fugiat veniam minus", completed: false },
          {
            id: 3,
            text:
              "laboriosam mollitia et enim quasi adipisci quia provident illum",
            completed: false
          }
        ]
      },
      {
        id: 3,
        title: "First Card",
        todos: [
          { id: 1, text: "delectus aut autem", completed: false },
          { id: 2, text: "fugiat veniam minus", completed: false },
          {
            id: 3,
            text:
              "laboriosam mollitia et enim quasi adipisci quia provident illum",
            completed: false
          }
        ]
      }
    ];