<template>
  <div>
    <svg-icon icon-class="404" class-name="custom-class" size="40"></svg-icon>
    <svg-icon icon-class="edit" class-name="edit-class" size="40"></svg-icon>
  </div>
</template>

<script>
export default {
  name: 'FormView'
}
</script>

<style scoped>
.custom-class {
  color: red;
}
.custom-class:hover {
  color: skyblue;
}
.edit-class:hover {
  color: green;
}
</style>
