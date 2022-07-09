<template>
  <div class="input__container">
    <input type="text" :placeholder="placeholder" />
    <i class="uil icon" :class="iconClass"></i>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    iconClass: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.input__container {
  position: relative;
  color: var(--text-color);
  font-weight: var(--font-semi-bold);
}

.icon {
  position: absolute;
  left: 0%;
  top: 50%;
  transform: translate(50%, -50%);
}

input {
  background-color: var(--second-color);
  border-radius: 5px;
  height: 40px;
  width: 100%;
  padding: 1rem 2rem;
  color: var(--text-color-ligth);
}
</style>
