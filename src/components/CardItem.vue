<template>
  <div>
    <h2>{{card.title}}</h2>
    <div v-bind:key="card.id" v-for="card in card.todos">
      <li>{{card.text}}</li>
    </div>
    <div class="button-row">
      <button class="button">Edit</button>
      <button @click="$emit('delete-card',card.id)" class="button" type="danger">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: ["card"]
};
</script>