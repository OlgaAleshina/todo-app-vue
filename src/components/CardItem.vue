<template>
  <div>
    <h2>{{todo.userId}}</h2>
    <li>{{todo.title}}</li>

    <div class="button-row">
      <button class="button">Edit</button>
      <button class="button">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: ["todo"]
};
</script>