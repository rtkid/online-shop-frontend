<template>
  <main>
    <swiper
      @swiper="onSwiper"
      loop
      grabCursor
      :modules="modules"
      :slides-per-view="1"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true,
      }"
      :spaceBetween="50"
      class="container swiper__container"
    >
      <swiper-slide v-for="(slide, idx) in slides" :key="idx">
        <img class="welcomeFlower" :src="slide.img" alt="" />

        <p class="slide__description">{{ slide.description }}</p>

        <div class="space__container"></div>
      </swiper-slide>

      <template v-slot:container-end>
        <div class="swiper-pagination"></div>
      </template>
    </swiper>

    <div @click="next(swiper)" class="button__container container">
      <my-button class="next__button">{{ buttonText }}</my-button>
    </div>
  </main>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import MyButton from "@/components/Ui/MyButton.vue";

import "swiper/css";
import "swiper/css/pagination";

import { ref } from "vue";

export default {
  name: "InfoView",

  components: {
    Swiper,
    SwiperSlide,
    MyButton,
  },

  setup() {
    const swiper = ref();

    return {
      swiper,
      onSwiper: (instance) => (swiper.value = instance),
      modules: [Pagination],
    };
  },

  data() {
    return {
      buttonText: "Дальше",
      page: 0,
      slides: [
        {
          img: require("@/assets/welcomeFlower1.png"),
          description: "Мы обеспечиваем хорошее качество растений",
        },
        {
          img: require("@/assets/welcomeFlower1.png"),
          description: "Удовлетворение вас наша цель номер один",
        },
        {
          img: require("@/assets/welcomeFlower1.png"),
          description: "Давайте купим ваше любимое растение с Potea!",
        },
      ],
    };
  },

  methods: {
    next(swiper) {
      this.page++;

      if (this.page === this.slides.length - 1) {
        this.buttonText = "Начать";
      }

      if (this.page === this.slides.length) {
        this.$router.push("login");
      } else {
        swiper.slideNext();
      }
    },
  },
};
</script>

<style>
main {
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.welcomeFlower {
  width: 400px;
}

.swiper {
  margin-right: 1.5rem;
  margin-left: 1.5rem;
}

.space__container {
  height: 50px;
}

.slide__description {
  margin-top: 2rem;
  text-align: center;
  font-size: var(--h2-font-size);
  font-weight: var(--font-semi-bold);
}

.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 0;
}

.button__container {
  height: 40px;
  margin-top: 2rem;
}

.next__button {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
