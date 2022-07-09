<template>
  <main>
    <div class="leaf__container">
      <img class="leaf" src="@/assets/leaf.png" alt="" />
    </div>

    <div class="spinner__container">
      <my-spinner :width="40" :height="40"></my-spinner>
    </div>
  </main>
</template>

<script>
import MySpinner from "@/components/MySpinner.vue";

export default {
  name: "LoadView",
  components: { MySpinner },

  mounted() {
    setTimeout(() => {
      this.$router.push("welcome");
    }, 1000);
  },
};
</script>

<style scoped>
main {
  position: relative;
}

.leaf__container {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.leaf {
  width: 100px;
  height: 100px;
}

.spinner__container {
  position: absolute;
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50vh;
}
</style>
