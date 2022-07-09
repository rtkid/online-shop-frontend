<template>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700;900&display=swap");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root {
  --header-height: 0;

  --hue-color: 150;

  --first-color: hsl(var(--hue-color), 90%, 40%);
  --first-color-alt: hsl(var(--hue-color), %, %);
  --second-color: hsl(var(--hue-color), 0%, 10%);
  --title-color: hsl(var(--hue-color), 0%, 100%);
  --text-color: hsl(var(--hue-color), 0%, 50%);
  --text-color-ligth: hsl(var(--hue-color), 0%, 90%);
  --white-color: #fff;
  --body-color: hsl(var(--hue-color), 0%, 5%);
  --container-color: hsl(var(--hue-color), 15%, 10%);
  --scroll-thumb-color: hsl(var(--hue-color), 10%, 50%);
  --scroll-thumb-color-alt: hsl(var(--hue-color), 10%, 40%);

  --body-font: "Roboto", sans-serif;

  --h1-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1rem;
  --normal-font-size: 0.938rem;
  --small-font-size: 0.813rem;
  --smaller-font-size: 0.75rem;

  --font-medium: 500;
  --font-semi-bold: 600;

  --z-tooltip: 10;
  --z-fixed: 100;
}

@media screen and (min-width: 968px) {
  :root {
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: 0.875rem;
    --smaller-font-size: 0.813rem;
  }
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: var(--header-height) 0 0 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color: var(--body-color);
  color: var(--text-color);
  line-height: 1.5;

  --swiper-theme-color: var(--first-color);
}

h1,
h2,
h3,
h4 {
  color: var(--title-color);
  font-weight: var(--font-semi-bold);
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

button,
input {
  border: none;
  outline: none;
}

button {
  cursor: pointer;
}

img {
  max-width: 100%;
  height: auto;
}

.container {
  max-width: 1024px;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
}

.grid {
  display: grid;
  gap: 1.5rem;
}

.section {
  padding: 4.5rem 0 2rem;
}

.section__title {
  font-size: var(--h2-font-size);
  text-align: center;
  margin-bottom: 2.5rem;
}

::-webkit-scrollbar {
  width: 0.6rem;
  border-radius: 1rem;
}

::-webkit-scrollbar-thumb {
  background-color: var(--scroll-thumb-color);
  border-radius: 1rem;
}

::-webkit-scrollbar-thumb:hover {
  background-color: var(--scroll-thumb-color-alt);
}

@media screen and (max-width: 340px) {
  .container {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .section__title {
    font-size: var(--big-font-size);
  }
}

@media screen and (min-width: 767px) {
  body {
    margin: 0;
  }
  .section {
    padding: 6rem 0 2rem;
  }
}

@media screen and (min-width: 1024px) {
  .container {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
