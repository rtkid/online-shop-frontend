<template>
  <button>
    <slot />
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  background: var(--first-color);
  border-radius: 10px;
  font-weight: var(--font-semi-bold);
  color: var(--text-color);
  font-size: var(--normal-font-size);
}
</style>
