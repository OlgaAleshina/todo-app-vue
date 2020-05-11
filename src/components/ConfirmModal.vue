
<template>
  <div class="modal">
    <div class="container">
      <p>Are you sure?</p>
      <button class="button" v-on:close="$emit('close')">No</button>
      <button class="button" v-on:confirm="$emit('confirm')">Yes</button>
    </div>
  </div>
</template>
    
    <script>
export default {
  name: "ConfirmModal"
};
</script>
    
    
    <style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  position: fixed;

  width: 50%;
  height: 50%;
}
</style>