<template>
  <div id="app">
    <div class="note">
      <Cards />

      <div class="button-row">
        <button class="button">Edit</button>
        <button class="button">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import Cards from "../components/Cards";

export default {
  name: "home",
  components: {
    Cards
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.app {
  display: flex;
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
  width: 50%;
  height: 50%;
  box-shadow: 0 0 20px 3px;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>
