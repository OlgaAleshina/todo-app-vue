<template>
  <div>
    <h2>{{card.title}}</h2>
    <!-- shows only first two items of card.todos array-->
    <div v-bind:key="card.id" class="todo-list">
      <li>{{card.todos[0].text}}</li>
      <li>{{card.todos[1].text}}</li>
    </div>
    <div class="button-row">
      <!-- route to TodoView passing card.id as a parameter-->
      <router-link :to="{name:'todo-card', params: {id: card.id }}">
        <button class="button">Edit</button>
      </router-link>
      <button
        v-if="!showDeleteCardModal"
        v-on:click="showDeleteCardModal=true"
        class="button"
        type="danger"
      >Delete</button>
      <ConfirmModal
        v-show="showDeleteCardModal"
        v-on:close="showDeleteCardModal=false"
        v-on:confirm="$emit('delete-card', card.id)"
      />
    </div>
  </div>
</template>

<script>
import ConfirmModal from "./ConfirmModal";
export default {
  name: "CardItem",
  components: { ConfirmModal },
  props: ["card"],
  data() {
    return {
      showDeleteCardModal: false
    };
  }
};
</script>

<style scoped>
.todo-list {
  padding: 10px;
  text-align: left;
}
</style>