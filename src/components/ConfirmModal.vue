
<template>
  <div class="modal">
    <div class="container">
      <p>Are you sure?</p>
      <br />
      <button class="button" v-on:click="$emit('close')">No</button>
      <button class="button" type="danger" v-on:click="$emit('confirm')">Yes</button>
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
  width: 30%;
  height: 30%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.container {
  color: white;
  font-size: 2rem;
}
.button {
  margin: 5px;
}
</style>