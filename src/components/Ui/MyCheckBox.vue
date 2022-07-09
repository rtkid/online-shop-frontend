<template>
  <input type="checkbox" class="checkbox" id="rememberMe" />
</template>

<script>
export default {};
</script>

<style scoped>
.checkbox {
  color: var(--body-color);
  height: 25px;
  width: 25px;
  border-radius: 1rem;
}

.checkbox:checked {
  background-color: red;
  border-radius: 1rem;
}
</style>
