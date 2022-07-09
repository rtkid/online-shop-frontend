<template>
  <main class="main">
    <div class="login__container container">
      <h1 class="title"><span class="char__p">P</span>otea</h1>
      <h2 class="subtitle">Войти в Аккаунт</h2>
      <my-input
        :placeholder="'Email'"
        :iconClass="'uil-envelope-alt'"
        class="email__input"
      ></my-input>
      <my-input
        :placeholder="'Пароль'"
        :iconClass="'uil-lock'"
        class="password__input"
      ></my-input>

      <div class="checkbox__container">
        <input type="checkbox" class="checkbox" id="rememberMe" />
        <label for="rememberMe">Запомнить меня</label>
      </div>
    </div>
  </main>
</template>

<script>
import MyInput from "@/components/Ui/MyInput.vue";

export default {
  name: "LoginView",
  components: {
    MyInput,
  },
};
</script>

<style scoped>
.main {
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login__container {
  text-align: center;
}

.char__p {
  color: var(--first-color);
}

.subtitle {
  margin-top: 1rem;
}

.email__input {
  margin-top: 2rem;
}

.password__input {
  margin-top: 1rem;
}

.checkbox__container {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.checkbox {
  width: 50px;
  height: 50px;
}

.checkbox__container label:before {
  border-radius: 20px;
}

.checkbox__container label:after {
  border-radius: 20px;
}

input[type="radio"],
input[type="checkbox"] {
  display: none;
}

input[type="radio"]:checked {
  content: "\2022";
  color: #f3f3f3;
  font-size: 30px;
  text-align: center;
  line-height: 18px;
}

input[type="checkbox"]:checked {
  content: "\2713";
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  font-size: 15px;
  color: #f3f3f3;
  text-align: center;
  line-height: 15px;
}
</style>
