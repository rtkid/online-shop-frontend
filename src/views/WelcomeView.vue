<template>
  <main @click="next">
    <div class="flower__container">
      <img class="welcomeFlower" src="@/assets/welcomeFlower1.png" alt="" />
    </div>

    <div class="overlay">
      <div class="container">
        <h1 class="title">Potea</h1>
        <p class="description">
          Лучший комерческий магазин по продажам растений
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "WelcomeView",

  methods: {
    next() {
      console.log("qwewqe");
      this.$router.push("info");
    },
  },
};
</script>

<style scoped>
main {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.flower__container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.welcomeFlower {
  width: 750px;
}

.overlay {
  position: fixed;
  background: linear-gradient(
    hsla(var(--hue-color), 0%, 0%, 0%),
    hsla(var(--hue-color), 0%, 0%, 25%)
  );
  z-index: var(--z-tooltip);
  width: 100%;
  height: 100%;
  top: 0;
}

.container {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 70%;
}

.title {
  font-size: 5rem;
  color: var(--first-color);
  font-weight: var(--font-semi-bold);
}

.description {
  font-weight: var(--font-medium);
}
</style>
